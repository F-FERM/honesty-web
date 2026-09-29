import CompanyDetailHero from "@/app/component/companies/CompanyDetailHero";
import { notFound } from "next/navigation";
import cleaningImg from "../../../../public/images/home/company1.png";
import valetImg from "../../../../public/images/home/company2.png";
import worldMotorsImg from "../../../../public/images/home/company3.png";
import greenOasisImg from "../../../../public/images/home/company4.png";
import mtAutozoneImg from "../../../../public/images/home/company5.png";

import IndustriesWeServe from "@/app/component/companies/IndustriesWeServe";
import OurCleaningServices from "@/app/component/companies/OurCleaningServices";
import WhyChooseCleaning from "@/app/component/companies/WhyChooseCleaning";
import CTA from "@/app/component/home/Cta";
import valetIcon1 from "../../../../public/images/detailpage/v1.png";
import valetIcon10 from "../../../../public/images/detailpage/v10.png";
import valetIcon11 from "../../../../public/images/detailpage/v11.png";
import valetIcon12 from "../../../../public/images/detailpage/v12.png";
import valetIcon13 from "../../../../public/images/detailpage/v13.png";
import valetIcon14 from "../../../../public/images/detailpage/v14.png";
import valetIcon2 from "../../../../public/images/detailpage/v2.png";
import valetIcon3 from "../../../../public/images/detailpage/v3.png";
import valetIcon4 from "../../../../public/images/detailpage/v4.png";
import valetIcon5 from "../../../../public/images/detailpage/v5.png";
import valetIcon6 from "../../../../public/images/detailpage/v6.png";
import valetIcon7 from "../../../../public/images/detailpage/v7.png";
import valetIcon8 from "../../../../public/images/detailpage/v8.png";
import valetIcon9 from "../../../../public/images/detailpage/v9.png";



