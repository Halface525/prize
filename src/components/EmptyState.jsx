import { Ribbon } from "./Ribbon";

/**
 * 空状态：米色圆角块 + 金色丝带 + 居中一行字。
 *
 * 丝带放在这里，是因为**空状态本来就没有内容要读** ——
 * 它原来只有一行灰字浮在空白里。这里是丝带唯一不会跟阅读打架的地方；
 * 正文页仍然保持干净。
 *
 * text 是那句话；children 留给可选的行动（返回链接之类）。
 */
export function EmptyState({ text, children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${className}`}
      style={{ borderColor: "var(--line)", background: "var(--cream)" }}
    >
      <Ribbon />
      <div className="relative flex min-h-[15rem] flex-col items-center justify-center gap-5 px-6 py-14 text-center">
        <p className="max-w-md text-[15px] leading-relaxed text-[var(--muted)]">{text}</p>
        {children}
      </div>
    </div>
  );
}
