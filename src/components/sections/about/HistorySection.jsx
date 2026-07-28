import React from 'react';
import { about } from '../../../data/about';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';

export function HistorySection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 relative border-t border-slate-800">
      <Container>
        <SectionTitle
          subtitle="OUR JOURNEY SINCE 2018"
          title="Founding History & Genesis"
        />

        <div className="max-w-4xl mx-auto p-8 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl space-y-4">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {about.history}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default HistorySection;
