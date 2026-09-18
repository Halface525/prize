import { accountLedger, formatAmount, formatSigned } from "../data/fund";
import { formatDate } from "../utils/time";
import { useI18n } from "../i18n";

/**
 * 账户流水。
 *
 * 这页没什么可解释的——一串逐渐归零的数字，就是这个奖最好的自我介绍。
 * 数据全部从 fund.js 的 deposits 和 draws.js 推导，不用单独维护。
 */
export function FundLedger() {
  const { lang, t } = useI18n();
  const rows = accountLedger();

  if (rows.length === 0) {
    return <p className="text-[13px] text-[var(--muted)]">{t.fund.noLedger}</p>;
  }

  return (
    <div>
      <ul>
        {rows.map((r, i) => {
          const isPayout = r.kind === "payout";
          return (
            <li
              key={`${r.date}-${i}`}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t py-3 first:border-t-0 first:pt-0"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex min-w-0 flex-wrap items-baseline gap-x-2.5">
                <span className="font-sans shrink-0 text-[11px] text-[var(--muted)]">
                  {formatDate(r.date, lang)}
                </span>
                <span className="font-sans text-[12px]">
                  {isPayout ? t.fund.payout(t.draw.period(r.period)) : t.fund.deposit}
                </span>
                {!isPayout && (
                  <span className="truncate text-[12px] text-[var(--muted)]">
                    {lang === "zh" ? r.note : r.noteEn}
                  </span>
                )}
              </div>

              <div className="flex shrink-0 items-baseline gap-4">
                <span
                  className="font-sans text-[12px]"
                  style={{ color: isPayout ? "var(--muted)" : "var(--gold)" }}
                >
                  {formatSigned(r.amount)}
                </span>
                <span
                  className="font-sans w-[92px] text-right text-[12px]"
                  style={{ color: r.balance === 0 ? "var(--muted)" : "var(--ink)" }}
                >
                  {formatAmount(r.balance)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="font-sans mt-4 text-[11px] leading-relaxed text-[var(--muted)]">
        {t.fund.ledgerNote}
      </p>
    </div>
  );
}
