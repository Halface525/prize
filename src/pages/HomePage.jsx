import { Link } from "react-router";
import { HeroCard } from "../components/HeroCard";
import { Ribbon } from "../components/Ribbon";
import { FundPanel } from "../components/FundPanel";
import { Countdown } from "../components/Countdown";
import { SectionHeading } from "../components/SectionHeading";
import { MarkdownBody } from "../components/MarkdownBody";
import { DomainCard } from "../components/DomainCard";
import { DrawRecord } from "../components/DrawRecord";
import { GoldButton } from "../components/GoldButton";
import { domains } from "../data/domains";
import { latestDraw } from "../data/draws";
import { site } from "../data/site";
import { useArticle } from "../hooks/useArticle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n, localizedPath } from "../i18n";

export function HomePage() {
  useDocumentTitle(null);
  const { lang, t } = useI18n();

  const latest = latestDraw();
  const { data, loading, error } = useArticle(localizedPath(latest?.file, lang));

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* ── Hero ─────────────────────────────── */}
      <HeroCard
        eyebrow={lang === "zh" ? `${site.nameZh} · ${site.nameEn}` : site.nameEn}
        title={t.home.slogan}
        latin={t.home.sloganLatin}
        subtitle={t.home.heroSubtitle}
      >
        <GoldButton to="/apply">{t.home.applyButton}</GoldButton>
        <GoldButton to="/charter" variant="ghost">
          {t.home.charterButton}
        </GoldButton>
      </HeroCard>

      {/* ── 奖金账户 + 倒计时 ─────────────────── */}
      <section className="mt-8 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
        <FundPanel />
        <div
          className="flex flex-col justify-center rounded-2xl border px-6 py-8"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="eyebrow mb-5 text-center">{t.countdown.toNext}</div>
          <Countdown />
        </div>
      </section>

      {/* ── 缘起 ─────────────────────────────── */}
      <section className="mt-20">
        <SectionHeading eyebrow={t.home.originEyebrow} title={t.home.originTitle} />

        <div
          className="mt-8 rounded-2xl border px-6 py-8 sm:px-10 sm:py-10"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <MarkdownBody>{t.home.origin}</MarkdownBody>

          {/* 收尾换成人的声音：全站唯一一处不是公文腔 */}
          <p
            className="font-display mt-10 border-t pt-8 text-center text-xl italic text-[var(--muted)]"
            style={{ borderColor: "var(--line)" }}
          >
            {t.home.originClosing}
          </p>
        </div>
      </section>

      {/* ── 七领域 ───────────────────────────── */}
      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={t.home.domainsEyebrow}
            title={t.home.domainsTitle}
            description={t.home.domainsDesc}
          />
          <Link
            to="/domains"
            className="font-sans shrink-0 text-[13px] transition-opacity hover:opacity-60"
            style={{ color: "var(--gold)" }}
          >
            {t.home.viewAllAwards}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            // 首页是窄卡片（三列），预览少放一个奖项名，免得每张卡都拖很高
            <DomainCard key={d.id} domain={d} maxAwards={3} />
          ))}
        </div>
      </section>

      {/* ── 最新一期 ─────────────────────────── */}
      {latest && (
        <section className="mt-20">
          <SectionHeading eyebrow={t.home.latestEyebrow} title={t.home.latestTitle} />
          <div className="mt-8">
            <DrawRecord
              draw={latest}
              content={data?.content}
              loading={loading}
              error={error}
            />
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/winners"
              className="font-sans text-[13px] transition-opacity hover:opacity-60"
              style={{ color: "var(--gold)" }}
            >
              {t.home.viewAllDraws}
            </Link>
          </div>
        </section>
      )}

      {/* ── 申请入口 ─────────────────────────── */}
      <section className="mt-20">
        <div
          className="relative overflow-hidden rounded-2xl border px-6 py-12 text-center sm:px-12"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <Ribbon />
          <div className="relative">
            <div className="eyebrow">{t.home.ctaEyebrow}</div>
            <h2 className="font-display mt-3 text-3xl font-bold">{t.home.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-[var(--muted)]">
              {t.home.ctaDesc}
            </p>
            <div
              className="font-sans mt-6 text-[14px] tracking-wide"
              style={{ color: "var(--gold)" }}
            >
              {site.email}
            </div>
            <div className="mt-7">
              <GoldButton to="/apply">{t.home.ctaButton}</GoldButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
