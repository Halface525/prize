import { SectionHeading } from "../components/SectionHeading";
import { MarkdownBody } from "../components/MarkdownBody";
import { Mark } from "../components/Mark";
import { committee, history } from "../data/committee";
import { site } from "../data/site";
import { formatDate } from "../utils/time";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n, pick } from "../i18n";

/** 区块标题：与 .section-rule 同一套，但右边能挂一个计数 */
function SectionHead({ title, right }) {
  return (
    <div
      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b pb-[0.6rem]"
      style={{ borderColor: "var(--line)" }}
    >
      <h2 className="font-display text-[1.2rem] font-bold">{title}</h2>
      {right && <span className="font-sans text-[13px] text-[var(--muted)]">{right}</span>}
    </div>
  );
}

export function CommitteePage() {
  const { lang, t } = useI18n();
  useDocumentTitle(t.committee.pageTitle);

  const colors = [
    { name: t.committee.markGold, hex: "#C9A961" },
    { name: t.committee.markNavy, hex: "#1B2A6B" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeading
        eyebrow={t.nav.committee}
        title={t.committee.title}
        description={t.committee.desc}
      />

      {/* 沿革 */}
      <section className="mt-12">
        <SectionHead title={t.committee.historyTitle} />

        <ol className="relative mt-6 border-l pl-6" style={{ borderColor: "var(--line)" }}>
          {history.map((h, i) => (
            <li key={h.date} className={`relative ${i === history.length - 1 ? "" : "pb-6"}`}>
              {/* 圆点压在竖线上：li 左边距 24px，圆点宽 8px，所以左移 28px 让圆心落在线上 */}
              <span
                className="absolute -left-[28px] top-[6px] h-2 w-2 rounded-full"
                style={{ background: "var(--goldlight)" }}
              />
              <div className="font-sans text-[13px] text-[var(--muted)]">
                {formatDate(h.date, lang)}
              </div>
              <div className="mt-1 text-[15px] leading-relaxed">{lang === "zh" ? h.zh : h.en}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* 标识 */}
      <section className="mt-14">
        <SectionHead title={t.committee.markTitle} />

        <div
          className="mt-6 flex flex-wrap items-center gap-8 rounded-2xl border p-7"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <Mark size={92} />

          <div className="min-w-[15rem] flex-1">
            <MarkdownBody>{t.committee.markBody}</MarkdownBody>

            <dl className="font-sans mt-5 flex flex-wrap gap-x-8 gap-y-2 text-[13px]">
              {colors.map((c) => (
                <div key={c.hex} className="flex items-center gap-2">
                  <span
                    className="inline-block h-3.5 w-3.5 shrink-0 rounded-full"
                    style={{ background: c.hex }}
                  />
                  <dt className="text-[var(--ink)]">{c.name}</dt>
                  <dd className="text-[var(--muted)]">{c.hex}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 现任委员 */}
      <section className="mt-14">
        <SectionHead
          title={t.committee.membersTitle}
          right={t.committee.memberCount(committee.length)}
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map((m) => (
            <div key={m.id} className="prize-card p-6">
              <div className="border-l-2 pl-4" style={{ borderColor: "var(--goldlight)" }}>
                <div className="font-display text-[19px] font-bold leading-snug">
                  {pick(m, "name", lang)}
                </div>
                <div className="font-sans mt-1 text-[13px] text-[var(--muted)]">
                  {pick(m, "role", lang)}
                </div>

                <dl className="font-sans mt-4 space-y-1.5 text-[13px]">
                  <div className="flex gap-2">
                    <dt className="text-[var(--muted)]">{t.committee.termLabel}</dt>
                    <dd className="text-[var(--ink)]">{pick(m, "term", lang)}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[var(--muted)]">{t.committee.sinceLabel}</dt>
                    <dd className="text-[var(--ink)]">{pick(m, "since", lang)}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 委员会如何工作 */}
      <section className="mt-14">
        <SectionHead title={t.committee.workTitle} />
        <div className="mt-5">
          <MarkdownBody>{t.committee.workBody}</MarkdownBody>
        </div>
      </section>

      {/* 联系 */}
      <section className="mt-14">
        <SectionHead title={t.committee.contactTitle} />
        <div
          className="mt-5 rounded-2xl border px-6 py-6"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <a
            href={`mailto:${site.email}`}
            className="font-sans text-[16px] transition-opacity hover:opacity-70"
            style={{ color: "var(--gold)" }}
          >
            {site.email}
          </a>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
            {t.committee.contactNote}
          </p>
        </div>
      </section>
    </div>
  );
}
