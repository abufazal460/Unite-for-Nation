// pages/Donate.jsx (Complete Integration)
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from '../components/section/donate/Hero';
import TrustCards from '../components/section/donate/TrustCards';
import Impact from '../components/section/donate/Impact';
import DonationAmount from '../components/section/donate/DonationAmount';
import DonationMethod from '../components/section/donate/DonationMethod';
import Transparency from '../components/section/donate/Transparency';
import Verification from '../components/section/donate/Verification';
import Testimonials from '../components/section/donate/Testimonials';
import FAQ from '../components/section/donate/FAQ';
import CTA from '../components/section/donate/CTA';
import { heroData } from '../data/heroData';
import { trustData } from '../data/trustData';
import { impactData } from '../data/impactData';
import { donationAmountData } from '../data/donationAmountData';
import { donationMethodData } from '../data/donationMethodData';
import { transparencyData } from '../data/transparencyData';
import { verificationData } from '../data/verificationData';
import { testimonialData } from '../data/testimonialData';
import { faqData } from '../data/faqData';

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
    <main className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <Hero data={heroData} />
      <TrustCards data={trustData} />
      <Impact data={impactData} />
      <DonationAmount data={donationAmountData} />
      <DonationMethod data={donationMethodData} />
      <Transparency data={transparencyData} />
      <Verification data={verificationData} />
      <Testimonials data={testimonialData} />
      <FAQ data={faqData} />
      <CTA data={{ 
        title: 'Justice Needs Your Support',
        description: 'Your contribution helps us raise awareness about human rights and support vulnerable individuals. Every donation brings us closer to a more just world.',
        buttonText: 'Donate Now'
      }} />
    </main>
  );
};

export default Donate;