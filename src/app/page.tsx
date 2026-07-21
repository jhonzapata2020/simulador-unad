import {
  getSiteConfig,
  getHeroContent,
  getProblemsContent,
  getMethodContent,
  getBenefitsContent,
  getResourcesContent,
  getAudienceContent,
  getMentorshipContent,
  getOfferContent,
  getWarrantyContent,
  getModules,
  getTestimonials,
  getFaqs,
} from "@/lib/content/loader";

import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Method } from "@/components/sections/Method";
import { Benefits } from "@/components/sections/Benefits";
import { Modules } from "@/components/sections/Modules";
import { Resources } from "@/components/sections/Resources";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Mentorship } from "@/components/sections/Mentorship";
import { Offer } from "@/components/sections/Offer";
import { Warranty } from "@/components/sections/Warranty";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  const siteConfig = getSiteConfig();
  const heroContent = getHeroContent();
  const problemsContent = getProblemsContent();
  const methodContent = getMethodContent();
  const benefitsContent = getBenefitsContent();
  const resourcesContent = getResourcesContent();
  const audienceContent = getAudienceContent();
  const mentorshipContent = getMentorshipContent();
  const offerContent = getOfferContent();
  const warrantyContent = getWarrantyContent();
  const modules = getModules();
  const testimonials = getTestimonials();
  const faqs = getFaqs();

  return (
    <>
      {/* Announcement bar */}
      <AnnouncementBar
        text="🎓 Programa de lanzamiento con precio especial · Plazas limitadas"
        ctaText="Ver oferta"
        ctaUrl="#offer"
        visible={true}
      />

      {/* Sticky nav header */}
      <Header
        logoText={siteConfig.general.logoText}
        ctaText="UNIRME AL PROGRAMA"
        ctaUrl="#offer"
      />

      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero content={heroContent} />

        {/* 2. Problemas */}
        <Problems content={problemsContent} />

        {/* 3. Método Apex */}
        <Method content={methodContent} />

        {/* 4. Beneficios / Transformación */}
        <Benefits content={benefitsContent} />

        {/* 5. Módulos del programa */}
        <Modules modules={modules} />

        {/* 6. Recursos y plantillas */}
        <Resources content={resourcesContent} />

        {/* 7. Para quién es / Para quién no */}
        <TargetAudience content={audienceContent} />

        {/* 8. Testimonios */}
        <Testimonials testimonials={testimonials} />

        {/* 9. Mentoría */}
        <Mentorship content={mentorshipContent} />

        {/* 10. Oferta y precio */}
        <Offer content={offerContent} />

        {/* 11. Garantía */}
        <Warranty content={warrantyContent} />

        {/* 12. Preguntas frecuentes */}
        <Faq faqs={faqs} />

        {/* 13. CTA final */}
        <CtaFinal
          ctaPrimaryText="QUIERO EL PROGRAMA AHORA →"
          ctaPrimaryUrl={offerContent.checkoutUrl}
          offerTitle="¿LISTO PARA CONSTRUIR TU SISTEMA?"
        />
      </main>

      {/* Footer */}
      <Footer general={siteConfig.general} />

      {/* Floating WhatsApp button */}
      <FloatingWhatsApp
        number={siteConfig.general.whatsappNumber}
        message={siteConfig.general.whatsappMessage}
      />
    </>
  );
}
