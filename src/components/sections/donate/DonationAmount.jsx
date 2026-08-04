// components/section/donate/DonationAmount.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

const DonationAmount = ({ data }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (amount) {
      alert(`Thank you for donating ₹${amount}!`);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      id="donate"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-12"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {data.title}
            </h2>
            <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
              {data.description}
            </p>
          </motion.div>

          {/* Amount Selection */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.amounts.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleAmountSelect(item.value)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedAmount === item.value
                      ? 'border-[#1F6F5F] bg-[#1F6F5F]/5 shadow-lg'
                      : 'border-[#1F6F5F]/20 hover:border-[#1F6F5F]/40'
                  }`}
                >
                  <div className="text-xl font-bold text-[#0F172A]">
                    ₹{item.value}
                  </div>
                  <div className="text-xs text-[#0F172A]/60 mt-1">
                    {item.label}
                  </div>
                </button>
              ))}
            </div>

            <div className="max-w-xs mx-auto">
              <input
                type="number"
                placeholder="Custom amount (₹)"
                value={customAmount}
                onChange={handleCustomAmount}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#1F6F5F]/20 focus:border-[#1F6F5F] focus:outline-none transition-all duration-300 text-center"
                min="1"
              />
            </div>

            <button
              onClick={handleDonate}
              className="px-12 py-4 bg-[#1F6F5F] text-white rounded-xl font-semibold hover:bg-[#1A5D4F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Donate Now
            </button>
          </motion.div>

          {/* Bank Details */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 text-left"
          >
            <h3 className="font-semibold text-[#0F172A] text-lg mb-4">
              {data.bankDetails.title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {data.bankDetails.fields.map((field, index) => (
                <div key={index} className="space-y-1">
                  <label className="text-[#0F172A]/50">{field.label}</label>
                  <div className="font-medium text-[#0F172A] flex items-center justify-between">
                    <span>{field.value}</span>
                    {field.copyable && (
                      <button
                        onClick={() => navigator.clipboard.writeText(field.value)}
                        className="text-[#1F6F5F] hover:text-[#1A5D4F] text-xs"
                      >
                        Copy
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationAmount;