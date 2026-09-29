import Image, { StaticImageData } from "next/image";

import experienceIcon from "../../../public/images/home/whyicon1.png";
import pricingIcon from "../../../public/images/home/whyicon2.png";
import workforceIcon from "../../../public/images/home/whyicon3.png";
import reliableIcon from "../../../public/images/home/whyicon4.png";
import toolsIcon from "../../../public/images/home/whyicon5.png";
import uaeIcon from "../../../public/images/home/whyicon6.png";

type Feature = {
  title: string;
  text: string;
  icon: StaticImageData;
};

const FEATURES: Feature[] = [
  {
    title: "18+ Years Experience",
    text: "Proven track record of excellence since 2002",
    icon: experienceIcon,
  },
  {
    title: "Competitive Pricing",
    text: "Premium quality at fair prices",
    icon: pricingIcon,
  },
  {
    title: "Skilled Workforce",
    text: "Trained professionals committed to quality",
    icon: workforceIcon,
  },
  {
    title: "Reliable Service",
    text: "Consistent quality you can trust",
    icon: reliableIcon,
  },
  {
    title: "Advanced Tools",
    text: "Latest equipment and technology",
    icon: toolsIcon,
  },
  {
    title: "UAE-Based Operations",
    text: "Local expertise, global standards",
    icon: uaeIcon,
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose-us"
      className="
        w-full
        bg-white
        px-4
        py-14
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
        xl:px-16
      "
    >
      {/* ============================================================
          MAIN CONTAINER: left 571 / right 870, gap 20
      ============================================================ */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1463px]
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-[571fr_870fr]
          lg:gap-5
        "
      >
        {/* ============================================================
            LEFT SECTION
        ============================================================ */}
        <div className="flex w-full flex-col">
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
            Why You Choose
          </h2>

          <h3
            className="
              mt-7
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

          <p
            className="
              mt-7
              font-poppins
              max-w-[571px]
              text-[#626262]
              text-[14px]
              leading-[1.7]
              sm:text-base
              sm:leading-6
            "
            style={{ fontWeight: 400 }}
          >
         


            At Honesty &amp; Perfection, we bring together specialized automotive, cleaning, mobility, and support solutions under one trusted group. Our services are designed to meet the diverse needs of customers across the UAE, with a strong focus on quality, professionalism, and reliability. From professional car detailing, polishing, ceramic coating, tinting, and appearance enhancement to cleaning and facility manpower solutions, we provide services tailored to different industries and customer requirements. Our capabilities also extend to professional driver supply, valet support, recovery team drivers, private drivers, and car rental solutions. With a customer first approach and a network of specialized service capabilities, we focus on delivering consistent quality, dependable support, skilled professionals, and convenient solutions. Honesty &amp; Perfection is committed to building lasting relationships through trust, excellence, and professional service. 
          </p>
        </div>

        {/* ============================================================
            RIGHT SECTION: feature cards (870 wide, gap 20)
            1 column below 768px, 2 columns at 768-1023px,
            1 column at 1024-1279px, 2 columns from 1280px
        ============================================================ */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-1
            xl:grid-cols-2
          "
        >
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="
                mx-auto
                flex
                min-h-[140px]
                w-full
                max-w-[425px]
                items-center
                gap-4
                rounded-[20px]
                bg-[#0D85CC]
                px-5
                py-[27px]
                sm:mx-0
                sm:px-8
                sm:max-w-none
                lg:max-w-none
              "
            >
              {/* Icon: 62 x 62, radius 10, padding 6 */}
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#08507A]
                  p-[6px]
                  sm:h-[62px]
                  sm:w-[62px]
                "
              >
                <Image
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text: gap 5 */}
              <div className="flex min-w-0 flex-col gap-[5px]">
                <h4
                  className="
                    font-poppins
                    text-white
                    text-[18px]
                    sm:text-[20px]
                    xl:text-[22px]
                  "
                  style={{
                    fontWeight: 600,
                    lineHeight: "120%",
                    letterSpacing: "0.04em",
                  }}
                >
                  {feature.title}
                </h4>

                <p
                  className="
                    font-poppins
                    text-[#08507A]
                    text-[14px]
                    leading-[1.4]
                    sm:text-base
                  "
                  style={{ fontWeight: 400 }}
                >
                  {feature.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}