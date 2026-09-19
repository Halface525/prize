/** 站点级常量：改这里就够了，不用翻组件 */
export const site = {
  nameZh: "半面奖",
  nameEn: "The Halface Prize",
  email: "halface16@gmail.com",
  committee: "半面奖评选委员会",
  committeeEn: "Halface Prize Selection Committee",
  // 委员人数不在这里，也不在任何写死的地方 —— 从 src/data/committee.js 的名单现算。
  // 章程第五条也是同样的道理：人数随时会变，耐久文件里不该有它。
  founded: "2026 年 9 月",
  foundedEn: "September 2026",

  // 每周周期的判定不在这里，在 src/utils/time.js：
  //   nextDrawTime()  下一个评选开始时刻（周五 15:00 北京时间）
  //   drawPhase()     现在处于「评审中」还是「倒计时」
  // 时刻是章程第二十六条定死的（每周五 A 股收市后开始评选），不做成配置项 ——
  // 做成配置项只会让人以为改了有用。
};

/**
 * 主导航。顺序即展示顺序，label 由 i18n 字典提供（t.nav[item.id]）。
 *
 * 章程不进导航 —— 它是参考文档，跟「谁在办这个奖」性质不同，放页脚。
 * 委员会进导航 —— 它是官网的一级内容。
 *
 * 胶囊导航会滤掉 apply（它是右侧那个金色按钮），所以实际显示五项。
 * md（768px）以上横排，以下收进汉堡菜单。
 * 五项英文标签（Home / Prizes / Laureates / Gazette / Committee）
 * 在 768px 下约 666px，胶囊 728px —— 余量 62px，偏紧。
 * 导航容器有 overflow-x-auto 兜底，真挤了会横向滚动而不是撑破布局；
 * 若实测英文下确实挤，把这个断点从 md 提到 lg 即可（PillNav.jsx 里的 md: 前缀）。
 */
export const navItems = [
  { id: "home", path: "/" },
  { id: "domains", path: "/domains" },
  { id: "winners", path: "/winners" },
  { id: "bulletin", path: "/bulletin" },
  { id: "committee", path: "/committee" },
  { id: "apply", path: "/apply" },
];

/** 只出现在页脚、不占导航格的页面 */
export const footerOnlyItems = [{ id: "charter", path: "/charter" }];

/** 页脚完整目录 */
export const footerItems = [...navItems, ...footerOnlyItems];
