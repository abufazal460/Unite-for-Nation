import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')) {
        const href = target.getAttribute('href');
        // If it's a relative internal path starting with /
        if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('http')) {
          e.preventDefault();
          if (window.location.pathname !== href) {
            window.history.pushState({}, '', href);
            setCurrentPath(href.split('#')[0] || '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const cleanPath = currentPath.split('#')[0] || '/';

  if (cleanPath === '/' || cleanPath === '' || cleanPath === '/index.html') {
    return <Home />;
  }

  if (cleanPath === '/about' || cleanPath === '/about/') {
    return <About />;
  }

  if (cleanPath === '/gallery' || cleanPath === '/gallery/') {
    return <Gallery />;
  }

  if (cleanPath === '/contact' || cleanPath === '/contact/') {
    return <Contact />;
  }

  return <NotFound />;
}

export default App;
