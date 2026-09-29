import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

import logo from "../../../public/images/logo.png";
import honestyText from "../../../public/images/Honestyfooter.png";
import perfectionText from "../../../public/images/perfectionfooter.png";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "Contact Us", href: "/contact-us" },
];

const COMPANY_LINKS = [
  { label: "Cleaning Service", href: "/companies/cleaning" },
  { label: "Green Oasis Rent Car", href: "/companies/green-oasis" },
  { label: "Valet Parking", href: "/companies/valet-parking" },
  { label: "MT Auto Zone", href: "/companies/mt-autozone" },
  { label: "Honest World Motors", href: "/companies/world-motors" },
];

const SUPPORT_LINKS = [
  { label: "Customer Support", href: "/support" },
  { label: "Service Requests", href: "/service-requests" },
  { label: "Help Center", href: "/help-center" },
];

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: IconBrandFacebook },
  { label: "Instagram", href: "#", Icon: IconBrandInstagram },
  { label: "Twitter", href: "#", Icon: IconBrandTwitter },
];

type LinkItem = { label: string; href: string };

function LinkColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div className="flex flex-col">
      <h4
        className="font-poppins text-black text-[18px] sm:text-[20px] xl:text-[22px]"
        style={{ fontWeight: 500, lineHeight: "100%" }}
      >
        {title}
      </h4>

      <ul className="mt-4 flex flex-col gap-[14px] xl:mt-5 xl:gap-[21px]">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-poppins text-[#464646] text-[15px] transition-colors duration-200 hover:text-[#0D85CC] xl:text-[18px]"
              style={{
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0.04em",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-[#D9D9D9]
        px-5 pt-10 pb-10
        sm:px-10
        lg:px-20 lg:pt-[57px] lg:pb-[56px]
      "
    >
      {/* ================= BACKGROUND IMAGES (centered, scale with screen) ================= */}
      {/* Design size 1154 x 153 at 1920px wide; never larger than that. */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0
          top-2 lg:top-[min(0.5vw,10px)]
          flex flex-col items-center
          gap-[3vw] lg:gap-[min(7vw,135px)]
          select-none
        "
      >
        <Image
          src={honestyText}
          alt=""
          className="h-auto w-[90%] sm:w-[75%] lg:w-[60%] max-w-[1154px]"
        />
        <Image
          src={perfectionText}
          alt=""
          className="h-auto w-[90%] sm:w-[75%] lg:w-[60%] max-w-[1154px]"
        />
      </div>

      {/* ================= CONTENT (1760 wide) ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1760px]">
        {/* ---------- Quick Link / Companies / Support ---------- */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:justify-between">
          <LinkColumn title="Quick Link" links={QUICK_LINKS} />
          <LinkColumn title="Companies" links={COMPANY_LINKS} />
          <div className="col-span-2 sm:col-span-1">
            <LinkColumn title="Support" links={SUPPORT_LINKS} />
          </div>
        </div>

        {/* ---------- Logo / tagline / Contact Now ---------- */}
        {/* Stacked below 1280px, one row from xl */}
        <div className="mt-12 flex flex-col gap-8 xl:mt-[34px] xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          {/* Logo + copyright */}
          <div className="flex w-full flex-col gap-[15px] xl:w-[320px] xl:shrink-0 2xl:w-[469px]">
            <Link href="/" aria-label="Honesty Perfection home">
              <Image
                src={logo}
                alt="Honesty Perfection"
                width={235}
                height={118}
                className="h-auto w-[170px] object-contain mix-blend-multiply sm:w-[200px] xl:w-[235px]"
              />
            </Link>

            <p
              className="font-poppins text-black text-[15px] sm:text-[17px] 2xl:text-[20px]"
              style={{ fontWeight: 400, lineHeight: "130%" }}
            >
              &copy; {year} Honesty &amp; Perfection All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <p
            className="font-poppins w-full text-black text-[16px] leading-6 sm:text-[18px] sm:leading-[26px] xl:min-w-0 xl:flex-1 xl:max-w-[660px] 2xl:text-[22px] 2xl:leading-[31px]"
            style={{ fontWeight: 500 }}
          >
           Founded in 2002, Honesty &amp; Perfection delivers high-quality outsourcing services in automotive and facility management.
We focus on reliability, flexibility, and customer satisfaction with highly trained professionals.
          </p>

          {/* Contact Now: 224 x 50 */}
          <Link
            href="/contact-us"
            className="
              font-inter
              flex h-[50px] w-[224px] shrink-0 items-center justify-center gap-[10px]
              rounded-[30px]
              bg-[#0D85CC]
              px-8
              text-white
              whitespace-nowrap
              transition-colors duration-300
              hover:bg-[#C4D5DF] hover:text-[#08507A]
            "
            style={{ fontWeight: 500, fontSize: "16px", lineHeight: "100%" }}
          >
            <Phone size={18} aria-hidden="true" className="shrink-0" />
            Contact Now
          </Link>
        </div>

        {/* ---------- Divider ---------- */}
        <div className="mt-10 h-px w-full bg-[#B3B3B3] lg:mt-14 2xl:mt-[71px]" />

        {/* ---------- Location / contact / legal / social ---------- */}
        {/* 1 column on phones, 2x2 grid up to 1535px, one row from 2xl */}
        <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:pt-[34px] 2xl:flex 2xl:items-center 2xl:justify-between">
          <address
            className="font-poppins max-w-[390px] text-black not-italic text-[16px] leading-[150%] sm:text-[18px] 2xl:text-[22px]"
            style={{ fontWeight: 400 }}
          >
            Saheel Tower - 1302 - 1 28th St - Al Nahda First - Al Qusais 1 -
            Dubai - United Arab Emirates
          </address>

          <div
            className="font-poppins flex min-w-0 flex-col text-black text-[16px] leading-[150%] sm:text-[18px] 2xl:text-[22px]"
            style={{ fontWeight: 400 }}
          >
            <a
              href="mailto:abrar.sayed@honestynperfection.com"
              className="break-all transition-colors hover:text-[#0D85CC]"
            >
              abrar.sayed@honestynperfection.com
            </a>
            <a
              href="tel:+971558966452"
              className="transition-colors hover:text-[#0D85CC]"
            >
              +971 558966452
            </a>
          </div>

          <div
            className="font-poppins flex flex-col text-black text-[16px] leading-[150%] sm:text-[18px] 2xl:text-[22px]"
            style={{ fontWeight: 400 }}
          >
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#0D85CC]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="transition-colors hover:text-[#0D85CC]"
            >
              Terms of Use
            </Link>
          </div>

          {/* Social icons: 35 x 35 (a bit smaller on phones) */}
          <div className="flex items-center gap-5 sm:gap-6">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-black transition-colors duration-200 hover:text-[#0D85CC]"
              >
                <Icon
                  size={35}
                  stroke={1.5}
                  aria-hidden="true"
                  className="h-8 w-8 sm:h-[35px] sm:w-[35px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}