import React, { useState } from 'react';
import { gallery } from '../../../data/gallery';
import { galleryCategories } from '../../../data/galleryCategories';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../ui/Card';
import Modal from '../../ui/Modal';
import Badge from '../../ui/Badge';
import { FiMaximize2, FiMapPin, FiCalendar } from 'react-icons/fi';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? gallery
    : gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-800">
      <Container>
        <SectionTitle
          subtitle="DOCUMENTING OUR FIELDWORK"
          title="Interactive Event & Legal Camp Gallery"
          description="Visual records of grassroots legal awareness drives, court consultations, awards ceremonies, and community rehabilitation programs."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-700 text-white shadow-lg shadow-red-950/50 border border-red-600'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              variant="default"
              onClick={() => setSelectedImage(item)}
              className="p-0 overflow-hidden group cursor-pointer border-slate-800 hover:border-amber-500/50"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold bg-slate-950/90 text-amber-400 px-2.5 py-1 rounded-md border border-slate-800">
                    {item.year}
                  </span>
                </div>

                {/* Center Hover Magnify */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-slate-900/90 text-white p-3 rounded-full border border-amber-500/50 shadow-2xl">
                    <FiMaximize2 className="w-5 h-5 text-amber-400" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-mono">
                    <FiMapPin className="w-3 h-3 text-red-500 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-sm font-serif font-bold text-white line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      {/* Gallery Lightbox Modal */}
      <Modal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title || "Gallery Preview"}
      >
        {selectedImage && (
          <div className="space-y-4">
            {/* Expanded Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 max-h-[60vh] flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Image Info */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-2">
                <h4 className="text-lg font-serif font-bold text-white">
                  {selectedImage.title}
                </h4>
                <Badge variant="gold">
                  {selectedImage.year}
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <FiMapPin className="w-3.5 h-3.5 text-red-500" />
                  {selectedImage.location}
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar className="w-3.5 h-3.5 text-amber-400" />
                  {selectedImage.year}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default GallerySection;
