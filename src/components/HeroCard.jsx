/**
 * 大圆角 hero 卡片。
 *
 * 金色飘带是内联 SVG 占位——参考站用的是一张纸纹理 + 飘带位图。
 * 若要更接近参考站，把 <Ribbon /> 换成 <img src="./hero-ribbon.png" /> 即可。
 */

function Ribbon() {
  return (
    <svg
      className="hero-ribbon"
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ribbonA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0c894" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#c9a961" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#eddfba" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="ribbonB" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#d4b87e" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#efe3c4" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* 主飘带 */}
      <path
        d="M-60 190 C 150 90, 300 320, 520 240 S 840 70, 1060 175 S 1240 250, 1300 200"
        fill="none"
        stroke="url(#ribbonA)"
        strokeWidth="52"
        strokeLinecap="round"
      />
      {/* 副飘带 */}
      <path
        d="M-60 250 C 180 165, 330 370, 570 290 S 880 130, 1090 225 S 1250 285, 1300 250"
        fill="none"
        stroke="url(#ribbonB)"
        strokeWidth="22"
        strokeLinecap="round"
      />
      {/* 收尾的细线 */}
      <path
        d="M-60 292 C 200 220, 360 408, 620 335 S 900 195, 1120 275"
        fill="none"
        stroke="#dcc79a"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* 八角星 */}
      <g transform="translate(1046 118) scale(1.15)" opacity="0.85">
        <path
          d="M0 -38 L8.5 -8.5 L38 0 L8.5 8.5 L0 38 L-8.5 8.5 L-38 0 L-8.5 -8.5 Z"
          fill="#e2cd9d"
        />
        <path
          d="M0 -38 L8.5 -8.5 L38 0 L8.5 8.5 L0 38 L-8.5 8.5 L-38 0 L-8.5 -8.5 Z"
          fill="url(#ribbonA)"
          transform="rotate(45)"
        />
      </g>
    </svg>
  );
}

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
        {children && <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </div>
    </div>
  );
}
