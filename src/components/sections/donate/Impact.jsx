// components/section/donate/Impact.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CounterCard from './CounterCard';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from './animations';

const Impact = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]"
      id="impact"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Image slides from left */}
          <motion.div
            variants={slideInLeft}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={data.image}
                alt="Impact visualization"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F6F5F]/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right - Content slides from right */}
          <motion.div
            variants={slideInRight}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-[#1F6F5F]/10 text-[#1F6F5F] rounded-full text-sm font-semibold">
                {data.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
                {data.title}
              </h2>
              <p className="text-[#0F172A]/70 leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.counters.map((counter, index) => (
                <CounterCard
                  key={index}
                  value={counter.value}
                  label={counter.label}
                  suffix={counter.suffix}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact; 