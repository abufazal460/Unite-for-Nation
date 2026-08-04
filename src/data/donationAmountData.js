// data/donationAmountData.js
export const donationAmountData = {
  title: 'Choose Your Donation Amount',
  description:
    'Select an amount or enter your own. Every contribution, big or small, makes a difference in someone\'s life.',
  amounts: [
    { value: 500, label: 'Document Verification' },
    { value: 1000, label: 'Legal Consultation' },
    { value: 2500, label: 'Emergency Support' },
    { value: 5000, label: 'Bail Documentation' },
    { value: 10000, label: 'Legal Representation' },
    { value: 25000, label: 'Human Rights Advocacy' },
  ],
  bankDetails: {
    title: 'Bank Transfer Details',
    fields: [
      { label: 'Account Holder', value: 'United for Human Rights Foundation', copyable: false },
      { label: 'Account Number', value: '1234567890002456', copyable: true },
      { label: 'IFSC Code', value: 'SBIN0012234', copyable: true },
      { label: 'Bank Name', value: 'State Bank of India', copyable: false },
      { label: 'Branch', value: 'Jamia Nagar', copyable: false },
      { label: 'Account Type', value: 'Current', copyable: false },
    ],
  },
};