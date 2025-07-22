import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MeetLawyers from "@/components/MeetLawyers";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";

export const metadata = {
  title: 'Winston & Co. | Canadian Law Firm',
  description: 'Winston & Co. is a national law firm in Canada specializing in employment law and comprehensive legal services for businesses and individuals.',

  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Winston & Co.",
      "url": "https://www.winstoncofirm.com",
      "logo": "https://www.winstoncofirm.com/images/winstonorig.png",
      "address": {
        "@type": "175 Bloor Street East Suite 302 South Tower",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA",
      },
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