import { motion } from "framer-motion";
import { GiCash } from "react-icons/gi";
import { MdOutlineVerified , MdVerified , MdOutlineBalance } from "react-icons/md";
import { staggerContainer, staggerItem, viewportOnce } from "./animations";

const ICONS = {
  shieldCheck: MdVerified,
  handCoins: GiCash,
  verifiedBadge: MdOutlineVerified,
  scaleBalance: MdOutlineBalance,
};

/**
 * Four-card trust bar shown just below the hero.
 *
 * @param {{ trust: import("../../../data/trustData").trustData }} props
 */
export default function TrustCards({ trust }) {
  if (!trust?.items?.length) return null;

  return (
    <section aria-labelledby="trust-bar-heading" className="bg-[#F8FAFC] px-5 py-14 sm:px-8 lg:px-12">
      <h2 id="trust-bar-heading" className="sr-only">
        {trust.eyebrow}
      </h2>

      <motion.ul
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {trust.items.map((item) => {
          const Icon = ICONS[item.icon] ?? FiShieldCheck;
          return (
            <motion.li
              key={item.id}
              variants={staggerItem}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F6F5F]/10 text-[#1F6F5F]">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="text-base font-semibold text-[#0F172A]">{item.title}</p>
              {item.description ? (
                <p className="text-sm text-slate-500">{item.description}</p>
              ) : null}
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
