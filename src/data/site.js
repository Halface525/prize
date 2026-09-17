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

/** 导航项。顺序即展示顺序。label 由 i18n 字典提供。 */
export const navItems = [
  { id: "home", path: "/" },
  { id: "domains", path: "/domains" },
  { id: "winners", path: "/winners" },
  { id: "charter", path: "/charter" },
  { id: "apply", path: "/apply" },
];
