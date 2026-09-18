/**
 * 公报。
 *
 * 这里放「关于这个奖本身」的一切正式文本，与「获奖名单」分工明确：
 *   获奖名单 = 结果（谁赢了、赢了什么、获奖理由）
 *   公报     = 关于奖的事（开奖预告、空缺说明、勘误、章程修订、委员会声明、谈话记录）
 *
 * 开奖内容只在获奖名单出现，公报不重复。两个栏目一旦互相重复，就都会变得可有可无。
 *
 * 与 draws.js 的差别：开奖记录的获奖人数据只有详情页用得上，所以放 markdown 的
 * frontmatter；公报的元数据全部是列表页就要用的，所以全放这里，markdown 只写正文。
 *
 * 新增一条：
 *   1. 在 public/content/bulletin/ 下加 <id>.md 和 <id>.en.md（正文，无需 frontmatter）
 *   2. 在本数组最前面加一项
 */

/** kind: "notice"（公告） | "dispatch"（通讯，含谈话记录与介绍） */
export const bulletins = [
  {
    id: "2026-09-18-first-drawing",
    kind: "notice",
    date: "2026-09-18",
    title: "第 1 期开奖预告",
    titleEn: "Notice: the first drawing",
    file: "content/bulletin/2026-09-18-first-drawing.md",
  },
  {
    id: "2026-09-17-established",
    kind: "notice",
    date: "2026-09-17",
    title: "本奖设立公告",
    titleEn: "Notice of establishment",
    file: "content/bulletin/2026-09-17-established.md",
  },
];

export const BULLETIN_KINDS = ["notice", "dispatch"];

/** 按日期倒序，最新的在前 */
export function sortedBulletins(kind = null) {
  const list = kind ? bulletins.filter((b) => b.kind === kind) : bulletins;
  return [...list].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 按 id 取一条 */
export function getBulletin(id) {
  return bulletins.find((b) => b.id === id);
}
