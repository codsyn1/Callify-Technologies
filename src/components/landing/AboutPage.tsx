"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85";

const stats = [
  { label: "Clients served", value: "200+", detail: "Programs across channels" },
  { label: "Completed projects", value: "150+", detail: "From pilots to scale" },
  { label: "Years in industry", value: "10+", detail: "Contact center depth" },
];

const team = [
  {
    name: "Alex Morgan",
    role: "Chief Executive Officer",
    bio: "Focused on building Callify on strong foundations—client commitment, disciplined operations, and steady innovation as markets evolve.",
    skills: ["Entrepreneur", "Sales leadership", "Strategy", "Team building"],
    initials: "AM",
  },
  {
    name: "Jordan Lee",
    role: "Chief Financial Officer",
    bio: "Works to keep growth responsible and measurable, aligning resourcing and outcomes so customers receive dependable value at every stage.",
    skills: ["Risk management", "Operations finance", "Planning", "Punctuality"],
    initials: "JL",
  },
  {
    name: "Sam Rivera",
    role: "General Manager",
    bio: "Ensures smooth performance across teams—clear priorities, strong coordination, and consistent quality from onboarding through daily delivery.",
    skills: ["Strategy", "Decision making", "Team building", "Conflict resolution"],
    initials: "SR",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function AboutPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="relative isolate flex min-h-[max(22rem,44svh)] flex-col overflow-hidden border-b border-border sm:min-h-[max(26rem,48svh)] lg:min-h-[max(28rem,52svh)] xl:min-h-[max(30rem,54svh)]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center brightness-[1.05] contrast-[1.03] sm:object-[58%_32%] lg:object-[62%_30%] lg:scale-[1.03]"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-foreground/90 from-[0%] via-foreground/55 via-[38%] to-foreground/10 to-[68%] sm:via-[40%] sm:to-[72%] lg:via-[42%] lg:to-[78%]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-foreground/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-80"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/30 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md">
              Best results delivery
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white drop-shadow-sm sm:mt-5 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
              About Callify Technologies
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:mt-4 sm:text-lg">
              A partner-led BPO and contact center team built for clarity,
              accountability, and quality—aligned to your brand, every shift.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/request-a-quote"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-primary-dark"
              >
                Get a quote
                <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Who we are?
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Being efficient with overhead and execution is one of our
                strengths—so you get economical packages without cutting corners
                on governance, training, or QA.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Callify Technologies is a trusted outsourcing partner for teams
                in the United States, United Kingdom, Canada, and Australia. We
                support responsive customer care and disciplined program
                management on a 24/7 basis, 365 days a year.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                We ensure quality at every level. When it comes to quality, we do
                not compromise—we deliver the best version of the playbook your
                brand deserves.
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                {[
                  "A repeatable “killer formula”: training + QA + reporting tied to outcomes.",
                  "Accountability embedded into daily operations—not a slide, a system.",
                  "Transparent communication so stakeholders always know what changed and why.",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/12 text-primary">
                      <CheckIcon className="size-3.5" />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-70 blur-sm"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-gradient-to-br from-surface to-white p-8 shadow-[0_24px_60px_-28px_rgba(65,116,185,0.18)] ring-1 ring-primary/8 sm:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  At a glance
                </p>
                <p className="mt-4 text-lg font-semibold leading-snug text-foreground">
                  We strive to produce and deliver the best quality of services—
                  with measurable accountability and a calm, professional tone on
                  every channel.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/80 bg-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Coverage
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      24/7 programs
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Regions
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      US · UK · CA · AU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/90 bg-gradient-to-br from-white to-surface/90 p-7 text-center shadow-sm ring-1 ring-black/[0.03] transition hover:border-primary/20 hover:shadow-md"
              >
                <p className="text-4xl font-bold tabular-nums tracking-tight text-primary sm:text-[2.75rem]">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-muted">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-b from-primary-soft/35 via-surface to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Our team
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted">
              Leadership that sets the tone—clear priorities, respectful culture,
              and customer-first execution.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-border/90 bg-white shadow-[0_20px_50px_-28px_rgba(15,23,42,0.12)] ring-1 ring-black/[0.03] transition hover:border-primary/15 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 border-b border-border/70 bg-gradient-to-r from-primary-soft/60 to-white px-6 py-6">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white shadow-inner shadow-black/10">
                    {m.initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold text-foreground">
                      {m.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {m.role}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <p className="text-sm leading-relaxed text-muted">{m.bio}</p>
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                    Skills
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {m.skills.map((sk) => (
                      <li
                        key={sk}
                        className="rounded-full border border-primary/15 bg-primary-soft/60 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {sk}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-primary-dark to-primary-dark p-8 text-white shadow-[0_28px_60px_-24px_rgba(65,116,185,0.45)] sm:p-10">
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-white/10 blur-3xl"
                aria-hidden
              />
              <h2 className="relative text-xl font-bold sm:text-2xl">
                Mission of Callify Technologies
              </h2>
              <p className="relative mt-5 text-sm leading-relaxed text-white/90 sm:text-base">
                Our mission is to give more businesses access to a dependable
                outsourcing platform—reducing workload with competent,
                professional personnel—so the benefits exceed the commercial
                objectives of our clients.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-white p-8 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.12)] ring-1 ring-primary/8 sm:p-10">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Our vision
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                Our vision is to embrace a changing environment and prove our
                organizational capacity and working ethics above biases and
                competition. This journey is about optimum performance and zero
                tolerance for mediocre service—for every client and every end
                customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-b from-primary-soft/35 via-surface to-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Get to know us
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Complete the form and we&apos;ll follow up with the right next
                step—whether that&apos;s a discovery call, a quote, or a
                tailored program outline.
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
                      Message
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Tell us what you are looking for"
                      className={`${fieldClass} min-h-[120px] resize-y`}
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark sm:w-auto"
                >
                  Submit
                  <ArrowRightIcon className="size-4 opacity-90 transition group-hover:translate-x-0.5" />
                </button>
                {sent ? (
                  <div
                    className="mt-6 flex items-start gap-3 rounded-xl border border-primary/25 bg-primary-soft/80 px-4 py-3 text-sm text-foreground"
                    role="status"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <CheckIcon className="size-4" />
                    </span>
                    <p>
                      <span className="font-semibold">Thanks.</span> This demo
                      does not post to a server yet—connect your API or inbox
                      integration here.
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
                      Next step
                    </p>
                    <p className="relative mx-auto mt-4 max-w-[18rem] text-lg font-bold leading-snug text-white sm:text-xl">
                      Complete the form to get to know about us
                    </p>
                  </div>
                  <ul className="divide-y divide-border/60 p-2">
                    {[
                      "We reply within one business day for qualified inquiries.",
                      "Share volumes, channels, and compliance needs for a sharper response.",
                      "Want a fuller brief? Use Get a quote for structured intake.",
                    ].map((line) => (
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
                      Request a quote
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
