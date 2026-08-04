// pages/Donate.jsx (Complete Integration)
import React, { useEffect } from "react";
import Lenis from "lenis";
import Hero from "../components/sections/donate/Hero";
import TrustCards from "../components/sections/donate/TrustCards";
import Impact from "../components/sections/donate/Impact";
import DonationAmount from "../components/sections/donate/DonationAmount";
import DonationMethod from "../components/sections/donate/DonationMethod";
import Transparency from "../components/sections/donate/Transparency";
import Verification from "../components/sections/donate/Verification";
import Testimonials from "../components/sections/donate/Testimonials";
import FAQ from "../components/sections/donate/FAQ";
import CTA from "../components/sections/donate/CTA";
import { heroData } from "../data/heroData";
import { trustData } from "../data/trustData";
import { impactData } from "../data/impactData";
import { donationAmountData } from "../data/donationAmountData";
import { donationMethodData } from "../data/donationMethodData";
import { transparencyData } from "../data/transparencyData";
import { verificationData } from "../data/verificationData";
import { testimonialData } from "../data/testimonialData";
import { faqData } from "../data/faqData";
import MainLayout from "../components/layout/MainLayout";

const Donate = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
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
    <MainLayout currentPath="/donate">
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
        <CTA
          data={{
            title: "Justice Needs Your Support",
            description:
              "Your contribution helps us raise awareness about human rights and support vulnerable individuals. Every donation brings us closer to a more just world.",
            buttonText: "Donate Now",
          }}
        />
      </main>
    </MainLayout>
  );
};

export default Donate;
