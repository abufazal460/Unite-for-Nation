// components/section/donate/BankDetails.jsx
import React from 'react';
import CopyButton from '../../ui/CopyButton';

const BankDetails = ({ data }) => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-[#0F172A] text-lg">{data.title}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {data.fields.map((field, index) => (
          <div key={index} className="space-y-1">
            <label className="text-xs text-[#0F172A]/50">{field.label}</label>
            <div className="font-medium text-[#0F172A] flex items-center justify-between bg-[#F8FAFC] p-2 rounded-lg">
              <span className="break-all">{field.value}</span>
              {field.copyable && (
                <CopyButton text={field.value} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankDetails;