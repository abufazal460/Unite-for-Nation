// components/section/donate/HeroQR.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroQR = ({ data }) => {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScale(1);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0.8,
      }}
      className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 max-w-xs w-full border border-white/20"
    >
      <div className="text-center space-y-4">
        <div className="w-48 h-48 mx-auto bg-[#F8FAFC] rounded-xl flex items-center justify-center border-2 border-[#1F6F5F]/20">
          <img
            src={data.image}
            alt="Donation QR Code"
            className="w-full h-full object-contain p-4"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-semibold text-[#0F172A] text-lg">{data.title}</h3>
          <p className="text-sm text-[#0F172A]/60 mt-1">{data.subtitle}</p>
        </div>
        <div className="pt-2 border-t border-[#1F6F5F]/10">
          <p className="text-xs text-[#0F172A]/50">{data.instruction}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroQR;