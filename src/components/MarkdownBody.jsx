import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { chapterId, articleId } from "../utils/charterAnchors";

/**
 * Markdown 渲染容器，排版交给 .charter-body（公文腔）。
 *
 * 附带一件事：给章程的章、条生成锚点 id，好让全站「依据章程第X条」
 * 这类说法能精确跳转，而不是只链到章程顶部。id 的推导规则见
 * utils/charterAnchors.js。落到页面上的用法见 utils/charter.js。
 */

/** 取 hast 节点的纯文本 */
function textOf(node) {
  if (!node) return "";
  if (node.type === "text") return node.value ?? "";
  return (node.children ?? []).map(textOf).join("");
}

/** 章号来自标题本身：「## 第二章 奖金」 */
function headingAnchor(node) {
  return chapterId(textOf(node));
}

/**
 * 条号来自段落开头的加粗部分——章程的写法是
 * `**第十一条（归零原则）** 本奖不设基金积累……`，
 * 条号不是标题，所以得从段落里抠。
 */
function paragraphAnchor(node) {
  const first = node?.children?.[0];
  if (!first || first.type !== "element" || first.tagName !== "strong") return null;
  return articleId(textOf(first));
}

/** 生成带锚点的自定义渲染器。node 必须解构掉，不能透传到 DOM。 */
function anchored(Tag, resolve) {
  return function Anchored({ node, children, ...rest }) {
    const id = resolve(node);
    return (
      <Tag id={id ?? undefined} className={id ? "anchor-target" : undefined} {...rest}>
        {children}
      </Tag>
    );
  };
}

const COMPONENTS = {
  h2: anchored("h2", headingAnchor),
  p: anchored("p", paragraphAnchor),
};

export function MarkdownBody({ children, className = "" }) {
  return (
    <div className={`charter-body ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} components={COMPONENTS}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
