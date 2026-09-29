"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Play the entrance animation once, when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="get-a-quote"
      className="
        w-full
        overflow-hidden
        bg-[#08507A]

        px-4 py-14
        sm:px-8 sm:py-16
        lg:px-12 lg:py-20

        min-[1920px]:h-[475px]
        min-[1920px]:pt-[70px]
        min-[1920px]:pb-[123px]
        min-[1920px]:pl-[489px]
        min-[1920px]:pr-[512px]
      "
    >
      {/* Content: 919 wide, centered */}
      <div className="mx-auto flex w-full max-w-[919px] flex-col items-center gap-8 text-center sm:gap-12 lg:gap-[88px]">
        {/* Heading + paragraph: come in from the TOP */}
        <div
          className={`
            flex w-full flex-col items-center gap-[12px]
            transition-all duration-700 ease-out
            motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:transition-none
            ${inView ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}
          `}
        >
          <h2
            className="font-poppins w-full text-white text-[clamp(28px,4vw,46px)] leading-[1.3] sm:leading-[1.5]"
            style={{
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Ready to Upgrade Your Services?
          </h2>

          <p
            className="font-poppins max-w-[677px] text-[#C9C9C9] text-[14px] leading-[1.6] sm:text-base"
            style={{ fontWeight: 400 }}
          >
            Join hundreds of satisfied clients across UAE who trust us for premium automotive and facility services.
          </p>
        </div>

        {/* Buttons: come in from the BOTTOM, slightly after the text */}
        <div
          className={`
            flex w-full flex-col items-center justify-center gap-4
            sm:flex-row sm:gap-8 md:gap-[45px]
            transition-all duration-700 delay-200 ease-out
            motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:transition-none
            ${inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
          `}
        >
          <Link
            href="/contact-us"
            className="
              font-poppins
              flex items-center justify-center gap-2 shrink-0
              w-full max-w-[194px] sm:w-[188px]
              h-[56px]
              px-5
              rounded-[30px]
              bg-[#0D85CC]
              text-white
              whitespace-nowrap
              transition-colors duration-300
              hover:bg-[#C4D5DF] hover:text-[#08507A]
            "
            style={{ fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
          >
            <Phone size={16} aria-hidden="true" className="shrink-0" />
            Contact Us
          </Link>

          <Link
            href="/contact-us"
            className="
              group
              font-poppins
              flex items-center justify-center gap-2 shrink-0
              w-full max-w-[194px] sm:w-[194px]
              h-[56px]
              px-5
              rounded-[30px]
              border border-white
              bg-transparent
              text-white
              whitespace-nowrap
              transition-colors duration-300
            "
            style={{ fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
          >
            Request Quote
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}