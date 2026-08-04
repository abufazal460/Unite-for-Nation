// components/section/donate/FAQ.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Accordion from '../../ui/Accordion';
import { fadeInUp, staggerContainer } from './animations';

const FAQ = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2
              id="faq-title"
              className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
            >
              {data.title}
            </h2>
            <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
              {data.description}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-3">
            {data.items.map((item, index) => (
              <Accordion
                key={index}
                question={item.question}
                answer={item.answer}
                isLast={index === data.items.length - 1}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;