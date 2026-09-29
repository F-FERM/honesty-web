"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import api from "@/lib/axios";

import phoneIcon from "../../../public/images/contact/phone.png";
import phoneHoverIcon from "../../../public/images/contact/hoverphone.png";
import mailIcon from "../../../public/images/contact/email.png";
import mailHoverIcon from "../../../public/images/contact/hoveremail.png";
import whatsappIcon from "../../../public/images/contact/whatsapp.png";
import whatsappHoverIcon from "../../../public/images/contact/hoverwhatsapp.png";
import locationIcon from "../../../public/images/contact/location.png";
import locationHoverIcon from "../../../public/images/contact/hoverlocation.png";

// ================= TYPES =================

type InfoCard = {
  icon: StaticImageData;
  hoverIcon: StaticImageData;
  title: string;
  lines: string[];
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ICON_SIZE = 26;

const INFO_CARDS: InfoCard[] = [
  {
    icon: phoneIcon,
    hoverIcon: phoneHoverIcon,
    title: "Call Us",
    lines: ["+971 4 263 0077", "+971 4 263 6786"],
  },
  {
    icon: mailIcon,
    hoverIcon: mailHoverIcon,
    title: "Email & Website",
    lines: ["manager@honestynperfection.com", "www.honestynperfection.com"],
  },
  {
    icon: whatsappIcon,
    hoverIcon: whatsappHoverIcon,
    title: "WhatsApp",
    lines: ["+971 4 263 0077"],
  },
  {
    icon: locationIcon,
    hoverIcon: locationHoverIcon,
    title: "Head Office",
    lines: ["Honesty & Perfection Group", "P.O. Box: 49112", "Dubai, UA"],
  },
];

// ================= HELPERS =================

function extractErrorMessage(err: unknown, fallback: string): string {
  const e = err as {
    response?: { data?: { message?: string | string[] } };
  };
  const msg = e?.response?.data?.message;
  if (Array.isArray(msg)) {
    return msg.length > 0 ? msg[0] : fallback;
  }
  return msg || fallback;
}

// ================= FORM FIELD =================

function FormField({
  label,
  placeholder,
  type = "text",
  isTextarea = false,
  name,
  value,
  onChange,
  disabled = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  isTextarea?: boolean;
  name: keyof ContactFormData;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-2">
      <label
        className="font-poppins text-black text-[16px] sm:text-[18px] mb-1"
        style={{
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        {label}
      </label>

      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          rows={4}
          className="
            w-full min-w-0 resize-none rounded-[10px] bg-white
            py-[15px] px-[24px] sm:px-[35px]
            text-[14px] text-black sm:text-[16px]
            shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
            outline-none
            placeholder:text-[#CCCCCC]
            font-poppins
            disabled:opacity-60
          "
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className="
            h-[52px] w-full min-w-0 sm:h-[57px]
            rounded-[10px] bg-white
            py-[15px] px-[24px] sm:px-[35px]
            text-[14px] text-black sm:text-[16px]
            shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
            outline-none
            placeholder:text-[#CCCCCC]
            font-poppins
            disabled:opacity-60
          "
        />
      )}
    </div>
  );
}

// ================= MAIN COMPONENT =================

export default function GetInTouch() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ---- Validation ----
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!form.email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    // simple email check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!form.subject.trim()) {
      toast.error("Please enter a subject");
      return;
    }
    if (!form.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    const toastId = toast.loading("Sending your message...");

    try {
      setSubmitting(true);

      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      };

      await api.post("/contact/submit", payload);

      toast.success("Message sent successfully! We'll get back to you soon.", {
        id: toastId,
      });
      setForm(INITIAL_FORM);
    } catch (err: unknown) {
      toast.error(
        extractErrorMessage(err, "Failed to send message. Please try again."),
        { id: toastId },
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-12 xl:px-16"
      style={{
        paddingTop: "clamp(100px, 12vw, 160px)",
        paddingBottom: "clamp(56px, 6vw, 96px)",
      }}
    >
      {/* ================= CONTAINER: 1464 x 795, gap 20 ================= */}
      <div className="mx-auto flex w-full max-w-[1464px] flex-col gap-6 lg:flex-row lg:items-center lg:gap-5">
        {/* ================= LEFT SECTION: FORM CARD ================= */}
        <div
          className="
            flex w-full min-w-0 flex-col gap-3
            rounded-[20px] bg-white
            shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
            px-6 py-8 sm:px-10 sm:py-10
            lg:w-[49.3%] lg:px-8 lg:py-10
            xl:px-[60px]
          "
        >
          <h2
            className="font-poppins max-w-[593px] text-black text-[22px] sm:text-[26px]"
            style={{
              fontWeight: 600,
              lineHeight: "150%",
              letterSpacing: "0.04em",
            }}
          >
            Get In Touch With Honesty &amp; Perfection Group
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-2 flex w-full flex-col gap-5"
          >
            <FormField
              label="Name"
              placeholder="Your Name..."
              name="name"
              value={form.name}
              onChange={handleChange}
              disabled={submitting}
            />
            <FormField
              label="Email"
              placeholder="example@gmail.com"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={submitting}
            />
            <FormField
              label="Subject"
              placeholder="Title..."
              name="subject"
              value={form.subject}
              onChange={handleChange}
              disabled={submitting}
            />
            <FormField
              label="Message"
              placeholder="Type Here..."
              isTextarea
              name="message"
              value={form.message}
              onChange={handleChange}
              disabled={submitting}
            />

            {/* ================= SEND NOW BUTTON ================= */}
            <button
              type="submit"
              disabled={submitting}
              className="
                mt-1 flex h-[55px] w-full items-center justify-center gap-[10px]
                rounded-[30px] bg-[#0D85CC]
                font-poppins text-white
                transition-colors duration-300
                hover:bg-[#C4D5DF] hover:text-[#08507A] cursor-pointer
                disabled:cursor-not-allowed disabled:opacity-70
              "
              style={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Now"
              )}
            </button>
          </form>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex w-full min-w-0 flex-col items-start gap-6 lg:w-[49.3%] lg:gap-[25px]">
          {/* Description: starts from the left edge */}
          <p
            className="font-poppins max-w-[650px] text-left text-black text-[16px] sm:text-[18px]"
            style={{
              fontWeight: 500,
              lineHeight: "140%",
              letterSpacing: "0%",
            }}
          >
            We are ready to help you with cleaning services, technical support,
            car rental, valet parking, vehicle detailing, and complete auto
            repair solutions.
          </p>

          {/* ================= 2x2 CARD GRID ================= */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 cursor-pointer">
            {INFO_CARDS.map((card) => (
              <div
                key={card.title}
                className="
                  group
                  flex min-w-0 flex-col items-center justify-center gap-2 text-center
                  rounded-[20px] bg-white
                  shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
                  px-6 py-6 sm:px-[35px] sm:py-[25px]
                  lg:px-5 xl:px-[35px]
                  transition-colors duration-300
                  hover:bg-[#0D85CC]
                "
              >
                <span
                  aria-hidden="true"
                  className="relative block h-[26px] w-[26px] shrink-0"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    className="absolute inset-0 h-full w-full object-contain transition-all duration-300 group-hover:scale-90 group-hover:opacity-0"
                  />
                  <Image
                    src={card.hoverIcon}
                    alt=""
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    className="absolute inset-0 h-full w-full scale-90 object-contain opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </span>

                <h3
                  className="font-poppins text-[#08507A] text-[16px] transition-colors duration-300 group-hover:text-white sm:text-[18px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {card.title}
                </h3>

                <div className="flex w-full min-w-0 flex-col gap-0.5">
                  {card.lines.map((line, i) => (
                    <span
                      key={i}
                      className="font-poppins text-black text-[13px] [overflow-wrap:anywhere] transition-colors duration-300 sm:text-[14px]"
                      style={{
                        fontWeight: 400,
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}