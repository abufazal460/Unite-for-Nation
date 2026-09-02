import React from 'react';
import { founder } from '../../../data/founder';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Badge from '../../ui/Badge';
import { FiCheck } from 'react-icons/fi';

export function FounderSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <Container>
        <SectionTitle
          subtitle="LEADERSHIP"
          title="Founder & Trustee"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-50">
              <img
                src={founder.photo}
                alt={founder.name}
                className="w-full aspect-[4/5] object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-heading font-bold text-slate-900">{founder.name}</h4>
                  <span className="text-xs text-[#2A9D8F] font-mono">{founder.role}</span>
                </div>
                <Badge variant="[#2A9D8F]">Founder</Badge>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">{founder.name}</h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">{founder.bio}</p>
            </div>

            <div className="p-6 bg-[#2A9D8F]/10 border border-[#2A9D8F] rounded-2xl space-y-2">
              <p className="text-base sm:text-lg font-serif italic text-amber-950 leading-relaxed">
                "{founder.quote}"
              </p>
              <span className="block text-right text-xs sm:text-sm font-mono text-[#2A9D8F] font-bold">— {founder.name}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FounderSection;
