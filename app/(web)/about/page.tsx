import AboutHero from "@/app/component/about/Hero";
import OurJourney from "@/app/component/about/OurJourney";
import WhoWeAre from "@/app/component/about/WhoWeAre";
import CTA from "@/app/component/home/Cta";


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero/>
      <OurJourney/>
      <WhoWeAre/>
          <CTA/>
    </main>
  );
}