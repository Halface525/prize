export const zh = {
  code: "zh",
  label: "中文",
  short: "中",

  nav: {
    home: "首页",
    domains: "奖项",
    winners: "获奖名单",
    bulletin: "公报",
    committee: "委员会",
    charter: "章程",
    apply: "申请",
    switchTo: "English",
  },

  common: {
    loading: "正在调阅档案…",
    loadFailed: "档案调阅失败",
    all: "全部",
    menu: "菜单",
    close: "关闭",
  },

  home: {
    // 站点标语。sloganLatin 显示的是「另一种语言」的标语，
    // 所以中文页上是 有趣足矣 + Interesting is enough.，英文页反过来。
    slogan: "有趣足矣",
    sloganLatin: "Interesting is enough.",
    heroSubtitle: "奖励日子过得挺好的人、动物、人工智能与器物",

    originEyebrow: "缘起",
    originTitle: "为什么设这个奖",
    origin: `优绩已经很多了。每年都有足够的奖、足够的排名、足够的绩效、足够的「年度最佳」。一个奖励优绩的奖，不缺同行。

所以这个奖不奖励优绩。它奖励有趣。

委员会不定义「有趣」。委员会只说明什么不是：

- 可比较的
- 可积累的
- 可展示的
- 可优化的
- 能写进简历的

委员认为，有趣是唯一无法被优化的品质。你可以刻意少用人工智能，也可以刻意多去食堂吃饭——委员会不核查，也不因此扣分。只是那样做的人，通常不会获奖。

**关于钱。** 奖金全部来自 halface 的个人储蓄。委员会不设基金积累，不作投资运作，每期开奖后账户归零。对此的解释是：钱留在账户里，不会变得更有意思。

**关于委员会。** 本奖由一个人设立，委员会最初也只有一人。一个人反对优绩主义，就像一个人反对天气。`,
    originClosing: "do something interesting.",

    domainsEyebrow: "领域",
    domainsTitle: "七个领域与特别奖",
    domainsDesc:
      "领域为章程级设置，非经章程修改程序不得增减。具体奖项不设限制，由委员会每期开奖时自由创设。",
    viewAllAwards: "查看全部奖项 →",
    latestEyebrow: "最新",
    latestTitle: "最新一期开奖",
    viewAllDraws: "历期开奖档案 →",
    ctaEyebrow: "申请",
    ctaTitle: "本奖采申请制",
    ctaDesc:
      "无需推荐、无需资质、无需缴费。向委员会邮箱发送一封申请邮件即可。委员亦可在无人申请时主动授予。",
    ctaButton: "查看申请格式",
    applyButton: "如何申请",
    charterButton: "阅读章程",
  },

  fund: {
    balanceLabel: "奖金账户当前余额",
    asOf: "截至",
    note1: "每期奖金总额等于开奖时刻账户的全部余额，由当期获奖者平分。",
    note1Strong: "开奖后账户归零。",
    charterRef: "依据章程第二章「奖金」 →",
  },

  countdown: {
    toNext: "距下期评选开始",
    days: "天",
    hours: "时",
    minutes: "分",
    seconds: "秒",
    nextAt: "下期评选开始",
    beijingTime: "（北京时间）",
    judging: "本期评审中",
    judgingNote: "委员会正在评选本期获奖者，结果于评选结束后公示。",
  },

  domains: {
    pageTitle: "奖项",
    title: "七个领域与特别奖",
    desc:
      "领域是章程级设置，非经章程修改程序不得增减。划分依据三条：穷尽性——任何一件生活里的事都能落进去；互斥性——不重叠；抗过时性——一百年后这个领域还成立。",
    covers: "涵盖",
    awardCount: (n) => (n > 0 ? `共 ${n} 项` : "暂无奖项"),
    createdIn: (n) => `创设于第 ${n} 期`,
    noAwards: "本领域尚无奖项。委员会可于任一期开奖时创设。",
    moreAwards: (n) => `另有 ${n} 项`,
    back: "← 返回奖项",
    viewDomain: "查看全部 →",
    awardsCount: "奖项库现有",
    awardsCountNote:
      "本数字只增不减。委员认为必要时可增设奖项，但不会撤销已入库的奖项——撤销会使既往开奖记录失去依据。",
  },

  winners: {
    pageTitle: "获奖名单",
    title: "获奖名单",
    desc:
      "本奖每周五 A 股收盘后开始评选，每次获奖人数不限。开奖记录一经公示不予修改；如确有错误，以「勘误」形式另行列示，不覆盖原文。",
    empty: "尚无开奖记录。",
    count: (n) => `共 ${n} 期`,
    back: "← 返回获奖名单",
    vacancyTitle: "关于空缺",
    vacancyDesc:
      "某期无人申请、或申请不足以构成获奖理由的，委员会可公示该期「空缺」。空缺按期数正常编号，不顺延、不合并。空缺本身即为该期的开奖结果。",
  },

  bulletin: {
    pageTitle: "公报",
    title: "公报",
    desc: "本奖的一切正式文本在此发布：开奖预告、空缺说明、勘误、章程修订记录、委员会声明，以及对获奖者的通讯——包括谈话记录与介绍。",
    filterAll: "全部",
    kindNotice: "公告",
    kindDispatch: "通讯",
    empty: "尚无公报。",
    emptyFiltered: "本类下暂无内容。",
    back: "← 返回公报",
    count: (n) => `共 ${n} 条`,
  },

  draw: {
    period: (n) => `第 ${n} 期`,
    drawnOn: "开奖",
    laureates: "获奖者",
    laureatesCount: (n) => `共 ${n} 名`,
    grounds: "获奖理由",
    placeholder: "样张 · 非真实评选结果",
    vacant: "本期空缺",
    vacantNote: "本期无人获奖。空缺按期数正常编号，不顺延、不合并。",
    pool: "奖金池",
    perWinnerLabel: "每人",
    winnerCountBadge: (n) => `获奖 ${n} 名`,
    viewDetail: "查看详情 →",
    metricDefault: "公示数据",
    winnersCount: (n) => `本期获奖 ${n} 名，每人实得`,
    balanceAfter: "开奖后账户余额",
  },

  committee: {
    pageTitle: "委员会",
    title: "半面奖评选委员会",
    desc: "评选委员会是本奖唯一的评选机构。它决定谁获奖、撰写获奖理由，并在无人申请时主动授予。委员会自行决定其委员人数。",
    historyTitle: "沿革",
    markTitle: "标识",
    markBody: "半面奖与评选委员会共用同一标识：一个圆，左半为金，右半为藏青。\n\n「半面」意指本奖只看事情的一半——不奖励优绩，只奖励有趣。",
    markGold: "金",
    markNavy: "藏青",
    membersTitle: "现任委员",
    memberCount: (n) => `共 ${n} 人`,
    termLabel: "任期",
    sinceLabel: "自",
    workTitle: "委员会如何工作",
    workBody: `委员会是本奖唯一的评选机构。每期开奖，它把申请归入七个领域之一，决定谁获奖、谁不获奖，并撰写获奖理由。无人申请时，它有权依据公开信息主动授予。

奖项不设固定清单。委员会可在任一期创设新奖项，已创设的奖项列入奖项库，供后续各期沿用，且一经入库不得撤销。

委员无报酬。奖金全部来源于设立人的个人储蓄，本奖不设基金积累，不作投资运作，不接受任何社会捐助，亦无经费可供支取。

委员不得以「半面奖」名义收取款项、募集资金，或作出任何财务承诺。

委员会不公布评选过程，亦无义务说明任何决定的理由。`,
    contactTitle: "联系",
    contactNote: "申请与异议均致此邮箱。",
  },

  notFound: {
    code: "404",
    title: "未找到该页",
    desc: "本页不存在，或曾被删除。章程第十七条只保证奖项一经入库不得撤销，不保证网页。",
    back: "返回首页",
  },

  charter: {
    pageTitle: "章程",
    title: "半面奖章程",
    desc: (committee) => `本章程由${committee}制定并解释。`,
    footnote:
      "对本章程条文的解释，以委员会的理解为准。委员会的理解可能随时间变化，但不溯及既往开奖记录。",
    refArticle: (n) => `章程第 ${n} 条 →`,
  },

  apply: {
    pageTitle: "申请",
    title: "申请",
    desc:
      "本奖采申请制。无需推荐、无需资质、无需缴纳任何费用。向委员会邮箱发送一封申请邮件即可。委员亦可在无人申请时主动授予。",
    emailLabel: "委员会邮箱",
    openMail: "用邮件客户端打开",
    templateEyebrow: "模板",
    templateTitle: "申请邮件格式",
    copy: "复制模板",
    copied: "已复制",
    copyFailed: "复制失败，请手动选取",
    templateNote:
      "模板仅供参考。任何语言、任何格式、任何长度的邮件均被受理，委员会不因格式问题拒绝申请。",
    notice: `## 申请须知

**一、申请免费。** 本奖不收取任何费用，亦不要求申请人支付邮费、材料费、评审费或任何名目的款项。

**二、可以多次申请。** 同一事由可在不同期重复申请。未获奖不另行通知，亦不构成对后续申请的妨碍。

**三、数据自查。** 本奖不设第三方审计。申请人所报数据由申请人自行认定，委员会不作核实，亦不承担核实义务。

**四、可自行申请，亦可代他人申请。** 为动物、器物或人工智能申请时，请由了解其情况的人代为陈述。

**五、委员会可主动授予。** 无人申请时，委员会有权依据公开信息主动授予奖项。

**六、实名与化名。** 获奖者默认以申请时所填称谓公示。选择「仅以化名公示」的，委员会不公开其真实身份。

**七、撤回。** 申请人在开奖前可随时来信撤回申请。开奖后不予撤回——此时记录已进入档案。`,
    noDonationTitle: "不接受捐助",
    noDonationBefore: "奖金全部来源于 halface 的个人储蓄。本奖",
    noDonationStrong: "不接受任何社会捐助",
    noDonationAfter:
      "，亦不设立任何收款渠道。任何以「半面奖」名义募集资金的行为均与本奖无关。",
  },

  footer: {
    subtitle: "半面奖 · THE HALFACE PRIZE",
    blurb: "由 halface 个人设立。不隶属于任何政府、企业、学校或国际组织。",
    menu: "目录",
    contact: "联系",
    mailOnly: "申请仅受理邮件",
    meta: (year, committee, founded, size) =>
      `© ${year} ${committee} · 设立于 ${founded} · 委员 ${size} 人`,
    disclaimer: "本奖为荣誉性奖励，不构成学术评价、职业评价或道德评价。",
  },

  emailTemplate: `主题：【半面奖申请】＿＿＿（申请人称谓）

半面奖评选委员会：

本人＿＿＿，依据《半面奖章程》第四章，申请半面奖。

一、申请人称谓
＿＿＿（可填真名、化名或机构名；动物与器物请填其通用称呼）

二、申请奖项
＿＿＿（如不确定可留空，由委员会归类）

三、事由
（请具体陈述。委员会不设格式要求，但陈述越具体，归类越准确。）

四、可公示的数据
（请提供一项可用于公示的数据，例如次数、时长、年数、体重等。
数据不必精确，但须为申请人真实认定。）

五、公示方式
□ 同意实名公示
□ 仅以化名公示

六、补充说明
（可留空）

此致

＿＿＿
＿＿＿＿ 年 ＿＿ 月 ＿＿ 日`,
};
