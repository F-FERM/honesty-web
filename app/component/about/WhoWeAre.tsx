import Image, { StaticImageData } from "next/image";

import workforceBg from "../../../public/images/about/whobg1.jpg";
import technologyBg from "../../../public/images/about/whobg2.jpg";
import customerBg from "../../../public/images/about/whobg3.jpg";
import experienceBg from "../../../public/images/about/whobg4.jpg";

import workforceIcon from "../../../public/images/about/whoicon1.png";
import technologyIcon from "../../../public/images/about/whoicon2.png";
import customerIcon from "../../../public/images/about/whoicon3.png";
import experienceIcon from "../../../public/images/about/whoicon4.png";

import workforceIconHover from "../../../public/images/about/whohov1.png";
import technologyIconHover from "../../../public/images/about/whohov2.png";
import customerIconHover from "../../../public/images/about/whohov3.png";
import experienceIconHover from "../../../public/images/about/whohov4.png";

type Item = {
  title: string;
  text: string;
  bg: StaticImageData;
  icon: StaticImageData;
  hoverIcon: StaticImageData;
};

const ITEMS: Item[] = [
  {
    title: "Skilled Workforce",
    text: "Our trained and experienced professionals deliver reliable cleaning, valet, driver, detailing, polishing, rental, and facility support solutions with efficiency, care, and attention to detail.",
    bg: workforceBg,
    icon: workforceIcon,
    hoverIcon: workforceIconHover,
  },
  {
    title: "Advanced Technology",
    text: "We embrace modern tools, equipment, and techniques to enhance service quality, improve operational efficiency, and deliver superior results across our automotive and facility-focused solutions.",
    bg: technologyBg,
    icon: technologyIcon,
    hoverIcon: technologyIconHover,
  },
  {
    title: "Customer-Centric Approach",
    text: "We understand each client’s requirements and provide flexible B2B and B2C solutions focused on convenience, reliability, quality, and long-term customer satisfaction.",
    bg: customerBg,
    icon: customerIcon,
    hoverIcon: customerIconHover,
  },
  {
    title: "Trusted Experience",
    text: "With diverse expertise across automotive care, cleaning, valet services, driver solutions, facility support, and car rental, we deliver dependable services backed by practical industry experience.",
    bg: experienceBg,
    icon: experienceIcon,
    hoverIcon: experienceIconHover,
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{
        paddingTop: "clamp(130px, 10vw, 150px)",
        paddingBottom: "clamp(210px, 28vw, 240px)",
      }}
    >
      {/* ================= HEADER: 870 wide, gap 12 ================= */}
      <div className="mx-auto flex w-full max-w-[870px] flex-col items-center gap-[12px] text-center">
        <h2
          className="font-poppins text-black text-[clamp(30px,4vw,46px)]"
          style={{
            fontWeight: 600,
            lineHeight: "150%",
            letterSpacing: "0.04em",
          }}
        >
          Who We Are
        </h2>

        <p
          className="font-poppins text-[#626262] text-[14px] leading-[1.6] sm:text-base sm:leading-6"
          style={{ fontWeight: 400 }}
        >
          Honesty &amp; Perfection combines skilled professionals, advanced
          technology, customer-focused service, and trusted experience to
          deliver reliable solutions across the UAE.
        </p>
      </div>

      {/* ================= CARDS: 573 x 273, gap 20 / 34 ================= */}
      <div className="mx-auto mt-10 grid w-full max-w-[1166px] grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[67px] lg:gap-y-[34px]">
        {ITEMS.map((item) => (
          <article
            key={item.title}
            className="
              group relative isolate overflow-hidden
              min-h-[273px] w-full
              rounded-[10px]
            "
          >
            {/* Photo */}
            <Image
              src={item.bg}
              alt=""
              fill
              sizes="(min-width: 1166px) 573px, (min-width: 768px) 50vw, 100vw"
              className="absolute inset-0 z-0 object-cover"
            />

            {/* Default: soft dark gradient (fades out on hover) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500 group-hover:opacity-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
              }}
            />

            {/* Hover: blue tint (fades in) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(0deg, rgba(13, 133, 204, 0.7), rgba(13, 133, 204, 0.7)), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            {/*
              Hover icon: starts exactly where the small icon tile sits
              (same left / top / size), then grows and travels to the
              top-right corner as the big icon.
              Mobile : starts 24px / 40px  ->  96px icon
              sm+    : starts 52px / 74px  ->  144px icon
            */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute z-[3] opacity-0
                left-6 top-10 h-[41px] w-[39px]
                sm:left-[52px] sm:top-[74px]
                transition-[left,top,width,height,opacity]
                duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:opacity-100
                group-hover:left-[calc(100%_-_104px)] group-hover:top-0
                group-hover:h-24 group-hover:w-24
                sm:group-hover:left-[calc(100%_-_152px)]
                sm:group-hover:h-[144px] sm:group-hover:w-[144px]
              "
            >
              <Image
                src={item.hoverIcon}
                alt=""
                fill
                sizes="144px"
                className="object-contain"
              />
            </div>

            {/* Content: padding 74 / 29 / 33 / 52 at full size */}
            <div className="relative z-10 flex flex-col gap-[13px] px-6 pb-8 pt-10 sm:pb-[33px] sm:pl-[52px] sm:pr-[29px] sm:pt-[74px]">
              {/* Small icon tile 39 x 41 (fades out fast as the big icon grows from it) */}
              <div
                className="
                  flex h-[41px] w-[39px] shrink-0 items-center justify-center
                  rounded-[10px] bg-[#08507A]
                  transition-opacity duration-150
                  group-hover:opacity-0
                "
              >
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  width={27}
                  height={27}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3
                className="font-poppins text-white text-[16px] sm:text-[18px]"
                style={{ fontWeight: 600, lineHeight: "100%" }}
              >
                {item.title}
              </h3>

              <p
                className="font-poppins max-w-[492px] text-[#E4E4E4] text-[14px] leading-[1.6] sm:text-base sm:leading-6"
                style={{ fontWeight: 400 }}
              >
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}