import { Link } from "react-router";
import { Mark } from "./Mark";
import { formatAmount } from "../data/fund";
import { formatDate } from "../utils/time";
import { useI18n, pick } from "../i18n";
import { winnerCount } from "../data/draws";
import { domainLabel } from "../utils/laureate";

/**
 * 开奖记录的列表卡片。整张卡是链接，详情在 /winners/:id。
 *
 * 卡片只用 draws.js 里的元数据，不拉 markdown —— 期数多了也不会有性能问题。
 *
 * 版式与详情页（DrawRecord）刻意保持一致：米色抬头条 + 「左姓名 / 右数据」的获奖人行。
 * 点进去不该像换了个东西。两边要改就一起改。
 *
 * 获奖人行**不用装饰竖线**：那玩意儿是每个获奖者一条，条长随内容变，
 * 人一多就是几根长短不一的平行短线。改用「行长决定结构」——
 * 名字在左、公示数据在右，行与行之间一道细线。几个人都成立，也自带左右节奏。
 */
export function DrawCard({ draw }) {
  const { lang, t } = useI18n();
  const winners = draw.winners ?? [];
  const n = winnerCount(draw);

  return (
    <Link to={`/winners/${draw.id}`} className="block">
      <article className="prize-card overflow-hidden">
        {/* 抬头。底边用金线而不是灰线：灰线在白底上几乎看不见，抬头就不成立。
            左边压一个半面标记 —— 两个主题色被设计成一对就是在这个图形里，
            放在每条记录上等于盖印。它是固定尺寸，不随内容变。 */}
        <header
          className="flex items-center gap-3.5 border-b px-6 py-4"
          style={{ borderColor: "var(--goldlight)", background: "var(--cream)" }}
        >
          <Mark size={22} className="shrink-0" />

          <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <div className="min-w-0">
              {/* 期次是这张卡的身份，用品牌色。日期是元数据，保持灰。 */}
              <div
                className="font-display text-lg font-bold leading-none"
                style={{ color: "var(--navy)" }}
              >
                {t.draw.period(draw.period)}
              </div>
              <div className="font-sans mt-1.5 text-[14px] text-[var(--muted)]">
                {formatDate(draw.date, lang)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {draw.placeholder && (
                <span
                  className="font-sans rounded-full px-2.5 py-1 text-[12px] font-medium tracking-wider text-white"
                  style={{ background: "var(--gold)" }}
                >
                  {t.draw.placeholder}
                </span>
              )}
              {/* 白底 + 藏青字：之前是米底灰字，压在米色抬头条上等于看不见。 */}
              <span
                className="font-sans shrink-0 rounded-full px-3 py-1 text-[13px] font-medium"
                style={{ background: "var(--paper)", color: "var(--navy)" }}
              >
                {n > 0 ? t.draw.winnerCountBadge(n) : t.draw.vacant}
              </span>
            </div>
          </div>
        </header>

        <div className="px-6 py-5">
          {n > 0 ? (
            <ul>
              {winners.map((w, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-6 border-t py-4 first:border-t-0 first:pt-0 last:pb-0"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="min-w-0">
                    <div className="font-display text-[18px] font-bold leading-snug">
                      {pick(w, "name", lang)}
                    </div>
                    <div className="font-sans mt-1 text-[13px] text-[var(--muted)]">
                      {domainLabel(w, lang)} · {pick(w, "award", lang)}
                    </div>
                  </div>

                  {w.metric && (
                    <div className="shrink-0 text-right">
                      <div className="figure text-[20px] leading-none">{w.metric}</div>
                      <div className="font-sans mt-1.5 text-[12px] text-[var(--muted)]">
                        {pick(w, "metricLabel", lang) || t.draw.metricDefault}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[15px] leading-relaxed text-[var(--muted)]">{t.draw.vacantNote}</p>
          )}

          {/* 结算 */}
          <div
            className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t pt-4"
            style={{ borderColor: "var(--line)" }}
          >
            <span className="font-sans text-[14px] text-[var(--muted)]">
              {t.draw.pool}{" "}
              <span className="text-[var(--ink)]">{formatAmount(draw.pool ?? 0)}</span>
              {n > 0 && (
                <>
                  {" · "}
                  {t.draw.perWinnerLabel}{" "}
                  <span className="text-[var(--ink)]">{formatAmount(draw.perWinner ?? 0)}</span>
                </>
              )}
            </span>
            <span className="font-sans text-[14px]" style={{ color: "var(--gold)" }}>
              {t.draw.viewDetail}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
