import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy | DietNexa",
  description:
    "DietNexa Privacy Policy: Learn how we protect, secure, and handle your personal health and nutrition information with clinical confidentiality.",
  keywords: [
    "DietNexa Privacy Policy",
    "Nutrition Data Privacy",
    "Clinical Confidentiality",
    "Dietitian Privacy",
    "Healthcare Data Protection",
  ],
  alternates: {
    canonical: "https://dietnexa.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | DietNexa",
    description:
      "Understand how DietNexa collects, protects, and respects your personal and dietary information.",
    url: "https://dietnexa.com/privacy",
    siteName: "DietNexa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | DietNexa",
    description:
      "DietNexa's commitment to patient confidentiality, data encryption, and transparent nutrition privacy practices.",
  },
};

export default function PrivacyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - DietNexa",
    url: "https://dietnexa.com/privacy",
    description:
      "DietNexa Privacy Policy: Clinical confidentiality, user rights, and transparent handling of dietary and health data.",
    publisher: {
      "@type": "Organization",
      name: "DietNexa",
      url: "https://dietnexa.com",
      logo: "https://dietnexa.com/image/dietnexa-white-logo.webp",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://dietnexa.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
          item: "https://dietnexa.com/privacy",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PrivacyClient />
    </>
  );
}

