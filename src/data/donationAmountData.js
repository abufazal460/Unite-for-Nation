/**
 * Content for the "Where Your Donation Goes" tiered giving section
 * rendered by DonationAmount.jsx. `progress` drives the circular ring
 * fill and is a relative indicator of how far each tier goes toward
 * fully covering that stage of support (not a fundraising total).
 */
export const donationAmountData = {
  eyebrow: "Where Your Donation Goes",
  heading: "Every Tier Funds a Real Step in the Legal Process",
  tiers: [
    {
      id: "tier-500",
      amount: "₹500",
      progress: 20,
      title: "Document Verification",
      description: "Covers notarization and verification of case documents.",
    },
    {
      id: "tier-1000",
      amount: "₹1,000",
      progress: 40,
      title: "Legal Consultation",
      description: "Funds a full consultation session with a volunteer lawyer.",
    },
    {
      id: "tier-2500",
      amount: "₹2,500",
      progress: 60,
      title: "Emergency Bail Support",
      description: "Contributes toward urgent bail assistance for the wrongly accused.",
    },
    {
      id: "tier-5000",
      amount: "₹5,000",
      progress: 80,
      title: "Bail Documentation",
      description: "Covers full paperwork and filing costs for a bail application.",
    },
    {
      id: "tier-10000",
      amount: "₹10,000+",
      progress: 100,
      title: "Post-Conviction Support",
      description: "Funds appeals and long-term rehabilitation support for survivors.",
    },
  ],
};
