import IntroSections from "@/components/IntroSections";
import FixedSection from "@/components/FixedSection";
import AboutSection from "@/components/AboutSection";
import PlanSection from "@/components/PlanSection";

export default function Home() {
  return (

    <main>
      <FixedSection />
      <IntroSections />
      <AboutSection />
      <PlanSection />
    </main>

  );
}
