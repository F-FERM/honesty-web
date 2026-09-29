"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import heroBg from "../../../public/images/home/hero.png";

const HOLD_MS = 4000; // how long each slide stays still on screen
const SLIDE_MS = 450; // slide out / slide in duration (lower = faster)
const OFFSET_PX = 120; // max drift distance (old exits LEFT, new enters from RIGHT)

// Smaller screens drift less so the content never flies far off-screen
const getOffset = () =>
  typeof window === "undefined"
    ? OFFSET_PX
    : Math.min(OFFSET_PX, window.innerWidth * 0.2);

const SLIDES = [
  {
    title: "Complete Service Solutions Under One Roof",
    text: "From cleaning to car care, we deliver excellence with trust, quality, and professionalism.",
  },
  {
    title: "Excellence Built Through Years Of Trust",
    text: "Since 2002, delivering reliable automotive, cleaning, and technical services with unmatched quality and commitment.",
  },
  {
    title: "One Group. Multiple Solutions. Endless Possibilities",
    text: "Your trusted partner for auto care, facility services, valet solutions, and professional support across the UAE.",
  },
  {
    title: "Driven By Quality Powered By Perfection",
    text: "Combining skilled professionals, advanced technology, and years of expertise to deliver service beyond expectations.",
  },
  {
    title: "Complete Service Solutions Under One Roof",
    text: "From cleaning to car care, we deliver excellence with trust, quality, and professionalism.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const outAnim = useRef<Animation | null>(null);
  const pendingEnter = useRef(false);
  const busy = useRef(false);

  const goTo = (next: number) => {
    if (busy.current) return;
    const el = contentRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!el || reduceMotion) {
      setIndex(next);
      return;
    }

    busy.current = true;
    const offset = getOffset();

    // 1. Old content drifts LEFT and fades out
    const out = el.animate(
      [
        { transform: "translateX(0)", opacity: 1 },
        { transform: `translateX(-${offset}px)`, opacity: 0 },
      ],
      {
        duration: SLIDE_MS,
        easing: "cubic-bezier(0.4, 0, 1, 1)",
        fill: "forwards",
      }
    );
    outAnim.current = out;

    out.onfinish = () => {
      pendingEnter.current = true;
      setIndex(next); // 2. swap the text while it is invisible
    };
  };

  // 3. New content always starts on the RIGHT and glides to the center
  useLayoutEffect(() => {
    if (!pendingEnter.current) return;
    pendingEnter.current = false;

    const el = contentRef.current;
    if (!el) {
      busy.current = false;
      return;
    }

    const offset = getOffset();
    const enter = el.animate(
      [
        { transform: `translateX(${offset}px)`, opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
      ],
      {
        duration: SLIDE_MS,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      }
    );

    outAnim.current?.cancel(); // safe: enter already covers the element
    outAnim.current = null;

    enter.onfinish = () => {
      enter.cancel();
      busy.current = false;
    };
  }, [index]);

  // Auto-rotate: the slide rests for HOLD_MS after it has finished sliding in.
  useEffect(() => {
    const t = setTimeout(
      () => goTo((index + 1) % SLIDES.length),
      HOLD_MS + SLIDE_MS
    );
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => () => outAnim.current?.cancel(), []);

  const slide = SLIDES[index];

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        flex
        items-center
        justify-center

        px-4 sm:px-8 md:px-12 lg:px-20

        py-20 sm:py-28 lg:py-36 xl:py-44

        min-h-[560px]
        sm:min-h-[620px]
        md:min-h-[720px]
        lg:min-h-[800px]
        xl:min-h-[880px]

        min-[1920px]:h-[954px]
        min-[1920px]:pt-[260px]
        min-[1920px]:pb-[293px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover"
      />

      {/* ================= GRADIENT OVERLAY ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(246.36deg, rgba(0, 0, 0, 0.35) -14.34%, rgba(13, 133, 204, 0.55) 98.96%), linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))",
        }}
      />

      {/* ================= CONTENT (whole block drifts) ================= */}
      {/*
        The upward shift uses `top` (not translate), because the slide animation
        controls `transform`. Using translate here would fight with it and make
        the content jump while it animates.
      */}
      <div
        ref={contentRef}
        aria-live="polite"
        className="
          relative
          z-10
          -top-6 sm:-top-10 lg:-top-20
          flex
          w-full
          max-w-[767px]
          flex-col
          items-center
          justify-center
          gap-4
          text-center
          sm:gap-6
          min-h-[460px]
          sm:min-h-[400px]
          md:min-h-[360px]
        "
      >
        <h1
          className="font-poppins text-white text-[clamp(26px,4vw,46px)] break-words"
          style={{
            fontWeight: 600,
            lineHeight: "150%",
            letterSpacing: "0.04em",
          }}
        >
          {slide.title}
        </h1>

        <p
          className="font-poppins max-w-[702px] text-[#E4E4E4] text-[14px] leading-[1.6] sm:text-base sm:leading-6"
          style={{ fontWeight: 400 }}
        >
          {slide.text}
        </p>

        {/* Buttons: 416 x 50, gap 60px */}
        <div className="mt-2 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 md:gap-[60px]">
          {/* Explore: arrow always visible, nudges on hover */}
          <Link
            href="/companies"
            className="
              group
              flex items-center justify-center shrink-0
              font-poppins
              w-[178px] h-[50px]
              px-6
              rounded-[30px]
              bg-[#0D85CC]
              text-white
              transition-colors duration-300
              hover:bg-[#C4D5DF] hover:text-[#08507A]
            "
            style={{ fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
          >
            <span>Explore</span>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="ml-2 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>

          {/* Contact Us: transparent, fills on hover */}
          <Link
            href="/contact-us"
            className="
              flex items-center justify-center shrink-0
              font-inter
              w-[178px] h-[50px]
              px-12
              rounded-[30px]
              border border-white
              bg-transparent
              text-white
              whitespace-nowrap
              transition-colors duration-300
              hover:bg-[#D9D9D9]/30 hover:text-[#0D85CC]
            "
            style={{ fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}