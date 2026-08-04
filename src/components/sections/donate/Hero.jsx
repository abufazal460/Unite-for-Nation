// components/section/donate/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroQR from './HeroQR';
import HeroButtons from './HeroButtons';
import { fadeInUp, staggerContainer } from './animations';

const Hero = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#1F6F5F]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-[#1F6F5F]">{data.title.highlight}</span>{' '}
              <span className="text-[#0F172A]">{data.title.text}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-[#0F172A]/70 leading-relaxed max-w-lg"
            >
              {data.description}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <HeroButtons data={data.buttons} />
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 sm:gap-6 pt-4"
            >
              {data.trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#1F6F5F] text-lg">✓</span>
                  <span className="text-xs sm:text-sm text-[#0F172A]/70">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right QR Section */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-end"
          >
            <HeroQR data={data.qr} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;