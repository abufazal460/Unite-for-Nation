import React from 'react';
import Container from '../../common/Container';
import Button from '../../common/Button';
import { FiShield } from 'react-icons/fi';

export function CallToActionSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#faf8f5] border-t border-slate-200/80">
      <Container>
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm text-center space-y-6 max-w-4xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-[#2A9D8F]/10 text-[#2A9D8F] border  border-[#2A9D8F] flex items-center justify-center font-bold mx-auto">
            <FiShield className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Need Confidential Legal Assistance?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-body">
            Our legal desk is available to assist victims and families with document verification, guidance, and direct support.
          </p>

          <div className="pt-2 flex items-center justify-center">
            <Button
              variant="whatsapp"
              size="lg"
              className="px-8 py-4 text-lg sm:text-xl font-bold shadow-md hover:shadow-lg"
            >
              Connect on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CallToActionSection;
