/**
 * Content for the FAQ accordion rendered by FAQ.jsx.
 */
export const faqData = {
  eyebrow: "FAQ",
  heading: "Common Questions About Giving",
  items: [
    {
      id: "is-donation-safe",
      question: "Is my donation secure?",
      answer:
        "Yes. All payments are processed through PCI-DSS compliant gateways with end-to-end encryption, and every transaction is logged for audit purposes.",
    },
    {
      id: "how-is-donation-used",
      question: "How is my donation used?",
      answer:
        "Funds go directly toward legal consultations, emergency bail assistance, case documentation and awareness campaigns, as shown in the 'Where Your Donation Goes' breakdown above.",
    },
    {
      id: "will-i-get-a-receipt",
      question: "Will I receive a receipt?",
      answer:
        "A donation receipt eligible for 80G tax exemption is emailed automatically within minutes of your contribution being confirmed.",
    },
    {
      id: "can-i-donate-monthly",
      question: "Can I set up a monthly donation?",
      answer:
        "Yes. During checkout you can choose a recurring monthly contribution, which you're free to modify or cancel at any time.",
    },
    {
      id: "how-do-i-verify-the-ngo",
      question: "How can I verify this NGO?",
      answer:
        "Our registration, 12A and 80G certificates are published in the Verification section above, and can be cross-checked against the issuing government portals.",
    },
    {
      id: "international-donors",
      question: "Can international donors contribute?",
      answer:
        "International contributions are accepted in accordance with FCRA regulations through a dedicated foreign-contribution account; contact us for details.",
    },
  ],
};

/**
 * Content for the final call-to-action banner rendered by CTA.jsx.
 */
export const finalCtaData = {
  heading: "Justice Needs Your Support",
  description:
    "Every contribution helps someone wrongly accused access a fair legal defense, emergency bail support and a path back to their life.",
  button: {
    label: "Donate Now",
    targetId: "donation-method",
    ariaLabel: "Scroll to donation methods",
  },
};
