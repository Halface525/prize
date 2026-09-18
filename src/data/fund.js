// 显式写 .js 扩展名：Vite 不要求，但 Node 的 ESM 解析器要求。
// 数据层保持「纯 JS、可被 Node 直接 import」，才能脱离构建单独跑校验脚本。
import { draws } from "./draws.js";

/**
 * 奖金账户。
 *
 * 每期开奖后手动改 balance 与 updatedAt 两个字段——这是每周唯一要动的数字。
 * 章程第十一条：本奖不设基金积累，每期开奖后账户归零。
 * 所以开奖后这里的数字应该变小，而不是变大。
 */
export const fund = {
  balance: 1247.3,
  currencyMark: "¥",
  updatedAt: "2026-09-17",
  source: "全部来源于 halface 的个人储蓄。",
  sourceEn: "Funded entirely from the personal savings of halface.",
  policy: "本奖不接受任何社会捐助。",
  policyEn: "This prize accepts no donation from any source.",
};

/**
 * 存入记录。每次往账户里放钱就在这里加一行。
 *
 * 支出**不在这里记** —— 开奖支出直接从 draws.js 推导，重复记两处迟早对不上。
 */
export const deposits = [
  {
    date: "2026-09-17",
    amount: 1247.3,
    note: "halface 个人储蓄",
    noteEn: "Personal savings of halface",
  },
];

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

/** 带正负号的金额，给流水用 */
export function formatSigned(n) {
  const sign = n < 0 ? "−" : "+";
  return sign + formatAmount(Math.abs(n));
}

/**
 * 账户流水：历次存入与历次开奖支出，最新的在前。
 *
 * 每行带一个 balance 字段，是**该笔之后**的余额。一串逐渐归零的数字，
 * 比任何一段说明文字都更能说明这个奖是什么。
 *
 * 样张（placeholder）不计入 —— 那是格式示范，没有真的付出去。
 */
export function accountLedger() {
  const rows = [];

  for (const d of deposits) {
    rows.push({
      date: d.date,
      kind: "deposit",
      note: d.note,
      noteEn: d.noteEn,
      amount: d.amount,
    });
  }

  for (const d of draws) {
    if (d.placeholder) continue;
    rows.push({
      date: d.date,
      kind: "payout",
      period: d.period,
      amount: -(d.pool ?? 0),
    });
  }

  // 先按时间升序累加出余额，再翻回倒序展示
  rows.sort((a, b) => (a.date < b.date ? -1 : 1));

  let balance = 0;
  for (const r of rows) {
    balance += r.amount;
    r.balance = balance;
  }

  return rows.reverse();
}
