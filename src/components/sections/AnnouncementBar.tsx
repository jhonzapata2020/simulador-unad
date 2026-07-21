"use client";

import React, { useState } from "react";
import { X, Zap } from "lucide-react";

interface AnnouncementBarProps {
  text: string;
  ctaText?: string;
  ctaUrl?: string;
  visible?: boolean;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  text,
  ctaText,
  ctaUrl,
  visible = true,
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (!visible || dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-brand-purple via-brand-violet to-brand-purple text-white px-4 py-2.5 flex items-center justify-center text-center text-xs md:text-sm font-semibold">
      <Zap className="hidden sm:inline-block h-3.5 w-3.5 mr-2 text-brand-gold flex-shrink-0" />
      <span className="text-white/95">{text}</span>
      {ctaText && ctaUrl && (
        <a
          href={ctaUrl}
          className="ml-3 underline underline-offset-2 text-brand-gold hover:text-white transition-colors"
        >
          {ctaText}
        </a>
      )}
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
        aria-label="Cerrar aviso"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
