import Image, { StaticImageData } from "next/image";

import defaultBg from "../../../public/images/about/hero.jpg";

type PageHeroProps = {
  title?: string;
  description?: string;
  image?: StaticImageData;
};

export default function AboutHero({
  title = "About Us",
  description = "From automotive care to facility management, we deliver excellence across all our service divisions.",
  image = defaultBg,
}: PageHeroProps) {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[300px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-4
        py-14
        sm:min-h-[400px]
        sm:px-10
        sm:py-20
        md:min-h-[460px]
        lg:min-h-[520px]
        lg:px-20
        min-[1920px]:h-[564px]
        min-[1920px]:min-h-0
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover"
      />

      {/* ================= OVERLAY ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
        }}
      />

      {/* ================= CENTER CONTENT ================= */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[756px]
          flex-col
          items-center
          justify-center
          gap-[10px]
          text-center
        "
      >
        <h1
          className="
            font-poppins
            break-words
            text-[clamp(30px,4vw,46px)]
            leading-[1.3]
            text-white
            sm:leading-[1.5]
          "
          style={{
            fontWeight: 600,
            letterSpacing: "0%",
          }}
        >
          {title}
        </h1>

        <p
          className="
            font-poppins
            w-full
            max-w-[756px]
            text-[14px]
            leading-[1.6]
            text-[#E6E6E6]
            sm:text-base
            sm:leading-6
          "
          style={{
            fontWeight: 400,
          }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}