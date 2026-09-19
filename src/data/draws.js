// 显式写 .js 扩展名：Vite 不要求，但 Node 的 ESM 解析器要求。
// 数据层保持「纯 JS、可被 Node 直接 import」，才能脱离构建单独跑校验脚本。
import { domains } from "./domains.js";

/**
 * 开奖记录。
 *
 * 元数据（期次、日期、奖金、获奖人）全部放在这里，markdown 只写正文——「获奖理由」。
 * 这么分是因为列表页要显示获奖人，若获奖人放在 markdown 的 frontmatter 里，
 * 列表页就得把每一期的 md 都拉一遍；期数一多就废了。
 * 公报（src/data/bulletin.js）用的是同一套存法。
 *
 * 新增一期：
 *   1. 在 public/content/draws/ 下加 <日期>.md 和 <日期>.en.md（正文，无需 frontmatter）
 *   2. 在本数组最前面加一项
 *   3. 改 src/data/fund.js 的 balance —— 开奖后归零（章程第十一条）
 */

export const draws = [
  {
    id: "2026-09-19",
    period: 1,
    date: "2026-09-19",

    pool: 1247.3,
    perWinner: 1247.3,
    balanceAfter: 0,

    file: "content/draws/2026-09-19.md",

    // 无人获奖（空缺）时留空数组即可，卡片和详情页都会显示「本期空缺」。
    //
    // domainId 必须是 domains.js 里的 id——这是外键，不是显示文本，
    // 领域名由 domains.js 提供。别在这里硬编码中文领域名，改个名历史记录就烂了。
    // award 则相反，是当时实际授予的奖项名，照实记录（章程第三十三条：记录不予修改）。
    winners: [
      {
        name: "halface",
        domainId: "labor",
        award: "无报酬职务奖",
        awardEn: "Unpaid Post Prize",
        metricLabel: "该职务所得报酬",
        metricLabelEn: "Remuneration from the post",
        metric: "¥0",
      },
    ],
  },
];

/** 按期号倒序（最新的在前） */
export function sortedDraws() {
  return [...draws].sort((a, b) => b.period - a.period);
}

/** 最近一期 */
export function latestDraw() {
  return sortedDraws()[0] ?? null;
}

/** 按 id 取一期 */
export function getDraw(id) {
  return draws.find((d) => d.id === id);
}

/** 获奖人数 */
export function winnerCount(draw) {
  return Array.isArray(draw?.winners) ? draw.winners.length : 0;
}

/** 出过获奖者的领域（按 domains.js 的顺序），给筛选按钮用 */
export function domainsWithLaureates() {
  const ids = new Set();
  for (const d of draws) {
    for (const w of d.winners ?? []) {
      if (w.domainId) ids.add(w.domainId);
    }
  }
  return domains.filter((d) => ids.has(d.id));
}

/** 按领域筛选开奖记录。domainId 为 null 时返回全部。 */
export function drawsByDomain(domainId = null) {
  if (!domainId) return sortedDraws();
  return sortedDraws().filter((d) => (d.winners ?? []).some((w) => w.domainId === domainId));
}
