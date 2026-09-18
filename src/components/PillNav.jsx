import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { footerItems, navItems, site } from "../data/site";
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

function MenuIcon({ open }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      {open ? (
        <path
          d="M3.5 3.5 L12.5 12.5 M12.5 3.5 L3.5 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M2.5 4.5 H13.5 M2.5 8 H13.5 M2.5 11.5 H13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function PillNav() {
  const { pathname } = useLocation();
  const { lang, toggle, t } = useI18n();
  const [open, setOpen] = useState(false);

  const current = navItems.find((i) => i.path === pathname)?.id;

  // 换页就收起菜单，否则点完链接菜单还挂在那儿
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // 窄屏菜单里连章程一起列出来 —— 章程不在主导航里，
  // 移动端用户不会为了找它一路滚到页脚
  const menuItems = footerItems.filter((i) => i.id !== "apply");

  return (
    <nav className="pill-nav">
      <div className="flex items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4">
        {/* 左：标记 + 站名（站名窄屏隐藏，腾地方给右侧） */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
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

        {/* 中：导航。窄屏收进菜单 —— 英文标签比中文宽得多
            （Laureates / Gazette 尤其长），硬挤会把胶囊撑破。
            md 断点是留了余量的：英文字符串比中文难估宽，
            宁可在 640–768 这段用汉堡菜单，也不要赌像素。
            no-scrollbar 是兜底：万一还是宽了，变成可横向滚动，
            而不是撑破布局。 */}
        <div className="no-scrollbar hidden items-center gap-1 overflow-x-auto md:flex lg:gap-1.5">
          {navItems
            .filter((i) => i.id !== "apply")
            .map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="font-sans shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] transition-colors lg:px-3.5"
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

        {/* 右：语言 + 申请 + 窄屏菜单键 */}
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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.common.close : t.common.menu}
            aria-expanded={open}
            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border transition-colors md:hidden"
            style={{ borderColor: "var(--line)", color: "var(--ink)" }}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {/* 窄屏展开的菜单：挂在胶囊下方，胶囊本身保持药丸形状 */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border shadow-lg md:hidden"
          style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.97)" }}
        >
          {menuItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className="block border-t px-5 py-3 text-[14px] transition-colors first:border-t-0"
                style={{
                  borderColor: "var(--line)",
                  color: active ? "var(--ink)" : "var(--muted)",
                  fontWeight: active ? 500 : 400,
                }}
              >
                {t.nav[item.id]}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
