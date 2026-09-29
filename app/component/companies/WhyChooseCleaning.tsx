import Image, { StaticImageData } from "next/image";
import { Phone } from "lucide-react";

import checkIcon from "../../../public/images/companies/checkedcompany.png";

// A point can be a plain string (uses the default check icon)
// or an object with its own icon.
export type Reason =
  | string
  | {
      text: string;
      icon?: StaticImageData | string;
    };

const DEFAULT_REASONS: Reason[] = [
  "Experienced and professionally trained cleaning staff",
  "Use of quality cleaning equipment and materials",
  "Flexible scheduling to suit business needs",
  "Consistent, reliable, and detail-oriented service",
];

type Props = {
  title?: string;
  reasons?: Reason[];
};

export default function WhyChooseCleaning({
  title = "Why Choose Our Cleaning Services?",
  reasons = DEFAULT_REASONS,
}: Props) {
  return (
    <section
      className="w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{
        paddingTop: "clamp(40px, 6vw, 96px)",
        paddingBottom: "clamp(56px, 6vw, 96px)",
      }}
    >
      {/* ================= SHARED CONTAINER (matches other sections) ================= */}
      <div className="mx-auto w-full max-w-[1465px]">
        {/* ================= LEFT SECTION ONLY: 883 x 475, gap 44 ================= */}
        <div className="flex w-full max-w-[883px] flex-col gap-6 sm:gap-8 lg:gap-[44px]">
          {/* ================= HEADING ================= */}
          <h2
            className="font-poppins text-black text-[clamp(28px,4vw,46px)] leading-[1.3] sm:leading-[1.5]"
            style={{
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            {title}
          </h2>

          {/* ================= POINTS: 513 wide, gap 29 ================= */}
          <ul className="flex w-full max-w-[513px] flex-col gap-4 sm:gap-5 lg:gap-[29px]">
            {reasons.map((reason, index) => {
              // Each point can bring its own icon; fall back to the check icon
              const item = typeof reason === "string" ? { text: reason } : reason;
              const icon = item.icon ?? checkIcon;

              return (
                <li
                  key={`${item.text}-${index}`}
                  className="flex items-start gap-3 sm:items-center"
                >
                  <Image
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="mt-0.5 h-6 w-6 shrink-0 object-contain sm:mt-0 sm:h-7 sm:w-7"
                  />
                  <span
                    className="font-poppins text-black text-[15px] leading-[1.4] sm:text-[18px]"
                    style={{
                      fontWeight: 400,
                      letterSpacing: "0%",
                    }}
                  >
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* ================= CONTACT NOW BUTTON ================= */}
          <a
            href="/contact-us"
            className="
              mt-1 flex w-fit h-[50px] items-center justify-center gap-[10px]
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
    </section>
  );
}