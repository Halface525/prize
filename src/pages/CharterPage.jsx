import { useEffect } from "react";
import { useLocation } from "react-router";
import { SectionHeading } from "../components/SectionHeading";
import { MarkdownBody } from "../components/MarkdownBody";
import { useArticle } from "../hooks/useArticle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { site } from "../data/site";
import { useI18n, localizedPath } from "../i18n";

export function CharterPage() {
  const { lang, t } = useI18n();
  const { hash } = useLocation();
  useDocumentTitle(t.charter.pageTitle);

  const { data, loading, error } = useArticle(localizedPath("content/charter.md", lang));
  const committee = lang === "zh" ? site.committee : site.committeeEn;

  // 跳转到 /charter#art-11 这样的锚点。HashRouter 下 useLocation().hash
  // 拿到的就是 "#art-11"，所以原生 href 不能用，得手动滚。
  // 依赖里带 data：锚点在 markdown 渲染完之后才存在。
  useEffect(() => {
    if (!hash || !data) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, data]);

  return (
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeading
        eyebrow={t.charter.pageTitle}
        title={t.charter.title}
        description={t.charter.desc(committee)}
      />

      <div className="mt-10">
        {loading && <p className="py-12 text-center text-sm text-[var(--muted)]">{t.common.loading}</p>}

        {error && (
          <p className="py-12 text-center text-sm" style={{ color: "var(--gold)" }}>
            {t.common.loadFailed}: {error}
          </p>
        )}

        {data && <MarkdownBody>{data.content}</MarkdownBody>}
      </div>

      <div
        className="mt-14 rounded-2xl border px-6 py-6 text-[14px] leading-relaxed text-[var(--muted)]"
        style={{ borderColor: "var(--line)", background: "var(--cream)" }}
      >
        <p>{t.charter.footnote}</p>
      </div>
    </div>
  );
}
