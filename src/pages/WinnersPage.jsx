import { SectionHeading } from "../components/SectionHeading";
import { DrawRecord } from "../components/DrawRecord";
import { sortedDraws } from "../data/draws";
import { useArticle } from "../hooks/useArticle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n, localizedPath } from "../i18n";

/** 单期记录：各自拉取自己语言的 markdown */
function DrawItem({ draw }) {
  const { lang } = useI18n();
  const { data, loading, error } = useArticle(localizedPath(draw.file, lang));

  return (
    <DrawRecord
      draw={draw}
      metadata={data?.metadata}
      content={data?.content}
      loading={loading}
      error={error}
    />
  );
}

export function WinnersPage() {
  const { t } = useI18n();
  useDocumentTitle(t.winners.pageTitle);
  const list = sortedDraws();

  return (
    <div className="mx-auto max-w-5xl px-6">
      <SectionHeading
        eyebrow={t.nav.winners}
        title={t.winners.title}
        description={t.winners.desc}
      />

      {list.length === 0 ? (
        <p className="mt-12 text-center text-sm text-[var(--muted)]">{t.winners.empty}</p>
      ) : (
        <div className="mt-10 space-y-10">
          {list.map((draw) => (
            <DrawItem key={draw.id} draw={draw} />
          ))}
        </div>
      )}

      <section className="mt-16">
        <div
          className="rounded-2xl border px-6 py-8"
          style={{ borderColor: "var(--line)", background: "var(--cream)" }}
        >
          <h3 className="font-display text-xl font-bold">{t.winners.vacancyTitle}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
            {t.winners.vacancyDesc}
          </p>
        </div>
      </section>
    </div>
  );
}
