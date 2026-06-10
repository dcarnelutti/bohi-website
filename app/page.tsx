import Image from "next/image";
import styles from "./page.module.css";

const countries = [
  { flag: "🇻🇪", name: "Venezuela" },
  { flag: "🇨🇴", name: "Colombia" },
  { flag: "🇲🇽", name: "México" },
  { flag: "🇵🇪", name: "Perú" },
  { flag: "🇦🇷", name: "Argentina" },
  { flag: "🇩🇴", name: "Rep. Dominicana" },
  { flag: "🇨🇺", name: "Cuba" },
  { flag: "🇸🇻", name: "El Salvador" },
];

const features = [
  {
    icon: "🛍️",
    title: "Tiendas por país y cocina",
    text: "Encuentra los sabores de casa: tiendas locales organizadas por país y tipo de cocina, con búsqueda instantánea.",
  },
  {
    icon: "🎟️",
    title: "Eventos con entradas QR",
    text: "Compra entradas para conciertos, ferias y festivales de tu comunidad. Tu entrada es un código QR en tu teléfono.",
  },
  {
    icon: "📅",
    title: "Servicios con reserva",
    text: "Reserva citas con proveedores de servicios de confianza, con horarios en tiempo real y prepago seguro.",
  },
  {
    icon: "🔒",
    title: "Pagos seguros con Stripe",
    text: "Paga con tarjeta de forma segura. Tus datos nunca tocan nuestros servidores.",
  },
  {
    icon: "❤️",
    title: "Favoritos y pedidos",
    text: "Guarda tus productos favoritos, sigue tus pedidos y repite compras en segundos.",
  },
  {
    icon: "🏪",
    title: "Para vendedores",
    text: "¿Tienes un negocio? Publica tus productos, gestiona pedidos y haz crecer tu tienda con nuestro portal de vendedores.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#" className={styles.brand}>
          <Image src="/bohiapp.png" alt="BohiApp" width={36} height={36} className={styles.logo} />
          <span>BohiApp</span>
        </a>
        <nav className={styles.nav}>
          <a href="#features">Funciones</a>
          <a href="#countries">Comunidades</a>
          <a href="#vendors">Vendedores</a>
        </nav>
        <a href="#download" className={styles.headerCta}>
          Descargar
        </a>
      </header>

      <main>
        {/* Hero — mirrors the app's HeroCarousel card style */}
        <section className={styles.hero} id="download">
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>Tu comunidad, en tu bolsillo</span>
            <h1>
              Tu mercado latino,{" "}
              <span className={styles.heroHighlight}>a un tap de distancia</span>
            </h1>
            <p>
              Productos, tiendas, eventos y servicios de la comunidad latina —
              todo en una sola app. Compra de tiendas locales, consigue entradas
              con QR y reserva servicios de confianza.
            </p>
            <div className={styles.storeButtons}>
              <a href="#" className={styles.storeBtn}>
                 App Store
              </a>
              <a href="#" className={styles.storeBtnAlt}>
                ▶ Google Play
              </a>
            </div>
          </div>

          <div className={styles.phoneFrame} aria-hidden="true">
            <div className={styles.phoneScreen}>
              <div className={styles.phoneHeader}>
                <span className={styles.phoneBrand}>BohiApp</span>
                <span className={styles.phoneCart}>🛒</span>
              </div>
              <div className={styles.phoneSearch}>🔍 Buscar productos…</div>
              <div className={styles.phoneCard}>
                <span className={styles.phoneCardBadge}>Evento destacado</span>
                <div className={styles.phoneCardBody}>
                  <span className={styles.phoneCardMeta}>📅 Este fin de semana</span>
                  <span className={styles.phoneCardTitle}>Feria Latina 2026</span>
                  <span className={styles.phoneCardCta}>Comprar entradas</span>
                </div>
              </div>
              <div className={styles.phoneDots}>
                <span className={styles.phoneDotActive} />
                <span className={styles.phoneDot} />
                <span className={styles.phoneDot} />
              </div>
              <div className={styles.phoneChips}>
                {countries.slice(0, 4).map((c) => (
                  <span key={c.name} className={styles.phoneChip}>
                    {c.flag} {c.name}
                  </span>
                ))}
              </div>
              <div className={styles.phoneGrid}>
                <div className={styles.phoneProduct}>
                  <div className={styles.phoneProductImg}>🫓</div>
                  <span>Harina P.A.N.</span>
                </div>
                <div className={styles.phoneProduct}>
                  <div className={styles.phoneProductImg}>☕</div>
                  <span>Café de origen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countries — mirrors CountryCarousel */}
        <section className={styles.countries} id="countries">
          <h2>Sabores de toda Latinoamérica</h2>
          <p className={styles.sectionSub}>
            Tiendas y productos organizados por país, como en la app.
          </p>
          <div className={styles.countryRow}>
            {countries.map((c) => (
              <span key={c.name} className={styles.countryChip}>
                <span className={styles.countryFlag}>{c.flag}</span>
                {c.name}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className={styles.features} id="features">
          <h2>Todo lo que necesitas, en una app</h2>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vendor CTA */}
        <section className={styles.vendorCta} id="vendors">
          <h2>¿Tienes un negocio o organizas eventos?</h2>
          <p>
            Únete a BohiApp como vendedor, organizador o proveedor de servicios
            y llega a toda la comunidad latina de tu ciudad.
          </p>
          <a href="mailto:hola@bohiapp.com" className={styles.vendorBtn}>
            Quiero vender en BohiApp
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image src="/bohiapp.png" alt="BohiApp" width={28} height={28} className={styles.logo} />
          <span>BohiApp</span>
        </div>
        <p>© {new Date().getFullYear()} BohiApp. Hecho con cariño para la comunidad latina.</p>
      </footer>
    </div>
  );
}
