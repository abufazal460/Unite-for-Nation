// components/section/donate/TrustCards.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

const TrustCards = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      id="trust"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#F8FAFC] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-[#1F6F5F]/5"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs text-[#0F172A]/60 mt-1">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustCards;