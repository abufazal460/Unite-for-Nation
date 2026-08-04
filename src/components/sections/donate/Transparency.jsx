// components/section/donate/Transparency.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

const Transparency = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      id="transparency"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {data.title}
            </h2>
            <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {data.items.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-[#1F6F5F]/5 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-[#0F172A]/60 mt-1">{item.status}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transparency;