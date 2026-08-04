// components/ui/CopyButton.jsx
import React, { useState } from 'react';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-[#1F6F5F] hover:text-[#1A5D4F] transition-all duration-300 text-sm font-medium flex items-center gap-1"
    >
      {copied ? (
        <>
          <span className="text-green-500">✓</span>
          <span className="text-xs">Copied</span>
        </>
      ) : (
        <>
          <span>📋</span>
          <span className="text-xs">Copy</span>
        </>
      )}
    </button>
  );
};

export default CopyButton;