/**
 * 奖项库。
 *
 * 具体奖项不设限制：委员会每期开奖时可自由创设新奖项，
 * 只要它能归入某个领域。已创设的奖项列入本库，供后续各期沿用。
 *
 * 本库只会变长。它越来越长、越来越怪，是本奖的正常状态。
 *
 * createdIn 记「创设于第几期」。**省略表示建库时已有**——
 * 那批是 2026 年 9 月建库时一并定下的，不归属于任何一期。
 */

export const awards = [
  // ── 一、身体 ─────────────────────────────────────
  {
    id: "sleep-enough",
    domain: "body",
    name: "睡眠充足奖",
    nameEn: "Adequate Sleep Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "学期内 22:00 前入睡天数最多者。",
    criterionEn: "Most nights asleep before 22:00 within a term.",
  },
  {
    id: "canteen-most",
    domain: "body",
    name: "食堂就餐次数最多奖",
    nameEn: "Most Canteen Meals Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "在电子科技大学食堂用餐次数最多者。",
    criterionEn: "The most meals eaten in the canteens of UESTC.",
  },
  {
    id: "clean-plate",
    domain: "body",
    name: "光盘奖",
    nameEn: "Clean Plate Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "全学期剩饭总量最少者。",
    criterionEn: "Least food left uneaten over a full term.",
  },
  {
    id: "same-dish",
    domain: "body",
    name: "窗口忠诚奖",
    nameEn: "Loyalty to One Counter Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "连续在同一窗口食用同一道菜的期数最多者。",
    criterionEn: "Most consecutive drawings ordering the same dish from the same counter.",
  },

  // ── 二、心智 ─────────────────────────────────────
  {
    id: "screen-least",
    domain: "mind",
    name: "屏幕时间最少奖",
    nameEn: "Least Screen Time Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "在校大学生中日均屏幕使用时间最短者。",
    criterionEn: "Shortest average daily screen time among enrolled university students.",
  },
  {
    id: "cleanest-textbook",
    domain: "mind",
    name: "课本最干净奖",
    nameEn: "Cleanest Textbook Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "所用课本上书写痕迹最少者。",
    criterionEn: "Fewest marks of any kind written in one's own textbooks.",
  },
  {
    id: "lowest-attendance",
    domain: "mind",
    name: "出勤率最低而绩点最高奖",
    nameEn: "Lowest Attendance, Highest GPA Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "出勤率与绩点之差最大者。",
    criterionEn: "The largest gap between attendance rate and grade point average.",
  },

  // ── 三、劳作 ─────────────────────────────────────
  {
    id: "least-ai",
    domain: "labor",
    name: "最低人工智能依赖奖",
    nameEn: "Least Reliance on AI Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "在互联网行业从事开发工作，人工智能工具使用率最低者。",
    criterionEn:
      "The lowest rate of AI tool use among developers working in the internet industry.",
  },
  {
    id: "unchanged-toolchain",
    domain: "labor",
    name: "最久未更换工作方式奖",
    nameEn: "Longest Unchanged Toolchain Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "连续使用同一套工具链而未曾更换的年数最长者。",
    criterionEn: "Most consecutive years using one toolchain without change.",
  },
  {
    id: "unpaid-post",
    domain: "labor",
    name: "无报酬职务奖",
    nameEn: "Unpaid Post Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "担任不支付报酬的职务，且该职务由本人设立者。",
    criterionEn: "Holding an unpaid post that the holder established.",
    createdIn: 1,
  },

  // ── 四、关系 ─────────────────────────────────────
  {
    id: "dorm-peace",
    domain: "relations",
    name: "宿舍和平奖",
    nameEn: "Dormitory Peace Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "在共同居住期间从未与室友发生争执者。",
    criterionEn: "Never once quarrelled with a roommate while sharing a room.",
  },
  {
    id: "art-of-refusal",
    domain: "relations",
    name: "拒绝艺术奖",
    nameEn: "Art of Refusal Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "一年内成功拒绝他人请求次数最多者。",
    criterionEn: "Most requests from others successfully declined within one year.",
  },
  {
    id: "silent-patron",
    domain: "relations",
    name: "沉默赞助人奖",
    nameEn: "Silent Patron Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "从不发布动态而为所有人点赞者。",
    criterionEn: "Never posts, yet likes everyone's posts.",
  },

  // ── 五、表达 ─────────────────────────────────────
  {
    id: "longest-thanks",
    domain: "expression",
    name: "致谢最长奖",
    nameEn: "Longest Acknowledgements Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "学位论文致谢中感谢人数最多者。",
    criterionEn: "Most people thanked in the acknowledgements of a thesis.",
  },
  {
    id: "politest-note",
    domain: "expression",
    name: "外卖备注最礼貌奖",
    nameEn: "Politest Delivery Note Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "外卖订单备注文本中礼貌用语密度最高者。",
    criterionEn: "Highest density of courteous phrasing in food-delivery order notes.",
  },
  {
    id: "read-no-reply",
    domain: "expression",
    name: "已读不回而关系最好奖",
    nameEn: "Read but Unreplied, Still Best Friends Prize",
    subject: "人",
    subjectEn: "Person",
    criterion: "平均回复时长最长而人际关系未受影响者。",
    criterionEn: "Longest average reply time, with relationships unimpaired.",
  },

  // ── 六、器物 ─────────────────────────────────────
  {
    id: "longest-service",
    domain: "objects",
    name: "服役最久奖",
    nameEn: "Longest Service Prize",
    subject: "器物",
    subjectEn: "Object",
    criterion: "仍在正常使用的键鼠、手机或其它外设中，连续服役时间最长者。",
    criterionEn:
      "Longest continuous service among keyboards, mice, phones and peripherals still in normal use.",
  },
  {
    id: "never-swollen",
    domain: "objects",
    name: "从未鼓包奖",
    nameEn: "Never Swollen Prize",
    subject: "器物",
    subjectEn: "Object",
    criterion: "历经完整生命周期而从未发生鼓包的电池。",
    criterionEn: "A battery that completed a full service life without ever swelling.",
  },
  {
    id: "lost-most-card",
    domain: "objects",
    name: "校园卡遗失次数最多奖",
    nameEn: "Most Frequently Lost Campus Card Prize",
    subject: "器物",
    subjectEn: "Object",
    criterion: "本奖项颁给校园卡本身，而非其持有人。",
    criterionEn: "Awarded to the card itself, not to its holder.",
  },
  {
    id: "uncollected-parcel",
    domain: "objects",
    name: "延迟满足奖",
    nameEn: "Deferred Gratification Prize",
    subject: "器物",
    subjectEn: "Object",
    criterion: "在快递柜中滞留时间最长的包裹。",
    criterionEn: "The parcel that sat longest in a delivery locker.",
  },

  // ── 七、非人 ─────────────────────────────────────
  {
    id: "campus-cat-attendance",
    domain: "nonhuman",
    name: "校园猫全勤奖",
    nameEn: "Perfect Attendance Prize, Campus Cat",
    subject: "动物",
    subjectEn: "Animal",
    criterion: "从未选修任何课程而从不缺席者。",
    criterionEn: "Enrolled in nothing, absent from nothing.",
  },
  {
    id: "self-reliant",
    domain: "nonhuman",
    name: "自力更生奖",
    nameEn: "Self-Reliance Prize",
    subject: "动物",
    subjectEn: "Animal",
    criterion: "从未接受投喂而体型最大者。",
    criterionEn: "Largest body mass, never once fed by anyone.",
  },
  {
    id: "least-ai-ai",
    domain: "nonhuman",
    name: "最低人工智能使用率奖",
    nameEn: "Lowest Rate of AI Use Prize",
    subject: "人工智能",
    subjectEn: "AI",
    criterion: "本奖项颁给人工智能。本奖项的获奖者从未使用过人工智能。",
    criterionEn:
      "Awarded to an artificial intelligence. The recipient has never used an artificial intelligence.",
  },
  {
    id: "i-dont-know",
    domain: "nonhuman",
    name: "最常回答「我不知道」奖",
    nameEn: "Most Frequent “I Don't Know” Prize",
    subject: "人工智能",
    subjectEn: "AI",
    criterion: "在被询问时回答「我不知道」的比率最高者。",
    criterionEn: "The highest rate of answering “I don't know.”",
  },
  {
    id: "zero-hallucination",
    domain: "nonhuman",
    name: "零幻觉奖",
    nameEn: "Zero Hallucination Prize",
    subject: "人工智能",
    subjectEn: "AI",
    criterion: "全年未产生任何幻觉者。本奖项大概率长期空缺。",
    criterionEn: "No hallucination of any kind for a full year. Likely to remain vacant.",
  },
];

/** 取某领域下的奖项 */
export function awardsOfDomain(domainId) {
  return awards.filter((a) => a.domain === domainId);
}
