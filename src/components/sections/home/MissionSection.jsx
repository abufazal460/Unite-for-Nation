import React from 'react';
import { mission } from '../../../data/mission';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Icon from '../../common/Icon';

export function MissionSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
      <Container>
        <SectionTitle
          subtitle="OUR CORE PURPOSE"
          title="Mission & Work Pillars"
          description="Dedicated to protecting fundamental rights through investigation support, legal awareness, and court advocacy."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {mission.cards.slice(0, 3).map((card) => (
            <Card key={card.id} className="p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 border border-red-200 flex items-center justify-center font-bold">
                <Icon name={card.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
                {card.title}
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MissionSection;
