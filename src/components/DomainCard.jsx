import { awardsOfDomain } from "../data/awards";
import { useI18n, pick } from "../i18n";

/** 领域卡片。expanded 时列出该领域的奖项库。 */
export function DomainCard({ domain, expanded = false }) {
  const { lang, t } = useI18n();
  const list = awardsOfDomain(domain.id);

  return (
    <div className="prize-card p-6">
      <div className="flex items-baseline gap-3">
        <span
          className="font-display text-2xl font-bold leading-none"
          style={{ color: domain.special ? "var(--gold)" : "var(--line)" }}
        >
          {pick(domain, "index", lang)}
        </span>
        <div>
          <h3 className="font-display text-xl font-bold leading-none">
            {pick(domain, "name", lang)}
          </h3>
          <div className="font-sans mt-1.5 text-[10px] tracking-[0.18em] text-[var(--muted)]">
            {(lang === "zh" ? domain.nameEn : domain.name).toUpperCase()}
          </div>
        </div>
      </div>

      <p className="mt-4 text-[13px] text-[var(--muted)]">
        {t.domains.covers}: {pick(domain, "covers", lang)}
      </p>

      <p
        className="mt-4 border-l-2 pl-3 text-[13px] italic leading-relaxed text-[var(--muted)]"
        style={{ borderColor: "var(--goldlight)" }}
      >
        {pick(domain, "note", lang)}
      </p>

      {expanded && list.length > 0 && (
        <ul className="mt-6 space-y-4 border-t pt-5" style={{ borderColor: "var(--line)" }}>
          {list.map((a) => (
            <li key={a.id}>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-display text-[15px] font-semibold">
                  {pick(a, "name", lang)}
                </span>
                <span
                  className="font-sans rounded-full px-2 py-0.5 text-[10px] text-[var(--muted)]"
                  style={{ background: "var(--cream)" }}
                >
                  {pick(a, "subject", lang)}
                </span>
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                {pick(a, "criterion", lang)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
