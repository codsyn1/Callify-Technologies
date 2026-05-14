"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85";

const solutions = [
  {
    title: "Appointment coordination",
    body: "Scheduling, reminders, and reschedule workflows aligned to your EHR rules—reducing no-shows without over-contacting patients.",
    icon: CalendarIcon,
  },
  {
    title: "Billing & coverage support",
    body: "First-line questions on statements, eligibility, and payment plans—always within approved language and escalation paths.",
    icon: ClipboardIcon,
  },
  {
    title: "Care navigation",
    body: "Warm transfers and scripted guidance so patients reach the right clinic, specialty, or program without dead ends.",
    icon: CompassIcon,
  },
  {
    title: "Experience & feedback programs",
    body: "Post-visit surveys and structured listening posts that feed quality teams without burning out frontline staff.",
    icon: ChartIcon,
  },
  {
    title: "Member & patient outreach",
    body: "Outbound campaigns for screenings, renewals, and care gaps—built with consent, frequency caps, and channel preferences.",
    icon: PhoneIcon,
  },
  {
    title: "Digital front door support",
    body: "Chat and secure messaging aligned to your portal flows so digital-first patients still get human help when automation stalls.",
    icon: MessageIcon,
  },
];

const bpoPillars = [
  {
    title: "Always-on coverage",
    body: "Follow-the-sun and peak-hour staffing so nights, weekends, and flu season do not collapse your queues.",
    icon: ClockIcon,
  },
  {
    title: "Multilingual support",
    body: "Serve diverse communities with vetted bilingual agents and native-language QA—not machine translation alone.",
    icon: GlobeIcon,
  },
  {
    title: "Security & privacy posture",
    body: "Role-based access, clean desk policies, and audit trails designed for HIPAA-minded healthcare operations.",
    icon: LockIcon,
  },
  {
    title: "Custom scripting",
    body: "Talk tracks that match your clinical brand, triage rules, and payer requirements—reviewed in calibration, not set-and-forget.",
    icon: FileTextIcon,
  },
  {
    title: "Operational value",
    body: "Transparent unit economics and forecasting so finance sees the same staffing model operations uses daily.",
    icon: ValueIcon,
  },
  {
    title: "Technology-enabled delivery",
    body: "CRM, ticketing, and telephony integrations with real-time dashboards your IT team can trust.",
    icon: CpuIcon,
  },
];

const testimonials = [
  {
    quote:
      "We went live on a narrow scope—appointment changes and portal password resets—and expanded only after QA proved stable. That discipline is exactly what our compliance council needed to see.",
    name: "Dr. Elena Ruiz",
    role: "CMO, multi-site specialty group",
  },
  {
    quote:
      "Patients stopped complaining about ‘robotic’ transfers once Callify aligned dispositions to our Epic workqueues. Agents sound like an extension of our clinics.",
    name: "Sam Okonkwo",
    role: "Director of access services",
  },
  {
    quote:
      "Their supervisors join our weekly huddle with real data—not vanity metrics. We finally have one story for operations, IT, and nursing leadership.",
    name: "Mei Lin",
    role: "VP patient experience",
  },
];

