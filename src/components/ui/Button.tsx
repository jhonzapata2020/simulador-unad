import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-bold rounded-lg transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-violet focus:ring-offset-2 focus:ring-offset-brand-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-purple to-brand-violet text-brand-light hover:brightness-110 shadow-lg shadow-brand-purple/25",
    secondary: "bg-brand-gold text-brand-dark hover:brightness-105 shadow-lg shadow-brand-gold/15",
    outline:
      "border border-brand-violet/30 text-brand-light hover:bg-brand-violet/10 hover:border-brand-violet/50",
    ghost: "text-brand-light hover:bg-brand-violet/15",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
