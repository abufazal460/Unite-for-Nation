import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "./animations";

/**
 * A single impact statistic that counts up from 0 to its target value
 * once it scrolls into view.
 *
 * @param {{
 *   id: string,
 *   value: number,
 *   decimals?: number,
 *   suffix?: string,
 *   label: string,
 * }} props
 */
export default function CounterCard({ value, decimals = 0, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const start = performance.now();

    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: EASE }}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:text-left"
    >
      <p className="text-3xl font-bold text-[#1F6F5F] sm:text-4xl" aria-hidden="true">
        {displayValue.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
      <span className="sr-only">
        {value}
        {suffix} {label}
      </span>
    </motion.div>
  );
}
