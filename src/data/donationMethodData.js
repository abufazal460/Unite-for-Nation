// data/donationMethodData.js
export const donationMethodData = {
  title: 'Choose Your Donation Method',
  description: 'Select from multiple secure payment options to support our cause.',
  methods: [
    { id: 'upi', icon: '📱', label: 'UPI' },
    { id: 'bank', icon: '🏦', label: 'Bank Transfer' },
    { id: 'card', icon: '💳', label: 'Card' },
  ],
  upi: {
    qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=donate@ngo&pn=NGO&am=0&cu=INR',
    fields: [
      { label: 'UPI ID', value: 'donate@ngo', copyable: true },
      { label: 'Account Holder', value: 'United for Human Rights Foundation', copyable: false },
      { label: 'Account Number', value: '1234567890002456', copyable: true },
      { label: 'IFSC', value: 'SBIN0012234', copyable: true },
      { label: 'Bank Name', value: 'State Bank of India', copyable: false },
      { label: 'Branch', value: 'Jamia Nagar', copyable: false },
    ],
  },
  bank: {
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
  card: {
    fields: [
      { label: 'Card Number', type: 'text', placeholder: '1234 5678 9012 3456' },
      { label: 'Card Holder', type: 'text', placeholder: 'John Doe' },
      { label: 'Expiry Date', type: 'text', placeholder: 'MM/YY' },
      { label: 'CVV', type: 'password', placeholder: '***' },
    ],
  },
};