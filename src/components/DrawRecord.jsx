import { MarkdownBody } from "./MarkdownBody";
import { Mark } from "./Mark";
import { formatDate } from "../utils/time";
import { formatAmount } from "../data/fund";
import { winnerCount } from "../data/draws";
import { useI18n, pick } from "../i18n";
import { domainLabel } from "../utils/laureate";

/**
 * 一期开奖的完整记录：抬头 + 获奖者 + 「获奖理由」正文 + 结算。
 *
 * 元数据全部来自 draws.js 的 draw 对象，只有正文是从 markdown 拉的。
 * markdown 里**只写获奖理由本身**，不要再重复奖项名、获奖者、公示数据 ——
 * 那些由上面的结构化区块渲染，写两遍就会打架。
 *
 * 版式与列表卡片（DrawCard）刻意保持一致：米色抬头条 + 「左姓名 / 右数据」的获奖人行。
 * 两边要改就一起改。
 *
 * 获奖人行**不用装饰竖线**：那玩意儿是每个获奖者一条，条长随内容变，
 * 人一多就是几根长短不一的平行短线。改用「行长决定结构」——
 * 名字在左、公示数据在右，行与行之间一道细线。几个人都成立，也自带左右节奏。
 */
export function DrawRecord({ draw, content, loading, error }) {
  const { lang, t } = useI18n();

  if (!draw) return null;

  const winners = draw.winners ?? [];
  const n = winnerCount(draw);

  return (
    <article className="prize-card overflow-hidden">
      {/* 抬头。底边用金线而不是灰线：灰线在白底上几乎看不见，抬头就不成立。
          左边压一个半面标记 —— 两个主题色被设计成一对就是在这个图形里。 */}
      <header
        className="flex items-center gap-4 border-b px-6 py-5 sm:px-8"
        style={{ borderColor: "var(--goldlight)", background: "var(--cream)" }}
      >
        <Mark size={28} className="shrink-0" />

        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <div className="min-w-0">
            {/* 期次是这张卡的身份，用品牌色。日期是元数据，保持灰。 */}
            <div
              className="font-display text-xl font-bold leading-none"
              style={{ color: "var(--navy)" }}
            >
              {t.draw.period(draw.period)}
            </div>
            <div className="font-sans mt-1.5 text-[14px] text-[var(--muted)]">
              {formatDate(draw.date, lang)} {t.draw.drawnOn}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {draw.placeholder && (
              <span
                className="font-sans rounded-full px-2.5 py-1 text-[12px] font-medium tracking-wider text-white"
                style={{ background: "var(--gold)" }}
              >
                {t.draw.placeholder}
              </span>
            )}
            <span className="font-sans text-[14px] text-[var(--muted)]">
              {t.draw.pool} {formatAmount(draw.pool ?? 0)}
            </span>
          </div>
        </div>
      </header>

      <div className="px-6 py-7 sm:px-8">
        {/* 获奖者。人数挂在区块标题右侧 —— 列表卡片的抬头也有，两处都要有。 */}
        <div
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b pb-[0.6rem]"
          style={{ borderColor: "var(--line)" }}
        >
          <h2 className="font-display text-[1.2rem] font-bold">{t.draw.laureates}</h2>
          <span className="font-sans text-[13px] text-[var(--muted)]">
            {n > 0 ? t.draw.laureatesCount(n) : t.draw.vacant}
          </span>
        </div>

        {n > 0 ? (
          <ul className="mt-5">
            {winners.map((w, i) => (
              <li
                key={i}
                className="flex items-start justify-between gap-8 border-t py-5 first:border-t-0 first:pt-0 last:pb-0"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="min-w-0">
                  <div className="font-display text-[21px] font-bold leading-snug">
                    {pick(w, "name", lang)}
                  </div>
                  <div className="font-sans mt-1.5 text-[13px] text-[var(--muted)]">
                    {domainLabel(w, lang)} · {pick(w, "award", lang)}
                  </div>
                </div>

                {w.metric && (
                  <div className="shrink-0 text-right">
                    <div className="figure text-[24px] leading-none">{w.metric}</div>
                    <div className="font-sans mt-2 text-[12px] text-[var(--muted)]">
                      {pick(w, "metricLabel", lang) || t.draw.metricDefault}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
            {t.draw.vacantNote}
          </p>
        )}

        {/* 获奖理由 */}
        <div
          className="mt-9 flex flex-wrap items-baseline justify-between gap-x-4 border-b pb-[0.6rem]"
          style={{ borderColor: "var(--line)" }}
        >
          <h2 className="font-display text-[1.2rem] font-bold">{t.draw.grounds}</h2>
        </div>

        <div className="mt-5">
          {loading && (
            <p className="py-10 text-center text-sm text-[var(--muted)]">{t.common.loading}</p>
          )}

          {error && (
            <p className="py-10 text-center text-sm" style={{ color: "var(--gold)" }}>
              {t.common.loadFailed}: {error}
            </p>
          )}

          {content && <MarkdownBody>{content}</MarkdownBody>}
        </div>

        {/* 结算 */}
        <div
          className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-5"
          style={{ borderColor: "var(--line)" }}
        >
          <span className="font-sans text-[14px] text-[var(--muted)]">
            {t.draw.winnersCount(n)}{" "}
            <span className="text-[var(--ink)]">{formatAmount(draw.perWinner ?? 0)}</span>
          </span>
          <span className="font-sans text-[14px] text-[var(--muted)]">
            {t.draw.balanceAfter}{" "}
            <span className="text-[var(--ink)]">{formatAmount(draw.balanceAfter ?? 0)}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
