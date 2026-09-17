/**
 * 奖金账户。
 *
 * 每期开奖后手动改 balance 与 updatedAt 两个字段——这是每周唯一要动的数字。
 * 章程第十一条：本奖不设基金积累，每期开奖后账户归零。
 * 所以开奖后这里的数字应该变小，而不是变大。
 */
export const fund = {
  balance: 1247.3,
  currency: "CNY",
  currencyMark: "¥",
  updatedAt: "2026-09-17",
  source: "全部来源于 halface 的个人储蓄。",
  sourceEn: "Funded entirely from the personal savings of halface.",
  policy: "本奖不接受任何社会捐助。",
  policyEn: "This prize accepts no donation from any source.",
};

/** 格式化为 ¥1,247.30 */
export function formatAmount(n) {
  return (
    fund.currencyMark +
    Number(n).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
