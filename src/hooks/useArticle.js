import { useState, useEffect } from "react";

/**
 * 拉取一个正文文件。正文是 markdown，但只当作纯文本取回来交给 react-markdown 渲染。
 *
 * 这里**不解析 frontmatter**：本项目所有元数据都放在 src/data/ 的 JS 模块里
 * （见 draws.js、bulletin.js 顶部的说明），markdown 只写正文。
 * 所以不需要 gray-matter，也就不需要 Buffer polyfill —— 那玩意曾经让整站内容
 * 在运行时报 "Buffer is not defined" 全挂，而构建期毫无提示。
 *
 * 若日后确实要用 frontmatter，再装回 gray-matter 并恢复 vite.config.js 里的
 * nodePolyfills({ include: ['buffer'] })，两者必须同时加，缺一不可。
 */
export function useArticle(filePath) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filePath) return;
    let cancelled = false;

    setLoading(true);
    setError(null);

    const url = `${import.meta.env.BASE_URL}${filePath}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`加载失败：${filePath}`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setData({ content: text });
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [filePath]);

  return { data, loading, error };
}
