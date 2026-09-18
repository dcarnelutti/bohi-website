import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Las rutas canonicas son las inglesas porque el texto legal esta en ingles y
  // es lo que se pega en App Store Connect. Las castellanas existen igual
  // porque son las que alguien tipea, y un 404 en la politica de privacidad es
  // exactamente lo que no queremos que encuentre el revisor de Apple.
  async redirects() {
    return [
      { source: "/privacidad", destination: "/privacy", permanent: true },
      { source: "/terminos", destination: "/terms", permanent: true },
      { source: "/soporte", destination: "/support", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        // Apple exige que el apple-app-site-association se sirva como
        // application/json. El archivo no tiene extensión, así que Next lo
        // entrega como application/octet-stream y iOS lo descarta sin decir
        // nada: los universal links no se activan y el link abre en Safari.
        // Verificado en producción antes de este cambio.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
