/**
 * 开奖记录索引。
 *
 * 每周开奖只需两步：
 *   1. 在 public/content/draws/ 下新增一个 <日期>.md（frontmatter 存结构化数据，
 *      正文写「获奖理由」，用公文腔）
 *   2. 在本数组最前面加一行
 *
 * 其余字段（获奖人、领域、奖金）都在 markdown 的 frontmatter 里，不重复维护。
 */

export const draws = [
  {
    id: "2026-09-18",
    period: 1,
    date: "2026-09-18",
    file: "content/draws/2026-09-18.md",
    // 样张：内容为格式示范，不是真实评选结果。页面上会打「样张」标记。
    placeholder: true,
  },
];

/** 最近一期 */
export function latestDraw() {
  return draws[0] ?? null;
}

/** 按期号倒序 */
export function sortedDraws() {
  return [...draws].sort((a, b) => b.period - a.period);
}
