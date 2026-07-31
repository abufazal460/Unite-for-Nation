import React, { useState, useEffect } from 'react';
import { navigation } from '../../data/navigation';
import { site } from '../../data/site';
import Button from '../common/Button';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

export function Navbar({ currentPath = "/" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    setMobileMenuOpen(false);
    if (item.href.startsWith('/')) {
      // Standard page navigation
      if (window.location.pathname !== item.href) {
        window.history.pushState({}, '', item.href);
        window.dispatchEvent(new Event('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Image */}
        <a href="/" className="flex items-center gap-3.5 group">
          <img
            src={site.logoUrl}
            alt="Unite For Nation Logo"
            className="w-15 h-15 sm:w-12 sm:h-12 shadow-xs group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="block text-lg sm:text-xl font-heading font-extrabold text-slate-900 tracking-tight group-hover:text-red-700 transition-colors">
              {site.name}
            </span>
            <span className="block text-xs text-slate-600 font-mono tracking-wider uppercase font-semibold">
              Human Rights Foundation
            </span>
          </div>
        </a>

        {/* Desktop Navigation Menu - Strictly 4 Links */}
        <nav className="hidden md:flex items-center gap-2 sm:gap-3">
          {navigation.items.map((item) => {
            const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-4 py-2.5 text-base sm:text-lg font-bold rounded-xl transition-colors ${
                  isActive
                    ? "text-red-700 bg-red-50 font-extrabold"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: WhatsApp Direct Redirect */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="whatsapp"
            size="sm"
          >
            WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg animate-fadeIn">
          <div className="space-y-1">
            {navigation.items.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-red-700 bg-red-50 font-semibold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <Button
              variant="whatsapp"
              fullWidth
              size="md"
            >
              Contact on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
