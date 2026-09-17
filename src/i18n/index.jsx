import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { zh } from "./zh";
import { en } from "./en";

const DICTS = { zh, en };
const STORAGE_KEY = "halface-prize-lang";

const I18nContext = createContext(null);

/** 首次访问：跟随浏览器语言，非中文一律英文 */
function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    // 隐私模式下 localStorage 可能不可用，忽略
  }
  const nav = typeof navigator !== "undefined" ? navigator.language : "";
  return nav && nav.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detectLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // 忽略写入失败
    }
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "zh" ? "en" : "zh")),
      t: DICTS[lang],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n 必须在 I18nProvider 内使用");
  return ctx;
}

/**
 * 取双语字段：pick(domain, "name", lang)
 * 英文缺失时回退到中文字段，避免出现空白。
 */
export function pick(obj, base, lang) {
  if (!obj) return "";
  if (lang !== "en") return obj[base] ?? "";
  return obj[`${base}En`] ?? obj[base] ?? "";
}

/**
 * Markdown 内容文件按语言取不同文件：
 * content/charter.md → content/charter.en.md
 */
export function localizedPath(path, lang) {
  if (lang !== "en" || !path) return path;
  return path.replace(/\.md$/, ".en.md");
}
