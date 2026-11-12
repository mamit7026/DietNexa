import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  metadataBase: new URL("https://dietnexa.com"),
  title: {
    default: "DietNexa — Personalized Nutrition & Clinical Dietitian Consultation",
    template: "%s | DietNexa",
  },
  description:
    "Consult certified clinical dietitians, receive customized medical diet plans, and access 100 free scientific nutrition calculators for lasting health and wellness.",
  keywords: [
    "Clinical Dietitian",
    "Nutrition Consultation",
    "Personalized Diet Plan",
    "Nutrition Tools",
    "Dietary Calculators",
    "BMI Calculator",
    "TDEE Calculator",
    "Weight Loss Diet",
    "Diabetes Management",
    "PCOS Nutrition",
    "DietNexa India",
  ],
  authors: [{ name: "DietNexa Medical & Nutrition Team", url: "https://dietnexa.com" }],
  creator: "DietNexa",
  publisher: "DietNexa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dietnexa.com",
    siteName: "DietNexa",
    title: "DietNexa — Personalized Nutrition & Clinical Dietitian Consultation",
    description:
      "Consult certified clinical dietitians, receive customized medical diet plans, and access 100 free scientific nutrition calculators.",
    images: [
      {
        url: "/image/dietnexa-logo.webp",
        width: 1200,
        height: 630,
        alt: "DietNexa - Personalized Nutrition Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DietNexa — Personalized Nutrition & Clinical Dietitian Consultation",
    description:
      "Consult certified clinical dietitians, receive customized medical diet plans, and access 100 free scientific nutrition calculators.",
    images: ["/image/dietnexa-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "DietNexa",
    url: "https://dietnexa.com",
    logo: "https://dietnexa.com/image/dietnexa-logo.webp",
    image: "https://dietnexa.com/image/dietnexa-logo.webp",
    description:
      "DietNexa provides evidence-based personalized nutrition therapy, certified clinical dietitian consultations, and 100 scientific health calculators.",
    telephone: "+91 7319328962",
    email: "support@dietnexa.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nandakumar",
      addressLocality: "Nandakumar",
      addressRegion: "West Bengal",
      postalCode: "721632",
      addressCountry: "IN",
    },
    medicalSpecialty: ["DietNutrition", "Endocrine", "Pediatric"],
    priceRange: "₹₹",
    sameAs: [
      "https://www.instagram.com/dietnexa",
      "https://www.facebook.com/dietnexa",
      "https://www.linkedin.com/company/dietnexa",
      "https://www.youtube.com/@dietnexa",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DietNexa",
    url: "https://dietnexa.com",
    description:
      "Personalized nutrition consultations and 100 scientific dietary calculators.",
    publisher: {
      "@type": "Organization",
      name: "DietNexa",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://dietnexa.com/tools?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload Variable Font to eliminate critical path latency & CLS */}
        <link
          rel="preload"
          href="/font/Inter,Plus_Jakarta_Sans,Poppins/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Preload LCP Hero Image for immediate discovery */}
        <link
          rel="preload"
          as="image"
          href="/image/hero-section-smiling-doctor-in-green-scrubs.webp"
          type="image/webp"
          fetchPriority="high"
        />
        {/* Link to LLM Index for AI Search Engines (ChatGPT, Perplexity, Claude, Gemini) */}
        <link
          rel="alternate"
          type="text/plain"
          href="https://dietnexa.com/llms.txt"
          title="LLM Context & Service Index"
        />
        {/* Structured Data: Organization & WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
