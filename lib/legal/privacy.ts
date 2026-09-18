// COPIA. La fuente de verdad es shopflow/constants/privacy.ts, que es lo que se ve
// DENTRO de la app. Esta copia existe porque Apple exige una URL publica de
// politica de privacidad: la pantalla de la app no le sirve a App Store Connect.
// Si cambia una, tiene que cambiar la otra — no hay paquete compartido entre los
// dos repos.


export const PRIVACY_EFFECTIVE_DATE = 'June 15, 2026';
export const PRIVACY_LAST_UPDATED = 'August 11, 2026';

type Block =
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] };

export interface PrivacySection {
  title: string;
  blocks: Block[];
}

export const PRIVACY_INTRO: Block[] = [
  {
    kind: 'paragraph',
    text: 'BohiApp (“BohiApp”, “we”, “us”, or “our”) operates a platform that connects service providers (“Providers”) with clients (“Clients”) in Alberta, Canada. We are committed to protecting your privacy and handling personal information responsibly in accordance with Alberta’s Personal Information Protection Act (PIPA) and applicable Canadian laws.',
  },
  {
    kind: 'paragraph',
    text: 'This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you use our mobile app and related services (collectively, the “Platform”). By using BohiApp, you consent to the practices described here. If you do not agree, please do not use the Platform.',
  },
];

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    title: '1. Information We Collect',
    blocks: [
      { kind: 'paragraph', text: 'We collect the following types of personal information:' },
      {
        kind: 'bullets',
        items: [
          'Account Information: Name, email address, phone number (used, with your consent, for SMS notifications and promotions), password, profile photo, location (city/province), and government-issued ID or business registration details (for Providers).',
          'Profile and Service Information: For Providers — business details, service descriptions, pricing, availability, reviews, and ratings. For Clients — preferences and service history.',
          'Transaction Data: Payment information (processed by third-party providers), billing address, and transaction history.',
          'Usage and Technical Data: Device information, IP address, app usage logs, crash reports, and device identifiers or similar technologies for analytics and functionality.',
          'Communication Data: Messages, support inquiries, and feedback between users and us.',
          'Other: Any information you voluntarily provide (e.g., in reviews or disputes).',
        ],
      },
      {
        kind: 'paragraph',
        text: 'We limit collection to what is reasonable and necessary for the purposes outlined below.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    blocks: [
      { kind: 'paragraph', text: 'We use personal information for the following purposes:' },
      {
        kind: 'bullets',
        items: [
          'To create and manage your account.',
          'To facilitate connections, communications, bookings, and transactions between Providers and Clients.',
          'To process payments and payouts.',
          'To provide customer support and resolve disputes.',
          'To improve, personalize, and maintain the Platform (including analytics and security).',
          'To send important notices, updates, and marketing communications by email, push notification, and SMS (you may opt out of marketing at any time; promotional SMS is sent only with your express consent).',
          'To comply with legal obligations, enforce our Terms and Conditions, and protect our rights.',
        ],
      },
    ],
  },
  {
    title: '3. Sharing and Disclosure of Information',
    blocks: [
      { kind: 'paragraph', text: 'We may share personal information in these circumstances:' },
      {
        kind: 'bullets',
        items: [
          'With the other party in a transaction (e.g., Providers receive Client contact and service details, and vice versa) as necessary to fulfill services.',
          'With service providers and contractors (e.g., payment processors, cloud hosting, analytics tools) who are bound by confidentiality.',
          'With law enforcement, regulators, or others where required or permitted by law.',
          'In the event of a business sale, merger, or reorganization.',
          'With your consent or at your direction.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'We do not sell personal information to third parties for marketing purposes.',
      },
    ],
  },
  {
    title: '4. Data Storage, Location, and Service Providers Outside Canada',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Your personal information is stored in a database hosted in Canada (Toronto region). We use reasonable administrative, technical, and physical safeguards to protect against unauthorized access, loss, or misuse. However, no system is completely secure.',
      },
      {
        kind: 'paragraph',
        text: 'We use service providers located outside Canada to operate parts of the platform. As required by Alberta’s Personal Information Protection Act, the countries in which your personal information may be collected, used, disclosed, or stored by those providers, and the purposes for which each is authorized to handle it, are:',
      },
      {
        kind: 'bullets',
        items: [
          'Supabase (United States) — database, sign-in, and file storage. Your data is stored in Supabase’s Canadian region; Supabase personnel in the United States may access the infrastructure for support and maintenance.',
          'Stripe (United States) — processing payments, issuing refunds, and paying vendors, service providers, and event organizers.',
          'SendGrid / Twilio (United States) — sending transactional email such as welcome messages, appointment confirmations, and event notifications.',
          'PostHog (United States) — product analytics to understand how the app is used and improve it.',
          'Sentry (United States) — automated error and crash reporting so we can diagnose technical faults.',
          'Expo (United States) — building and delivering app updates. This service handles application code only, not your personal information.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'While your personal information is held by a provider outside Canada, it may be subject to the laws of that country, including lawful access requests by its courts or government authorities. You may obtain written information about our policies and practices regarding service providers outside Canada, and ask any questions about their collection, use, disclosure, or storage of your personal information, by contacting the BohiApp Privacy Officer using the details in the “Contact Us” section below.',
      },
      {
        kind: 'paragraph',
        text: 'We retain personal information only as long as necessary for the purposes described or as required by law. When no longer needed, we securely delete or anonymize it.',
      },
      {
        kind: 'paragraph',
        text: 'When you delete your account, we immediately erase your profile and personal data (name, contact details, saved items and preferences). However, records of your past transactions — orders, ticket and appointment purchases, and payments — are retained in anonymized form (no longer linked to your identity) for the period required by Canadian tax and accounting law, generally six to seven years, after which they are securely deleted. Payment records are also retained by our payment processor, Stripe, in accordance with its own legal obligations.',
      },
    ],
  },
  {
    title: '5. Your Rights and Choices',
    blocks: [
      { kind: 'paragraph', text: 'Under PIPA, you have rights including:' },
      {
        kind: 'bullets',
        items: [
          'Access and Correction: Request access to your personal information or ask us to correct inaccuracies.',
          'Withdrawal of Consent: Withdraw consent to certain uses or disclosures (subject to legal or contractual restrictions). Note that this may limit your ability to use parts of the Platform.',
          'Opt-Out: Unsubscribe from marketing emails.',
          'Complaints: File a complaint with us or the Office of the Information and Privacy Commissioner of Alberta (OIPC).',
        ],
      },
      {
        kind: 'paragraph',
        text: 'To exercise your rights, contact us using the details below. We will respond within 30 days (or as required by law).',
      },
    ],
  },
  {
    title: '6. Device Identifiers and Local Storage',
    blocks: [
      {
        kind: 'paragraph',
        text: 'We use on-device storage and device identifiers to enable app functionality, remember your preferences, analyze usage, and improve security. You can manage or reset advertising and device identifiers through your device settings, though disabling some may affect app performance.',
      },
    ],
  },
  {
    title: '7. Children’s Privacy',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Our Platform is not intended for users under 18 years old. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it.',
      },
    ],
  },
  {
    title: '8. Changes to This Privacy Policy',
    blocks: [
      {
        kind: 'paragraph',
        text: 'We may update this Privacy Policy from time to time. We will notify you of material changes via in-app notice, email, or other means. Your continued use of the Platform after changes constitutes acceptance of the updated policy.',
      },
    ],
  },
  {
    title: '9. Contact Us',
    blocks: [
      {
        kind: 'paragraph',
        text: 'If you have questions, requests, or concerns about this Privacy Policy or our privacy practices, please contact the BohiApp Privacy Officer:',
      },
      {
        kind: 'bullets',
        items: ['Email: info@bohiapp.com', 'Address: Calgary, Alberta'],
      },
      {
        kind: 'paragraph',
        text: 'You may also contact the Office of the Information and Privacy Commissioner of Alberta: oipc.ab.ca.',
      },
    ],
  },
];
