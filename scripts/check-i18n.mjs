/**
 * 校验双语一致性。
 *
 *   npm run check:i18n
 *
 * 查三件事：
 *   1. 源码里引用了、但 zh 或 en 没定义的 key —— 这类漏 key 构建期不报错，
 *      只在运行时渲染出 undefined
 *   2. zh 与 en 的顶层键、分节结构是否一致
 *   3. 动态取值（t.nav[item.id] 这类静态查不到的）逐个确认目标存在
 *
 * 退出码非 0 表示有问题，可以直接挂进 CI 或 pre-commit。
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { zh } from "../src/i18n/zh.js";
import { en } from "../src/i18n/en.js";
import { navItems, footerItems } from "../src/data/site.js";
import { BULLETIN_KINDS } from "../src/data/bulletin.js";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(jsx|js)$/.test(p)) out.push(p);
  }
  return out;
};

let problems = 0;
const report = (ok, label) => {
  if (!ok) problems++;
  console.log(`${ok ? "ok  " : "FAIL"}  ${label}`);
};

// ── 1. 引用了但没定义 ──────────────────────────────
const files = walk(join(ROOT, "src"));
const used = new Map();

for (const f of files) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/\bt\.([a-zA-Z]\w*)\.([a-zA-Z]\w*)/g)) {
    const k = `${m[1]}.${m[2]}`;
    if (!used.has(k)) used.set(k, new Set());
    used.get(k).add(relative(ROOT, f));
  }
}

const defined = (dict, path) => {
  const [s, k] = path.split(".");
  return dict[s] !== undefined && dict[s][k] !== undefined;
};

console.log("=== 一、引用了但未定义的 key ===");
const missing = [...used.entries()].filter(([k]) => !defined(zh, k) || !defined(en, k));
if (missing.length === 0) {
  console.log(`ok    未发现漏 key（共引用 ${used.size} 个）`);
} else {
  for (const [k, where] of missing) {
    problems++;
    console.log(`FAIL  ${k}   zh:${defined(zh, k) ? "有" : "缺"}  en:${defined(en, k) ? "有" : "缺"}`);
    for (const w of where) console.log(`        ${w}`);
  }
}

// ── 2. 两种语言结构一致性 ──────────────────────────
console.log("\n=== 二、zh / en 结构一致性 ===");
const topZh = Object.keys(zh).sort();
const topEn = Object.keys(en).sort();
report(
  JSON.stringify(topZh) === JSON.stringify(topEn),
  `顶层键一致（zh 缺 [${topEn.filter((k) => !topZh.includes(k))}]，en 缺 [${topZh.filter((k) => !topEn.includes(k))}]）`
);

for (const section of topZh) {
  if (typeof zh[section] !== "object") continue;
  const a = Object.keys(zh[section]).sort();
  const b = Object.keys(en[section] ?? {}).sort();
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    problems++;
    console.log(`FAIL  ${section} 分节不一致  zh 缺 [${b.filter((k) => !a.includes(k))}]  en 缺 [${a.filter((k) => !b.includes(k))}]`);
  }
}
if (problems === 0) console.log("ok    所有分节的键完全对应");

// ── 3. 动态取值 ────────────────────────────────────
console.log("\n=== 三、动态取值的目标存在性 ===");
for (const it of footerItems) {
  report(Boolean(zh.nav[it.id] && en.nav[it.id]), `t.nav['${it.id}']`);
}
for (const k of ["all", ...BULLETIN_KINDS]) {
  const key = k === "all" ? "filterAll" : "kind" + k[0].toUpperCase() + k.slice(1);
  report(Boolean(zh.bulletin[key] && en.bulletin[key]), `t.bulletin['${key}']`);
}
for (const k of ["days", "hours", "minutes", "seconds"]) {
  report(Boolean(zh.countdown[k] && en.countdown[k]), `t.countdown['${k}']`);
}

// ── 4. 被当函数调用的，必须是函数 ──────────────────
// 从源码里扫 `t.x.y(` 的写法，而不是维护一份手写清单 ——
// 清单会随 key 增删而过期（删掉 fund.payout 时就踩过一次，
// 报了个假 FAIL）。
console.log("\n=== 四、被当函数调用的文案必须是函数 ===");
const called = new Map();
for (const f of files) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/\bt\.([a-zA-Z]\w*)\.([a-zA-Z]\w*)\s*\(/g)) {
    const k = `${m[1]}.${m[2]}`;
    if (!called.has(k)) called.set(k, new Set());
    called.get(k).add(relative(ROOT, f));
  }
}

if (called.size === 0) {
  console.log("ok    源码里没有以函数形式调用的文案");
} else {
  for (const [k, where] of called) {
    const [s, key] = k.split(".");
    const ok = typeof zh[s]?.[key] === "function" && typeof en[s]?.[key] === "function";
    report(ok, `t.${k}()`);
    if (!ok) for (const w of where) console.log(`        ${w}`);
  }
}

console.log(`\n${problems === 0 ? "全部通过" : `${problems} 项失败`}`);
process.exit(problems === 0 ? 0 : 1);
