import { Link } from "react-router";
import { fund, formatAmount } from "../data/fund";
import { useI18n } from "../i18n";
import { charterLink, charterRefClass } from "../utils/charter";

/** 奖金账户公示条 */
export function FundPanel({ compact = false }) {
  const { lang, t } = useI18n();

  return (
    <div
      className="rounded-2xl border p-6 sm:p-8"
      style={{ borderColor: "var(--line)", background: "var(--cream)" }}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="eyebrow">{t.fund.balanceLabel}</div>
          <div className="figure mt-3 text-5xl leading-none sm:text-6xl">
            {formatAmount(fund.balance)}
          </div>
          <p className="font-sans mt-3 text-[12px] text-[var(--muted)]">
            {t.fund.asOf} {fund.updatedAt}
          </p>
        </div>

        <div className="max-w-sm">
          <p className="text-[14px] leading-relaxed text-[var(--muted)]">
            {t.fund.note1}
            <strong className="font-semibold text-[var(--ink)]">{t.fund.note1Strong}</strong>
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
            {lang === "zh" ? fund.source + fund.policy : `${fund.sourceEn} ${fund.policyEn}`}
          </p>
        </div>
      </div>

      {!compact && (
        <div className="mt-6 border-t pt-5" style={{ borderColor: "var(--line)" }}>
          <Link
            to={charterLink.chapter(2)}
            className={charterRefClass}
            style={{ color: "var(--gold)" }}
          >
            {t.fund.charterRef}
          </Link>
        </div>
      )}
    </div>
  );
}
