import "./globals.css";

export const metadata = {
  title: "DietNexa — Personalized Nutrition for a Healthier You",
  description:
    "Consult expert dietitians, get customized diet plans, and receive ongoing guidance for lasting health and wellness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
