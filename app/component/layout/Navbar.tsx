"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../../public/images/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div
        className="mx-auto flex items-center justify-between gap-[10px] px-5 py-5 sm:px-10 lg:px-20 md:h-[120px]"
        style={{ maxWidth: "1920px" }}
      >
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          aria-label="Honesty Perfection home"
          className="flex items-center shrink-0"
          style={{
            width: "151.83px",
            maxWidth: "40vw",
            height: "76px",
          }}
        >
          <Image
            src={logo}
            alt="Honesty Perfection"
            width={152}
            height={76}
            className="w-full h-auto object-contain"
            priority
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="
            hidden
            md:flex
            items-center
            justify-between
            shrink-0
            font-poppins
            h-[24px]
            md:w-[360px]
            lg:w-[440px]
            xl:w-[512px]
          "
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-[#0D85CC] underline"
                    : "text-black hover:text-[#0D85CC]"
                }`}
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "100%",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ================= DESKTOP BUTTON ================= */}
        <Link
          href="/contact-us"
          className="
            hidden
            md:flex
            items-center
            justify-center
            shrink-0
            font-poppins

            md:w-[150px]
            lg:w-[200px]
            xl:w-[277px]
            h-[55px]

            px-[17px]
            rounded-[40px]
            bg-[#0D85CC]
            text-white
            whitespace-nowrap

            transition-colors
            duration-300
            hover:bg-[#C4D5DF]
            hover:text-[#08507A]
          "
          style={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "100%",
          }}
        >
          Get A Quote
        </Link>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="md:hidden text-black p-2"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {mobileOpen && (
        <div
          className="
            md:hidden
            flex
            flex-col
            gap-5
            px-6
            pb-6
            pt-4
            font-poppins
            bg-white
            border-t
            border-gray-100
            shadow-lg
          "
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "text-[#0D85CC] underline" : "text-black"}
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "100%",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="
              flex
              items-center
              justify-center
              mt-2
              h-[55px]
              px-[17px]
              rounded-[40px]
              bg-[#0D85CC]
              text-white
              hover:bg-[#C4D5DF]
            hover:text-[#08507A]
            "
            style={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "100%",
            }}
          >
            Get A Quote
          </Link>
        </div>
      )}
    </header>
  );
}