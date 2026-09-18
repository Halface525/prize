import { Link, useParams } from "react-router";
import { MarkdownBody } from "../components/MarkdownBody";
import { getBulletin } from "../data/bulletin";
import { useArticle } from "../hooks/useArticle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n, pick, localizedPath } from "../i18n";
import { formatDate } from "../utils/time";

const KIND_LABEL_KEY = { notice: "kindNotice", dispatch: "kindDispatch" };

export function BulletinItemPage() {
  const { id } = useParams();
  const { lang, t } = useI18n();

  const item = getBulletin(id);
  const { data, loading, error } = useArticle(item ? localizedPath(item.file, lang) : null);

  useDocumentTitle(item ? pick(item, "title", lang) : t.bulletin.pageTitle);

  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm text-[var(--muted)]">{t.bulletin.empty}</p>
        <Link
          to="/bulletin"
          className="font-sans mt-6 inline-block text-[12px] transition-opacity hover:opacity-60"
          style={{ color: "var(--gold)" }}
        >
          {t.bulletin.back}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6">
      <Link
        to="/bulletin"
        className="font-sans text-[12px] transition-opacity hover:opacity-60"
        style={{ color: "var(--gold)" }}
      >
        {t.bulletin.back}
      </Link>

      <header className="mt-8 border-b pb-7" style={{ borderColor: "var(--line)" }}>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="font-sans rounded-full px-2.5 py-1 text-[10px] tracking-wide"
            style={{
              background: item.kind === "interview" ? "var(--gold)" : "var(--cream)",
              color: item.kind === "interview" ? "#fff" : "var(--muted)",
            }}
          >
            {t.bulletin[KIND_LABEL_KEY[item.kind]]}
          </span>
          <span className="font-sans text-[12px] text-[var(--muted)]">
            {formatDate(item.date, lang)}
          </span>
        </div>

        <h1 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          {pick(item, "title", lang)}
        </h1>
      </header>

      <div className="mt-8">
        {loading && <p className="py-12 text-center text-sm text-[var(--muted)]">{t.common.loading}</p>}

        {error && (
          <p className="py-12 text-center text-sm" style={{ color: "var(--gold)" }}>
            {t.common.loadFailed}: {error}
          </p>
        )}

        {data && <MarkdownBody>{data.content}</MarkdownBody>}
      </div>
    </div>
  );
}
