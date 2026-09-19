import { Link } from "react-router";
import { awardsOfDomain } from "../data/awards";
import { useI18n, pick } from "../i18n";

/**
 * 领域卡片。整张卡是链接，详情在 /domains/:id。
 *
 * 列表页保留奖项名作为预览——「校园猫全勤奖」「从未鼓包奖」这些名字本身就是内容，
 * 全收进详情页就没了。收起来的只是评选标准（较长的那段文字）。
 */
export function DomainCard({ domain, maxAwards = 4 }) {
  const { lang, t } = useI18n();
  const list = awardsOfDomain(domain.id);
  const teaser = list.slice(0, maxAwards);
  const rest = list.length - teaser.length;

  return (
    <Link to={`/domains/${domain.id}`} className="block">
      <article className="prize-card h-full p-6">
        {/* 抬头 */}
        <div className="flex items-start justify-between gap-3">
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
              <div className="font-sans mt-1.5 text-[11px] tracking-[0.18em] text-[var(--muted)]">
                {(lang === "zh" ? domain.nameEn : domain.name).toUpperCase()}
              </div>
            </div>
          </div>

          <span className="font-sans shrink-0 text-[12px] text-[var(--muted)]">
            {t.domains.awardCount(list.length)}
          </span>
        </div>

        <p className="mt-4 text-[14px] text-[var(--muted)]">
          {t.domains.covers}：{pick(domain, "covers", lang)}
        </p>

        <p
          className="mt-4 border-l-2 pl-3 text-[14px] italic leading-relaxed text-[var(--muted)]"
          style={{ borderColor: "var(--goldlight)" }}
        >
          {pick(domain, "note", lang)}
        </p>

        {/* 奖项名预览 */}
        <div className="mt-5 border-t pt-4" style={{ borderColor: "var(--line)" }}>
          {list.length === 0 ? (
            <p className="text-[13px] text-[var(--muted)]">{t.domains.noAwards}</p>
          ) : (
            <p className="text-[14px] leading-relaxed">
              {teaser.map((a) => pick(a, "name", lang)).join(" · ")}
              {rest > 0 && (
                <span className="text-[var(--muted)]"> {t.domains.moreAwards(rest)}</span>
              )}
            </p>
          )}

          <span className="font-sans mt-3 inline-block text-[13px]" style={{ color: "var(--gold)" }}>
            {t.domains.viewDomain}
          </span>
        </div>
      </article>
    </Link>
  );
}
