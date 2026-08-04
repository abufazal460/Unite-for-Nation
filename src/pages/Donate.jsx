// pages/Donate.jsx
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from '../components/section/donate/Hero';
import TrustCards from '../components/section/donate/TrustCards';
import Impact from '../components/section/donate/Impact';
import DonationAmount from '../components/section/donate/DonationAmount';
import { heroData } from '../data/heroData';
import { trustData } from '../data/trustData';
import { impactData } from '../data/impactData';
import { donationAmountData } from '../data/donationAmountData';

const Donate = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      <Hero data={heroData} />
      <TrustCards data={trustData} />
      <Impact data={impactData} />
      <DonationAmount data={donationAmountData} />
    </main>
  );
};

export default Donate;