import Companies from "@/app/component/companies/Companies";
import CompanyHero from "@/app/component/companies/Hero";
import CTA from "@/app/component/home/Cta";


export default function CompanyPage() {
  return (
    <main className="min-h-screen">
      <CompanyHero/>
      <Companies/>
     
          <CTA/>
    </main>
  );
}