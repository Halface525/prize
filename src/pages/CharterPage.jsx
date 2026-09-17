import { SectionHeading } from "../components/SectionHeading";
import { MarkdownBody } from "../components/MarkdownBody";
import { useArticle } from "../hooks/useArticle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { site } from "../data/site";
import { useI18n, localizedPath } from "../i18n";

export function CharterPage() {
  const { lang, t } = useI18n();
  useDocumentTitle(t.charter.pageTitle);

  const { data, loading, error } = useArticle(localizedPath("content/charter.md", lang));
  const committee = lang === "zh" ? site.committee : site.committeeEn;

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
        className="mt-14 rounded-2xl border px-6 py-6 text-[13px] leading-relaxed text-[var(--muted)]"
        style={{ borderColor: "var(--line)", background: "var(--cream)" }}
      >
        <p>{t.charter.footnote}</p>
      </div>
    </div>
  );
}
