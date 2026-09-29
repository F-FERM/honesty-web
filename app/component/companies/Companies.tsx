import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import cleaningImg from "../../../public/images/home/company1.png";
import valetImg from "../../../public/images/home/company2.png";
import worldMotorsImg from "../../../public/images/home/company3.png";
import greenOasisImg from "../../../public/images/home/company4.png";
import mtAutozoneImg from "../../../public/images/home/company5.png";

export type Company = {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  subheading?: string;
  external?: boolean;
};

const COMPANIES: Company[] = [
  {
    title: "Honesty & Perfection Cleaning Service",
    description:
      "Honesty & Perfection Cleaning Service provides professional cleaning and facility support solutions across the UAE. Our services include cleaners, car washers, parts pickers, and dedicated workforce solutions for showrooms and businesses.",
    image: cleaningImg,
    href: "/companies/cleaning",
  },
  {
    title: "Valet Parking Service",
    description:
      "Valet Parking Service provides reliable driver supply solutions across the UAE, offering heavy and light vehicle drivers, recovery team drivers, showroom support, and private car drivers for businesses and individual customers.",
    image: valetImg,
    href: "/companies/valet-parking",
  },
  {
    title: "World Motors",
    description:
      "World Motors specializes in professional automotive appearance solutions including professional car detailing, polishing, ceramic coating, and window tinting, with dedicated B2B support for garages and automotive businesses across the UAE.",
    image: worldMotorsImg,
    href: "/companies/world-motors",
  },
  {
    title: "Green Oasis",
    description:
      "A UAE based car rental company providing convenient and reliable vehicle rental solutions for customers seeking flexible rental options, with a focus on quality vehicles and professional customer service.",
    image: greenOasisImg,
    href: "/companies/green-oasis",
  },
  {
    title: "MT Autozone",
    description:
      "MT Autozone specializes in professional car polishing and detailing specialists focused on enhancing vehicle appearance through quality workmanship, careful detailing processes, and premium finishing solutions for customers seeking a cleaner, refined, showroom ready appearance.",
    image: mtAutozoneImg,
    href: "https://mtautozone.com",
    external: true,
  },
];

// On touch devices there is no hover,
// so the description is always shown.
const TOUCH = "[@media(hover:none)]";

const CARD_CLASSES = `
  group
  relative
  isolate
  h-[420px]
  w-full
  overflow-hidden
  rounded-[15px]
  sm:h-[460px]
  xl:h-[500px]
`;

function CompanyCard({ company }: { company: Company }) {
  return (
    <article className={CARD_CLASSES}>
      {/* ======================================================
          IMAGE
      ====================================================== */}
      <Image
        src={company.image}
        alt={company.title}
        fill
        sizes="
          (min-width: 1465px) 447px,
          (min-width: 1024px) 33vw,
          (min-width: 640px) 50vw,
          100vw
        "
        className="absolute inset-0 z-0 object-cover"
      />

      {/* ======================================================
          BASE GRADIENT
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
        }}
      />

      {/* ======================================================
          HOVER DARK OVERLAY
      ====================================================== */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0
          z-[2]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          group-focus-within:opacity-100
          ${TOUCH}:opacity-100
        `}
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* ======================================================
          CARD CONTENT
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          z-10
          flex
          flex-col
          justify-end
          gap-[5px]
          px-6
          pb-[25px]
          xl:px-[38px]
        "
      >
        {/* ================= TITLE ================= */}
        <h3
          className="
            font-poppins
            text-white
            text-[20px]
            sm:text-[22px]
            xl:text-[24px]
          "
          style={{
            fontWeight: 600,
            lineHeight: "150%",
            letterSpacing: "0.04em",
          }}
        >
          {company.title}
        </h3>

        {/* ================= DESCRIPTION (hover reveal) ================= */}
        <div
          className={`
            grid
            grid-rows-[0fr]
            opacity-0
            transition-[grid-template-rows,opacity]
            duration-300
            ease-out
            group-hover:grid-rows-[1fr]
            group-hover:opacity-100
            group-focus-within:grid-rows-[1fr]
            group-focus-within:opacity-100
            ${TOUCH}:grid-rows-[1fr]
            ${TOUCH}:opacity-100
          `}
        >
          <p
            className="
              font-poppins
              overflow-hidden
              text-[16px]
              leading-6
              text-[#C2C2C2]
              sm:text-base
            "
            style={{
              fontWeight: 400,
            }}
          >
            <span className="block pt-2 pb-1">{company.description}</span>
          </p>
        </div>

        {/* ================= LEARN MORE ================= */}
        <Link
          href={company.href}
          target={company.external ? "_blank" : undefined}
          rel={company.external ? "noopener noreferrer" : undefined}
          className="
            font-inter
            flex
            w-fit
            items-center
            gap-2
            text-[#0D85CC]
            after:absolute
            after:inset-0
            after:content-['']
            focus:outline-none
            focus-visible:underline
          "
          style={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "100%",
          }}
        >
          Learn More
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

export default function Companies() {
  return (
    <section
      id="companies"
      className="w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{
        paddingTop: "clamp(130px, 10vw, 150px)",
        paddingBottom: "clamp(210px, 28vw, 240px)",
      }}
    >
      {/* ============================================================
          SHARED CONTAINER — heading and cards share the same
          max-width + auto margins so both start at the exact
          same left edge
      ============================================================ */}
      <div className="mx-auto w-full max-w-[1465px]">
        {/* ================= HEADING (left-aligned, no subtitle) ================= */}
        <h2
          className="font-poppins text-black text-[clamp(28px,4vw,46px)]"
          style={{
            fontWeight: 600,
            lineHeight: "100%",
            letterSpacing: "0.04em",
          }}
        >
          Companies
        </h2>

        {/* ================= CARDS ================================
            One flex-wrap layout for every breakpoint: 1-up on mobile,
            2-up from sm, 3-up from lg. justify-center means ANY
            trailing partial row (1 or 2 leftover cards, at ANY
            breakpoint) centers itself automatically — no more special-
            casing a "last row" that only worked at lg and above.
        ============================================================ */}
        <div
          className="
            mt-14
            flex
            w-full
            flex-wrap
            justify-center
            gap-[var(--gap)]
            [--gap:20px]
            sm:mt-16
            sm:[--gap:24px]
            xl:[--gap:62px]
          "
        >
          {COMPANIES.map((company) => (
            <div
              key={company.title}
              className="
                w-full
                sm:w-[calc((100%-1*var(--gap))/2)]
                lg:w-[calc((100%-2*var(--gap))/3)]
              "
            >
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}