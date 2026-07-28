import React from 'react';
import { timeline } from '../../../data/timeline';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Icon from '../../common/Icon';

export function WorkProcessSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#faf8f5]">
      <Container>
        <SectionTitle
          subtitle="TRANSPARENT METHODOLOGY"
          title="Our 5-Step Process"
          description="A structured approach to verifying complaints, examining documents, and providing legal support."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {timeline.map((step) => (
            <Card key={step.id} className="p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-red-700 text-white font-mono font-extrabold text-sm flex items-center justify-center">
                  {step.stepNumber}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                  {step.status}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold text-slate-900 pt-1">
                {step.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-body">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WorkProcessSection;
