import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

/** Markdown 渲染容器，排版交给 .charter-body（公文腔） */
export function MarkdownBody({ children, className = "" }) {
  return (
    <div className={`charter-body ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>{children}</ReactMarkdown>
    </div>
  );
}
