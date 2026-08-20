import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Sin metadataBase, Next resuelve las imagenes relativas contra
  // http://localhost:3000 — y eso es literalmente lo que salia en produccion:
  //   <meta property="og:image" content="http://localhost:3000/bohiapp.png">
  // Facebook y X no pueden alcanzar localhost desde sus servidores, asi que la
  // tarjeta se renderizaba sin imagen en todo el sitio.
  metadataBase: new URL("https://bohiapp.com"),
  title: "BohiApp — Tu mercado latino, a un tap de distancia",
  description:
    "Descubre productos, tiendas, eventos y servicios de la comunidad latina. Compra de tiendas locales organizadas por país y cocina, consigue entradas para eventos y reserva servicios — todo en una sola app.",
  openGraph: {
    title: "BohiApp — Tu mercado latino, a un tap de distancia",
    description:
      "Productos, tiendas, eventos y servicios de la comunidad latina en una sola app.",
    images: ["/bohiapp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
