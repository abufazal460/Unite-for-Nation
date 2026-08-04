// components/section/donate/DonationMethod.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BankDetails from './BankDetails';
import { fadeInUp, staggerContainer } from './animations';
import CopyButton from '../../ui/CopyButton';

const DonationMethod = ({ data }) => {
  const [activeMethod, setActiveMethod] = useState('upi');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]"
      id="donation-method"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {data.title}
            </h2>
            <p className="text-[#0F172A]/70 max-w-2xl mx-auto">
              {data.description}
            </p>
          </motion.div>

          {/* Method Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-4 flex-wrap">
            {data.methods.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeMethod === method.id
                    ? 'bg-[#1F6F5F] text-white shadow-lg'
                    : 'bg-white text-[#0F172A] border-2 border-[#1F6F5F]/20 hover:border-[#1F6F5F]/40'
                }`}
              >
                {method.icon} {method.label}
              </button>
            ))}
          </motion.div>

          {/* Method Content */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-8 border border-white/20"
          >
            {activeMethod === 'upi' && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-[#F8FAFC] rounded-xl flex items-center justify-center border-2 border-[#1F6F5F]/20">
                    <img
                      src={data.upi.qrImage}
                      alt="UPI QR Code"
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                  </div>
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.download = 'upi-qr-code.png';
                      link.href = data.upi.qrImage;
                      link.click();
                    }}
                    className="mt-4 text-sm text-[#1F6F5F] hover:text-[#1A5D4F] font-semibold"
                  >
                    ↓ Download QR Code
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.upi.fields.map((field, index) => (
                    <div key={index} className="space-y-1">
                      <label className="text-xs text-[#0F172A]/50">{field.label}</label>
                      <div className="font-medium text-[#0F172A] flex items-center justify-between bg-[#F8FAFC] p-2 rounded-lg">
                        <span>{field.value}</span>
                        {field.copyable && (
                          <CopyButton text={field.value} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeMethod === 'bank' && (
              <BankDetails data={data.bank} />
            )}

            {activeMethod === 'card' && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.card.fields.map((field, index) => (
                    <div key={index} className="space-y-1">
                      <label className="text-xs text-[#0F172A]/50">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2 rounded-lg border-2 border-[#1F6F5F]/20 focus:border-[#1F6F5F] focus:outline-none transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 bg-[#1F6F5F] text-white rounded-xl font-semibold hover:bg-[#1A5D4F] transition-all duration-300">
                  Pay Now
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationMethod;