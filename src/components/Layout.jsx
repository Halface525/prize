import { useEffect } from "react";
import { useLocation } from "react-router";
import { PillNav } from "./PillNav";
import { SiteFooter } from "./SiteFooter";

export function Layout({ children }) {
  const { pathname } = useLocation();

  // 路由切换后回到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <PillNav />
      {/* 顶部留出胶囊导航的高度 */}
      <main className="flex-1 pt-24 sm:pt-28">{children}</main>
      <SiteFooter />
    </div>
  );
}
