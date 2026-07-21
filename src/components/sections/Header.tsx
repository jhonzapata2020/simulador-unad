"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  logoText: string;
  ctaText: string;
  ctaUrl: string;
}

export const Header: React.FC<HeaderProps> = ({
  logoText,
  ctaText,
  ctaUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Diagnóstico", href: "#diagnostico" },
    { label: "Método", href: "#metodo" },
    { label: "Módulos", href: "#modulos" },
    { label: "Recursos", href: "#recursos" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Preguntas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/85 backdrop-blur-md border-b border-brand-violet/10 py-4 shadow-lg shadow-black/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl md:text-2xl text-gradient-premium tracking-wide hover:opacity-90"
        >
          {logoText}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-brand-light/80 hover:text-brand-violet transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button variant="outline" size="sm" href={ctaUrl} className="group">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-brand-light p-2 focus:outline-none hover:text-brand-violet transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bg-brand-dark/95 backdrop-blur-lg border-b border-brand-violet/15 py-8 px-6 transition-all duration-300 shadow-xl ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-brand-light hover:text-brand-violet transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              variant="primary"
              size="md"
              href={ctaUrl}
              onClick={() => setIsOpen(false)}
              className="w-full justify-center group"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