const faqs = [
  {
    q: "How do you keep healthcare programs secure?",
    a: "We align to your BAA requirements, enforce least-privilege access, log interactions, and run recurring security awareness. Technical controls complement—not replace—your privacy office.",
  },
  {
    q: "Are there hidden fees?",
    a: "No. Pricing is documented in the SOW with clear assumptions for volume, languages, channels, and after-hours coverage. Changes go through change control.",
  },
  {
    q: "How fast can we launch?",
    a: "Pilot timelines depend on integrations and training depth. Many teams start with a 4–8 week pilot on a bounded queue before scaling.",
  },
  {
    q: "Do you offer a service guarantee?",
    a: "We define measurable SLAs and quality thresholds up front, then review them weekly during stabilization. Remediation paths are written into the contract.",
  },
  {
    q: "What does quality management look like?",
    a: "Dual-tone QA, calibration sessions, and coaching tied to disposition accuracy—not just handle time. Leaders get dashboards they can defend in committee.",
  },
  {
    q: "How do you onboard new agents for healthcare?",
    a: "Role-based curriculum, shadowing, scored certifications, and progressive nesting under senior leads—especially for PHI-adjacent workflows.",
  },
  {
    q: "How long until agents are production-ready?",
    a: "It varies by complexity: simple scheduling may be faster than benefits triage. We publish a readiness checklist and gate go-live on sign-offs from both teams.",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function IndustryHealthcareCallCenterPage() {
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
              Healthcare
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Healthcare call center support your patients—and your teams—can
              rely on
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Callify Technologies delivers compassionate, compliant voice, chat,
              and email programs for hospitals, clinics, payers, and digital
              health teams—so clinicians spend more time on care, not hold
              queues.
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
                alt="Healthcare professional in a clinical setting"
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
            Count on us for your healthcare call center needs
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base font-medium italic text-primary sm:text-lg">
            We build the healthcare call center solutions your roadmap
            requires—without losing the human tone patients expect.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Patient access is noisy: portals, phone trees, prior authorizations,
            and billing questions all compete for the same teams. Callify helps
            you consolidate service design so patients hear one consistent story
            across channels.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Think of us as an extension of your access center—trained on your
            protocols, measured on outcomes that matter to nursing and finance
            leaders alike, and ready to scale when census or campaigns spike.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            When seconds matter, you need agents who can de-escalate, document
            accurately, and route with context. That is the standard we coach to,
            every shift.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-surface via-white to-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Medical call center: a dedicated team aligned to your workflows
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Multichannel support that sets expectations clearly, resolves
              predictable intents fast, and hands complex cases to your
              clinicians with full context.
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
              How our healthcare BPO services work
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Experience, process, and technology—combined so your patients feel
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
            What healthcare leaders say about Callify
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
                Tell us about your healthcare contact center goals
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
                      "HIPAA-minded controls and BAAs scoped to your workflows.",
                      "Clinical-tone coaching—not generic retail scripts.",
                      "Dashboards your compliance and operations councils can trust.",
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
            FAQs: healthcare call centers built for real-world operations
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-4 text-base leading-relaxed text-muted">
            Healthcare is holistic: access, billing, and emotional support all
            shape recovery. These answers explain how Callify partners with your
            clinical and IT stakeholders.
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
            Healthcare call center services and solutions
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            It is time to align your access center with how patients actually
            move through your system. Callify supports programs that span:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-base text-muted sm:text-lg">
            <li>24/7 member and patient care for critical access lines</li>
            <li>Sales and onboarding support for digital health products</li>
            <li>Retention and outreach for hospitals and specialty networks</li>
          </ul>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Patient intake
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Structured intake captures demographics, payer information, and
            reason for visit—validated against your EHR fields so downstream teams
            do not re-key data or chase patients for the same facts twice.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">Scheduling</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            We coordinate appointments with provider templates, block time, and
            cancellation policies visible to agents. Real-time updates reduce
            double-bookings and frustrated families.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Healthcare customer service
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Insurance questions, portal resets, and general inquiries are handled
            with empathy and clear documentation so nurses and physicians are not
            pulled into clerical work that belongs in the access layer.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            How we work with your team
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Joint steering, shared definitions of done, and live monitoring windows
            keep clinical leaders in the loop. Changes to scripts or triage rules
            route through a single change log both sides approve.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Billing support
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            We help patients understand statements, payment plans, and financial
            assistance options—always within the disclosures your compliance team
            approves.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Records coordination
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Release-of-information workflows, status checks, and secure follow-ups
            reduce turnaround anxiety while keeping access requests auditable.
          </p>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6">
            <p className="text-base font-semibold text-foreground">
              Ready to design a healthcare call center pilot?
            </p>
            <p className="mt-2 text-sm text-muted">
              Share your service lines and compliance requirements—we will respond
              with a clear plan.
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
