import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
