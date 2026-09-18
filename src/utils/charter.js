/**
 * 章程深链接。
 *
 * 锚点 id 由 MarkdownBody 从标题/条号自动生成（见 components/MarkdownBody.jsx），
 * 中英两版生成相同的 id，所以一条链接在两个语言下都成立。
 *
 * 注意必须用 react-router 的 <Link>，不能用原生 href="#art-11"——
 * HashRouter 下原生 hash 会被路由器当成路径，跳到 /art-11 落到首页。
 */
export const charterLink = {
  /** 第 n 章，如 chapter(2) → /charter#ch-2 */
  chapter: (n) => `/charter#ch-${n}`,
  /** 第 n 条，如 article(11) → /charter#art-11 */
  article: (n) => `/charter#art-${n}`,
};

/** 页面里「依据章程第X条 →」那种小链接的统一写法 */
export const charterRefClass =
  "font-sans text-[12px] transition-opacity hover:opacity-60";
