import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 shrink-0 bg-slate-50">
          <h3 className="text-base font-heading font-bold text-slate-900 truncate">{title || 'Details'}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
