import React from "react";
import { Globe } from "lucide-react";
import { GeneralConfig } from "@/types";

interface FooterProps {
  general: GeneralConfig;
}

export const Footer: React.FC<FooterProps> = ({ general }) => {
  const socials = [
    {
      key: "instagram",
      url: general.socials.instagram,
      Icon: Globe,
      label: "Instagram",
    },
    {
      key: "linkedin",
      url: general.socials.linkedin,
      Icon: Globe,
      label: "LinkedIn",
    },
    {
      key: "facebook",
      url: general.socials.facebook,
      Icon: Globe,
      label: "Facebook",
    },
    {
      key: "youtube",
      url: general.socials.youtube,
      Icon: Globe,
      label: "YouTube",
    },
  ].filter(
    (s) =>
      s.url &&
      !s.url.includes("PENDIENTE") &&
      !s.url.includes("DATOS_REALES_REQUERIDOS")
  );

  const isEmailValid =
    general.contactEmail &&
    !general.contactEmail.includes("PENDIENTE") &&
    !general.contactEmail.includes("DATOS_REALES_REQUERIDOS");

  return (
    <footer
      id="footer"
      className="bg-brand-dark border-t border-brand-violet/10 pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col space-y-3">
            <span className="font-display font-extrabold text-xl text-gradient-premium tracking-wide">
              {general.logoText}
            </span>
            <p className="text-xs text-brand-light/50 leading-relaxed max-w-xs">
              El sistema para construir un canal de ventas digital predecible y escalable.
            </p>
          </div>

          {/* Legal links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-display font-bold text-brand-light/60 uppercase tracking-widest">
              Legal
            </h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="/politica-de-privacidad/"
                className="text-xs text-brand-light/50 hover:text-brand-violet transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="/terminos-y-condiciones/"
                className="text-xs text-brand-light/50 hover:text-brand-violet transition-colors"
              >
                Términos y Condiciones
              </a>
            </nav>
          </div>

          {/* Social + Contact */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-display font-bold text-brand-light/60 uppercase tracking-widest">
              Contacto y Redes
            </h4>
            {socials.length > 0 && (
              <div className="flex gap-3">
                {socials.map(({ key, url, Icon, label }) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-lg bg-brand-violet/10 border border-brand-violet/15 text-brand-light/60 hover:text-brand-violet hover:bg-brand-violet/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-violet"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
            {isEmailValid && (
              <a
                href={`mailto:${general.contactEmail}`}
                className="text-xs text-brand-light/50 hover:text-brand-violet transition-colors"
              >
                {general.contactEmail}
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-brand-violet/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-light/40 text-center md:text-left">
            {general.legalText}
          </p>
          <p className="text-xs text-brand-light/25">
            Construido con Next.js · Alojado en Netlify
          </p>
        </div>
      </div>
    </footer>
  );
};
