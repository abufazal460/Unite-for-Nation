// components/section/donate/CTA.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

const CTA = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleScrollToDonate = () => {
    const element = document.getElementById('donation-method');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1F6F5F] to-[#1A5D4F]"
      aria-labelledby="cta-title"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-6"
        >
          <motion.h2
            id="cta-title"
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            {data.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <button
              onClick={handleScrollToDonate}
              className="px-10 py-4 bg-[#D4AF37] text-[#0F172A] rounded-xl font-semibold hover:bg-[#C4A027] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
              aria-label="Donate now"
            >
              {data.buttonText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;