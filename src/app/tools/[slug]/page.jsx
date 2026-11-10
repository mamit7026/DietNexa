import { notFound } from "next/navigation";
import {
  getToolBySlug,
  getAllToolSlugs,
} from "@/lib/toolsData";
import ToolPageClient from "./ToolPageClient";

// 1. Generate Static Params for all 100 tools for static pre-rendering
export async function generateStaticParams() {
  const slugs = getAllToolSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// 2. SEO Metadata Generation for each tool page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Nutrition Tool Not Found | DietNexa",
      description: "The requested nutrition calculator could not be found.",
    };
  }

  const pageUrl = `https://dietnexa.com/tools/${tool.slug}`;

  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    keywords: [
      tool.name,
      `${tool.name} online`,
      tool.calculation,
      `${tool.categoryName}`,
      "nutrition calculator",
      "diet calculator India",
      "dietitian calculator",
      "free nutrition tool",
      "DietNexa",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription,
      url: pageUrl,
      siteName: "DietNexa",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.seoTitle,
      description: tool.seoDescription,
    },
  };
}

// 3. Page Component
export default async function ToolPage({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = (tool.relatedSlugs || [])
    .map((s) => getToolBySlug(s))
    .filter(Boolean);

  // Structured Schema Markup (WebApplication, BreadcrumbList, FAQPage)
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    url: `https://dietnexa.com/tools/${tool.slug}`,
    applicationCategory: "HealthApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
    description: tool.seoDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    creator: {
      "@type": "Organization",
      name: "DietNexa",
      url: "https://dietnexa.com",
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
        name: "Nutrition Tools",
        item: "https://dietnexa.com/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.categoryName,
        item: `https://dietnexa.com/tools#cat-${tool.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: tool.name,
        item: `https://dietnexa.com/tools/${tool.slug}`,
      },
    ],
  };

  const faqSchema = tool.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: tool.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }
    : null;

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Interactive Tool Page Client Component */}
      <ToolPageClient tool={tool} relatedTools={relatedTools} />
    </>
  );
}

