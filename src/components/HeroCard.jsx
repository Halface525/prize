import { Ribbon } from "./Ribbon";

/**
 * 大圆角 hero 卡片。首页与 404 页共用。
 *
 * 金色飘带是内联 SVG 占位——参考站用的是一张纸纹理 + 飘带位图。
 * 若要更接近参考站，把 <Ribbon /> 换成 <img src="./hero-ribbon.png" /> 即可。
 */
export function HeroCard({ eyebrow, title, latin, subtitle, children }) {
  return (
    <div className="hero-card">
      <Ribbon />
      <div className="relative">
        {eyebrow && (
          <div className="eyebrow mb-5" style={{ color: "var(--gold)" }}>
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-[2.75rem] font-bold leading-[1.1] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {latin && (
          <p className="font-display mt-5 text-lg italic text-[var(--muted)] sm:text-xl">{latin}</p>
        )}
        {subtitle && (
          <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{children}</div>
        )}
      </div>
    </div>
  );
}
