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
    <ul className="flex min-w-0 flex-col gap-3 sm:gap-5 lg:gap-[27px]">
      {items.map((item) => (
        // items-start keeps the check icon at the top if the text wraps
        <li key={item} className="flex min-w-0 items-start gap-3">
          <Image
            src={checkIcon}
            alt=""
            aria-hidden="true"
            width={28}
            height={28}
            className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
          />
          <span
            // min-w-0 + break-words lets long labels wrap instead of overflowing
            className="
              font-poppins
              min-w-0
              break-words
              text-[#E8E8E8]
              text-[15px]
              leading-[1.4]
              min-[400px]:text-[16px]
              sm:text-[16px]
              md:text-[17px]
              lg:text-[18px]
            "
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
      className="w-full overflow-x-hidden bg-[#0D85CC] px-4 sm:px-8 lg:px-12 xl:px-16"
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
        {/* ================= HEADING ================= */}
        <h2
          className="font-poppins text-center text-white text-[clamp(26px,4vw,46px)]"
          style={{
            fontWeight: 600,
            lineHeight: "110%",
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </h2>

        {/*
          POINTS
          < 640px : 1 column (both lists stacked, same 12px rhythm as the list)
          640px+  : left list pinned to the left edge, right list pinned to
                    the right edge (justify-between); 40px minimum gap
        */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-y-3
            sm:grid-cols-[auto_auto]
            sm:justify-between
            sm:gap-x-10
          "
        >
          <IndustryList items={industriesLeft} />
          <IndustryList items={industriesRight} />
        </div>
      </div>
    </section>
  );
}