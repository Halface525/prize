import { MarkdownBody } from "./MarkdownBody";
import { formatDate } from "../utils/time";
import { formatAmount } from "../data/fund";
import { useI18n, pick } from "../i18n";

/** 一期开奖记录。frontmatter 里的结构化字段 + 正文的「获奖理由」。 */
export function DrawRecord({ draw, metadata, content, loading, error }) {
  const { lang, t } = useI18n();

  if (loading) {
    return <p className="py-10 text-center text-sm text-[var(--muted)]">{t.common.loading}</p>;
  }

  if (error) {
    return (
      <p className="py-10 text-center text-sm" style={{ color: "var(--gold)" }}>
        {t.common.loadFailed}: {error}
      </p>
    );
  }

  if (!metadata) return null;

  const winners = Array.isArray(metadata.winners) ? metadata.winners : [];

  return (
    <article className="prize-card overflow-hidden">
      {/* 期次抬头 */}
      <header
        className="flex flex-wrap items-center justify-between gap-3 border-b px-6 py-5 sm:px-8"
        style={{ borderColor: "var(--line)", background: "var(--cream)" }}
      >
        <div className="flex items-baseline gap-3">
          <span className="font-display text-lg font-bold">{t.draw.period(draw.period)}</span>
          <span className="font-sans text-[12px] text-[var(--muted)]">
            {formatDate(draw.date, lang)} {t.draw.drawnOn}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {draw.placeholder && (
            <span
              className="font-sans rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wider text-white"
              style={{ background: "var(--gold)" }}
            >
              {t.draw.placeholder}
            </span>
          )}
          <span className="font-sans text-[12px] text-[var(--muted)]">
            {t.draw.pool} {formatAmount(metadata.pool ?? 0)}
          </span>
        </div>
      </header>

      <div className="px-6 py-7 sm:px-8">
        {/* 获奖人摘要 */}
        {winners.length > 0 && (
          <div className="mb-7 grid gap-4 sm:grid-cols-2">
            {winners.map((w, i) => (
              <div key={i} className="rounded-xl border p-4" style={{ borderColor: "var(--line)" }}>
                <div className="font-display text-[15px] font-bold">
                  {pick(w, "name", lang)}
                </div>
                <div className="font-sans mt-1.5 text-[11px] text-[var(--muted)]">
                  {pick(w, "domain", lang)} · {pick(w, "award", lang)}
                </div>
                {w.metric && (
                  <div className="mt-3 border-t pt-3" style={{ borderColor: "var(--line)" }}>
                    <span className="font-sans text-[11px] text-[var(--muted)]">
                      {pick(w, "metricLabel", lang) || t.draw.metricDefault}
                    </span>
                    <span className="figure ml-2 text-lg">{w.metric}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 获奖理由（正文按语言取不同文件） */}
        <MarkdownBody>{content}</MarkdownBody>

        {/* 结算 */}
        <div
          className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-5"
          style={{ borderColor: "var(--line)" }}
        >
          <span className="font-sans text-[12px] text-[var(--muted)]">
            {t.draw.winnersCount(winners.length)}{" "}
            <span className="font-sans text-[var(--ink)]">
              {formatAmount(metadata.perWinner ?? 0)}
            </span>
          </span>
          <span className="font-sans text-[12px] text-[var(--muted)]">
            {t.draw.balanceAfter}{" "}
            <span className="font-sans text-[var(--ink)]">
              {formatAmount(metadata.balanceAfter ?? 0)}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
