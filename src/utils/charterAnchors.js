/**
 * 从章程文本里推导锚点 id。纯函数，无 React 依赖，可单独测试。
 *
 *   「第二章 奖金」                      → ch-2
 *   「Chapter 2 — The Prize」            → ch-2
 *   「第十一条（归零原则）」              → art-11
 *   「Article 11 (The zero principle)」  → art-11
 *
 * 中英两版生成相同的 id，所以一条链接在两个语言下都成立。
 */

const CN_DIGIT = { 零: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };

/** 中文数字转整数：「十一」→ 11，「三十五」→ 35，「七」→ 7。认不出来返回 null。 */
export function cnToInt(s) {
  if (!s) return null;
  if (/^\d+$/.test(s)) return Number(s);

  let section = 0;
  let number = 0;
  for (const ch of s) {
    if (CN_DIGIT[ch] !== undefined) {
      number = CN_DIGIT[ch];
    } else if (ch === "十") {
      section += (number || 1) * 10;
      number = 0;
    } else if (ch === "百") {
      section += (number || 1) * 100;
      number = 0;
    } else {
      return null; // 出现不认识的字就放弃，别猜
    }
  }
  return section + number;
}

/** 「第二章 奖金」/「Chapter 2 — The Prize」→ ch-2 */
export function chapterId(text) {
  const cn = text.match(/^第([一二三四五六七八九十百零\d]+)章/);
  if (cn) {
    const n = cnToInt(cn[1]);
    if (n) return `ch-${n}`;
  }
  const en = text.match(/^Chapter\s+(\d+)/i);
  if (en) return `ch-${en[1]}`;
  return null;
}

/** 「第十一条（归零原则）」/「Article 11 (The zero principle)」→ art-11 */
export function articleId(text) {
  const cn = text.match(/^第([一二三四五六七八九十百零\d]+)条/);
  if (cn) {
    const n = cnToInt(cn[1]);
    if (n) return `art-${n}`;
  }
  const en = text.match(/^Article\s+(\d+)/i);
  if (en) return `art-${en[1]}`;
  return null;
}
