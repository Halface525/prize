import { Link, useLocation } from "react-router";
import { navItems, site } from "../data/site";
import { useI18n } from "../i18n";

/** 半面环形标记：一半藏青，一半金 */
function Mark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#1b2a6b" />
      <path d="M16 1a15 15 0 0 0 0 30z" fill="#c9a961" />
      <circle cx="16" cy="16" r="15" fill="none" stroke="#1b2a6b" strokeWidth="1" />
    </svg>
  );
}

export function PillNav() {
  const { pathname } = useLocation();
  const { lang, toggle, t } = useI18n();
  const current = navItems.find((i) => i.path === pathname)?.id;

  return (
    <nav className="pill-nav">
      <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4">
        {/* 左：标记 + 站名 */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5 pl-1">
          <Mark />
          <span className="hidden leading-none sm:block">
            <span className="font-display block text-[15px] font-bold tracking-wide">
              {lang === "zh" ? site.nameZh : "Halface Prize"}
            </span>
            <span className="font-sans mt-0.5 block text-[7px] font-medium tracking-[0.18em] text-[var(--muted)]">
              {lang === "zh" ? "THE HALFACE PRIZE" : "半面奖"}
            </span>
          </span>
        </Link>

        {/* 中：导航 */}
        <div className="flex items-center gap-0.5 sm:gap-1.5">
          {navItems
            .filter((i) => i.id !== "apply")
            .map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="font-sans rounded-full px-2 py-1.5 text-[12px] transition-colors sm:px-3.5 sm:text-[13px]"
                style={{
                  color: current === item.id ? "var(--ink)" : "var(--muted)",
                  background: current === item.id ? "var(--cream)" : "transparent",
                  fontWeight: current === item.id ? 500 : 400,
                }}
              >
                {t.nav[item.id]}
              </Link>
            ))}
        </div>

        {/* 右：语言切换 + 申请 */}
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={toggle}
            title={t.nav.switchTo}
            className="font-sans rounded-full border px-2.5 py-1.5 text-[11px] transition-colors hover:border-[var(--ink)] sm:px-3"
            style={{ borderColor: "var(--line)", color: "var(--muted)" }}
          >
            {t.short}
          </button>
          <Link to="/apply" className="btn-gold !px-3 !py-1.5 !text-[12px] sm:!px-5">
            {t.nav.apply}
          </Link>
        </div>
      </div>
    </nav>
  );
}
