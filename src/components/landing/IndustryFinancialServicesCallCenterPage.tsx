"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactForm } from "@/hooks/use-contact-form";
import { mapStandardContactForm } from "@/lib/form-payload-mappers";
import { FormSubmitStatus } from "@/components/landing/FormSubmitStatus";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85";

const solutions = [
  {
    title: "Financial industry expertise",
    body: "Agents trained on banking, wealth, and fintech workflows—verification steps, disclosure language, and escalation paths your compliance team approves.",
    icon: ChartIcon,
  },
  {
    title: "Personalized programs",
    body: "We co-design queues, scripts, and reporting with your operations lead so every interaction matches your brand and regulatory posture.",
    icon: UsersIcon,
  },
  {
    title: "Proven delivery portfolio",
    body: "Programs across cards, lending, insurance adjacency, and B2B finance—documented playbooks, not one-off experiments.",
    icon: ShieldIcon,
  },
  {
    title: "24/7 customer support",
    body: "Follow-the-sun coverage for fraud alerts, account servicing, and seasonal spikes—without sacrificing QA depth on nights and weekends.",
    icon: ClockIcon,
  },
  {
    title: "Technology-aligned processes",
    body: "CRM, core banking, and ticketing integrations with disposition discipline so your systems of record stay accurate.",
    icon: CpuIcon,
  },
  {
    title: "Transparent economics",
    body: "Flexible staffing models with assumptions documented in the SOW—shared overflow, dedicated pods, or hybrid blends.",
    icon: ValueIcon,
  },
];

const bpoPillars = [
  {
    title: "Always available",
    body: "Scale coverage for market hours, product launches, and incident response without rebuilding schedules each quarter.",
    icon: ClockIcon,
  },
  {
    title: "Multilingual capabilities",
    body: "Serve diverse customer bases with vetted bilingual agents and native-language QA—not machine translation alone.",
    icon: GlobeIcon,
  },
  {
    title: "Data security",
    body: "Encryption, access controls, and clean-desk policies designed for financial services vendor reviews and audit cycles.",
    icon: LockIcon,
  },
  {
    title: "Customized scripting",
    body: "Talk tracks tailored to your products and risk appetite—reviewed in calibration, never generic boilerplate.",
    icon: FileTextIcon,
  },
  {
    title: "Exceptional value",
    body: "Unit economics and forecasting your finance team can reconcile to actual volume—not surprise true-ups.",
    icon: HeartIcon,
  },
  {
    title: "Tech-enabled service",
    body: "Real-time dashboards, workforce tools, and telephony your IT stakeholders can integrate and monitor.",
    icon: CpuIcon,
  },
];

const testimonials = [
  {
    quote:
      "We outsourced overflow for card disputes and password resets. Callify stood up a pilot in weeks with QA rubrics our risk team actually signed off on.",
    name: "Morgan Ellis",
    role: "Head of operations, regional bank",
  },
  {
    quote:
      "Our fintech support line needed 24/7 coverage without hiring a second shift in-house. Disposition accuracy improved and repeat contacts dropped.",
    name: "Priya Shah",
    role: "VP customer experience, digital lender",
  },
  {
    quote:
      "I was hesitant about outsourcing financial calls. Six months in, supervisors join our weekly huddle with real data—not vanity metrics.",
    name: "Chris Dalton",
    role: "Director of contact center, wealth platform",
  },
];

