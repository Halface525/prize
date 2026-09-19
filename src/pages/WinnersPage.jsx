import { useState } from "react";
import { Link } from "react-router";
import { SectionHeading } from "../components/SectionHeading";
import { DrawCard } from "../components/DrawCard";
import { EmptyState } from "../components/EmptyState";
import { drawsByDomain, domainsWithLaureates } from "../data/draws";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n, pick } from "../i18n";
import { charterLink, charterRefClass } from "../utils/charter";

export function WinnersPage() {
  const { lang, t } = useI18n();
  useDocumentTitle(t.winners.pageTitle);

  const [domainId, setDomainId] = useState(null);
  const list = drawsByDomain(domainId);

  // 只列出「出过获奖者」的领域——八个领域全列出来会有大半是空的
  const filterDomains = domainsWithLaureates();
  const tabs = [
    { id: null, label: t.common.all },
    ...filterDomains.map((d) => ({ id: d.id, label: pick(d, "name", lang) })),
  ];

  return (
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeading
        eyebrow={t.nav.winners}
        title={t.winners.title}
        description={t.winners.desc}
      />

      {list.length === 0 && !domainId ? (
        <EmptyState className="mt-10" text={t.winners.empty} />
      ) : (
        <>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {/* 只有一个领域出过获奖者时不必显示筛选 */}
            {filterDomains.length > 1 &&
              tabs.map((tab) => {
                const active = domainId === tab.id;
                return (
                  <button
                    key={tab.id ?? "all"}
                    type="button"
                    onClick={() => setDomainId(tab.id)}
                    className="font-sans rounded-full border px-3.5 py-1.5 text-[13px] transition-colors"
                    style={{
                      borderColor: active ? "var(--ink)" : "var(--line)",
                      background: active ? "var(--ink)" : "transparent",
                      color: active ? "var(--paper)" : "var(--muted)",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            <span className="font-sans ml-auto text-[12px] text-[var(--muted)]">
              {t.winners.count(list.length)}
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {list.map((draw) => (
              <DrawCard key={draw.id} draw={draw} />
            ))}
          </div>
        </>
      )}

      <section className="mt-14">
        <div
          className="rounded-2xl border px-6 py-8"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <h3 className="font-display text-xl font-bold">{t.winners.vacancyTitle}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
            {t.winners.vacancyDesc}
          </p>
          <Link
            to={charterLink.article(29)}
            className={`${charterRefClass} mt-4 inline-block`}
            style={{ color: "var(--gold)" }}
          >
            {t.charter.refArticle(29)}
          </Link>
        </div>
      </section>
    </div>
  );
}
