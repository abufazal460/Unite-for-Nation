import { useState, useEffect, lazy, Suspense, startTransition, useRef } from 'react';
import {
  HomeSkeleton,
  AboutSkeleton,
  GallerySkeleton,
  ContactSkeleton,
  DonateSkeleton,
  NotFoundSkeleton,
} from './components/common/PageSkeleton';

// Each page is its own lazy-loaded chunk (keeps initial bundle small).
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Donate = lazy(() => import('./pages/Donate'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Resolves both which page component to render AND which skeleton
// matches it, from the same path — keeps the two always in sync so a
// new route can never end up with the wrong (or missing) skeleton.
function resolveRoute(pathname) {
  const cleanPath = pathname.split('#')[0] || '/';

  if (cleanPath === '/' || cleanPath === '' || cleanPath === '/index.html') {
    return { Page: Home, Skeleton: HomeSkeleton };
  }
  if (cleanPath === '/about' || cleanPath === '/about/') {
    return { Page: About, Skeleton: AboutSkeleton };
  }
  if (cleanPath === '/gallery' || cleanPath === '/gallery/') {
    return { Page: Gallery, Skeleton: GallerySkeleton };
  }
  if (cleanPath === '/contact' || cleanPath === '/contact/') {
    return { Page: Contact, Skeleton: ContactSkeleton };
  }
  if (cleanPath === '/donate' || cleanPath === '/donate/') {
    return { Page: Donate, Skeleton: DonateSkeleton };
  }
  return { Page: NotFound, Skeleton: NotFoundSkeleton };
}

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handlePopState = () => {
      window.lenis?.stop();
      startTransition(() => {
        setCurrentPath(window.location.pathname);
      });
    };

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')) {
        const href = target.getAttribute('href');
        if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('http')) {
          e.preventDefault();
          if (window.location.pathname !== href) {
            // Freeze the OLD page's Lenis the instant navigation starts,
            // so any leftover wheel/momentum from the click gesture can't
            // keep scrolling it (and later bleed into the new page).
            window.lenis?.stop();

            window.history.pushState({}, '', href);
            startTransition(() => {
              setCurrentPath(href.split('#')[0] || '/');
            });
            // NOTE: no window.scrollTo / lenis.scrollTo call here — the
            // single source of truth for resetting scroll on route change
            // is the currentPath effect, which runs after the route has
            // actually changed and the new page's Lenis is mounted.
          }
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    // Belt-and-braces: fully disable the browser's own scroll-memory,
    // so back/forward navigation can never restore a prior scroll
    // position on top of our own reset logic.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      // Explicit 'instant' overrides any CSS scroll-behavior: smooth
      // on <html> — plain scrollTo(0,0) respects that CSS and animates
      // instead of jumping, which was the real remaining bug on
      // touch/mobile devices (where MainLayout never creates Lenis).
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [currentPath]);

  const { Page, Skeleton } = resolveRoute(currentPath);

  return (
    // This Suspense boundary shows the route-matching Skeleton only on a
    // fresh load (hard reload / first visit / directly typed URL) — the
    // one moment there's no "old page" to keep showing. Client-side
    // navigation between pages never hits this fallback at all, because
    // startTransition (above) keeps the previous page on screen instead.
    <Suspense fallback={<Skeleton />}>
      <Page />
    </Suspense>
  );
}

export default App;