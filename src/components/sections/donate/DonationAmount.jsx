import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "./animations";

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ProgressRing({ progress }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 100"
      className="h-24 w-24"
      role="img"
      aria-label={`${progress}% of this tier's funding goal reached`}
    >
      <circle
        cx="50"
        cy="50"
        r={RADIUS}
        fill="none"
        stroke="#E2E8F0"
        strokeWidth="8"
      />
      <motion.circle
        cx="50"
        cy="50"
        r={RADIUS}
        fill="none"
        stroke="#1F6F5F"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        initial={{ strokeDashoffset: CIRCUMFERENCE }}
        animate={
          isInView
            ? { strokeDashoffset: CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE }
            : {}
        }
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
}

/**
 * "Where Your Donation Goes" tiered giving section. Each tier renders a
 * circular progress ring that animates from 0 to its configured value.
 *
 * @param {{ donationAmount: import("../../../data/donationAmountData").donationAmountData }} props
 */
export default function DonationAmount({ donationAmount }) {
  if (!donationAmount?.tiers?.length) return null;

  return (
    <section
      id="donation-amount"
      aria-labelledby="donation-amount-heading"
      className="bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1F6F5F]">
          {donationAmount.eyebrow}
        </p>
        <h2 id="donation-amount-heading" className="mt-2 max-w-2xl text-3xl font-bold text-[#0F172A] sm:text-4xl">
          {donationAmount.heading}
        </h2>

        <motion.ul
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {donationAmount.tiers.map((tier) => (
            <motion.li
              key={tier.id}
              variants={staggerItem}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="relative flex h-24 w-24 items-center justify-center">
                <ProgressRing progress={tier.progress} />
                <span className="absolute text-sm font-bold text-[#0F172A]">{tier.amount}</span>
              </div>
              <p className="text-base font-semibold text-[#0F172A]">{tier.title}</p>
              <p className="text-sm text-slate-500">{tier.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
