import React from 'react';
import Icon from '../common/Icon';

export function Badge({
  children,
  text,
  icon,
  variant = "[#2A9D8F] ",
  size = "md",
  className = ""
}) {
  const content = text || children;

  const variantStyles = {
    red: "bg-[#2A9D8F]/10 text-[#2A9D8F] border-[#2A9D8F]",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200"
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium tracking-wide border rounded-md ${variantStyles[variant] || variantStyles.red} ${sizeStyles[size] || sizeStyles.md} ${className}`}>
      {icon && <Icon name={icon} className="w-3.5 h-3.5 shrink-0" />}
      <span>{content}</span>
    </span>
  );
}

export default Badge;
