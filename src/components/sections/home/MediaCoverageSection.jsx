import React from 'react';
import { mediaCoverage } from '../../../data/mediaCoverage';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';

export function MediaCoverageSection() {
  return (
    <section id="media" className="py-16 md:py-24 bg-slate-900 relative border-t border-slate-800">
      <Container>
        <SectionTitle
          subtitle="THIRD-PARTY VALIDATION & PRESS"
          title="Media Coverage & Recognized Work"
          description="Independent media outlets, news journals, and television broadcasts highlighting our legal advocacy and acquittals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaCoverage.map((item) => (
            <Card key={item.id} variant="default" className="flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                {/* Image Frame */}
                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.headline}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="neutral" size="sm">
                      {item.type}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="font-bold text-amber-400">{item.outlet}</span>
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3 text-slate-500" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-sm font-serif font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                  {item.headline}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-red-400 font-semibold group-hover:underline">
                <span>Read Coverage</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MediaCoverageSection;
