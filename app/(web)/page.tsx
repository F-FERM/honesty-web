import About from "../component/home/About";
import Companies from "../component/home/Companies";
import CTA from "../component/home/Cta";
import Hero from "../component/home/Hero";
import WhyChoose from "../component/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Companies />
      <WhyChoose/>
      <CTA/>
    </main>
  );
}