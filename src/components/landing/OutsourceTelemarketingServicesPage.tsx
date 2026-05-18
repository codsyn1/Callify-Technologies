"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactForm } from "@/hooks/use-contact-form";
import { mapStandardContactForm } from "@/lib/form-payload-mappers";
import { FormSubmitStatus } from "@/components/landing/FormSubmitStatus";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85";

const servicePillars = [
  {
    title: "B2B telemarketing",
    body: "End-to-end outbound campaigns—from list work through qualified conversations with business buyers.",
    icon: UsersIcon,
  },
  {
    title: "B2C telemarketing",
    body: "Consumer programs with QA and reporting so you always know how the floor is performing.",
    icon: ChartIcon,
  },
  {
    title: "High-quality contact solutions",
    body: "Reach prospects at the right moment with scripts and timing tuned to readiness—not spray-and-pray dials.",
    icon: CheckIcon,
  },
  {
    title: "Direct customer acquisition",
    body: "Sales-trained agents using persuasive, compliant talk tracks to open doors your team can close.",
    icon: ClipboardIcon,
  },
  {
    title: "Solid lead generation",
    body: "Pipeline built on trust—follow-up discipline so interested buyers do not fall through the cracks.",
    icon: HeartIcon,
  },
  {
    title: "24/7 availability",
    body: "Coverage when buyers are ready—nights, weekends, and peak windows without staffing panic.",
    icon: ClockIcon,
  },
];

const testimonials = [
  {
    quote:
      "Callify’s outbound telemarketing delivers qualified leads and polite SDRs who go above and beyond. We have not found another partner that matches their consistency.",
    name: "Ollie Hammond",
    role: "VP sales, distribution",
  },
  {
    quote:
      "They learn our business before they dial—goals, differentiation, and how to position us. That is why we trust them with lead generation.",
    name: "Kara Caldwell",
    role: "Founder, professional services",
  },
  {
    quote:
      "Quick responses, thorough execution, and a clear lift in sales results. Callify earned a long-term place in our growth stack.",
    name: "Cary Bennett",
    role: "Director of marketing, B2B SaaS",
  },
];

const faqs = [
  {
    q: "What are the benefits of outsourcing outbound telemarketing?",
    a: "Scale revenue and pipeline without building a full in-house dial team—governed campaigns, qualified contacts, and reporting you can audit.",
  },
  {
    q: "Who should use outbound telemarketing services?",
    a: "SMBs seeking an edge and enterprises that need productivity without sacrificing quality—from insurance and healthcare to finance and tech.",
  },
  {
    q: "How does Callify’s outbound telemarketing work?",
    a: "We align on ICP and offer, identify prospects, connect them with your specialists, and document outcomes in your CRM workflow.",
  },
  {
    q: "How does your call center operate day to day?",
    a: "Agents handle outbound touches, capture disposition data, and warm-transfer interested buyers to your closers with context attached.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing reflects call volume, campaign type, and complexity. Request a quote for a detailed breakdown—no hidden minimums.",
  },
  {
    q: "What lead generation campaigns do you offer?",
    a: "Custom programs—prospecting, nurture, reactivation, and appointment-setting—designed with your SDR goals and compliance rules in mind.",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function OutsourceTelemarketingServicesPage() {
  const { sent, submitting, error, onSubmit } = useContactForm({
    source: "outsource-telemarketing",
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
              Outbound
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Outsource telemarketing services—get in the door faster
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Callify Technologies elevates outbound with trained telemarketers,
              scalable campaigns, and customer acquisition you can measure—not
              guess.
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
                alt="Sales team on outbound calls"
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
            Find your next prospect in minutes, not days
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base font-medium italic text-primary sm:text-lg">
            When your message must land fast, governed telemarketing delivers.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Callify pairs resources, persuasive technique, and SDR discipline so
            buyers engage—and your team closes with context, not cold intros.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Years of outsourced telemarketing experience across industries—with
            24/7 guidance so campaigns, lists, and follow-ups never slip.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Outsourcing beats hiring a floor overnight: better speed, governed QA,
            and budget discipline while you stay focused on product and delivery.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-surface via-white to-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Getting the most from your marketing budget
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Outsourced telemarketing means better results at a fraction of in-house
              cost—B2B, B2C, and programs built for acquisition and retention.
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
            What clients say about our telemarketing programs
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
                Tell us about your telemarketing goals
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Complete the form and we will follow up with next steps—ICP,
                scripts, and a realistic pilot plan.
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
                      "ICP and script alignment before dialers go live.",
                      "Qualified conversations with dispositions your closers can use.",
                      "Live monitoring and reporting on dials, connects, and outcomes.",
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
            FAQs: telemarketing that fits your business
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-4 text-base leading-relaxed text-muted">
            Grow sales, expand your base, or manage existing customers—Callify
            brings the outbound resources to match your goals.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Professional programs, transparent pricing, and agents trained on your
            offer—so every dial supports revenue, not noise.
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
            Workflow to plan and execute telemarketing campaigns
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Building a telemarketing floor is hard—Callify runs discovery through
            analysis so you get the right people, lists, and metrics.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Discovery, preparation & execution
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Define audience and strategy, audit existing data, then execute outbound
            touches that capture needs, intent, and next-step ownership.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Real-time data & qualification
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Verified leads and live reporting—so reps speak with decision-makers
            with context, not hours of blind prospecting.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Campaign design & custom strategy
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Channel mix, contact cadence, and success metrics agreed up front—then
            SDRs convert interest into demos and sales conversations.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Analysis & continuous improvement
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Results reviewed against goals; underperforming paths adjusted so spend
            moves toward what actually books pipeline.
          </p>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
            <p className="text-base font-semibold text-foreground">
              Ready to scope a telemarketing pilot?
            </p>
            <p className="mt-2 text-sm text-muted">
              Share your ICP, scripts, and CRM—we will respond with a clear plan.
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
