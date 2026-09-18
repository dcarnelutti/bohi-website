// COPIA. La fuente de verdad es shopflow/constants/terms.ts, que es lo que se ve
// DENTRO de la app. Esta copia existe porque Apple exige una URL publica de
// politica de privacidad: la pantalla de la app no le sirve a App Store Connect.
// Si cambia una, tiene que cambiar la otra — no hay paquete compartido entre los
// dos repos.


export const TERMS_EFFECTIVE_DATE = 'June 15, 2026';
export const TERMS_LAST_UPDATED = 'June 15, 2026';

type Block =
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] };

export interface TermsSection {
  title: string;
  blocks: Block[];
}

export const TERMS_SECTIONS: TermsSection[] = [
  {
    title: '1. Introduction and Acceptance of Terms',
    blocks: [
      {
        kind: 'paragraph',
        text: 'BohiApp (referred to as “BohiApp”, “we”, “us”, or “our”) operates a mobile/platform application that connects service providers (“Providers”) with clients (“Clients”) in Alberta, Canada.',
      },
      {
        kind: 'paragraph',
        text: 'These Terms and Conditions (“Terms”) govern your use of the BohiApp platform as a Provider. By registering as a Provider, accessing, or using BohiApp, you agree to be bound by these Terms. If you do not agree, do not use the platform.',
      },
      {
        kind: 'paragraph',
        text: 'We may update these Terms from time to time. We will notify you of material changes (e.g., via email or in-app notice). Your continued use after changes constitutes acceptance of the new Terms.',
      },
      {
        kind: 'paragraph',
        text: 'Governing Law: These Terms are governed by the laws of the Province of Alberta and the applicable federal laws of Canada. Any disputes shall be resolved exclusively in the courts of Alberta.',
      },
    ],
  },
  {
    title: '2. Our Role as a Platform',
    blocks: [
      {
        kind: 'paragraph',
        text: 'BohiApp is an intermediary platform only. We provide a marketplace for Providers and Clients to connect, facilitate payments, and enable communication.',
      },
      {
        kind: 'bullets',
        items: [
          'We are not a party to any agreement between Providers and Clients.',
          'We do not provide, sell, deliver, or supervise any services or goods.',
          'Providers are solely responsible for: the quality, safety, legality, and delivery of all services/goods; pricing, invoicing, fulfillment, refunds, warranties, and customer service; complying with all applicable laws, including licensing, insurance, taxes, and consumer protection requirements in Alberta; and handling all disputes, complaints, or claims from Clients.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'You acknowledge that BohiApp has no control over, and assumes no liability for, the actions or omissions of Clients or other Providers.',
      },
    ],
  },
  {
    title: '3. Provider Eligibility and Responsibilities',
    blocks: [
      { kind: 'paragraph', text: 'To use BohiApp as a Provider, you must:' },
      {
        kind: 'bullets',
        items: [
          'Be at least 18 years old and legally capable of forming contracts.',
          'Hold all necessary licenses, permits, insurance, and qualifications required by Alberta law for the services/goods you offer.',
          'Provide accurate, complete, and up-to-date information in your profile and listings.',
          'Act professionally, honestly, and in compliance with all laws.',
          'Maintain appropriate insurance coverage for your activities.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'You are an independent contractor, not an employee, agent, or partner of BohiApp. You are solely responsible for your own taxes, workers’ compensation, and business obligations.',
      },
      {
        kind: 'paragraph',
        text: 'Prohibited Conduct: You may not use BohiApp for illegal activities, false advertising, harassment, spam, discrimination, or any action that harms the platform’s reputation.',
      },
    ],
  },
  {
    title: '4. Payments and Fees',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Clients pay for services/goods through BohiApp’s payment system. BohiApp may charge a service fee or commission (clearly displayed before transactions).',
      },
      {
        kind: 'paragraph',
        text: 'You authorize us to collect payments on your behalf and remit funds to you according to our payout schedule, minus applicable fees. You are responsible for any refunds or chargebacks issued to Clients. BohiApp is not responsible for payment disputes between you and Clients.',
      },
    ],
  },
  {
    title: '5. Intellectual Property and Privacy',
    blocks: [
      {
        kind: 'bullets',
        items: [
          'The BohiApp platform, app, and all related content (except your provided materials) are owned by BohiApp or its licensors. You are granted a limited, non-exclusive license to use the platform for its intended purpose.',
          'By posting content (profiles, listings, photos), you grant BohiApp a worldwide, royalty-free license to use, display, and distribute it for operating and promoting the platform.',
          'You must respect the intellectual property of others.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Privacy: Your use of BohiApp is also governed by our separate Privacy Policy, which complies with Alberta’s Personal Information Protection Act (PIPA). You consent to the collection, use, and disclosure of your information as described therein. You must also obtain any necessary consents from Clients regarding their personal information.',
      },
    ],
  },
  {
    title: '6. Termination and Limitation of Liability',
    blocks: [
      {
        kind: 'paragraph',
        text: 'We may suspend or terminate your account at any time for violations of these Terms, with or without notice.',
      },
      {
        kind: 'paragraph',
        text: 'Disclaimer of Warranties: The platform is provided “as is” and “as available” without any warranties. We do not guarantee uptime, error-free operation, or matching quality.',
      },
      {
        kind: 'paragraph',
        text: 'Limitation of Liability: To the maximum extent permitted by Alberta law, BohiApp and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages. Our total liability shall not exceed the fees paid to us by you in the 12 months prior to the claim.',
      },
      {
        kind: 'paragraph',
        text: 'You agree to indemnify and hold harmless BohiApp against any claims, losses, or damages arising from your services, content, or breach of these Terms.',
      },
    ],
  },
  {
    title: '7. General Provisions',
    blocks: [
      {
        kind: 'bullets',
        items: [
          'Severability: If any part of these Terms is invalid, the rest remains enforceable.',
          'Entire Agreement: These Terms (along with the Privacy Policy) constitute the full agreement.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'By creating an account or using BohiApp as a Provider, you confirm that you have read, understood, and agree to these Terms.',
      },
    ],
  },
];
