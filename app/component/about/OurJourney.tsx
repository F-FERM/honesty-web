import Image from "next/image";

import arrow1 from "../../../public/images/about/Arrow 1.png";
import arrow2 from "../../../public/images/about/Arrow 2.png";
import checkIcon from "../../../public/images/about/checked.png";

type Milestone = {
  year: string;
  title: string;
  text: string;
};

const MILESTONES: Milestone[] = [
  {
    year: "2002",
    title: "Founded",
    text: "Started with a vision for excellence",
  },
  {
    year: "2010",
    title: "Expansion",
    text: "Grew to 6 divisions",
  },
  {
    year: "2015",
    title: "Recognition",
    text: "UAE's trusted service provider",
  },
  {
    year: "2020",
    title: "Innovation",
    text: "Advanced technology integration",
  },
];

const CHECKLIST = [
  "Trained & Skilled Workforce",
  "Customer-First Approach",
  "Quality Assured Services",
  "Advanced Equipment",
];

export default function OurJourney() {
  return (
    <section
      className="w-full overflow-x-hidden bg-white px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{
        paddingTop: "clamp(140px, 10vw, 170px)",
        paddingBottom: "clamp(56px, 6vw, 96px)",
      }}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col
          gap-12
          lg:flex-row
          lg:items-start
          lg:justify-center
          lg:gap-[68px]
        "
      >
        {/* ================= LEFT SECTION ================= */}
        <div className="flex w-full min-w-0 max-w-[602px] flex-col gap-5 lg:shrink-0">
          <h2
            className="
              font-poppins
              text-black
              text-[clamp(22px,2.4vw,26px)]
            "
            style={{
              fontWeight: 600,
              lineHeight: "130%",
              letterSpacing: "0.04em",
            }}
          >
            Built on Honesty. Driven by Perfection.
          </h2>

          <p
            className="
              font-poppins
              text-[#626262]
              text-[clamp(15px,1.1vw,16px)]
            "
            style={{
              fontWeight: 400,
              lineHeight: "160%",
              letterSpacing: "0%",
            }}
          >
          At Honesty &amp; Perfection, we are built on a simple belief which is that every service should be delivered with honesty, professionalism, and a commitment to excellence. Our group brings together diverse, specialized solutions designed to serve individuals, businesses, showrooms, facilities, and automotive partners across the UAE. Our expertise extends across professional cleaning and facility support, valet parking and driver solutions, car rental, and specialized automotive care. From trained cleaning teams supporting offices, buildings, and showrooms to reliable drivers for private and business requirements, we provide dependable solutions tailored to every need. In the automotive sector, our expertise covers car detailing, polishing, ceramic coating, window tinting, and premium vehicle appearance care. Through our B2B and B2C services, we bring together skilled teams, industry experience, and customer focused solutions under one trusted group. 
          </p>

          {/* ================= CHECKLIST ================= */}
          <div
            className="
              mt-2
              grid
              w-full
              max-w-[556px]
              grid-cols-1
              gap-x-10
              gap-y-[27px]
              sm:grid-cols-2
            "
          >
            {CHECKLIST.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                {/* Imported check image */}
                <Image
                  src={checkIcon}
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="
                    h-6
                    w-6
                    shrink-0
                    object-contain
                  "
                />

                <span
                  className="
                    font-poppins
                    text-black
                    text-[clamp(15px,1.1vw,16px)]
                  "
                  style={{
                    fontWeight: 400,
                    lineHeight: "140%",
                    letterSpacing: "0%",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div
          className="
            flex
            w-full
            min-w-0
            max-w-[822px]
            justify-center
            lg:justify-end
          "
        >
          <div
            className="
              relative
              flex
              w-full
              min-w-0
              max-w-[722px]
              flex-col
              gap-[25px]
            "
          >
            {MILESTONES.map((item, i) => (
              <div
                key={item.year}
                className="relative  cursor-pointer"
              >
                {/* ================= ARROW ================= */}
                {i < MILESTONES.length - 1 && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      z-10
                      hidden
                      lg:block
                     
                    "
                    style={{
                      top: "clamp(30px, 4vw, 50px)",
                      width: "clamp(60px, 8vw, 120px)",
                      height: "clamp(90px, 12vw, 160px)",
                      ...(i % 2 === 0
                        ? { left: "clamp(-120px, -8vw, -60px)" }
                        : { right: "clamp(-120px, -8vw, -60px)" }),
                    }}
                  >
                    <Image
                      src={i % 2 === 0 ? arrow1 : arrow2}
                      alt=""
                      aria-hidden="true"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* ================= MILESTONE CARD ================= */}
                <div
                  className="
                    group
                    flex
                    min-h-[100px]
                    w-full
                    items-center
                    gap-4
                    rounded-[10px]
                    border
                    border-transparent
                    bg-[#56AADC]
                    py-4
                    pl-[18px]
                    pr-6
                    transition-colors
                    duration-300
                    hover:bg-white
                    hover:shadow-md
                    sm:min-h-[120px]
                    sm:gap-9
                    sm:py-[16px]
                    sm:pl-[23px]
                    sm:pr-[40px]
                  "
                >
                  {/* ================= YEAR BADGE ================= */}
                  <div
                    className="
                      flex
                      h-[60px]
                      w-[72px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[10px]
                      bg-[#08507A]
                      px-3
                      transition-colors
                      duration-300
                      group-hover:bg-[#0D85CC]
                      sm:h-[89px]
                      sm:w-[105px]
                      sm:px-4
                    "
                  >
                    <span
                      className="
                        font-poppins
                        text-[16px]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-black
                        sm:text-[22px]
                      "
                      style={{
                        fontWeight: 600,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* ================= TEXT CONTENT ================= */}
                  <div className="flex min-w-0 flex-col gap-2">
                    <h3
                      className="
                        font-poppins
                        text-[16px]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-black
                        sm:text-[18px]
                      "
                      style={{
                        fontWeight: 500,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        font-poppins
                        text-[14px]
                        text-[#F6F6F6]
                        transition-colors
                        duration-300
                        group-hover:text-[#767676]
                        sm:text-[16px]
                      "
                      style={{
                        fontWeight: 400,
                        lineHeight: "130%",
                        letterSpacing: "0%",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}