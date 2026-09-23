import { useEffect, useState } from 'react';
import { hero } from '../../../data/hero';

const AUTO_ADVANCE_MS = 10000;

export function HeroSection() {
  const images = hero.images ?? [];
  const slideCount = images.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => {
      mediaQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  useEffect(() => {
    if (slideCount <= 1 || isPaused || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [slideCount, isPaused, prefersReducedMotion]);

  useEffect(() => {
    if (slideCount === 0) {
      setActiveIndex(0);
      return;
    }

    if (activeIndex >= slideCount) {
      setActiveIndex(0);
    }
  }, [activeIndex, slideCount]);

  if (slideCount === 0) {
    return null;
  }

  const goToSlide = (index) => {
    setActiveIndex((index + slideCount) % slideCount);
  };

  const goToPrevious = () => {
    goToSlide(activeIndex - 1);
  };

  const goToNext = () => {
    goToSlide(activeIndex + 1);
  };

  const canNavigate = slideCount > 1;
  const motionClass = prefersReducedMotion
    ? ''
    : 'transition-transform duration-700 ease-in-out';

  return (
    <section
      aria-label="Unite For Nation highlights"
      aria-roledescription="carousel"
      className="w-full overflow-hidden"
    >
      <div
        className="relative w-full overflow-hidden bg-slate-200"
        style={{ height: 'calc(100dvh - var(--nav-h))' }}
      >
        <div
          className={`flex h-full ${motionClass}`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slideCount}`}
              aria-hidden={index !== activeIndex}
              className="block h-full w-full flex-shrink-0"
            >
              <picture>
                <source
                  media={`(min-width: ${hero.desktopBreakpoint})`}
                  srcSet={image.desktopSrc}
                />
                <img
                  src={image.mobileSrc}
                  alt={image.alt}
                  className="block h-full w-full object-fit object-center"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  referrerPolicy="no-referrer"
                />
              </picture>
            </div>
          ))}
        </div>

        {canNavigate && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full cursor-pointer bg-black/55 p-3 text-white transition hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true" className="text-xl leading-none">‹</span>
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full cursor-pointer bg-black/55 p-3 text-white transition hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true" className="text-xl leading-none">›</span>
            </button>

            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col flex-wrap items-center justify-center gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 pb-5 pt-12 text-white">
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                aria-pressed={isPaused}
                aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
                className="inline-flex items-center gap-2 rounded-full border cursor-pointer border-white/30 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {isPaused ? (
                  <>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M6.5 4.75a.75.75 0 0 1 1.15-.64l7.1 4.5a.75.75 0 0 1 0 1.28l-7.1 4.5a.75.75 0 0 1-1.15-.64V4.75Z" />
                    </svg>
                    <span>Resume </span>
                  </>
                ) : (
                  <>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M6.25 4.75A.75.75 0 0 1 7 4h1a.75.75 0 0 1 .75.75v10.5A.75.75 0 0 1 8 16H7a.75.75 0 0 1-.75-.75V4.75Zm5 0A.75.75 0 0 1 12 4h1a.75.75 0 0 1 .75.75v10.5A.75.75 0 0 1 13 16h-1a.75.75 0 0 1-.75-.75V4.75Z" />
                    </svg>
                    <span>Pause</span>
                  </>
                )}
              </button>

              <div
                className="flex items-center gap-2"
                role="group"
                aria-label="Choose a slide"
              >
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${index === activeIndex
                        ? 'w-7 bg-white'
                        : 'w-2.5 bg-white/60 hover:bg-white'
                      }`}
                  />
                ))}
              </div>

              {/* <span
                className="min-w-14 text-sm tabular-nums"
                aria-live="polite"
                aria-atomic="true"
              >
                {activeIndex + 1} / {slideCount}
              </span> */}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default HeroSection;