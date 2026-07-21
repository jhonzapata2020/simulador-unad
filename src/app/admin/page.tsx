"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Ensure the CMS config link is present in head
    if (!document.querySelector('link[rel="cms-config-url"]')) {
      const link = document.createElement("link");
      link.rel = "cms-config-url";
      link.type = "text/yaml";
      link.href = "/admin/config.yml";
      document.head.appendChild(link);
    }

    // Load Sveltia CMS script
    if (!document.querySelector('script[src*="sveltia-cms"]')) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#11081A",
        color: "#ffffff",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Panel de Administración
        </h1>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          Cargando Sveltia CMS...
        </p>
      </div>
    </div>
  );
}
