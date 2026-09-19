import { Link, useParams } from "react-router";
import { DrawRecord } from "../components/DrawRecord";
import { EmptyState } from "../components/EmptyState";
import { getDraw, sortedDraws } from "../data/draws";
import { useArticle } from "../hooks/useArticle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n, localizedPath } from "../i18n";

export function DrawDetailPage() {
  const { id } = useParams();
  const { lang, t } = useI18n();

  const draw = getDraw(id);
  const { data, loading, error } = useArticle(draw ? localizedPath(draw.file, lang) : null);

  useDocumentTitle(draw ? t.draw.period(draw.period) : t.winners.pageTitle);

  if (!draw) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <EmptyState text={t.winners.empty}>
          <Link
            to="/winners"
            className="font-sans text-[13px] transition-opacity hover:opacity-60"
            style={{ color: "var(--gold)" }}
          >
            {t.winners.back}
          </Link>
        </EmptyState>
      </div>
    );
  }

  // 按期号倒序排列后找前后两期，方便连着翻档案
  const ordered = sortedDraws();
  const idx = ordered.findIndex((d) => d.id === draw.id);
  const newer = idx > 0 ? ordered[idx - 1] : null;
  const older = idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-6">
      <Link
        to="/winners"
        className="font-sans text-[13px] transition-opacity hover:opacity-60"
        style={{ color: "var(--gold)" }}
      >
        {t.winners.back}
      </Link>

      <div className="mt-8">
        <DrawRecord draw={draw} content={data?.content} loading={loading} error={error} />
      </div>

      {/* 前后翻页 */}
      {(newer || older) && (
        <nav
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6"
          style={{ borderColor: "var(--line)" }}
        >
          {older ? (
            <Link
              to={`/winners/${older.id}`}
              className="font-sans text-[13px] transition-opacity hover:opacity-60"
              style={{ color: "var(--muted)" }}
            >
              ← {t.draw.period(older.period)}
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link
              to={`/winners/${newer.id}`}
              className="font-sans text-[13px] transition-opacity hover:opacity-60"
              style={{ color: "var(--muted)" }}
            >
              {t.draw.period(newer.period)} →
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
