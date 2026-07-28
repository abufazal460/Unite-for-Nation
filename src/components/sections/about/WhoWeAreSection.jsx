import React from 'react';
import { about } from '../../../data/about';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import { FiCheck } from 'react-icons/fi';

export function WhoWeAreSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#faf8f5]">
      <Container>
        <SectionTitle
          subtitle={about.subtitle}
          title={about.title}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <Badge variant="red" size="md">
                Public Charitable Trust
              </Badge>
              <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-body">
                {about.whoWeAre}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.coreValues.map((val, idx) => (
                <Card key={idx} className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-sm font-mono uppercase">
                    <FiCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-body">
                    {val.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white aspect-[4/3]">
              <img
                src={about.introImage}
                alt="Unite of Nation Foundation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhoWeAreSection;
