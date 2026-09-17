import { Link } from "react-router";

/** 金色胶囊按钮。to 传入时渲染为路由链接，否则渲染为 button。 */
export function GoldButton({ children, to, href, variant = "gold", onClick, className = "" }) {
  const cls = `${variant === "gold" ? "btn-gold" : "btn-ghost"} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
