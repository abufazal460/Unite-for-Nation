// data/heroData.js
export const heroData = {
  title: {
    highlight: 'Stand With Justice.',
    text: 'Support Victims of False Accusations.',
  },
  description:
    'Your contribution helps innocent individuals receive legal assistance, emergency bail support, legal documentation, and human rights protection. Every donation directly strengthens our mission to fight injustice.',
  buttons: {
    donate: { text: 'Donate Now', target: 'donate' },
    learn: { text: 'Learn More', target: 'faq' },
  },
  trustIndicators: [
    'Secure Donation',
    'Involved NGO',
    'Transparent Use of Funds',
    'Human Rights Protection',
    'Secure Payment',
  ],
  qr: {
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=donate@ngo.org',
    title: 'Scan to Donate',
    subtitle: 'UPI: donate@ngo',
    instruction: 'Scan with any UPI app to donate securely',
  },
};