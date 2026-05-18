"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactForm } from "@/hooks/use-contact-form";
import { mapStandardContactForm } from "@/lib/form-payload-mappers";
import { FormSubmitStatus } from "@/components/landing/FormSubmitStatus";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85";

const servicePillars = [
  {
    title: "Improved sales strategy",
    body: "Qualification frameworks and targeted campaigns so reps spend time on buyers who can actually close.",
    icon: ChartIcon,
  },
  {
    title: "Higher quality leads",
    body: "Remove dead weight from the pipeline—only prospects that match fit, intent, and budget reach sales.",
    icon: CheckIcon,
  },
  {
    title: "Transparent inbound & outbound",
    body: "Clear sourcing and disposition on every lead—no mystery lists or black-box handoffs to your CRM.",
    icon: ClipboardIcon,
  },
  {
    title: "Targeted marketing campaigns",
    body: "Programs tuned to ICP and channel so lead quality stays consistent as volume scales.",
    icon: UsersIcon,
  },
  {
    title: "Efficient sales practices",
    body: "Analysis of weak spots in your funnel with practical recommendations—not generic scorecards.",
    icon: HeartIcon,
  },
  {
    title: "Increased profitability",
    body: "Stop wasting effort on unqualified touches—focus resources where conversion probability is highest.",
    icon: ValueIcon,
  },
];

const testimonials = [
  {
    quote:
      "Callify helped us get more qualified leads without breaking the bank. Professional team and a smooth experience—I highly recommend them.",
    name: "Scott Crawford",
    role: "Owner, growth-stage agency",
  },
  {
    quote:
      "They cleaned our database, aligned lead routing to the right agents, and set up CRM tracking. Perfect if you want qualification done right.",
    name: "Calvin Nichols",
    role: "Sales operations manager",
  },
  {
    quote:
      "Inbound volume was overwhelming until Callify. Leads are more qualified and loan profitability improved—we will work with them again.",
    name: "Clara Weber",
    role: "VP lending, mortgage firm",
  },
];

const faqs = [
  {
    q: "Why is Callify a strong lead qualification partner?",
    a: "Full-service qualification across inbound and outbound—experienced agents, clear criteria, and programs scoped to your goals and budget.",
  },
  {
    q: "How can Callify help with lead qualification?",
    a: "Screening via phone and email, campaign support, value assessment, and routing only the leads that deserve sales attention.",
  },
  {
    q: "What experience does your team bring?",
    a: "Cross-industry work in finance, real estate, healthcare, retail, and tech—with playbooks adapted to each client’s ICP and compliance needs.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing reflects volume, channels, and depth of enrichment. We balance quality and budget—contact us for a scoped quote.",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function LeadQualificationServicesPage() {
  const { sent, submitting, error, onSubmit } = useContactForm({
    source: "lead-qualification",
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
              Exceptional lead qualification services
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Better business leads, higher conversion rates—Callify qualifies inbound
              and outbound prospects so your sales team closes more with less waste.
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
                alt="Team reviewing lead qualification metrics"
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
            Our high-end lead qualification services
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base font-medium italic text-primary sm:text-lg">
            Quality is key—find your audience and convert with confidence.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Qualified leads are a cut above—they are more likely to buy from you
            and less likely to shop competitors. Callify builds strategy that gets
            real results for your sales team.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Leading-edge tooling, careful handling of lists and reports, and analysts
            who match prospects to your best-fit ICP—so bad leads never clog the pipe.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Your reps receive high-quality opportunities without chasing dead ends.
            We streamline qualification so resources go where conversion is likely.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-surface via-white to-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Core benefits of lead qualification services
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Up to 80% of leads may never be qualified—governed qualification can
              improve sales performance dramatically when done consistently.
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
            What business owners say about lead qualification
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
                Tell us about your lead qualification goals
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Complete the form and we will follow up with next steps—ICP,
                criteria, and a realistic pilot plan.
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
                      "Qualification rules aligned before intake goes live.",
                      "Scored leads with dispositions your reps can trust.",
                      "Reporting on source, fit, and conversion contribution.",
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
            Frequently asked questions
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-4 text-base leading-relaxed text-muted">
            We listen to your needs and recommend qualification workflows that fit—
            whether this is your first program or a mature sales operation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Communicating with Callify is straightforward: clear scope, honest
            pricing, and agents who know your industry context.
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
            Our lead qualification workflow
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Optimize your funnel and revenue with integrity—qualification built for
            the leads that actually deserve sales time.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Web form analysis & data enrichment
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Analysts review forms and sources, enrich records with firmographics and
            history, and prepare reps for informed first contact.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Structured traffic & sourcing
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Governed systems combine multiple sources—consistent, auditable results
            without blind reliance on a single third-party tool.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Customer profiling
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Profiles built on needs, preferences, and budget—so outreach is relevant
            and respectful, not generic spray.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Lead scoring & prioritization
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Scores based on fit and conversion likelihood—top tiers to sales, lower
            tiers screened before they consume rep hours.
          </p>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
            <p className="text-base font-semibold text-foreground">
              Ready to scope a lead qualification pilot?
            </p>
            <p className="mt-2 text-sm text-muted">
              Share your ICP, intake channels, and CRM—we will respond with a clear plan.
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