const companyData = {
  "cleaning": {
    title: "Honesty & Perfection Cleaning Services",
    image: cleaningImg,
    subheading: "Professional Cleaning Solutions That Create Healthier, Safer Spaces.",
    description: "Honesty & Perfection Cleaning Services provides dependable cleaning and facility support solutions designed for businesses, showrooms, offices, buildings, and commercial spaces across the UAE. We focus on maintaining clean, organized, hygienic, and professionally presented environments through trained and responsible personnel. Our workforce includes professional cleaners, car wash teams, office boys, and parts pickers, allowing us to support a wide range of operational requirements under one reliable service. Whether it is maintaining a showroom, supporting office operations, managing cleaning requirements, or assisting with day-to-day facility activities, our teams are prepared to deliver consistent service. Our solutions can be tailored to the specific requirements of businesses and facilities, helping clients maintain efficient operations without compromising workplace standards.",
    servicesTitle: "Our Cleaning Services",
    services: [
      { title: "Deep Cleaning Solutions", description: "Detailed cleaning services designed to remove dust, dirt, stains, and everyday buildup, creating cleaner, fresher, and more comfortable environments for offices, showrooms, and commercial facilities." },
      { title: "Commercial Space Cleaning", description: "Professional cleaning support for business premises, ensuring workspaces, customer areas, common spaces, and facilities remain clean, organized, hygienic, and ready for daily operations." },
      { title: "Showroom Cleaning", description: "Specialized cleaning support for automotive showrooms, maintaining spotless display areas, customer spaces, and facilities while ensuring vehicles and surroundings consistently present a professional brand image." },
      { title: "Automotive Cleaning", description: "Dedicated vehicle cleaning solutions for showrooms and business requirements, helping maintain clean, presentable vehicles through systematic washing and professional cleaning practices." },
      { title: "Facility Support Services", description: "Flexible cleaning and manpower solutions for buildings, offices, and commercial facilities, tailored to operational requirements while maintaining consistent service standards, reliability, and professional presentation." },
    ],
     industriesTitle: "Industries We Serve",
   industriesLeft: ["Commercial Buildings", "Hotels & Resorts", "Hospitals & Clinics"], 
    industriesRight: ["Banks & Offices", "Schools & Educational Institutions", "Factories & Industrial Units"],
    whyChooseTitle: "Why Choose Our Cleaning Services?",
  reasons: [
    { text: "Experienced and professionally trained cleaning staff", icon: valetIcon1 },
    { text: "Competitive pricing with reliable service", icon: valetIcon2 },
    { text: "Advanced equipment and high-quality chemicals", icon: valetIcon3 },
    { text: "Safe, eco-friendly, and hygienic cleaning practices", icon: valetIcon4 },
  ],
  },
  "valet-parking": {
    title: "Honesty & Perfection Valet Parking Services",
    image: valetImg,
    subheading: "Professional Valet Services That Leave A Lasting Impression",
    description: "Honesty & Perfection Valet Parking Services provides professional driver and valet solutions across the UAE, focused on delivering safe, reliable, and convenient mobility support for a wide range of requirements. Our services include heavy vehicle drivers, normal vehicle drivers, recovery team drivers, showroom driver support, and private car drivers. Every assignment is supported by responsible and experienced professionals who understand the importance of punctuality, safety, vehicle care, and professional conduct. Whether you require drivers for daily operations, vehicle movement, showroom requirements, recovery support, or personal transportation, our flexible solutions are designed around your specific needs. We focus on maintaining high service standards through professional coordination, dependable manpower, responsible driving, and customer-focused support. Our approach ensures that every driving requirement is handled smoothly and efficiently.",
    servicesTitle: "Our Services",
    services: [
      { title: "Professional Valet Parking", description: "Our trained valet professionals manage vehicle arrivals, parking, and retrieval efficiently, ensuring a smooth and convenient experience while maintaining careful handling and professional standards throughout every interaction." },
      { title: "Dedicated Driver Supply", description: "Reliable drivers are available for different vehicle categories and requirements, providing professional driving support with emphasis on punctuality, road safety, responsible vehicle handling, and service quality." },
      { title: "Heavy Vehicle Drivers", description: "Experienced heavy vehicle drivers are available to support transportation and operational requirements, with a focus on responsible driving, vehicle handling, safety awareness, and dependable service." },
      { title: "Recovery Team Drivers", description: "Skilled recovery team drivers support vehicle movement and recovery operations with responsible handling, timely coordination, and careful execution to help manage vehicle related requirements efficiently and safely." },
      { title: "Recovery Team Drivers", description: "Dedicated drivers assist showrooms with vehicle movement, positioning, delivery support, and customer requirements, ensuring vehicles are handled professionally while maintaining an organized and presentable showroom operation." },
    ],
         industriesTitle: "Where We Provide Valet Services",

    industriesLeft: ["Hotels & Resorts", "Commercial Offices", "Shopping Centers"],
    industriesRight: ["Private Events & Functions", "Restaurants & Cafes", "Theatres & Entertainment Venues"],
    whyChooseTitle: "Why Choose Our Valet Team?",
reasons: [
    { text: "Uniformed and customer-friendly staff", icon: valetIcon5 },
    { text: "Skilled and professionally trained drivers", icon: valetIcon6 },
    { text: "Fast and efficient parking management", icon: valetIcon7 },
    { text: "Reliable service for both small and large events", icon: valetIcon8 },
    { text: "Focused on safety, convenience, and professionalism", icon: valetIcon9 },
   
  ],  },
  "world-motors": {
    title: "Honest World Motors",
    image: worldMotorsImg,
    subheading: "Premium Car Care & Vehicle Protection Solutions",
    description: "Honest World Motors specializes in professional automotive detailing and vehicle appearance solutions, helping vehicles achieve a cleaner, more refined, and well protected finish. Our services are focused on enhancing the appearance and presentation of vehicles through professional care and attention to detail. Our expertise includes car detailing, polishing, ceramic coating, and window tinting, providing comprehensive solutions for different vehicle appearance and protection requirements. From restoring a vehicle’s shine to enhancing surface protection and improving comfort with quality tinting, every service is carried out with a focus on precision and finish. We also provide garage-to-garage automotive solutions, supporting professional vehicle care requirements with reliable service and consistent standards. Our experienced team understands that every vehicle requires a different approach, which is why we focus on delivering solutions suited to its condition and customer expectations.",
    servicesTitle: "Our Services",
    services: [
      { title: "Professional Car Detailing", description: "Comprehensive detailing services that refresh and enhance your vehicle’s appearance through careful cleaning, surface treatment, and finishing, delivering a cleaner, sharper, and more refined overall look." },
      { title: "Premium Car Polishing", description: "Professional polishing designed to improve paint appearance, reduce visible surface imperfections, and restore a smoother, brighter finish, helping vehicles maintain a polished and well presented appearance." },
      { title: "Ceramic Coating", description: "Advanced ceramic coating solutions create a durable protective layer over the vehicle’s surface, enhancing gloss while helping protect the paint from environmental elements and everyday contaminants." },
      { title: "Window Tinting", description: "Quality window tinting solutions enhance vehicle comfort, privacy, and appearance while helping reduce sunlight and heat exposure, providing a more comfortable driving environment with a refined finish." },
      { title: "Garage-to-Garage Services", description: "Convenient automotive care solutions designed for seamless garage-to-garage requirements, providing professional detailing, polishing, coating, and tinting support while ensuring efficient coordination and careful vehicle handling. " },
    ],
         industriesTitle: "Where We Provide Valet Services",

    industriesLeft: ["Hotels & Resorts", "Commercial Offices", "Shopping Centers"],
    industriesRight: ["Private Events & Functions", "Restaurants & Cafes", "Theatres & Entertainment Venues"],
    whyChooseTitle: "Benefits Of Choosing Honest World Motors",
reasons: [
    { text: "Premium imported products and chemicals", icon: valetIcon10 },
    { text: "Experienced automotive detailing professionals", icon: valetIcon11 },
    { text: "Affordable pricing with high-quality service", icon: valetIcon12 },
    { text: "Eco-friendly and innovative solutions", icon: valetIcon13 },
    { text: "Safe and long-lasting protection for your vehicle", icon: valetIcon14 },
   
  ],  },
  "green-oasis": {
    title: "Green Oasis",
    image: greenOasisImg,
    subheading: "Reliable and flexible car rental and mobility solutions for visitors, residents, and businesses.",
    description: "Green Oasis offers reliable and flexible car rental and mobility solutions designed to meet the needs of visitors, residents, and businesses. With a diverse fleet of well-maintained vehicles, we ensure a comfortable and hassle-free driving experience, backed by exceptional customer service and competitive rates.",
    servicesTitle: "Our Mobility Solutions",
    services: [
      { title: "Daily & Weekly Rentals", description: "Flexible short-term car rental options for visitors and residents." },
      { title: "Long-Term Leasing", description: "Cost-effective long-term leasing solutions for individuals and businesses." },
      { title: "Corporate Fleet Solutions", description: "Reliable vehicle fleets tailored for corporate operations and logistics." },
      { title: "Chauffeur Services", description: "Professional chauffeur services for a comfortable and stress-free journey." }
    ],
         industriesTitle: "Industries We Serve",

    industriesLeft: ["Tourism & Hospitality", "Corporate Businesses", "Event Management"],
    industriesRight: ["Logistics & Delivery", "Aviation & Transport", "Individual Residents"],
    whyChooseTitle: "Why Choose Green Oasis?",
    reasons: ["Diverse fleet of well-maintained vehicles", "Competitive rates and flexible terms", "24/7 customer support and roadside assistance", "Hassle-free booking and delivery process"]
  },
  "mt-autozone": {
    title: "MT Autozone",
    image: mtAutozoneImg,
    subheading: "Car polishing and detailing specialists focused on precision, quality workmanship, and a flawless finish.",
    description: "MT Autozone is your trusted destination for car polishing and detailing. We focus on precision, quality workmanship, and delivering a flawless finish for every vehicle. Our specialized services are designed to enhance your car's appearance and provide long-lasting protection against the elements.",
    servicesTitle: "Our Detailing Services",
    services: [
      { title: "Precision Polishing", description: "Specialized car polishing to eliminate imperfections and restore paint clarity." },
      { title: "Exterior Detailing", description: "Thorough cleaning and treatment of the vehicle's exterior components." },
      { title: "Interior Deep Cleaning", description: "Comprehensive cleaning of seats, carpets, and interior surfaces." },
      { title: "Paint Protection", description: "Application of protective layers to safeguard the vehicle against elements." }
    ],
         industriesTitle: "Industries We Serve",

    industriesLeft: ["Auto Enthusiasts", "Used Car Dealerships", "Corporate Executives"],
    industriesRight: ["Classic Car Owners", "Showroom Exhibitors", "Daily Commuters"],
    whyChooseTitle: "Why Choose MT Autozone?",
    reasons: ["Focus on precision and quality workmanship", "Use of premium detailing products", "Specialized team for flawless finishes", "Enhancement of vehicle aesthetics and lifespan"]
  }
};

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = companyData[slug as keyof typeof companyData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <CompanyDetailHero
        title={data.title}
        image={data.image}
        imageAlt={data.title}
        subheading={data.subheading}
        description={data.description}
        contactHref={`/companies/${slug}`}
      />
      <OurCleaningServices
        title={data.servicesTitle}
        services={data.services}
      />
      <IndustriesWeServe
       title={data.industriesTitle}
        industriesLeft={data.industriesLeft}
        industriesRight={data.industriesRight}
      />
      <WhyChooseCleaning
        title={data.whyChooseTitle}
        reasons={data.reasons}
      />
       <CTA/>
    </main>
  );
}