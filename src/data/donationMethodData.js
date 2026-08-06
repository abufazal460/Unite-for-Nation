/**
 * Content for the "Donation Methods" section rendered by
 * DonationMethod.jsx. Each bank detail row declares whether it should
 * render a CopyButton via `copyable`.
 */
export const donationMethodData = {
  eyebrow: "Donation Methods",
  heading: "Scan, Transfer or Bank In — Whatever Works for You",
  qr: {
    image: "https://api.dicebear.com/9.x/pixel-art/svg?seed=unit-of-nation-bank-transfer",
    imageAlt: "QR code for direct bank transfer donations",
    downloadFileName: "unit-of-nation-donation-qr.png",
    downloadLabel: "Download QR",
  },
  upi: {
    label: "UPI",
    id: "unitofnation@upi",
  },
  bank: {
    label: "Bank Information",
    fields: [
      { id: "account-holder", label: "Account Holder Name", value: "Unit for Nation Human Rights Foundation", copyable: true },
      { id: "account-number", label: "Account Number", value: "1234567890002456", copyable: true },
      { id: "ifsc", label: "IFSC", value: "SBIN0012234", copyable: true },
      { id: "bank-name", label: "Bank Name", value: "State Bank of India", copyable: true },
      { id: "branch", label: "Branch", value: "Jamia Nagar", copyable: false },
      { id: "account-type", label: "Account Type", value: "Current", copyable: false },
    ],
  },
};
