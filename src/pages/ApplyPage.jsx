import { useState } from "react";
import { Link } from "react-router";
import { SectionHeading } from "../components/SectionHeading";
import { Ribbon } from "../components/Ribbon";
import { GoldButton } from "../components/GoldButton";
import { MarkdownBody } from "../components/MarkdownBody";
import { site } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n } from "../i18n";
import { charterLink, charterRefClass } from "../utils/charter";

export function ApplyPage() {
  const { t } = useI18n();
  useDocumentTitle(t.apply.pageTitle);

  const [copied, setCopied] = useState("idle"); // idle | ok | fail

  async function copy() {
    try {
      await navigator.clipboard.writeText(t.emailTemplate);
      setCopied("ok");
      setTimeout(() => setCopied("idle"), 2000);
    } catch {
      setCopied("fail");
      setTimeout(() => setCopied("idle"), 2500);
    }
  }

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("【半面奖申请】")}`;

  return (
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeading eyebrow={t.nav.apply} title={t.apply.title} description={t.apply.desc} />

      {/* 邮箱 */}
      <div
        className="relative mt-10 overflow-hidden rounded-2xl border px-6 py-8 text-center"
        style={{ borderColor: "var(--line)", background: "var(--cream)" }}
      >
        <Ribbon />
        <div className="relative">
          <div className="eyebrow">{t.apply.emailLabel}</div>
          <a
            href={mailto}
            className="font-sans mt-3 block text-lg tracking-wide transition-opacity hover:opacity-70 sm:text-xl"
            style={{ color: "var(--gold)" }}
          >
            {site.email}
          </a>
          <div className="mt-6">
            <GoldButton href={mailto}>{t.apply.openMail}</GoldButton>
          </div>
        </div>
      </div>

      {/* 模板 */}
      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="eyebrow">{t.apply.templateEyebrow}</div>
            <h2 className="font-display mt-3 text-2xl font-bold">{t.apply.templateTitle}</h2>
          </div>
          <button type="button" onClick={copy} className="btn-ghost">
            {copied === "ok" ? t.apply.copied : copied === "fail" ? t.apply.copyFailed : t.apply.copy}
          </button>
        </div>

        <pre
          className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-2xl border px-6 py-6 text-[14px] leading-[1.9]"
          style={{ borderColor: "var(--line)", background: "var(--cream)", fontFamily: "inherit" }}
        >
          {t.emailTemplate}
        </pre>

        <p className="mt-4 text-[14px] leading-relaxed text-[var(--muted)]">
          {t.apply.templateNote}
        </p>
      </section>

      {/* 须知 */}
      <section className="mt-16">
        <MarkdownBody>{t.apply.notice}</MarkdownBody>
      </section>

      {/* 声明 */}
      <section className="mt-14">
        <div
          className="rounded-2xl border px-6 py-6"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <h3 className="font-display text-lg font-bold">{t.apply.noDonationTitle}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
            {t.apply.noDonationBefore}
            <strong className="font-semibold text-[var(--ink)]">{t.apply.noDonationStrong}</strong>
            {t.apply.noDonationAfter}
          </p>
          <Link
            to={charterLink.article(8)}
            className={`${charterRefClass} mt-4 inline-block`}
            style={{ color: "var(--gold)" }}
          >
            {t.charter.refArticle(8)}
          </Link>
        </div>
      </section>
    </div>
  );
}