const faqs = [
  {
    q: "How do I know if we should outsource financial services contact center work?",
    a: "If volume is volatile, specialized hiring is slow, or internal teams are stretched across fraud, servicing, and sales assist, a governed partner can stabilize SLAs while you focus on product and compliance roadmap.",
  },
  {
    q: "What are the benefits of outsourcing?",
    a: "You gain surge capacity, multilingual coverage, and a management layer experienced in regulated workflows—without delaying roadmap work while you recruit niche talent.",
  },
  {
    q: "How is pricing structured?",
    a: "We model per-interaction pools, dedicated FTEs, or hybrids against your volume curves. A discovery call defines scope, languages, channels, and after-hours assumptions before we quote.",
  },
  {
    q: "What financial services do you typically support?",
    a: "Common scopes include account servicing, card support, payments inquiries, loan origination assist, collections-adjacent servicing (within your legal framework), insurance-adjacent intake, and B2B client support.",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function IndustryFinancialServicesCallCenterPage() {
  const { sent, submitting, error, onSubmit } = useContactForm({
    source: "industry-financial-services",
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
              Financial services
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Financial services call center support built for regulated growth
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Callify Technologies helps banks, lenders, fintechs, and finance
              teams deliver secure, consistent voice, chat, and email
              programs—so you scale service without compromising trust.
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
                alt="Financial analytics dashboard on screen"
                fill
                priority
                className="object-cover object-[center_25%]"
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
            Outsource your financial services call center with confidence
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base font-medium italic text-primary sm:text-lg">
            Security, compliance, and service quality—without the generic script
            factory.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Whether you are scaling a fintech support line or augmenting a bank&apos;s
            servicing desk, customers expect fast answers and careful handling of
            sensitive data. Callify builds programs with documented workflows,
            dual-tone QA, and transparent reporting.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From basic account inquiries to complex escalations, our specialists
            train on your verification rules and disclosure packs. You keep
            strategic control; we absorb volume with governance your risk team can
            audit.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Flexible plans and 24/7 options mean you are not locked into staffing
            models that ignore seasonality, product launches, or incident spikes.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-surface via-white to-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Your financial services call center: built for your workflows
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Outsourcing done right frees internal teams for product and
              compliance work—while customers still hear a consistent, credible
              voice on every channel.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
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
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How our financial BPO services work
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Experience, process, and technology—combined so your customers feel
              supported and your internal teams regain bandwidth.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bpoPillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/90 bg-gradient-to-br from-surface/80 to-white p-6 shadow-sm ring-1 ring-primary/5 transition hover:border-primary/20 hover:shadow-md"
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

      <section className="bg-gradient-to-b from-primary-soft/40 via-surface to-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What finance leaders say about Callify
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded-2xl border border-border/90 bg-white p-6 shadow-sm ring-1 ring-primary/5"
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

      <section className="border-t border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Tell us about your financial services contact center goals
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Complete the form and we will follow up with next steps—lines of
                business, compliance pack, and a realistic pilot plan.
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
                      "Scripts and verification aligned to your risk framework.",
                      "QA rubrics your compliance and operations teams can review.",
                      "Dashboards on volume, quality, and backlog—not vanity metrics.",
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

      <section className="bg-gradient-to-b from-surface to-primary-soft/30 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            FAQs: finance call center outsourcing
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-4 text-base leading-relaxed text-muted">
            Your business is unique—your contact center should be too. These
            answers explain how Callify approaches governance, staffing, and
            launch.
          </p>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border/90 bg-white">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group px-5 [&_summary::-webkit-details-marker]:hidden"
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

      <section className="border-t border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Next-level benefits of partnering with Callify
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            We handle customer relations with disciplined documentation, clear
            escalation, and reporting your leadership can defend in committee.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Dedicated, highly trained staff
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Agents train on your products, verification steps, and tone guides.
            Supervisors run calibration so complex banking, card, and wealth
            inquiries route correctly the first time.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Global coverage
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Follow-the-sun and multilingual options help you reach customers
            wherever they are—without forcing a single-shift model that breaks
            during peaks.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Flexible workforce
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Scale up for tax season, product launches, or incidents; scale down
            when volume normalizes. We model staffing with you—not against you.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Modern technology stack
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Telephony, CRM, and workforce tools integrated with disposition
            rules so agents see the context they need and leaders see the truth
            in real time.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Efficient economics
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Transparent unit economics let you compare in-house vs. outsourced
            scenarios honestly—then invest savings into product and risk
            programs.
          </p>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6">
            <p className="text-base font-semibold text-foreground">
              Ready to design a financial services call center pilot?
            </p>
            <p className="mt-2 text-sm text-muted">
              Share your lines of business and compliance requirements—we will
              respond with a clear plan.
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

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" />
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

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="m12 6 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 15a4 4 0 01-4 4H8l-5 3v-3H5a4 4 0 01-4-4V6a4 4 0 014-4h12a4 4 0 014 4v9z"
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

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 11V8a4 4 0 018 0v3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3h8l4 4v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="2" />
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

function CpuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 9h6v6H9zM5 9H3M5 15H3M21 9h-2M21 15h-2M12 5V3M12 21v-2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
