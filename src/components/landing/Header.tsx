"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const inboundLinks = [
  {
    href: "/call-center-services/inbound/lead-qualification",
    label: "Lead qualification",
  },
  {
    href: "/call-center-services/inbound/direct-response",
    label: "Direct response",
  },
  {
    href: "/call-center-services/inbound/live-phone-answering",
    label: "Live phone answering",
  },
  {
    href: "/call-center-services/inbound/medical-answering",
    label: "Medical answering",
  },
  {
    href: "/call-center-services/inbound/chat-support",
    label: "Chat support",
  },
  {
    href: "/call-center-services/inbound/outsourced-tech-support",
    label: "Outsourced tech support",
  },
  {
    href: "/call-center-services/inbound/outsource-email-support",
    label: "Email support",
  },
  {
    href: "/call-center-services/inbound/taxi-answering-service",
    label: "Taxi answering",
  },
];

const outboundLinks = [
  {
    href: "/call-center-services/outbound/appointment-setting-services",
    label: "Appointment setting",
  },
  { href: "/#services", label: "Callback services" },
  {
    href: "/call-center-services/outbound/lead-generation",
    label: "Lead generation",
  },
  {
    href: "/call-center-services/outbound/live-call-transfer",
    label: "Live call transfer",
  },
  {
    href: "/call-center-services/outbound/outsource-telemarketing-services",
    label: "Telemarketing",
  },
];

const serviceLinks = [
  { href: "/digital-marketing", label: "Digital marketing" },
];

const industryLinks = [
  { href: "/industries/call-center-insurance", label: "Insurance" },
  { href: "/industries/healthcare-call-center", label: "Healthcare" },
  { href: "/industries/real-estate-call-center", label: "Real estate" },
  { href: "/industries/financial-services-call-center", label: "Financial" },
  { href: "/industries/it-call-center", label: "Information technology" },
];

const resourceLinks = [
  { href: "/call-center-jobs", label: "Jobs" },
  { href: "/blog", label: "Blog" },
];

type MobilePanel =
  | "in"
  | "out"
  | "services"
  | "industries"
  | "resources"
  | null;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>(null);

  const togglePanel = (key: Exclude<MobilePanel, null>) => {
    setMobilePanel((p) => (p === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 sm:py-2">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center leading-none"
          aria-label="Callify Technologies home"
        >
          <Image
            src="/callify-logo.png"
            alt="Callify Technologies"
            width={1063}
            height={383}
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
            className="h-[3.25rem] w-auto sm:h-14 md:h-[3.625rem] lg:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              Call center
              <ChevronDown className="size-4 text-muted" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="flex min-w-[520px] rounded-lg border border-border bg-white p-4 shadow-lg">
                <div className="flex-1 border-r border-border pr-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-primary">
                    Inbound
                  </p>
                  <ul className="space-y-1">
                    {inboundLinks.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="block rounded px-2 py-1.5 text-sm text-foreground hover:bg-primary-soft"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 pl-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-primary">
                    Outbound
                  </p>
                  <ul className="space-y-1">
                    {outboundLinks.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="block rounded px-2 py-1.5 text-sm text-foreground hover:bg-primary-soft"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              Services
              <ChevronDown className="size-4 text-muted" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <ul className="min-w-[220px] rounded-lg border border-border bg-white py-1 shadow-lg">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block px-3 py-2 text-sm hover:bg-primary-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/#industries"
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium hover:bg-primary-soft"
            >
              Industries
              <ChevronDown className="size-4 text-muted" aria-hidden />
            </Link>
            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <ul className="min-w-[220px] rounded-lg border border-border bg-white py-1 shadow-lg">
                {industryLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block px-3 py-2 text-sm hover:bg-primary-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-foreground hover:bg-primary-soft"
            >
              Resources
              <ChevronDown className="size-4 text-muted" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <ul className="min-w-[180px] rounded-lg border border-border bg-white py-1 shadow-lg">
                {resourceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block px-3 py-2 text-sm hover:bg-primary-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/about"
            className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-primary-soft"
          >
            About
          </Link>
          <Link
            href="/contact-us"
            className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-primary-soft"
          >
            Contact
          </Link>
          <Link
            href="/request-a-quote"
            className="ml-2 rounded-md bg-primary px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
          >
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-primary-soft"
              onClick={() => togglePanel("in")}
            >
              Inbound call center
              <ChevronDown
                className={`size-4 transition ${mobilePanel === "in" ? "rotate-180" : ""}`}
              />
            </button>
            {mobilePanel === "in" ? (
              <ul className="ml-2 space-y-1 border-l-2 border-primary/30 pl-3">
                {inboundLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block py-1.5 text-sm text-muted"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-primary-soft"
              onClick={() => togglePanel("out")}
            >
              Outbound call center
              <ChevronDown
                className={`size-4 transition ${mobilePanel === "out" ? "rotate-180" : ""}`}
              />
            </button>
            {mobilePanel === "out" ? (
              <ul className="ml-2 space-y-1 border-l-2 border-primary/30 pl-3">
                {outboundLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block py-1.5 text-sm text-muted"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-primary-soft"
              onClick={() => togglePanel("services")}
            >
              Services
              <ChevronDown
                className={`size-4 transition ${mobilePanel === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {mobilePanel === "services" ? (
              <ul className="ml-2 space-y-1 border-l-2 border-primary/30 pl-3">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block py-1.5 text-sm text-muted"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-primary-soft"
              onClick={() => togglePanel("industries")}
            >
              Industries
              <ChevronDown
                className={`size-4 transition ${mobilePanel === "industries" ? "rotate-180" : ""}`}
              />
            </button>
            {mobilePanel === "industries" ? (
              <ul className="ml-2 space-y-1 border-l-2 border-primary/30 pl-3">
                {industryLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block py-1.5 text-sm text-muted"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-primary-soft"
              onClick={() => togglePanel("resources")}
            >
              Resources
              <ChevronDown
                className={`size-4 transition ${mobilePanel === "resources" ? "rotate-180" : ""}`}
              />
            </button>
            {mobilePanel === "resources" ? (
              <ul className="ml-2 space-y-1 border-l-2 border-primary/30 pl-3">
                {resourceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="block py-1.5 text-sm text-muted"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            {[
              ["About", "/about"],
              ["Contact", "/contact-us"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-primary-soft"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/request-a-quote"
              className="mt-2 block rounded-md bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
