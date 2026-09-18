/** 站点级常量：改这里就够了，不用翻组件 */
export const site = {
  nameZh: "半面奖",
  nameEn: "The Halface Prize",
  email: "halface16@gmail.com",
  committee: "半面奖评选委员会",
  committeeEn: "Halface Prize Selection Committee",
  committeeSize: 1,
  founded: "2026 年 9 月",
  foundedEn: "September 2026",

  // 开奖时刻：每周五 A 股收盘后，固定北京时间（UTC+8）15:00。
  // 注意：必须按 UTC+8 计算，不能跟随访客本地时区。
  drawWeekday: 5,
  drawHourCST: 15,
};

/**
 * 主导航。顺序即展示顺序，label 由 i18n 字典提供（t.nav[item.id]）。
 *
 * 导航栏是全站最贵的一块地，只给「活的」内容。
 * 章程是静态文档，退到页脚和首页按钮；公报每周都有新的，占这一格。
 * 胶囊导航会滤掉 apply（它是右侧那个金色按钮），所以实际显示四项——
 * 窄屏下约 300px，375px 屏幕刚够。别再往这里加第五项。
 */
export const navItems = [
  { id: "home", path: "/" },
  { id: "domains", path: "/domains" },
  { id: "winners", path: "/winners" },
  { id: "bulletin", path: "/bulletin" },
  { id: "apply", path: "/apply" },
];

/** 只出现在页脚、不占导航格的页面 */
export const footerOnlyItems = [{ id: "charter", path: "/charter" }];

/** 页脚完整目录 */
export const footerItems = [...navItems, ...footerOnlyItems];
