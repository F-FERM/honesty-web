"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
};

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    title: "Deep Cleaning Solutions",
    description:
      "Detailed cleaning services designed to remove dust, dirt, stains, and everyday buildup, creating cleaner, fresher, and more comfortable environments for offices, showrooms, and commercial facilities.",
  },
  {
    title: "Commercial Space Cleaning",
    description:
      "Reliable cleaning solutions for offices, retail spaces, and commercial buildings, maintaining a clean, organized, and professional environment for staff and visitors.",
  },
  {
    title: "Showroom Cleaning",
    description:
      "Specialized cleaning for showrooms that keeps display areas spotless, polished, and presentation-ready for customers at all times.",
  },
  {
    title: "Automotive Cleaning",
    description:
      "Thorough interior and exterior vehicle cleaning services that keep cars looking fresh, hygienic, and well maintained.",
  },
  {
    title: "Facility Support Services",
    description:
      "Day-to-day facility support including general upkeep, waste management, and maintenance assistance to keep operations running smoothly.",
  },
];

type Props = {
  title?: string;
  services?: ServiceItem[];
};

export default function OurCleaningServices({
  title = "Our Cleaning Services",
  services = DEFAULT_SERVICES,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{
        paddingTop: "clamp(40px, 4vw, 64px)",
        paddingBottom: "clamp(80px, 16vw, 280px)",
      }}
    >
      <div className="mx-auto w-full max-w-[1465px]">
        {/* ================= HEADING (centered) ================= */}
        <h2
          className="font-poppins text-center text-black text-[clamp(28px,4vw,46px)]"
          style={{
            fontWeight: 600,
            lineHeight: "100%",
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </h2>

        {/* ================= ACCORDION LIST ================= */}
        <div className="mx-auto mt-10 w-full max-w-[1338px] sm:mt-16">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div
                key={`${service.title}-${index}`}
                className="border-t border-[#E0E0E0] last:border-b"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="
                    flex w-full items-center justify-between
                    gap-4 py-4 text-left
                    sm:py-6
                    focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-[#0D85CC]
                  "
                >
                  <span
                    className="font-poppins text-black text-[18px] leading-[1.3] sm:text-[24px] sm:leading-[1.15] lg:text-[26px] lg:leading-none"
                    style={{
                      fontWeight: 600,
                      letterSpacing: "0%",
                    }}
                  >
                    {service.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-black sm:h-7 sm:w-7"
                  >
                    {isOpen ? (
                      <Minus
                        strokeWidth={3}
                        className="h-5 w-5 sm:h-[26px] sm:w-[26px]"
                      />
                    ) : (
                      <Plus
                        strokeWidth={3}
                        className="h-5 w-5 sm:h-[26px] sm:w-[26px]"
                      />
                    )}
                  </span>
                </button>

                {/* ================= DESCRIPTION (expand/collapse) ================= */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`
                    grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="font-poppins max-w-[960px] pb-5 pr-8 text-[#6E6E6E] text-[14px] leading-[1.7] sm:pb-6 sm:pr-12 sm:text-[16px] sm:leading-[1.6] lg:text-[18px]"
                      style={{
                        fontWeight: 400,
                        letterSpacing: "0%",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}