import Image, { StaticImageData } from "next/image";

import defaultBg from "../../../public/images/contact/hero.jpg";

type PageHeroProps = {
  title?: string;
  description?: string;
  image?: StaticImageData;
};

export default function ContactHero({
  title = "Contact Us",
  description = "We are always ready to help you with the right solution for your business or personal needs. Whether you are looking for cleaning services, technical support, car rental, valet parking, car detailing, or complete auto repair, our team is here to assist you. For inquiries, quotations, partnerships, or service bookings, contact us through any of the following methods.",
  image = defaultBg,
}: PageHeroProps) {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[320px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-16
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
          max-w-[1063px]
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
            text-[clamp(30px,4vw,46px)]
            text-white
          "
          style={{
            fontWeight: 600,
            lineHeight: "150%",
            letterSpacing: "0%",
          }}
        >
          {title}
        </h1>

        <p
          className="
            font-poppins
            w-full
            max-w-[1063px]
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