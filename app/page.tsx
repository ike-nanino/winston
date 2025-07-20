import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MeetLawyers from "@/components/MeetLawyers";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";

export const metadata = {
  title: 'Winston & Co. | Trusted Canadian Law Firm',
  description: '...',

  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Winston & Co.",
      "url": "https://www.domain.com",
      "logo": "https://www.domain.com/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA",
      },
      "sameAs": ["https://www.linkedin.com/company/winston-and-co/"]
    }),
  },
};



export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <StatsSection />
      <MeetLawyers />
      <Services />
    </main>
  );
}