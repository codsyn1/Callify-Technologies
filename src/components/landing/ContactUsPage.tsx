"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

/** Hero visual — professional workspace (Unsplash) */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=85";

const coverageRegions = [
  {
    title: "United States",
    detail: "Program delivery & US-aligned operating hours",
  },
  {
    title: "United Kingdom",
    detail: "European coverage and partner coordination",
  },
];

const quickFacts = [
  "Dedicated reply within one business day for qualified inquiries.",
  "Share volumes, channels, and compliance needs—we’ll respond with clarity.",
  "Prefer a structured scope? Use Get a quote for a fuller brief.",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function ContactUsPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone") || undefined,
          message: formData.get("message"),
          source: "contact-us",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        setError(
          result.error ??
            "Something went wrong. Please try again or email info@callifytechnologies.com."
        );
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError(
        "Network error. Please try again or email info@callifytechnologies.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary-soft/80 via-white to-primary-soft/40">
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/[0.12] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="min-w-0">
              <span className="inline-flex rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-sm">
                Contact us anytime
              </span>
              <h1 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12] xl:max-w-2xl">
                Let&apos;s talk about your contact center goals
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Whether you need a fast email response or a full program review,
                our team is ready to listen and point you in the right direction.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/request-a-quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Get a quote
                  <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="mailto:info@callifytechnologies.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:bg-primary-soft/50"
                >
                  <MailIcon className="size-4 text-primary" />
                  Email us
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary/25 via-primary/5 to-transparent opacity-80 blur-md sm:-inset-2 sm:rounded-[2rem]"
                aria-hidden
              />
              <figure className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_28px_60px_-28px_rgba(65,116,185,0.35)] ring-1 ring-primary/10 sm:aspect-[4/3] lg:aspect-[4/5] lg:rounded-[1.75rem]">
                <Image
                  src={HERO_IMAGE}
                  alt="Team collaborating in a professional office"
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent"
                  aria-hidden
                />
                <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/50 to-transparent px-5 pb-4 pt-16 text-xs font-medium text-white/90">
                  Partnership-led delivery for your brand
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Where we operate
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted">
              Delivery anchored to your brand standards—with teams aligned to
              your coverage window.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
            <div className="flex flex-col gap-4">
              {coverageRegions.map((r) => (
                <div
                  key={r.title}
                  className="group rounded-2xl border border-border/80 bg-gradient-to-br from-white to-surface/80 p-6 shadow-sm ring-1 ring-black/[0.03] transition hover:border-primary/20 hover:shadow-md hover:ring-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary transition group-hover:bg-primary/18">
                      <LocationIcon className="size-5" />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="font-semibold text-foreground">{r.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {r.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 via-primary-soft/50 to-white p-6 shadow-sm ring-1 ring-primary/10">
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                      Email
                    </p>
                    <a
                      href="mailto:info@callifytechnologies.com"
                      className="mt-2 inline-flex break-all text-base font-semibold text-foreground underline decoration-primary/35 underline-offset-[5px] transition hover:decoration-primary"
                    >
                      info@callifytechnologies.com
                    </a>
                  </div>
                  <div className="sm:border-l sm:border-primary/15 sm:pl-8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                      Coverage window
                    </p>
                    <p className="mt-2 text-lg font-semibold tabular-nums text-foreground">
                      8pm – 6am
                    </p>
                    <p className="mt-1 text-sm text-muted">Your timezone</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-h-[320px] flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.04] sm:min-h-0">
              <div className="flex items-center justify-between gap-3 border-b border-border/80 bg-gradient-to-r from-surface/90 to-white px-5 py-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                    Map
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    Coverage overview
                  </p>
                </div>
                <span className="hidden rounded-lg bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary sm:inline-block">
                  Live
                </span>
              </div>
              <div className="relative min-h-[220px] flex-1 sm:min-h-[280px]">
                <iframe
                  title="OpenStreetMap — US & UK region overview"
                  className="absolute inset-0 size-full border-0 grayscale-[0.15]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-105%2C25%2C5%2C58&amp;layer=mapnik"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/80 bg-surface/40 px-4 py-3 text-xs text-muted">
                <span className="opacity-80">© OpenStreetMap contributors</span>
                <a
                  href="https://www.openstreetmap.org/#map=4/39.8/-50.0"
                  className="font-semibold text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open full map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-b from-primary-soft/35 via-surface to-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Contact us
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Send a message and we&apos;ll get back to you shortly.
              </p>

              <form
                onSubmit={onSubmit}
                className="mt-10 rounded-3xl border border-border/90 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(65,116,185,0.2)] ring-1 ring-primary/5 sm:p-9"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                      Name
                    </span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                      Phone{" "}
                      <span className="font-medium normal-case text-muted/80">
                        (optional)
                      </span>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+1 …"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                      Message
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="How can we help?"
                      className={`${fieldClass} min-h-[140px] resize-y`}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting || sent}
                  className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending…" : "Submit"}
                  <ArrowRightIcon className="size-4 opacity-90 transition group-hover:translate-x-0.5" />
                </button>

                {error ? (
                  <p
                    className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    role="alert"
                  >
                    {error}
                  </p>
                ) : null}

                {sent ? (
                  <div
                    className="mt-6 flex items-start gap-3 rounded-xl border border-primary/25 bg-primary-soft/80 px-4 py-3 text-sm text-foreground"
                    role="status"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <CheckIcon className="size-4" />
                    </span>
                    <p>
                      <span className="font-semibold">Thanks.</span> Your
                      message was saved—we&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : null}
              </form>
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-3xl border border-border/90 bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.04]">
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark px-6 py-11 text-center">
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-white/10 blur-2xl"
                      aria-hidden
                    />
                    <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                      Why write in?
                    </p>
                    <p className="relative mx-auto mt-4 max-w-[16rem] text-lg font-bold leading-snug text-white sm:text-xl">
                      Complete the form to get to know about us
                    </p>
                  </div>
                  <ul className="divide-y divide-border/60 p-2">
                    {quickFacts.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 px-4 py-4 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                          <CheckIcon className="size-3.5" />
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border/80 p-4">
                    <Link
                      href="/request-a-quote"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/25 bg-primary-soft/40 py-3 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary-soft/70"
                    >
                      Need a formal quote?
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
