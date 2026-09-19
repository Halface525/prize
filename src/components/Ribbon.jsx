import { useId } from "react";

/**
 * 金色渐变丝带。站点的视觉锚点。
 *
 * 它只出现在**页面级的「时刻」**上：hero、404、CTA 区块、空状态。
 *
 * ⚠️ 不要铺满全站。它是粗的、有方向的、末端还带着一颗星 —— 这是插图，不是底纹。
 * 压在正文下面会跟文字抢注意力，而且因为斜向流动，会造成深浅不均的底色，
 * 文字对比度跟着忽高忽低。要"官方文书"那种底纹，得另做（细密、重复、无方向）。
 *
 * useId 是必需的：同一页可能出现不止一条丝带，写死 id 会重复，
 * 后面的实例会引用到第一个实例的渐变。冒号要剔掉，ID 里不带它更稳。
 */
export function Ribbon({ className = "hero-ribbon" }) {
  const uid = useId().replace(/:/g, "");
  const gradA = `ribbon-a-${uid}`;
  const gradB = `ribbon-b-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradA} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0c894" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#c9a961" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#eddfba" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={gradB} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#d4b87e" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#efe3c4" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* 主飘带 */}
      <path
        d="M-60 190 C 150 90, 300 320, 520 240 S 840 70, 1060 175 S 1240 250, 1300 200"
        fill="none"
        stroke={`url(#${gradA})`}
        strokeWidth="52"
        strokeLinecap="round"
      />
      {/* 副飘带 */}
      <path
        d="M-60 250 C 180 165, 330 370, 570 290 S 880 130, 1090 225 S 1250 285, 1300 250"
        fill="none"
        stroke={`url(#${gradB})`}
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
          fill={`url(#${gradA})`}
          transform="rotate(45)"
        />
      </g>
    </svg>
  );
}
