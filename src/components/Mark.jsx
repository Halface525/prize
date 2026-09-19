/**
 * 半面标记：一个圆，左半为金，右半为藏青。
 *
 * 这是本站两个主题色被设计成一对的**本来面目** —— 别在别处另画一个圆。
 * 导航、委员会页、开奖记录都用这一个。
 *
 * vectorEffect="non-scaling-stroke" 让外圈永远是 1 个屏幕像素，
 * 不管 size 是 20 还是 92 —— 否则放大后那道圈会跟着变粗。
 */
export function Mark({ size = 30, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
    >
      <circle cx="16" cy="16" r="15" fill="#1b2a6b" />
      <path d="M16 1a15 15 0 0 0 0 30z" fill="#c9a961" />
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="none"
        stroke="#1b2a6b"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
