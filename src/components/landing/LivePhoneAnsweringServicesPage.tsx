"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactForm } from "@/hooks/use-contact-form";
import { mapStandardContactForm } from "@/lib/form-payload-mappers";
import { FormSubmitStatus } from "@/components/landing/FormSubmitStatus";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85";

const servicePillars = [
  {
    title: "Quick turnaround time",
    body: "Fast answers any time—no slow queues or endless hold loops when customers need you now.",
    icon: ClockIcon,
  },
  {
    title: "Scalability",
    body: "Grow coverage as you grow—add lines, hours, and agents without rebuilding ops from scratch.",
    icon: ChartIcon,
  },
  {
    title: "24/7 support",
    body: "Professional answering around the clock—rain or shine, weekends and peak seasons included.",
    icon: UsersIcon,
  },
  {
    title: "High success rate",
    body: "Fewer abandoned calls and stronger retention—every ring handled with care and context.",
    icon: CheckIcon,
  },
  {
    title: "Certified answering service",
    body: "Trained receptionists on modern techniques—efficient, polite, and aligned to your scripts.",
    icon: ClipboardIcon,
  },
  {
    title: "Cost-effective packages",
    body: "Affordable tiers so you find the right fit—without sacrificing live human quality.",
    icon: ValueIcon,
  },
];

const testimonials = [
  {
    quote:
      "Brilliant model for a new business—quality virtual reception without breaking the bank. Very impressed; we are happy customers.",
    name: "Herman Moreno",
    role: "Founder, local services",
  },
  {
    quote:
      "Over a year with Callify—agents are polite, friendly, and professional with our clients every time they call.",
    name: "Wanda Feron",
    role: "Office manager, professional firm",
  },
  {
    quote:
      "Punctual, understood our needs, and delivered quality answering work. Five years in and we still recommend them highly.",
    name: "Nydia Benson",
    role: "Operations lead, multi-location business",
  },
];

const faqs = [
  {
    q: "What is Callify’s live phone answering service?",
    a: "A professional answering program that connects callers to trained agents who answer questions, take messages, and route urgent needs—24/7.",
  },
  {
    q: "Why does Callify offer live phone answering?",
    a: "So customers reach a real person even when your team is busy—missed calls and lost opportunities drop when coverage is always on.",
  },
  {
    q: "What are the benefits?",
    a: "24/7 handling, fewer missed interactions, virtual reception presence, recordings for organization, and management from anywhere.",
  },
  {
    q: "How much does telephone answering cost?",
    a: "Competitive plans by volume and hours—request a free quote and we will recommend a tier that fits your budget.",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function LivePhoneAnsweringServicesPage() {
  const { sent, submitting, error, onSubmit } = useContactForm({
    source: "live-phone-answering",
    mapPayload: mapStandardContactForm,
  });

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-gradient-to-br from-primary-soft/75 via-white to-surface">
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/[0.12] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="min-w-0">
            <span className="inline-flex rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary shadow-sm">
              Inbound
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Live phone answering—to make your customers heard
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Better experiences, stronger conversion—Callify answers every call with
              live agents, not frustrating phone trees.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/request-a-quote"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
              >
                Get a quote
                <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:bg-primary-soft/50"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary/25 via-primary/5 to-transparent opacity-90 blur-md"
              aria-hidden
            />
            <figure className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_28px_60px_-28px_rgba(65,116,185,0.35)] ring-1 ring-primary/10 sm:aspect-[4/3]">
              <Image
                src={HERO_IMAGE}
                alt="Live phone answering agent with headset"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"
                aria-hidden
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Business phone answering service you can trust
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base font-medium italic text-primary sm:text-lg">
            Human answering that outperforms automated systems—because callers deserve better.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Recordings to stay organized, live receptionists for a professional image,
            and trained operators for non-phone inquiries—you do not settle for less.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Certified agents answer around the clock—orders, questions, and issues
            handled with the care your brand promises face to face.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            We are not a typical BPO script mill—dedicated inbound providers who make
            every caller feel heard, whether by phone or alongside your digital channels.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-surface via-white to-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What live phone answering holds for you
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              More than a virtual receptionist—coverage that scales when your business grows.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/90 bg-white p-6 shadow-sm ring-1 ring-black/[0.03] transition hover:border-primary/20 hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What clients say about our live answering service
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded-2xl border border-border/90 bg-gradient-to-br from-surface/80 to-white p-6 shadow-sm ring-1 ring-primary/5"
              >
                <p className="text-sm leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border/70 pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary-soft/40 via-surface to-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Tell us about your phone answering needs
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Complete the form and we will follow up with next steps—ICP,
                channels, and a realistic pilot plan.
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
                    <input required name="name" className={fieldClass} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
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
                      className={`${fieldClass} min-h-[120px] resize-y`}
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={submitting || sent}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending…" : "Submit"}
                  <ArrowRightIcon className="size-4" />
                </button>
                <FormSubmitStatus sent={sent} error={error} />
              </form>
            </div>
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-3xl border border-border/90 bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.15)] ring-1 ring-black/[0.04]">
                  <div className="bg-gradient-to-br from-primary via-primary to-primary-dark px-6 py-10 text-center text-white">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                      Next step
                    </p>
                    <p className="mx-auto mt-3 max-w-[18rem] text-lg font-bold leading-snug">
                      Complete the form to get to know about us
                    </p>
                  </div>
                  <ul className="divide-y divide-border/60 p-2">
                    {[
                      "Scripts and routing aligned before lines go live.",
                      "Messages and transfers your team can trust.",
                      "Reporting on volume, answer rate, and outcomes.",
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
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Live phone answering FAQs
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-4 text-base leading-relaxed text-muted">
            We answer 24 hours a day, 7 days a week—schedule a callback and see live
            coverage in action, not voicemail roulette.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Clear scope, competitive plans, and agents who treat every caller with
            respect—whether you need one line or a growing program.
          </p>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border/90 bg-surface/30">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white px-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-left text-sm font-semibold text-foreground hover:text-primary">
                  {f.q}
                  <span className="text-muted transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="pb-4 text-sm leading-relaxed text-muted">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-surface to-primary-soft/30 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Callify answering workflow
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Calls answered within the first rings—professional, courteous handling
            on every interaction.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Planning & contact strategies
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Scope hours and lines, plan outreach per segment, and align virtual
            reception with your sales goals.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Client satisfaction & QA
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Trained agents, coaching, and back-office support—prompt, fluent, accurate
            answers backed by quality control.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Detailed reporting
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Track volume, length, and outcomes—see where you excel and where to tune
            scripts, staffing, or routing.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Virtual receptionist & more
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Voicemail, scheduling, secure handling, warm transfers, and localized
            agents—one partner for the full answering stack.
          </p>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
            <p className="text-base font-semibold text-foreground">
              Ready to scope a live answering pilot?
            </p>
            <p className="mt-2 text-sm text-muted">
              Share your hours, lines, and CRM—we will respond with a clear plan.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/request-a-quote"
                className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Request a quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/30"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
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
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
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
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 3v18h18M7 16l4-4 4 4 5-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M9 3h6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ValueIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
