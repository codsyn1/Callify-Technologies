"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85";

const servicePillars = [
  {
    title: "24/7 virtual receptionist",
    body: "Personalized coverage for office and mobile transfers—prospects reach a live voice, not a dead line.",
    icon: UsersIcon,
  },
  {
    title: "Live call forwarding",
    body: "Overflow and after-hours calls handled by trained agents who protect your brand on every transfer.",
    icon: ChartIcon,
  },
  {
    title: "Telephone redirection",
    body: "Route to the right specialist without building a full in-house switchboard—warm transfers with context.",
    icon: ClipboardIcon,
  },
  {
    title: "International phone numbers",
    body: "US and global number strategies so customers reach you locally while you operate at scale.",
    icon: CheckIcon,
  },
  {
    title: "Call quality management",
    body: "Monitoring, coaching, and QA on outbound transfers—tough calls handled with consistent standards.",
    icon: HeartIcon,
  },
  {
    title: "Reliable yet affordable",
    body: "Enterprise-grade transfer workflows at a fraction of building and staffing it all internally.",
    icon: ValueIcon,
  },
];

const testimonials = [
  {
    quote:
      "Managing agents is easy and support is responsive. Callify’s live transfer setup let us expand without drowning in day-to-day phone ops.",
    name: "Osbert Simon",
    role: "Operations director, services firm",
  },
  {
    quote:
      "Two years in and I cannot imagine the business without Callify transfers. Clients get what they need; I focus on growth instead of queue firefighting.",
    name: "Noelle Daniels",
    role: "Founder, B2B consultancy",
  },
  {
    quote:
      "They set up seamless office-to-mobile transfers—contacts and context ready wherever I am. Exactly what we needed on the road.",
    name: "Serena Presley",
    role: "Managing partner, professional services",
  },
];

const faqs = [
  {
    q: "Can I transfer business calls from my office phone to my cell?",
    a: "Yes—office to mobile, mobile to office, or between two lines you own. We configure routing rules and warm handoffs so context travels with the call.",
  },
  {
    q: "Why use Callify’s outbound live call transfer instead of doing it in-house?",
    a: "You get live monitoring, CRM-friendly metrics, and trained agents without buying switchboard tooling or hiring full-time transfer staff.",
  },
  {
    q: "Who handles the calls?",
    a: "Professional call center agents trained on your scripts, escalation paths, and compliance—many programs include bilingual coverage where needed.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on hours, queues, and transfer volume. Contact us for tiered coverage options—no surprise minimums buried in fine print.",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function LiveCallTransferServicesPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

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
              Live call transfer, virtual receptionist & call forwarding
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Callify Technologies gives you a professional phone presence—warm
              transfers, 24/7 coverage, and outbound qualification without missing
              high-value conversations.
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
                alt="Professional on a business phone call"
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
            Get ahead in sales with live call transfer services
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base font-medium italic text-primary sm:text-lg">
            Never miss a customer call again—route leads when it matters.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Callify runs governed transfer centers with trained agents, QA, and
            experience in high-volume phone transfer and outbound qualification.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Reroute overflow, keep lines free, or centralize answering—our platform
            handles the details so your team focuses on closing, not switchboard work.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Voice-based outbound and live transfer outperform ad-hoc forwarding:
            every handoff is documented, qualified, and aligned to your scripts.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-surface via-white to-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Premium live call transfer service—what we offer
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Convenience and reliability for every transfer—local presence, global
              reach, and QA that keeps your brand sounding professional.
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
            The best customer service goes live for you
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
                Tell us about your live call transfer needs
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Complete the form and we will follow up with next steps—ICP,
                routing rules, and a realistic pilot plan.
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
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark sm:w-auto"
                >
                  Submit
                  <ArrowRightIcon className="size-4" />
                </button>
                {sent ? (
                  <p className="mt-4 text-sm text-muted" role="status">
                    Thanks — connect your CRM or inbox to store submissions.
                  </p>
                ) : null}
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
                      "Routing and script alignment before transfers go live.",
                      "Warm handoffs with context your closers can use.",
                      "Live monitoring and reporting on transfers and outcomes.",
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
            Answers to your live call forwarding questions
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-4 text-base leading-relaxed text-muted">
            Send calls to any device—cell or landline—so you work from anywhere
            without missing important conversations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            When a live person answers instantly, every second counts. Callify
            handles routing securely while you stay focused on revenue work.
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
            Benefits of Callify live call transfer services
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Startup or established brand—boost reputation and sales with forwarding
            that makes customers feel heard on every transfer.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Save time and money
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Free your team from juggling handsets and missed rings. Outsource
            transfer handling and reduce staffing load versus building it in-house.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Enhance brand image
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Callers hear a live, professional agent immediately—seamless mobile
            transfers protect your brand and deliver the human touch buyers expect.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Flexible scheduling
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            You set coverage windows; we align agents to your calendar—not the
            other way around—so customers reach help when you want them to.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Increase sales & expert support
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Warmer transfers raise engagement and close rates. Agents trained from
            onboarding through expert coaching—available 24/7 for urgent handoffs.
          </p>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
            <p className="text-base font-semibold text-foreground">
              Ready to scope a live call transfer pilot?
            </p>
            <p className="mt-2 text-sm text-muted">
              Share your queues, routing rules, and CRM—we will respond with a clear plan.
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
