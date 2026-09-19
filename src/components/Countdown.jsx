import { useEffect, useState } from "react";
import { nextDrawTime, splitDuration, formatDrawTime, drawPhase } from "../utils/time";
import { useI18n } from "../i18n";

const UNIT_KEYS = ["days", "hours", "minutes", "seconds"];

/**
 * 距下期评选开始的倒计时。始终按北京时间（UTC+8）计算。
 *
 * 周五 15:00 到周日 24:00 之间不显示倒计时 —— 那段时间是评审期
 * （章程第二十六条：评选于每周五 A 股收市后开始），倒计的是什么？
 * 显示「本期评审中」，并把下期的开评时间列出来。
 */
export function Countdown({ className = "" }) {
  const [now, setNow] = useState(() => Date.now());
  const { lang, t } = useI18n();

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = nextDrawTime(now);

  if (drawPhase(now) === "judging") {
    return (
      <div className={className}>
        <div className="text-center">
          <div
            className="font-display text-2xl font-bold leading-none sm:text-3xl"
            style={{ color: "var(--gold)" }}
          >
            {t.countdown.judging}
          </div>
          <p className="mx-auto mt-3 max-w-[22rem] text-[13.5px] leading-relaxed text-[var(--muted)]">
            {t.countdown.judgingNote}
          </p>
        </div>
      </div>
    );
  }

  const parts = splitDuration(target - now);

  return (
    <div className={className}>
      <div className="flex items-stretch justify-center gap-2 sm:gap-3">
        {UNIT_KEYS.map((key) => (
          <div
            key={key}
            className="min-w-[58px] rounded-xl border px-2.5 py-2.5 text-center sm:min-w-[76px] sm:px-4"
            style={{ borderColor: "var(--line)", background: "var(--paper)" }}
          >
            <div className="figure text-2xl leading-none sm:text-3xl">
              {String(parts[key]).padStart(2, "0")}
            </div>
            <div className="font-sans mt-1.5 text-[11px] tracking-[0.12em] text-[var(--muted)]">
              {t.countdown[key]}
            </div>
          </div>
        ))}
      </div>
      <p className="font-sans mt-4 text-center text-[12px] text-[var(--muted)]">
        {t.countdown.nextAt}: {formatDrawTime(target, lang)}
        {t.countdown.beijingTime}
      </p>
    </div>
  );
}
