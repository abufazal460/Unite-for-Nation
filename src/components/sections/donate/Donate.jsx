import Hero from "../components/section/donate/Hero";
import TrustCards from "../components/section/donate/TrustCards";
import Impact from "../components/section/donate/Impact";
import DonationAmount from "../components/section/donate/DonationAmount";
import { heroData } from "../data/heroData";
import { trustData } from "../data/trustData";
import { impactData } from "../data/impactData";
import { donationAmountData } from "../data/donationAmountData";

/**
 * Donate page for Unit of Nation. Composes each section from its own
 * data file so all copy, images, icons and numbers stay editable in
 * one place without touching component code.
 */
export default function Donate() {
  return (
    <main id="main-content" className="min-h-screen bg-[#F8FAFC]">
      <title>Donate — Unit of Nation | Legal Aid for the Wrongly Accused</title>
      <meta
        name="description"
        content="Support Unit of Nation's mission to provide legal aid, emergency bail assistance and human rights protection to individuals facing false accusations."
      />

      <Hero hero={heroData} />
      <TrustCards trust={trustData} />
      <Impact impact={impactData} />
      <DonationAmount donationAmount={donationAmountData} />
    </main>
  );
}
