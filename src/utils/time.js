/** 北京时间固定偏移。A 股收盘是 UTC+8 的 15:00，不随访客时区变化。 */
const CST_OFFSET_MS = 8 * 60 * 60 * 1000;

const WEEKDAY_CN = ["日", "一", "二", "三", "四", "五", "六"];

const MONTH_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAY_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/**
 * 下一个开奖时刻（每周五 15:00 北京时间）的真实 epoch 毫秒。
 *
 * 实现要点：把真实时刻平移到「北京墙上时间」后再用 getUTC* 读取，
 * 读出来的就是北京时间；算完再平移回去。这样无论访客在哪个时区，
 * 倒计时都指向同一个物理时刻。
 */
export function nextDrawTime(nowMs = Date.now()) {
  const shifted = new Date(nowMs + CST_OFFSET_MS);
  const dow = shifted.getUTCDay(); // 0=周日 … 5=周五
  const hour = shifted.getUTCHours();

  let addDays = (5 - dow + 7) % 7;
  // 今天就是周五但已过 15:00 —— 顺延到下周
  if (addDays === 0 && hour >= 15) addDays = 7;

  const targetShifted = Date.UTC(
    shifted.getUTCFullYear(),
    shifted.getUTCMonth(),
    shifted.getUTCDate() + addDays,
    15,
    0,
    0,
    0
  );

  return targetShifted - CST_OFFSET_MS;
}

/** 拆成天/时/分/秒 */
export function splitDuration(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

/** 2026 年 9 月 18 日（星期五）15:00 ／ Friday, 18 September 2026, 15:00 */
export function formatDrawTime(ms, lang = "zh") {
  const d = new Date(ms + CST_OFFSET_MS);
  if (lang === "en") {
    return (
      `${WEEKDAY_EN[d.getUTCDay()]}, ${d.getUTCDate()} ${MONTH_EN[d.getUTCMonth()]} ` +
      `${d.getUTCFullYear()}, 15:00`
    );
  }
  return (
    `${d.getUTCFullYear()} 年 ${d.getUTCMonth() + 1} 月 ${d.getUTCDate()} 日` +
    `（星期${WEEKDAY_CN[d.getUTCDay()]}）15:00`
  );
}

/** "2026-09-18" → 2026 年 9 月 18 日 ／ 18 September 2026 */
export function formatDate(iso, lang = "zh") {
  const [y, m, d] = String(iso).split("-").map(Number);
  if (!y || !m || !d) return iso;
  if (lang === "en") return `${d} ${MONTH_EN[m - 1]} ${y}`;
  return `${y} 年 ${m} 月 ${d} 日`;
}
