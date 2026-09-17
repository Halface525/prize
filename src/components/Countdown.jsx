import { useEffect, useState } from "react";
import { nextDrawTime, splitDuration, formatDrawTime } from "../utils/time";
import { useI18n } from "../i18n";

const UNIT_KEYS = ["days", "hours", "minutes", "seconds"];

/** 距下期开奖倒计时。始终按北京时间（UTC+8）计算。 */
export function Countdown({ className = "" }) {
  const [now, setNow] = useState(() => Date.now());
  const { lang, t } = useI18n();

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = nextDrawTime(now);
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
            <div className="font-sans mt-1.5 text-[10px] tracking-[0.12em] text-[var(--muted)]">
              {t.countdown[key]}
            </div>
          </div>
        ))}
      </div>
      <p className="font-sans mt-4 text-center text-[11px] text-[var(--muted)]">
        {t.countdown.nextAt}: {formatDrawTime(target, lang)}
        {t.countdown.beijingTime}
      </p>
    </div>
  );
}
