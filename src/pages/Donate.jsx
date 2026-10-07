import Hero from "../components/sections/donate/Hero";
import DonationMethod from "../components/sections/donate/DonationMethod";
import Transparency from "../components/sections/donate/Transparency";
import FAQ from "../components/sections/donate/FAQ";
import CTA from "../components/sections/donate/CTA";
import { heroData } from "../data/heroData";
import { donationMethodData } from "../data/donationMethodData";
import { transparencyData } from "../data/transparencyData";
import { faqData, finalCtaData } from "../data/faqData";
import MainLayout from "../components/layout/MainLayout";

export default function Donate() {
  return (
    <MainLayout currentPath="/donate">
      <div id="main-content" className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
        <Hero hero={heroData} />
        <DonationMethod donationMethod={donationMethodData} />
        <Transparency transparency={transparencyData} />
        <FAQ faq={faqData} />
        <CTA cta={finalCtaData} />
      </div>
    </MainLayout>
  );
}
