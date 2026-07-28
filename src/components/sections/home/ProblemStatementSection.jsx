import React from 'react';
import { problemStatement } from '../../../data/problemStatement';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Icon from '../../common/Icon';

export function ProblemStatementSection() {
  return (
    <section id="problem" className="py-16 md:py-24 bg-slate-900 relative border-t border-slate-800">
      <Container>
        <SectionTitle
          subtitle={problemStatement.subheading}
          title={problemStatement.heading}
          description={problemStatement.paragraph}
        />

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problemStatement.cards.map((card) => (
            <Card key={card.id} variant="accent" className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-900/30 text-red-400 border border-red-600/30 flex items-center justify-center font-bold shrink-0">
                <Icon name={card.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white">
                {card.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {card.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Statistical Context Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {problemStatement.statistics.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0 md:px-4 space-y-1">
                <span className="text-3xl md:text-4xl font-serif font-bold text-amber-400 block">
                  {stat.number}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProblemStatementSection;
