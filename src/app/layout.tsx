import { getSiteConfig } from "@/lib/content/loader";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export async function generateMetadata() {
  return {
    title: "SimuPy UNAD - Simulador Virtual de Fundamentos de Programación (ECBTI)",
    description: "Entorno interactivo de ejecución de código Python 3.12 con Pyodide en WebAssembly, editor Monaco, inspector de memoria y generador de evidencia oficial para informes de la UNAD.",
    keywords: "UNAD, SimuPy, ECBTI, Python 3.12, Pyodide, Monaco Editor, Fundamentos de Programacion, Simulador Python",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let gaId = "";
  let pixelId = "";

  try {
    const siteConfig = getSiteConfig();
    gaId = siteConfig.seo.googleAnalyticsId || "";
    pixelId = siteConfig.seo.metaPixelId || "";
  } catch (e) {
    console.error("Could not fetch analytics IDs from config:", e);
  }

  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="bg-brand-dark font-sans text-brand-light antialiased min-h-screen flex flex-col selection:bg-brand-purple selection:text-white">
        {children}

        {/* Conditionally load Google Analytics */}
        {gaId && gaId.trim() !== "" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

        {/* Conditionally load Meta Pixel */}
        {pixelId && pixelId.trim() !== "" && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
