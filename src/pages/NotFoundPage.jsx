import { Link } from "react-router";
import { GoldButton } from "../components/GoldButton";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n } from "../i18n";
import { charterLink, charterRefClass } from "../utils/charter";

export function NotFoundPage() {
  const { t } = useI18n();
  useDocumentTitle(t.notFound.code);

  return (
    <div className="mx-auto max-w-2xl px-6">
      <div
        className="hero-card"
        style={{ padding: "clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)" }}
      >
        <div className="relative">
          <div className="figure text-6xl leading-none sm:text-7xl">{t.notFound.code}</div>

          <h1 className="font-display mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            {t.notFound.title}
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
            {t.notFound.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GoldButton to="/">{t.notFound.back}</GoldButton>
          </div>

          <div className="mt-7">
            <Link
              to={charterLink.article(17)}
              className={charterRefClass}
              style={{ color: "var(--gold)" }}
            >
              {t.charter.refArticle(17)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
