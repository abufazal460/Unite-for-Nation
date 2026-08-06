/**
 * Content for the "Why Your Support Matters" section and the impact
 * counters grid rendered underneath it via CounterCard.jsx.
 */
export const impactData = {
  image: "https://api.dicebear.com/9.x/shapes/svg?seed=unit-of-nation-impact",
  imageAlt: "Illustration of a lawyer and client reviewing legal documents",
  eyebrow: "Why Your Donation Matters",
  heading: "Why Your Support Matters",
  paragraphs: [
    "Countless individuals face false accusations without the means to mount a proper legal defense. Families exhaust their savings on legal fees after an arrest, long before a verdict is ever reached.",
    "Your support funds case documentation, legal consultation, emergency bail assistance and awareness campaigns that safeguard the right to a fair trial and protect basic human dignity.",
  ],
  counters: [
    { id: "people-assisted", value: 83.4, decimals: 1, suffix: "K", label: "People Assisted" },
    { id: "legal-consultations", value: 19.6, decimals: 1, suffix: "K", label: "Legal Consultations" },
    { id: "emergency-bail", value: 5.8, decimals: 1, suffix: "K", label: "Emergency Bail Requests" },
    { id: "volunteer-lawyers", value: 320, decimals: 0, suffix: "+", label: "Volunteer Lawyers" },
    { id: "states-reached", value: 34, decimals: 0, suffix: "", label: "States Reached" },
    { id: "cases-supported", value: 4.8, decimals: 1, suffix: "K", label: "Cases Supported" },
  ],
};
