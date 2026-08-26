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
      { id: "account-holder", label: "Account Holder Name", value: "Unit for Nation", copyable: true },
      { id: "account-number", label: "Account Number", value: "584502010016897", copyable: true },
      { id: "ifsc", label: "IFSC", value: "UBIN0558451", copyable: true },
      { id: "bank-name", label: "Bank Name", value: "Union Bank of india", copyable: true },
      { id: "branch", label: "Branch", value: "Jamia Nagar Okhla Delhi", copyable: false },
      { id: "account-type", label: "Account Type", value: "Current", copyable: false },
    ],
  },
};
