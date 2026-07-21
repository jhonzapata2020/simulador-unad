import { getSiteConfig, getLegalPage } from "@/lib/content/loader";
import { Header } from "@/components/sections/Header";

// Simple build-time markdown parser helper
function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl md:text-4xl font-display font-extrabold text-gradient-premium mt-8 mb-6 uppercase">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-display font-bold text-brand-light mt-8 mb-4 border-b border-brand-violet/10 pb-2 uppercase">$2</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-display font-semibold text-brand-violet mt-6 mb-3">$3</h3>')
    .replace(/^\* (.*$)/gim, '<li class="ml-6 list-disc text-brand-light/80 my-1.5">$1</li>')
    .replace(/^- (.*$)/gim, '<li class="ml-6 list-disc text-brand-light/80 my-1.5">$1</li>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-brand-light">$1</strong>')
    .replace(/`(.*?)`/g, '<code class="bg-brand-purple/20 text-brand-gold px-1.5 py-0.5 rounded font-mono text-sm">$1</code>')
    .split(/\n\n+/)
    .map((para) => {
      const trimmed = para.trim();
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<ul")
      ) {
        return trimmed;
      }
      return `<p class="text-base text-brand-light/85 leading-relaxed my-4">${trimmed.replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");
}

export default function PrivacyPolicyPage() {
  const siteConfig = getSiteConfig();
  const pageData = getLegalPage("politica-de-privacidad.md");
  const htmlContent = markdownToHtml(pageData.content);

  return (
    <>
      <Header
        logoText={siteConfig.general.logoText}
        ctaText="VOLVER AL INICIO"
        ctaUrl="/"
      />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Inner container with glassmorphic cards layout */}
          <div className="card-premium border-brand-violet/10 p-8 md:p-12 bg-brand-dark/40">
            <div
              className="prose prose-invert max-w-none text-brand-light/90"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </main>

      <footer className="py-8 bg-brand-dark border-t border-brand-violet/10 text-center text-xs text-brand-light/50">
        <div className="max-w-7xl mx-auto px-6">
          <p>{siteConfig.general.legalText}</p>
        </div>
      </footer>
    </>
  );
}
