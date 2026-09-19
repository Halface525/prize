import { Link } from "react-router";
import { footerItems, site } from "../data/site";
// 委员人数从名单里现算，不写死 —— 写死的那个数会永远停在旧值上。
import { committee as members } from "../data/committee";
import { useI18n } from "../i18n";

export function SiteFooter() {
  const { lang, t } = useI18n();
  const year = new Date().getFullYear();
  const committee = lang === "zh" ? site.committee : site.committeeEn;
  const founded = lang === "zh" ? site.founded : site.foundedEn;

  return (
    <footer className="mt-24 bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* 签名式站点标记 */}
          <div>
            <div className="font-display text-4xl font-bold italic tracking-wide">Halface</div>
            <div className="font-sans mt-2 text-[11px] font-medium tracking-[0.3em] text-white/50">
              {t.footer.subtitle}
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">{t.footer.blurb}</p>
          </div>

          {/* 导航 */}
          <div className="flex gap-12 sm:gap-16">
            <div>
              <div className="font-sans mb-4 text-[11px] font-medium tracking-[0.22em] text-white/40">
                {t.footer.menu}
              </div>
              <ul className="space-y-2.5">
                {footerItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {t.nav[item.id]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-sans mb-4 text-[11px] font-medium tracking-[0.22em] text-white/40">
                {t.footer.contact}
              </div>
              <ul className="space-y-2.5 text-sm text-white/75">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-white/50">{t.footer.mailOnly}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6">
          <p className="font-sans text-[12px] leading-relaxed text-white/40">
            {t.footer.meta(year, committee, founded, members.length)}
          </p>
          <p className="font-sans mt-1.5 text-[12px] leading-relaxed text-white/40">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
