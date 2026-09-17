/** 区块标题：小标签 + 衬线大标题 + 可选说明 */
export function SectionHeading({ eyebrow, title, description, align = "left", className = "" }) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <div className="eyebrow" style={centered ? undefined : { color: "var(--gold)" }}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-relaxed text-[var(--muted)] ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
