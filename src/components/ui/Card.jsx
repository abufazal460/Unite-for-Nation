import React from 'react';

export function Card({
  children,
  className = "",
  hoverEffect = true,
  onClick
}) {
  const baseStyles = "bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-xs overflow-hidden";
  const hoverStyles = hoverEffect ? "hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5" : "";

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
