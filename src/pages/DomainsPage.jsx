import { Link } from "react-router";
import { SectionHeading } from "../components/SectionHeading";
import { DomainCard } from "../components/DomainCard";
import { MarkdownBody } from "../components/MarkdownBody";
import { domains } from "../data/domains";
import { awards } from "../data/awards";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n } from "../i18n";
import { charterLink, charterRefClass } from "../utils/charter";

/** 页尾说明，中英各一份 */
const ABOUT = {
  zh: `## 关于具体奖项

具体奖项**不设限制**。委员会于每期开奖时可自由创设新奖项，只要它能归入上述某一领域。已创设的奖项列入奖项库，供后续各期沿用。

因此本页所列只是一部分。奖项库只会变长——它越来越长、越来越怪，是本奖的正常状态。

## 关于归类

申请人**无需指定领域**。申请时只写事由，领域由委员会归类。这样参评门槛极低，而归档结构仍然清晰。

无法归入前七个领域的，归入第八领域「无用」。该领域存在的唯一理由，是让前七个领域可以永远不改。`,
  en: `## On individual awards

Individual awards are **unrestricted**. The Committee may create a new award at any drawing, provided it falls within one of the domains above. Once created, an award enters the library and may be reused in later drawings.

What is listed on this page is therefore only a part of it. The library only grows — that it grows longer and stranger is the normal state of this prize.

## On classification

Applicants **need not name a domain**. State the grounds; the Committee assigns the domain. This keeps the bar to entry very low while the archive stays orderly.

Anything that fits none of the seven domains falls into the eighth, "The Useless." The sole reason that domain exists is so the seven above it never have to change.`,
};

export function DomainsPage() {
  const { lang, t } = useI18n();
  useDocumentTitle(t.domains.pageTitle);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <SectionHeading
        eyebrow={t.home.domainsEyebrow}
        title={t.domains.title}
        description={t.domains.desc}
      />

      <div className="mt-10 space-y-4">
        {domains.map((d) => (
          <DomainCard key={d.id} domain={d} />
        ))}
      </div>

      <section className="mt-16">
        <MarkdownBody>{ABOUT[lang]}</MarkdownBody>
      </section>

      <section className="mt-14">
        <div
          className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border px-6 py-6"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <div>
            <div className="eyebrow">{t.domains.awardsCount}</div>
            <div className="figure mt-2 text-4xl leading-none">{awards.length}</div>
          </div>
          <div className="max-w-md">
            <p className="text-[14px] leading-relaxed text-[var(--muted)]">
              {t.domains.awardsCountNote}
            </p>
            <Link
              to={charterLink.article(17)}
              className={`${charterRefClass} mt-3 inline-block`}
              style={{ color: "var(--gold)" }}
            >
              {t.charter.refArticle(17)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
