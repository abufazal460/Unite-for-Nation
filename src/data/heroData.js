export const heroData = {
  headingLines: ["Stand With Justice.", "Support Survivors of", "Wrongful Accusations."],
  description:
    "Your contribution helps wrongly accused individuals access legal representation, emergency bail support, case documentation and human rights protection — every rupee directly strengthens our fight against injustice.",
  buttons: [
    {
      id: "donate",
      label: "Donate Now",
      variant: "primary",
      targetId: "donation-method",
      ariaLabel: "Jump to donation amount options",
    },
    {
      id: "learn-more",
      label: "Learn More",
      variant: "secondary",
      targetId: "faq",
      ariaLabel: "Learn more about why your support matters",
    },
  ],
  trustBadges: [
    { id: "secure-donation", icon: "shield", label: "Secure Donation" },
    { id: "verified-ngo", icon: "badgeCheck", label: "Verified NGO" },
    { id: "transparent-funds", icon: "scale", label: "Transparent Use of Funds" },
    { id: "human-rights", icon: "gavel", label: "Human Rights Protection" },
  ],
  qr: {
    image: "bank-qr-code.jpeg",
    imageAlt: "QR code linking to the secure donation checkout",
    caption: "Scan to Donate",
    paymentIcons: [
      { id: "upi", icon: "upi", label: "UPI" },
      { id: "paytm", icon: "paytm", label: "Paytm" },
      { id: "gpay", icon: "gpay", label: "Google Pay" },
      { id: "phonepe", icon: "phonepe", label: "PhonePe" },
      { id: "cards", icon: "card", label: "Debit / Credit Card" },
    ],
    secureLabel: "Secure Payment Guaranteed",
  },
};
