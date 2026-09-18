import { getDomain } from "../data/domains";
import { pick } from "../i18n";

/**
 * 获奖者所属领域的显示名。
 *
 * 开奖记录里存的是 domainId（外键），显示名从 domains.js 取，这样领域改名时
 * 历史记录跟着变，不会烂掉。查不到就回退到记录里的字面值——历史记录不该因为
 * 领域被删就变成空白。
 */
export function domainLabel(winner, lang) {
  const d = getDomain(winner?.domainId);
  if (d) return pick(d, "name", lang);
  return pick(winner, "domain", lang);
}
