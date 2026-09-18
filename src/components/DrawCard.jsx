import { Link } from "react-router";
import { formatAmount } from "../data/fund";
import { formatDate } from "../utils/time";
import { useI18n, pick } from "../i18n";
import { winnerCount } from "../data/draws";
import { domainLabel } from "../utils/laureate";

/**
 * 开奖记录的列表卡片。整张卡是一个链接，详情在 /winners/:id。
 *
 * 卡片只用 draws.js 里的元数据，不拉 markdown —— 期数多了也不会有性能问题。
 */
export function DrawCard({ draw }) {
  const { lang, t } = useI18n();
  const winners = draw.winners ?? [];
  const n = winnerCount(draw);

  return (
    <Link to={`/winners/${draw.id}`} className="block">
      <article className="prize-card p-6">
        {/* 抬头 */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-bold">{t.draw.period(draw.period)}</span>
            <span className="font-sans text-[12px] text-[var(--muted)]">
              {formatDate(draw.date, lang)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {draw.placeholder && (
              <span
                className="font-sans rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wider text-white"
                style={{ background: "var(--gold)" }}
              >
                {t.draw.placeholder}
              </span>
            )}
            <span className="font-sans rounded-full px-2.5 py-1 text-[10px] text-[var(--muted)]"
                  style={{ background: "var(--cream)" }}>
              {n > 0 ? t.draw.winnerCountBadge(n) : t.draw.vacant}
            </span>
          </div>
        </div>

        {/* 获奖人：扫一眼就知道这期是谁 */}
        {n > 0 ? (
          <ul className="mt-5 space-y-3">
            {winners.map((w, i) => (
              <li key={i} className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span className="font-display text-[15px] font-semibold">
                  {pick(w, "name", lang)}
                </span>
                <span className="font-sans text-[11px] text-[var(--muted)]">
                  {domainLabel(w, lang)} · {pick(w, "award", lang)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-[13px] leading-relaxed text-[var(--muted)]">
            {t.draw.vacantNote}
          </p>
        )}

        {/* 结算 */}
        <div
          className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t pt-4"
          style={{ borderColor: "var(--line)" }}
        >
          <span className="font-sans text-[12px] text-[var(--muted)]">
            {t.draw.pool}{" "}
            <span className="font-sans text-[var(--ink)]">{formatAmount(draw.pool ?? 0)}</span>
            {n > 0 && (
              <>
                {" · "}
                {t.draw.perWinnerLabel}{" "}
                <span className="font-sans text-[var(--ink)]">
                  {formatAmount(draw.perWinner ?? 0)}
                </span>
              </>
            )}
          </span>
          <span className="font-sans text-[12px]" style={{ color: "var(--gold)" }}>
            {t.draw.viewDetail}
          </span>
        </div>
      </article>
    </Link>
  );
}
