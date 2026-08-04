// components/section/donate/Testimonials.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

const Testimonials = ({ data }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += speed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      id="testimonials"
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

          {/* Marquee Container */}
          <div className="relative">
            {/* Blur Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide flex gap-6 py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Duplicate for infinite scroll */}
              {[...data.testimonials, ...data.testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 sm:w-80 bg-[#F8FAFC] rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-[#1F6F5F]/5"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1F6F5F]/20 flex-shrink-0 hover:scale-110 transition-transform duration-300">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0F172A] text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-[#0F172A]/50">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#0F172A]/70 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-3 flex text-[#D4AF37]">
                    {'★'.repeat(testimonial.rating)}
                    {'☆'.repeat(5 - testimonial.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;