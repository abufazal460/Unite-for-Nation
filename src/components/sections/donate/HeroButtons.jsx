// components/section/donate/HeroButtons.jsx
import React from 'react';

const HeroButtons = ({ data }) => {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => handleScroll(data.donate.target)}
        className="px-8 py-4 bg-[#1F6F5F] text-white rounded-xl font-semibold hover:bg-[#1A5D4F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      >
        {data.donate.text}
      </button>
      <button
        onClick={() => handleScroll(data.learn.target)}
        className="px-8 py-4 bg-white text-[#0F172A] rounded-xl font-semibold border-2 border-[#1F6F5F]/20 hover:border-[#1F6F5F] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
      >
        {data.learn.text}
      </button>
    </div>
  );
};

export default HeroButtons;