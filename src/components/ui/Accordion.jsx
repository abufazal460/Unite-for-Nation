// components/ui/Accordion.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const Accordion = ({ question, answer, isLast = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1F6F5F]/5 ${
        !isLast ? 'mb-3' : ''
      }`}
      role="article"
    >
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#1F6F5F]/50 rounded-xl"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${question.slice(0, 10)}`}
        id={`accordion-header-${question.slice(0, 10)}`}
      >
        <span className="font-semibold text-[#0F172A] text-sm sm:text-base pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0 text-[#1F6F5F] text-xl"
          aria-hidden="true"
        >
          ▼
        </motion.span>
      </button>

      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        role="region"
        aria-labelledby={`accordion-header-${question.slice(0, 10)}`}
        id={`accordion-content-${question.slice(0, 10)}`}
      >
        <div className="px-6 pb-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.2, delay: isOpen ? 0.1 : 0 }}
            className="text-[#0F172A]/70 text-sm sm:text-base leading-relaxed"
          >
            {answer}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;