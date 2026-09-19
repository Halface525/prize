/**
 * 评选委员会。
 *
 * 章程第五条**不写委员人数** —— 人数随时会变，章程是耐久文件，写进去就得跟着改。
 * 所以名单以本文件为准，章程只规定「委员会自行决定其委员人数」。
 *
 * 委员增减时：改本文件 → 在公报发一条通知。
 *
 * ⚠️ 这里的 name / nameEn 是**对外公示的称谓**，由委员本人决定。
 * 章程第三十四条对委员同样适用：选择仅以化名公示的，本奖不公开其真实身份。
 * **不要在站点任何地方写入委员的真名**，包括注释、commit message 和公报。
 */

export const committee = [
  {
    id: "halface",
    name: "halface",
    role: "设立人 · 委员",
    roleEn: "Founder · Member",
    term: "长期",
    termEn: "Indefinite",
    since: "2026 年 9 月 17 日",
    sinceEn: "17 September 2026",
  },
  {
    id: "anonymous",
    name: "匿名者",
    nameEn: "Anonymous",
    role: "委员",
    roleEn: "Member",
    term: "长期",
    termEn: "Indefinite",
    since: "2026 年 9 月 19 日",
    sinceEn: "19 September 2026",
  },
  {
    id: "hajixian",
    name: "哈基仙",
    nameEn: "Hajixian",
    role: "委员",
    roleEn: "Member",
    term: "长期",
    termEn: "Indefinite",
    since: "2026 年 9 月 19 日",
    sinceEn: "19 September 2026",
  },
];

/**
 * 委员会沿革。只记组成与制度上的变更，不记开奖结果 —— 那是「获奖名单」的事。
 * 新条目加在**末尾**（这里按时间正序，跟公报的倒序相反：读史是顺着读的）。
 */
export const history = [
  {
    date: "2026-09-17",
    zh: "半面奖设立。评选委员会同时设立。",
    en: "The Halface Prize is established, and the Selection Committee with it.",
  },
  {
    date: "2026-09-18",
    zh: "委员会向两名候选人发出聘书。",
    en: "The Committee issues letters of appointment to two candidates.",
  },
  {
    date: "2026-09-19",
    zh: "两名委员就任。委员会由一人增至三人。",
    en: "Both take office. The Committee grows from one member to three.",
  },
];
