import React, { useState } from 'react';
import { certificates } from '../../../data/certificates';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Modal from '../../ui/Modal';
import Badge from '../../ui/Badge';
import { FiCheckCircle, FiMaximize2, FiExternalLink, FiAward } from 'react-icons/fi';

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-800">
      <Container>
        <SectionTitle
          subtitle="GOVERNMENT & LEGAL COMPLIANCE"
          title="Official Registrations & Certificates"
          description="Unite For Nation operates with complete transparency, institutional compliance, and government verification as a registered public trust."
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              variant="gold"
              onClick={() => setSelectedCert(cert)}
              className="flex flex-col justify-between space-y-4 group cursor-pointer"
            >
              <div className="space-y-3">
                {/* Certificate Image Frame */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 group-hover:border-amber-500/50 transition-colors">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-slate-900/90 text-amber-400 p-2 rounded-xl border border-amber-500/40 shadow-xl flex items-center gap-1.5 text-xs font-semibold">
                      <FiMaximize2 className="w-4 h-4" />
                      <span>Inspect Document</span>
                    </div>
                  </div>
                </div>

                <Badge variant="gold" size="sm">
                  {cert.category}
                </Badge>

                <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1 text-[11px] font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Reg No:</span>
                  <span className="text-amber-300 font-bold">{cert.registrationNo}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-emerald-400 font-semibold">{cert.validity}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      {/* Certificate Modal Lightbox */}
      <Modal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || "Certificate Details"}
      >
        {selectedCert && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Full Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[4/3] flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Document Details */}
            <div className="space-y-4">
              <Badge variant="gold" icon="FiAward">
                {selectedCert.category}
              </Badge>

              <h4 className="text-xl font-serif font-bold text-white">
                {selectedCert.title}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">Issuing Body:</span>
                  <span className="text-slate-200 font-bold">{selectedCert.issuingBody}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">Registration Number:</span>
                  <span className="text-amber-400 font-bold">{selectedCert.registrationNo}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Compliance Status:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <FiCheckCircle className="w-3.5 h-3.5" />
                    {selectedCert.validity}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                Verified directly from official Government NGO portal records.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default CertificatesSection;
