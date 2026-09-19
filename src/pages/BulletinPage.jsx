import { useState } from "react";
import { Link } from "react-router";
import { SectionHeading } from "../components/SectionHeading";
import { EmptyState } from "../components/EmptyState";
import { sortedBulletins, BULLETIN_KINDS } from "../data/bulletin";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useI18n, pick } from "../i18n";
import { formatDate } from "../utils/time";

const KIND_LABEL_KEY = { notice: "kindNotice", dispatch: "kindDispatch" };

export function BulletinPage() {
  const { lang, t } = useI18n();
  useDocumentTitle(t.bulletin.pageTitle);

  const [filter, setFilter] = useState(null); // null = 全部
  const list = sortedBulletins(filter);

  const tabs = [
    { key: null, label: t.bulletin.filterAll },
    ...BULLETIN_KINDS.map((k) => ({ key: k, label: t.bulletin[KIND_LABEL_KEY[k]] })),
  ];

  return (
    <div className="mx-auto max-w-3xl px-6">
      <SectionHeading
        eyebrow={t.nav.bulletin}
        title={t.bulletin.title}
        description={t.bulletin.desc}
      />

      {/* 分类 */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {tabs.map((tab) => {
          const active = filter === tab.key;
          return (
            <button
              key={tab.key ?? "all"}
              type="button"
              onClick={() => setFilter(tab.key)}
              className="font-sans rounded-full border px-3.5 py-1.5 text-[13px] transition-colors"
              style={{
                borderColor: active ? "var(--ink)" : "var(--line)",
                background: active ? "var(--ink)" : "transparent",
                color: active ? "var(--paper)" : "var(--muted)",
              }}
            >
              {tab.label}
            </button>
          );
        })}
        <span className="font-sans ml-auto text-[12px] text-[var(--muted)]">
          {t.bulletin.count(list.length)}
        </span>
      </div>

      {/* 列表 */}
      {list.length === 0 ? (
        <EmptyState
          className="mt-8"
          text={filter ? t.bulletin.emptyFiltered : t.bulletin.empty}
        />
      ) : (
        <ul className="mt-8">
          {list.map((b) => (
            <li
              key={b.id}
              className="border-t first:border-t-0"
              style={{ borderColor: "var(--line)" }}
            >
              <Link
                to={`/bulletin/${b.id}`}
                className="group block py-6 transition-opacity hover:opacity-70"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                  <span
                    className="font-sans rounded-full px-2 py-0.5 text-[11px] tracking-wide"
                    style={{
                      background: b.kind === "interview" ? "var(--gold)" : "var(--cream)",
                      color: b.kind === "interview" ? "#fff" : "var(--muted)",
                    }}
                  >
                    {t.bulletin[KIND_LABEL_KEY[b.kind]]}
                  </span>
                  <span className="font-sans text-[12px] text-[var(--muted)]">
                    {formatDate(b.date, lang)}
                  </span>
                </div>

                <h3 className="font-display mt-2.5 text-xl font-bold leading-snug">
                  {pick(b, "title", lang)}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
