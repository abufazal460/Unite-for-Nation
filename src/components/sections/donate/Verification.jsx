// components/section/donate/Verification.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

const Verification = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]"
      id="verification"
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {data.certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-[#1F6F5F]/5 hover:-translate-y-2"
              >
                <div className="w-full h-32 bg-[#F8FAFC] rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-[#0F172A] text-sm">{cert.name}</h3>
                <p className="text-xs text-[#1F6F5F] mt-1">{cert.status}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Verification;