import { Link, useParams } from "react-router";
import { MarkdownBody } from "../components/MarkdownBody";
import { EmptyState } from "../components/EmptyState";
import { domains } from "../data/domains";
import { awardsOfDomain } from "../data/awards";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n, pick } from "../i18n";
import { charterLink, charterRefClass } from "../utils/charter";

export function DomainDetailPage() {
  const { id } = useParams();
  const { lang, t } = useI18n();

  const idx = domains.findIndex((d) => d.id === id);
  const domain = idx >= 0 ? domains[idx] : null;

  useDocumentTitle(domain ? pick(domain, "name", lang) : t.domains.pageTitle);

  if (!domain) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm text-[var(--muted)]">{t.domains.noAwards}</p>
        <Link
          to="/domains"
          className="font-sans mt-6 inline-block text-[13px] transition-opacity hover:opacity-60"
          style={{ color: "var(--gold)" }}
        >
          {t.domains.back}
        </Link>
      </div>
    );
  }

  const awards = awardsOfDomain(domain.id);
  const prev = idx > 0 ? domains[idx - 1] : null;
  const next = idx >= 0 && idx < domains.length - 1 ? domains[idx + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-6">
      <Link
        to="/domains"
        className="font-sans text-[13px] transition-opacity hover:opacity-60"
        style={{ color: "var(--gold)" }}
      >
        {t.domains.back}
      </Link>

      {/* 领域抬头 */}
      <header className="mt-8 border-b pb-7" style={{ borderColor: "var(--line)" }}>
        <div className="flex items-baseline gap-4">
          <span
            className="font-display text-3xl font-bold leading-none"
            style={{ color: domain.special ? "var(--gold)" : "var(--line)" }}
          >
            {pick(domain, "index", lang)}
          </span>
          <div>
            <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              {pick(domain, "name", lang)}
            </h1>
            <div className="font-sans mt-2 text-[11px] tracking-[0.18em] text-[var(--muted)]">
              {(lang === "zh" ? domain.nameEn : domain.name).toUpperCase()}
            </div>
          </div>
        </div>

        <p className="mt-5 text-[15px] text-[var(--muted)]">
          {t.domains.covers}：{pick(domain, "covers", lang)}
        </p>

        <p
          className="mt-4 border-l-2 pl-4 text-[16px] italic leading-relaxed text-[var(--muted)]"
          style={{ borderColor: "var(--goldlight)" }}
        >
          {pick(domain, "note", lang)}
        </p>
      </header>

      {/* 奖项库 */}
      <section className="mt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-display text-xl font-bold">{t.nav.domains}</h2>
          <span className="font-sans text-[12px] text-[var(--muted)]">
            {t.domains.awardCount(awards.length)}
          </span>
        </div>

        {awards.length === 0 ? (
          <EmptyState className="mt-6" text={t.domains.noAwards} />
        ) : (
          <ul className="mt-6 space-y-5">
            {awards.map((a) => (
              <li
                key={a.id}
                className="border-t pt-5 first:border-t-0 first:pt-0"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5">
                  <span className="font-display text-[16px] font-semibold">
                    {pick(a, "name", lang)}
                  </span>
                  <span
                    className="font-sans rounded-full px-2 py-0.5 text-[11px] text-[var(--muted)]"
                    style={{ background: "var(--cream)" }}
                  >
                    {pick(a, "subject", lang)}
                  </span>
                  {/* createdIn 省略表示建库时已有，那批不给标记 —— 见 awards.js 顶部说明 */}
                  {a.createdIn > 0 && (
                    <span
                      className="font-sans rounded-full px-2 py-0.5 text-[11px]"
                      style={{ background: "var(--cream)", color: "var(--gold)" }}
                    >
                      {t.domains.createdIn(a.createdIn)}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
                  {pick(a, "criterion", lang)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 归类说明 */}
      <section className="mt-14">
        <div
          className="rounded-2xl border px-6 py-6 text-[14px] leading-relaxed text-[var(--muted)]"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <MarkdownBody>
            {lang === "zh"
              ? "具体奖项**不设限制**，委员会可于任一期开奖时创设新奖项。已创设的奖项列入奖项库，供后续各期沿用，且**一经入库不得撤销**。"
              : "Individual awards are **unrestricted**; the Committee may create one at any drawing. An award once in the library may be reused in later drawings and **may not be withdrawn**."}
          </MarkdownBody>
          <Link
            to={charterLink.article(17)}
            className={charterRefClass}
            style={{ color: "var(--gold)" }}
          >
            {t.charter.refArticle(17)}
          </Link>
        </div>
      </section>

      {/* 前后领域 */}
      {(prev || next) && (
        <nav
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6"
          style={{ borderColor: "var(--line)" }}
        >
          {prev ? (
            <Link
              to={`/domains/${prev.id}`}
              className="font-sans text-[13px] transition-opacity hover:opacity-60"
              style={{ color: "var(--muted)" }}
            >
              ← {pick(prev, "name", lang)}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/domains/${next.id}`}
              className="font-sans text-[13px] transition-opacity hover:opacity-60"
              style={{ color: "var(--muted)" }}
            >
              {pick(next, "name", lang)} →
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
