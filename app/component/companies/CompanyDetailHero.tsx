"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Phone } from "lucide-react";

type CompanyDetailProps = {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  subheading: string;
  description: string;
  contactHref?: string;
};

export default function CompanyDetailHero({
  title,
  image,
  imageAlt,
  subheading,
  description,
  contactHref = "#contact",
}: CompanyDetailProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <section
      className="w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{
        paddingTop: "clamp(56px, 8vw, 90px)",
        paddingBottom: "clamp(56px, 6vw, 96px)",
      }}
    >
      <div className="mx-auto w-full max-w-[1464px]">
        {/* ================= HEADING: 870 wide ================= */}
        <h1
          className="font-poppins max-w-[870px] text-black text-[clamp(28px,4vw,46px)]"
          style={{
            fontWeight: 600,
            lineHeight: "150%",
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </h1>

        {/* ================= CONTENT: image + text ================= */}
        {/* Stacked below 1024px, side by side from lg */}
        <div className="mt-6 flex w-full flex-col gap-6 sm:mt-10 lg:mt-16 lg:flex-row lg:gap-[23px] xl:mt-[120px]">
          {/* ================= LEFT: IMAGE (gradient reacts to button hover) ================= */}
          {/* On desktop it stretches to match the text height, min 428px */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[14px]
              sm:rounded-[20px]
              h-[240px]
              sm:h-[340px]
              md:h-[420px]
              lg:h-auto
              lg:min-h-[428px]
              lg:w-[50.3%]
              lg:shrink-0
            "
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 722px, 100vw"
              className="object-cover"
            />

            {/* Gradient overlay: only when the Contact Now button is hovered */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) -17.29%, rgba(13, 133, 204, 0.58) 100%)",
                opacity: isButtonHovered ? 1 : 0,
              }}
            />
          </div>

          {/* ================= RIGHT: text ================= */}
          <div className="flex w-full min-w-0 flex-col gap-2 sm:gap-3 lg:w-[49.1%] lg:pt-4">
            <h2
              className="font-poppins text-black text-[16px] sm:text-[18px]"
              style={{
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "0%",
              }}
            >
              {subheading}
            </h2>

            <p
              className="font-poppins text-[#626262] text-[14px] leading-[1.7] sm:text-[16px] sm:leading-[1.65]"
              style={{
                fontWeight: 400,
                letterSpacing: "0%",
              }}
            >
              {description}
            </p>

            {/* ================= CONTACT NOW BUTTON ================= */}
            <a
              href={contactHref}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              onFocus={() => setIsButtonHovered(true)}
              onBlur={() => setIsButtonHovered(false)}
              className="
                mt-2 flex w-fit h-[50px] items-center justify-center gap-[10px]
                whitespace-nowrap
                rounded-[30px] bg-[#0D85CC]
                px-8
                font-inter text-white
                transition-colors duration-300
                hover:bg-[#C4D5DF] hover:text-[#08507A]
              "
              style={{
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              <Phone size={18} aria-hidden="true" className="shrink-0" />
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}