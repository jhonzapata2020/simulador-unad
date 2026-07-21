"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  number: string;
  message: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  number,
  message,
}) => {
  if (
    !number ||
    number.includes("PENDIENTE") ||
    number.includes("DATOS_REALES_REQUERIDOS")
  ) {
    return null; // Don't show if number is pending, unverified or empty
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${number.replace(/\+/g, "")}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-brand-dark"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none -z-10"></span>
      
      <MessageCircle className="h-6 w-6 fill-current animate-pulse group-hover:animate-none" />
      
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-display font-semibold text-sm transition-all duration-300 group-hover:max-w-xs group-hover:ml-2">
        ¿Hablamos?
      </span>
    </a>
  );
};
