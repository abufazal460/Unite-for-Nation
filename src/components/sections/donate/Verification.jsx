import { motion } from "framer-motion";
import { MdOutlineVerified } from "react-icons/md";
import { staggerContainer, staggerItem, viewportOnce } from "./animations";

/**
 * Certificate gallery proving the organization's registered, legal
 * status. Each card renders a dummy certificate image plus its
 * registration number, entirely from data.
 *
 * @param {{ verification: import("../../../data/verificationData").verificationData }} props
 */
export default function Verification({ verification }) {
  if (!verification?.certificates?.length) return null;

  return (
    <section
      id="verification"
      aria-labelledby="verification-heading"
      className="bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1F6F5F]">
          {verification.eyebrow}
        </p>
        <h2 id="verification-heading" className="mt-2 max-w-2xl text-3xl font-bold text-[#0F172A] sm:text-4xl">
          {verification.heading}
        </h2>

        <motion.ul
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {verification.certificates.map((cert) => (
            <motion.li
              key={cert.id}
              variants={staggerItem}
              className="overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-br from-white to-[#D4AF37]/5 shadow-sm"
            >
              <div className="aspect-[4/3] w-full bg-white p-3">
                <img
                  src={cert.image}
                  alt={cert.imageAlt}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <div className="flex items-start gap-3 border-t border-[#D4AF37]/30 p-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F]">
                  <MdOutlineVerified aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#0F172A]">{cert.title}</p>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    {cert.registrationLabel} {cert.registrationNumber}
                  </p>
                  <p className="truncate text-xs text-slate-400">{cert.issuedBy}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
