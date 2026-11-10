import TermsClient from "./TermsClient";

export const metadata = {
  title: "Terms & Conditions | DietNexa",
  description:
    "DietNexa Terms & Conditions: Understand our service guidelines, consultation policies, medical disclaimers, and platform usage terms.",
  keywords: [
    "DietNexa Terms",
    "Terms and Conditions",
    "Nutrition Consultation Policy",
    "Dietitian Terms",
    "Health Disclaimer",
  ],
  alternates: {
    canonical: "https://dietnexa.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | DietNexa",
    description:
      "Review the terms and conditions for using DietNexa's nutrition tools, calculators, and consultation services.",
    url: "https://dietnexa.com/terms",
    siteName: "DietNexa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | DietNexa",
    description:
      "Official Terms of Service and consultation policies for DietNexa.",
  },
};

export default function TermsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions - DietNexa",
    url: "https://dietnexa.com/terms",
    description:
      "DietNexa Terms & Conditions: Service terms, medical disclaimers, and consultation policies.",
    publisher: {
      "@type": "Organization",
      name: "DietNexa",
      url: "https://dietnexa.com",
      logo: "https://dietnexa.com/image/DietNexa%20White%20Logo.png",
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
          name: "Terms & Conditions",
          item: "https://dietnexa.com/terms",
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
      <TermsClient />
    </>
  );
}

