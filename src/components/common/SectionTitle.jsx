import React from 'react';

export function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  className = ""
}) {
  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={`space-y-3 mb-10 sm:mb-14 max-w-4xl ${align === "center" ? "mx-auto" : ""} ${alignClass} ${className}`}>
      {subtitle && (
        <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-red-700 uppercase font-mono">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-body font-extrabold tracking-tight text-slate-900">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-body">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
