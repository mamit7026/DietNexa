import SitemapClient from "./SitemapClient";
import { getAllTools, categories } from "@/lib/toolsData";

export const metadata = {
  title: "HTML Sitemap — All Pages, Services & Health Calculators | DietNexa",
  description:
    "Explore the complete DietNexa site directory. Quick access to our clinical nutrition services, dietitian consultations, 100 scientific health calculators, and legal policies.",
  keywords: [
    "DietNexa Sitemap",
    "Website Directory",
    "Nutrition Services Directory",
    "Health Calculators List",
    "Dietitian Consultation Pages",
  ],
  alternates: {
    canonical: "https://dietnexa.com/sitemap",
  },
  openGraph: {
    title: "Sitemap | DietNexa",
    description:
      "Full directory of DietNexa services, 100 nutrition calculators, and patient resources.",
    url: "https://dietnexa.com/sitemap",
    siteName: "DietNexa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sitemap | DietNexa",
    description:
      "Browse the complete index of DietNexa tools, clinical services, and health guides.",
  },
};

export default function SitemapPage() {
  const tools = getAllTools();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DietNexa Visual Sitemap & Site Index",
    url: "https://dietnexa.com/sitemap",
    description:
      "Complete site index of DietNexa clinical nutrition services, health calculators, and clinical guides.",
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
          name: "Sitemap",
          item: "https://dietnexa.com/sitemap",
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
      <SitemapClient tools={tools} categories={categories} />
    </>
  );
}

