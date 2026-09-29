import Image from "next/image";

import checkIcon from "../../../public/images/companies/checkedcompany.png";

const DEFAULT_INDUSTRIES_LEFT = [
  "Commercial Buildings",
  "Hotels & Resorts",
  "Hospitals & Clinics",
];

const DEFAULT_INDUSTRIES_RIGHT = [
  "Banks & Offices",
  "Schools & Educational Institutions",
  "Factories & Industrial Units",
];

type Props = {
  title?: string;
  industriesLeft?: string[];
  industriesRight?: string[];
};

function IndustryList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-5 sm:gap-8 lg:gap-[47px]">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <Image
            src={checkIcon}
            alt=""
            aria-hidden="true"
            width={28}
            height={28}
            className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
          />
          <span
            className="font-poppins text-[#E8E8E8] text-[16px] leading-[1.3] sm:text-[18px]"
            style={{
              fontWeight: 400,
              letterSpacing: "0%",
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function IndustriesWeServe({
  title = "Industries We Serve",
  industriesLeft = DEFAULT_INDUSTRIES_LEFT,
  industriesRight = DEFAULT_INDUSTRIES_RIGHT,
}: Props) {
  return (
    <section
      className="w-full bg-[#0D85CC] px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{
        paddingTop: "clamp(56px, 8vw, 90px)",
        paddingBottom: "clamp(40px, 5vw, 50px)",
      }}
    >
      {/* ================= CONTENT: 1018 wide, centered ================= */}
      <div
        className="mx-auto flex w-full max-w-[1018px] flex-col items-center gap-8 sm:gap-10 lg:gap-[60px]"
        style={{
          paddingTop: "clamp(10px, 3vw, 20px)",
          paddingBottom: "clamp(24px, 3vw, 40px)",
        }}
      >
        {/* ================= HEADING (dynamic) ================= */}
        <h2
          className="font-poppins text-center text-white text-[clamp(28px,4vw,46px)]"
          style={{
            fontWeight: 600,
            lineHeight: "110%",
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </h2>

        {/* ================= POINTS: 1 column on phones, 2 from sm ================= */}
        <div className="grid w-full grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-16">
          <IndustryList items={industriesLeft} />
          <IndustryList items={industriesRight} />
        </div>
      </div>
    </section>
  );
}