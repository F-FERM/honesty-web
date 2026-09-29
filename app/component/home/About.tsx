import Image from "next/image";

import aboutMain from "../../../public/images/home/about1.jpg";
import aboutSecondary from "../../../public/images/home/about2.jpg";

const STATS = [
  { value: "15+", label: "Years" },
  { value: "500+", label: "Clients" },
  { value: "6+", label: "Divisions" },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        w-full
        bg-white

        px-4
        sm:px-8
        lg:px-12
        xl:px-16

        pt-16 pb-14
        sm:pt-24 sm:pb-20
        md:pt-32 md:pb-24
        lg:pt-[240px] lg:pb-[160px]
      "
    >
      {/* ============================================================
          MAIN CONTAINER
          Stacked below 1280px, two columns (573 : 870) from xl
      ============================================================ */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1463px]
          grid-cols-1
          items-center
          gap-10
          sm:gap-12
          xl:grid-cols-[573fr_870fr]
          xl:gap-5
        "
      >
        {/* ============================================================
            LEFT SECTION
        ============================================================ */}
        <div className="flex w-full flex-col">
          {/* ================= ABOUT ================= */}
          <h2
            className="
              font-poppins
              text-black
              text-[clamp(32px,4vw,46px)]
            "
            style={{
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "0.04em",
            }}
          >
            About
          </h2>

          {/* ================= TITLE ================= */}
          <h3
            className="
              mt-5
              sm:mt-7
              font-amiri
              uppercase
              text-black
              text-[clamp(26px,3.2vw,45px)]
            "
            style={{
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Honesty &amp; Perfection
          </h3>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              mt-5
              sm:mt-7
              font-poppins
              max-w-[554px]
              text-[#626262]
              text-[14px]
              leading-[1.7]
              sm:text-base
              sm:leading-6
              md:max-w-[680px]
              xl:max-w-[554px]
            "
            style={{
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Honesty &amp; Perfection is a UAE-based group focused on delivering
            professional automotive detailing, cleaning, polishing, and
            appearance enhancement solutions. Built on the principles of
            honesty, quality, precision, and customer satisfaction, we are
            committed to creating a higher standard of vehicle care and
            presentation. Our expertise covers professional car cleaning,
            detailing, polishing, ceramic coating, window tinting, and other
            appearance-focused solutions for both individual customers and
            businesses. We also support clients with reliable, professional
            solutions designed around their operational and presentation
            needs. With a strong focus on quality workmanship and attention to
            detail, Honesty &amp; Perfection aims to become a trusted name in
            the UAE for vehicle appearance and professional support solutions.
          </p>

          {/* ================= STATS CARD ================= */}
          <div
            className="
              mt-5
              sm:mt-3
              flex
              min-h-[95px]
              w-full
              max-w-[425px]
              items-center
              justify-between
              rounded-[12px]
              bg-[#C4D5DF]
              px-5
              py-4
              sm:px-10
            "
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-3">
                <span
                  className="
                    font-poppins
                    text-[#0D85CC]
                    text-[28px]
                    sm:text-[38px]
                  "
                  style={{
                    fontWeight: 600,
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                  }}
                >
                  {stat.value}
                </span>

                <span
                  className="
                    font-poppins
                    text-[#464646]
                    text-[14px]
                    sm:text-[18px]
                  "
                  style={{
                    fontWeight: 400,
                    lineHeight: "100%",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            RIGHT SECTION — STACKED IMAGES
        ============================================================ */}
        <div className="relative mx-auto w-full max-w-[870px] aspect-[870/589] xl:mx-0 xl:max-w-none">
          {/* ================= TOP / MAIN IMAGE ================= */}
          <div
            className="
              absolute
              left-0
              top-0
              h-[74.7%]
              w-[82.9%]
              overflow-hidden
              rounded-[12px]
              sm:rounded-[20px]
            "
          >
            <Image
              src={aboutMain}
              alt="Glass towers seen from below"
              fill
              sizes="(min-width: 1280px) 45vw, (min-width: 870px) 870px, 100vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.09) 0%, rgba(0, 0, 0, 0.3) 100%)",
              }}
            />
          </div>

          {/* ================= BOTTOM-RIGHT IMAGE ================= */}
          <div
            className="
              absolute
              bottom-0
              right-0
              h-[55.5%]
              w-[66%]
              overflow-hidden
              rounded-[12px]
              border-[5px]
              border-white
              sm:rounded-[20px]
              sm:border-[10px]
            "
          >
            <Image
              src={aboutSecondary}
              alt="Modern office interior"
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 870px) 574px, 66vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}