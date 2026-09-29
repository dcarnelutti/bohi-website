// Copia de `shopflow/messages/{en,es}.json` (namespace `faq`). Si cambia una respuesta hay que cambiarla en los dos sitios, igual que privacidad y términos.
export type FaqGroup = { title: string; items: { q: string; a: string }[] };

export const FAQ: Record<'en' | 'es', { title: string; intro: string; contact: string; groups: FaqGroup[] }> = {
  en: {
    title: "Help and FAQ",
    intro: "Quick answers to the most common questions. Can't find yours? Write to us.",
    contact: "Write to info@bohiapp.com",
    groups: [
      {
        title: "Orders and pickup",
        items: [
          { q: "How does pickup work?", a: "Add products to your cart and place the order. For each store you choose \"as soon as possible\" or a specific day and time, and the store confirms it or suggests another time. When it's ready, go to the store's address and show your order. BohiApp orders are picked up in person." },
          { q: "Can I order from several stores at once?", a: "Each order is from a single store, so the store that prepares it is the one that gets paid and hands it over. If you want products from two stores, place two orders." },
          { q: "Can I cancel an order?", a: "Yes, from the order screen. If the store hasn't started preparing it, you get everything back. If they already started, they need to approve the cancellation, and you'll see their answer on the same screen. Once it's ready and waiting, it can't be cancelled: let the store know if you can't make it." },
          { q: "Something is wrong with my order", a: "The fastest way is to write to the store from the order screen, since they prepared it. If you can't resolve it with them, write to info@bohiapp.com and we'll step in." },
        ],
      },
      {
        title: "Payments and refunds",
        items: [
          { q: "How can I pay?", a: "With a credit or debit card, or Apple Pay. Some stores also accept cash or card at the counter when you pick up, and you'll see it at checkout before confirming. Payments by card are processed securely by Stripe, and BohiApp never sees your card number." },
          { q: "Who am I paying?", a: "The store, event organizer or service provider you're buying from. They're the seller of record and the money goes directly to them; BohiApp is the platform that connects you." },
          { q: "What is the welcome credit?", a: "A discount of up to $5.00 per order that you can use on card payments. You'll see it at checkout when it applies." },
          { q: "How do I get a refund?", a: "If you cancel an order before the store starts preparing it, the refund is for the full amount. Tickets and appointments follow the cancellation policy shown before you pay. The refund goes back to the same card and can take a few business days to show up." },
        ],
      },
      {
        title: "Events and tickets",
        items: [
          { q: "Where is my ticket?", a: "In Profile, under My Tickets. Every ticket has a QR code: show it at the entrance and the organizer scans it. It works for free events too." },
          { q: "How do I join an online event?", a: "Once your order is paid, the streaming link appears at the top of your ticket screen. There's no QR to scan or address to go to." },
          { q: "Can I get my money back for a ticket?", a: "The refund policy is shown before you pay. If you have a problem, write to the organizer, and if you can't resolve it with them, write to us." },
        ],
      },
      {
        title: "Appointments",
        items: [
          { q: "How do I book an appointment?", a: "Open the service provider, choose the service, day and time, and pay in advance to confirm it. The provider gets the booking and you'll see it in Profile, under My Appointments." },
          { q: "Can I cancel an appointment?", a: "Yes, from the appointment. The provider's cancellation policy is shown before you pay. Any cancellation fee is only informational: it isn't charged automatically, so it's settled directly with the provider. The time slot is freed up as soon as you cancel." },
        ],
      },
      {
        title: "Your account",
        items: [
          { q: "Can I use the app in Spanish or English?", a: "Yes. Go to Profile, Preferences, and choose your language. The app changes right away." },
          { q: "How do I report or block a review?", a: "Tap the options on the review and choose to report it, hide it or block the author. Reporting doesn't delete it: BohiApp reviews the case and decides. If a review is removed, its author is told why." },
          { q: "Is there an age requirement?", a: "You need to be at least 18 years old to use BohiApp. We ask for your date of birth when you set up your profile." },
          { q: "How do I delete my account?", a: "Go to Profile, scroll to the bottom and tap Delete account. Your personal information is removed from the platform. If you own a store, you need to transfer or close it first." },
        ],
      },
    ],
  },
  es: {
    title: "Ayuda y preguntas frecuentes",
    intro: "Respuestas rápidas a las dudas más comunes. ¿No encuentras la tuya? Escríbenos.",
    contact: "Escribir a info@bohiapp.com",
    groups: [
      {
        title: "Pedidos y recogida",
        items: [
          { q: "¿Cómo funciona la recogida?", a: "Agrega productos al carrito y haz el pedido. Por cada tienda eliges «lo antes posible» o un día y una hora concretos, y la tienda lo confirma o te propone otra hora. Cuando esté listo, ve a la dirección de la tienda y muestra tu pedido. Los pedidos de BohiApp se recogen en persona." },
          { q: "¿Puedo pedir a varias tiendas a la vez?", a: "Cada pedido es de una sola tienda, así la tienda que lo prepara es la que cobra y te lo entrega. Si quieres productos de dos tiendas, haz dos pedidos." },
          { q: "¿Puedo cancelar un pedido?", a: "Sí, desde la pantalla del pedido. Si la tienda aún no empezó a prepararlo, te devuelven todo. Si ya empezó, necesita aprobar la cancelación y verás su respuesta en la misma pantalla. Cuando ya está listo y esperándote no se puede cancelar: avisa a la tienda si no puedes ir." },
          { q: "Hay un problema con mi pedido", a: "Lo más rápido es escribirle a la tienda desde la pantalla del pedido, porque fue quien lo preparó. Si no lo resuelves con ella, escribe a info@bohiapp.com y intervenimos." },
        ],
      },
      {
        title: "Pagos y reembolsos",
        items: [
          { q: "¿Cómo puedo pagar?", a: "Con tarjeta de crédito o débito, o con Apple Pay. Algunas tiendas también aceptan efectivo o tarjeta en el mostrador al recoger, y lo verás al pagar antes de confirmar. Los pagos con tarjeta los procesa Stripe de forma segura y BohiApp nunca ve el número de tu tarjeta." },
          { q: "¿A quién le estoy pagando?", a: "A la tienda, el organizador del evento o el proveedor del servicio al que le compras. Son quienes venden y el dinero va directo a ellos; BohiApp es la plataforma que te conecta." },
          { q: "¿Qué es el crédito de bienvenida?", a: "Un descuento de hasta $5.00 por pedido que puedes usar en pagos con tarjeta. Lo verás al pagar cuando aplique." },
          { q: "¿Cómo obtengo un reembolso?", a: "Si cancelas un pedido antes de que la tienda empiece a prepararlo, el reembolso es por el total. Las entradas y las citas siguen la política de cancelación que ves antes de pagar. El reembolso vuelve a la misma tarjeta y puede tardar unos días hábiles en aparecer." },
        ],
      },
      {
        title: "Eventos y entradas",
        items: [
          { q: "¿Dónde está mi entrada?", a: "En Perfil, en Mis entradas. Cada entrada tiene un código QR: muéstralo en la entrada y el organizador lo escanea. También funciona en eventos gratuitos." },
          { q: "¿Cómo entro a un evento en línea?", a: "Cuando tu pedido está pagado, el enlace de la transmisión aparece arriba de todo en la pantalla de tu entrada. No hay QR que escanear ni dirección a la que ir." },
          { q: "¿Puedo recuperar el dinero de una entrada?", a: "La política de reembolso se muestra antes de pagar. Si tienes un problema, escríbele al organizador, y si no lo resuelves con él, escríbenos." },
        ],
      },
      {
        title: "Citas",
        items: [
          { q: "¿Cómo reservo una cita?", a: "Abre al proveedor, elige el servicio, el día y la hora, y paga por adelantado para confirmarla. El proveedor recibe la reserva y tú la ves en Perfil, en Mis citas." },
          { q: "¿Puedo cancelar una cita?", a: "Sí, desde la propia cita. La política de cancelación del proveedor se muestra antes de pagar. Cualquier cargo por cancelación es solo informativo: no se cobra automáticamente, se arregla directamente con el proveedor. El horario se libera en cuanto cancelas." },
        ],
      },
      {
        title: "Tu cuenta",
        items: [
          { q: "¿Puedo usar la app en español o en inglés?", a: "Sí. Ve a Perfil, Preferencias y elige tu idioma. La app cambia al instante." },
          { q: "¿Cómo denuncio o bloqueo una reseña?", a: "Toca las opciones de la reseña y elige denunciarla, ocultarla o bloquear al autor. Denunciar no la borra: BohiApp revisa el caso y decide. Si se elimina una reseña, su autor recibe el motivo." },
          { q: "¿Hay una edad mínima?", a: "Debes tener al menos 18 años para usar BohiApp. Te pedimos la fecha de nacimiento al configurar tu perfil." },
          { q: "¿Cómo elimino mi cuenta?", a: "Ve a Perfil, baja hasta el final y toca Eliminar cuenta. Tu información personal se borra de la plataforma. Si eres dueño de una tienda, primero tienes que transferirla o cerrarla." },
        ],
      },
    ],
  },
};
