import React, { useEffect, useMemo, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { gallery } from '../data/gallery';
import { FiMaximize2 } from 'react-icons/fi';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Shuffle gallery order whenever the Gallery page mounts.
  const shuffledGallery = useMemo(() => {
    return [...gallery].sort(() => Math.random() - 0.5);
  }, []);

  // Lock background page scroll while modal is open.
  useEffect(() => {
    if (!selectedImage) return;

    const body = document.body;
    const html = document.documentElement;

    // Save the current scroll position and existing styles.
    const scrollY = window.scrollY;
    const originalBodyOverflow = body.style.overflow;
    const originalBodyPosition = body.style.position;
    const originalBodyTop = body.style.top;
    const originalBodyWidth = body.style.width;
    const originalHtmlOverflow = html.style.overflow;

    // Prevent background scrolling.
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      // Restore all original styles.
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      body.style.position = originalBodyPosition;
      body.style.top = originalBodyTop;
      body.style.width = originalBodyWidth;

      // Restore the exact previous scroll position.
      window.scrollTo(0, scrollY);
    };
  }, [selectedImage]);

  return (
    <MainLayout currentPath="/gallery">
      <section className="py-12 sm:py-16 bg-[#faf8f5]">
        <Container>
          <SectionTitle
            subtitle="DOCUMENTATION"
            title="Fieldwork & Event Gallery"
            description="Visual records of legal awareness camps, consultations, and foundation initiatives."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shuffledGallery.map((item) => (
              <Card
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="p-0 overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain ..."
                  />

                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 text-slate-800 p-2.5 rounded-full shadow-md">
                      <FiMaximize2 className="w-4 h-4 text-red-700" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>

        <Modal
          isOpen={Boolean(selectedImage)}
          onClose={() => setSelectedImage(null)}
        >
          {selectedImage && (
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden hover:bg-slate-100 max-h-[60vh] flex items-center justify-center duration-300">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[60vh] object-contain"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </div>
            </div>
          )}
        </Modal>
      </section>
    </MainLayout>
  );
}

export default Gallery;
