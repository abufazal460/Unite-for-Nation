import React from 'react';
import { contact } from '../../../data/contact';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';

export function MapSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <Container>
        <SectionTitle
          subtitle="LOCATION MAP"
          title="Secretariat Location"
          description="Visit our office in Civil Lines, New Delhi for in-person document submission and legal consultations."
        />

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 h-[380px] sm:h-[480px] w-full">
          <iframe
            title="Unite of Nation Location Map"
            src={contact.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </Container>
    </section>
  );
}

export default MapSection;
