import ToolsDirectoryClient from "./ToolsDirectoryClient";
import { getAllTools, categories } from "@/lib/toolsData";

export const metadata = {
  title: "Scientific Nutrition Tools & Dietary Calculators | DietNexa",
  description:
    "A comprehensive collection of 100 easy-to-use, science-backed nutrition calculators to assess your health, plan your diet, and make informed lifestyle choices. Clinically verified by DietNexa expert dietitians.",
  keywords: [
    "Nutrition Tools",
    "Dietary Calculators",
    "BMI Calculator",
    "Daily Calorie Calculator",
    "Protein Calculator",
    "TDEE Calculator",
    "Water Intake Calculator",
    "Weight Loss Timeline",
    "Diet Planning",
    "Clinical Nutrition Tools",
    "DietNexa",
    "Online Dietitian India",
  ],
  alternates: {
    canonical: "https://dietnexa.com/tools",
  },
  openGraph: {
    title: "Scientific Nutrition Tools & Dietary Calculators | DietNexa",
    description:
      "A comprehensive collection of 100 easy-to-use, science-backed nutrition calculators to assess your health, plan your diet, and make informed lifestyle choices.",
    url: "https://dietnexa.com/tools",
    siteName: "DietNexa",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Nutrition Tools & Dietary Calculators | DietNexa",
    description:
      "100 free scientific nutrition & diet calculators trusted by certified dietitians.",
  },
};

export default function ToolsPage() {
  const allTools = getAllTools();

  // Structured Data Schema for SEO (CollectionPage & ItemList)
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Scientific Nutrition Tools & Dietary Calculators",
    url: "https://dietnexa.com/tools",
    description:
      "Comprehensive directory of 100 scientific nutrition calculators across 10 clinical disciplines.",
    publisher: {
      "@type": "Organization",
      name: "DietNexa",
      url: "https://dietnexa.com",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allTools.length,
      itemListElement: allTools.map((t, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: t.name,
        url: `https://dietnexa.com/tools/${t.slug}`,
        description: t.shortDesc,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Resources",
        item: "https://dietnexa.com/#reviews",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Nutrition Tools & Calculators",
        item: "https://dietnexa.com/tools",
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main Interactive Client UI matching screenshot */}
      <ToolsDirectoryClient />
    </>
  );
}
