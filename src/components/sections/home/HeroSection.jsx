import React from 'react';
import { hero } from '../../../data/hero';
import Container from '../../common/Container';
import Button from '../../common/Button';
import Badge from '../../ui/Badge';
import { FiShield } from 'react-icons/fi';

export function HeroSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#faf8f5] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm sm:text-base font-mono font-bold">
              <FiShield className="w-4 h-4" />
              <span>Registered Human Rights NGO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Protecting Innocents From{" "}
              <span className="text-red-700">False Accusations</span> & Unjust Imprisonment
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-slate-700 leading-relaxed font-body max-w-2xl mx-auto lg:mx-0">
              Unit of Nation is a public charitable trust offering free legal literacy, case evaluation, and advocacy to support victims falsely implicated in criminal charges.
            </p>

            {/* Action Button: Centered WhatsApp Button */}
            <div className="flex items-center justify-center lg:justify-start pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                className="px-8 py-4 text-lg sm:text-xl shadow-md hover:shadow-lg"
              >
                Contact on WhatsApp
              </Button>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-mono text-slate-700">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                Free Legal Guidance Desk
              </span>
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                NGO Darpan Verified
              </span>
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                100% Confidential
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
              <img
                src={hero.image}
                alt="Unit of Nation Legal Pillars"
                className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-heading font-bold text-slate-900">Unit of Nation Trust</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Restoring dignity with legal truth</p>
                </div>
                <Badge variant="red" size="md">
                  Active NGO
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
