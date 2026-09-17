export const zh = {
  code: "zh",
  label: "中文",
  short: "中",

  nav: {
    home: "首页",
    domains: "奖项",
    winners: "获奖名单",
    charter: "章程",
    apply: "申请",
    switchTo: "English",
  },

  common: {
    loading: "正在调阅档案…",
    loadFailed: "档案调阅失败",
    viewAll: "查看全部",
    backTop: "回到顶部",
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

**关于委员会。** 委员会现有委员一人。一个人反对优绩主义，就像一个人反对天气。`,
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
    toNext: "距下期开奖",
    days: "天",
    hours: "时",
    minutes: "分",
    seconds: "秒",
    nextAt: "下期开奖",
    beijingTime: "（北京时间）",
  },

  domains: {
    pageTitle: "奖项",
    title: "七个领域与特别奖",
    desc:
      "领域是章程级设置，非经章程修改程序不得增减。划分依据三条：穷尽性——任何一件生活里的事都能落进去；互斥性——不重叠；抗过时性——一百年后这个领域还成立。",
    covers: "涵盖",
    special: "特别奖",
    awardsCount: "奖项库现有",
    awardsCountNote:
      "本数字只增不减。委员认为必要时可增设奖项，但不会撤销已入库的奖项——撤销会使既往开奖记录失去依据。",
  },

  winners: {
    pageTitle: "获奖名单",
    title: "获奖名单",
    desc:
      "本奖每周五 A 股收盘后开奖，每次获奖人数不限。开奖记录一经公示不予修改；如确有错误，以「勘误」形式另行列示，不覆盖原文。",
    empty: "尚无开奖记录。",
    vacancyTitle: "关于空缺",
    vacancyDesc:
      "某期无人申请、或申请不足以构成获奖理由的，委员会可公示该期「空缺」。空缺按期数正常编号，不顺延、不合并。空缺本身即为该期的开奖结果。",
  },

  draw: {
    period: (n) => `第 ${n} 期`,
    drawnOn: "开奖",
    placeholder: "样张 · 非真实评选结果",
    pool: "奖金池",
    metricDefault: "公示数据",
    winnersCount: (n) => `本期获奖 ${n} 名，每人实得`,
    balanceAfter: "开奖后账户余额",
  },

  charter: {
    pageTitle: "章程",
    title: "半面奖章程",
    desc: (committee) => `本章程由${committee}制定并解释。`,
    footnote:
      "对本章程条文的解释，以委员会的理解为准。委员会的理解可能随时间变化，但不溯及既往开奖记录。",
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
