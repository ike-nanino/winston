import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MeetLawyers from "@/components/MeetLawyers";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";


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