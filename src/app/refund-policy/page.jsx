import RefundPolicyClient from "./RefundPolicyClient";

export const metadata = {
  title: "Cancellation & Refund Policy | DietNexa",
  description:
    "Review DietNexa's Cancellation and Refund Policy. Transparent guidelines for clinical nutrition consultations, customized diet plans, and session rescheduling.",
  keywords: [
    "DietNexa Refund Policy",
    "Cancellation Policy",
    "Dietitian Consultation Refund",
    "Nutrition Plan Return",
    "DietNexa Terms",
  ],
  alternates: {
    canonical: "https://dietnexa.com/refund-policy",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | DietNexa",
    description:
      "Transparent cancellation and refund terms for DietNexa dietitian appointments and personalized meal plans.",
    url: "https://dietnexa.com/refund-policy",
    siteName: "DietNexa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cancellation & Refund Policy | DietNexa",
    description:
      "Official Cancellation and Refund Policy for DietNexa healthcare and nutrition consultations.",
  },
};

export default function RefundPolicyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cancellation & Refund Policy - DietNexa",
    url: "https://dietnexa.com/refund-policy",
    description:
      "Guidelines on cancellations, refund processing timelines, and dietitian session rescheduling at DietNexa.",
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
          name: "Refund Policy",
          item: "https://dietnexa.com/refund-policy",
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
      <RefundPolicyClient />
    </>
  );
}

