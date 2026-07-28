import heroImg from "../assets/Certificate/Certificate.jpeg"

export const hero = {
  eyebrow: "UNITED FOR JUSTICE & TRUTH",
  headline: "Protecting Innocents From False Accusations & Unjust Imprisonment",
  highlightedWords: ["False Accusations", "Unjust Imprisonment"],
  paragraph: "Unite of Nation is a national non-profit advocacy organization providing legal awareness, defense guidance, investigation support, and voice to individuals wrongfully accused or incarcerated.",
  primaryButton: { label: "Seek Immediate Help", href: "/contact", variant: "primary" },
  secondaryButton: { label: "Our Work & Impact", href: "#process", variant: "outline" },
  image: heroImg,
  trustBadges: [
    { id: "tb-1", icon: "FiShield", label: "Govt. Registered NGO" },
    { id: "tb-2", icon: "FiCheckCircle", label: "100% Free Legal Guidance" },
    { id: "tb-3", icon: "FiAward", label: "80G & 12A Certified" },
    { id: "tb-4", icon: "FiHeart", label: "3,400+ Victims Assisted" }
  ],
  statsOverview: [
    { label: "Cases Reviewed", value: "4,500+" },
    { label: "Innocents Released", value: "850+" },
    { label: "Legal Camps Conducted", value: "120+" }
  ]
};
