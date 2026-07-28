import React from 'react';
import { site } from '../../data/site';
import { FaWhatsapp } from 'react-icons/fa6';
import Icon from './Icon';

export function Button({
  children,
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  type = "button",
  disabled = false
}) {
  const content = label || children;

  const handleWhatsAppClick = (e) => {
    if (variant === "whatsapp") {
      e.preventDefault();
      // Redirect directly in the same tab as requested
      window.location.href = site.whatsappUrl;
      return;
    }
    if (onClick) onClick(e);
  };

  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm sm:text-base gap-2 font-semibold",
    md: "px-6 py-3 text-base sm:text-lg gap-2.5 font-bold",
    lg: "px-8 py-4 text-lg sm:text-xl gap-3 font-extrabold"
  };

  const variantStyles = {
    primary: "bg-red-700 hover:bg-red-800 text-white shadow-sm hover:shadow-md active:scale-98 border border-red-700",
    whatsapp: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md active:scale-98 border border-emerald-600",
    outline: "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 shadow-xs",
    ghost: "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-transparent",
    dark: "bg-slate-900 hover:bg-slate-800 text-white border border-slate-900"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${fullWidth ? "w-full" : ""} ${className}`;

  const renderInner = () => (
    <>
      {variant === "whatsapp" ? (
        <FaWhatsapp className="w-5 h-5 shrink-0" />
      ) : (
        icon && iconPosition === "left" && <Icon name={icon} className="w-5 h-5 shrink-0" />
      )}
      <span>{content}</span>
      {variant !== "whatsapp" && icon && iconPosition === "right" && <Icon name={icon} className="w-5 h-5 shrink-0" />}
    </>
  );

  if (variant === "whatsapp") {
    return (
      <button type="button" onClick={handleWhatsAppClick} className={combinedClass}>
        {renderInner()}
      </button>
    );
  }

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={combinedClass} onClick={onClick}>
          {renderInner()}
        </a>
      );
    }
    return (
      <a href={href} className={combinedClass} onClick={onClick}>
        {renderInner()}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClass}>
      {renderInner()}
    </button>
  );
}

export default Button;
