"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactForm } from "@/hooks/use-contact-form";
import { mapStandardContactForm } from "@/lib/form-payload-mappers";
import { FormSubmitStatus } from "@/components/landing/FormSubmitStatus";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85";

const whyItWorks = [
  {
    title: "Always available",
    body: "Be there for prospective customers across search, social, and email—anywhere, anytime.",
    icon: ClockIcon,
  },
  {
    title: "Capture every lead",
    body: "Never miss an opportunity when prospects engage—forms, chat, and calls routed with context.",
    icon: ChartIcon,
  },
  {
    title: "Human-led creative",
    body: "Win more trust with strategists and specialists—not generic automated blasts.",
    icon: UsersIcon,
  },
  {
    title: "Never closed for business",
    body: "Campaigns and nurture flows that keep working while your team focuses on delivery.",
    icon: GlobeIcon,
  },
  {
    title: "Know your audience",
    body: "Recognize returning visitors and segments for personalized messaging that converts.",
    icon: HeartIcon,
  },
  {
    title: "Manage your growth",
    body: "Busy season? Launching a product? We align channels, budgets, and reporting to your goals.",
    icon: ValueIcon,
  },
];

const testimonials = [
  {
    quote:
      "Growing my bakery online felt impossible until Callify built a simple funnel and social plan. We see steady new customers every week now.",
    name: "Morgan Abbott",
    role: "Owner, neighborhood bakery",
  },
  {
    quote:
      "Our shelter needed visibility for adoptions. Their team ran compassionate campaigns that brought the right families to us.",
    name: "Bailey Reynolds",
    role: "Director, animal rescue nonprofit",
  },
  {
    quote:
      "My online bookstore finally gets discoverable traffic. Email, SEO, and paid search are coordinated—customers find us, not only through word of mouth.",
    name: "Bernard Perry",
    role: "Founder, independent bookstore",
  },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export function DigitalMarketingPage() {
  const { sent, submitting, error, onSubmit } = useContactForm({
    source: "digital-marketing",
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
              Digital marketing
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Digital marketing services that grow your brand online
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Callify Technologies helps you reach the right audience across
              search, social, email, and web—so you retain customers and compete
              with confidence in a digital-first market.
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
                alt="Team working on digital marketing at a laptop"
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
            Why us
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" aria-hidden />
          <p className="mt-6 text-base font-medium italic text-primary sm:text-lg">
            Promotion through digital channels—done with strategy, not spray
            and pray.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Digital marketing promotes brands where your audience already spends
            time: search engines, social platforms, websites, apps, and email.
            In a technology-driven market, growth depends on showing up with the
            right message at the right moment.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Strong ROI comes from engaging creative, SEO-aware content, and
            campaigns that retain customers while you compete on quality—not
            price alone. Video, social, and paid media work together when they
            share one plan.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Callify is known for digital marketing services that prioritize
            clarity, accountability, and a friendly partnership—so your team
            always knows what ships next and why.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-surface via-white to-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Why it works
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Digital marketing services that connect your brand to customers
              who are ready to buy—backed by reporting you can act on.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyItWorks.map((item) => (
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
            Client testimonials
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
                Tell us about your digital marketing goals
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Complete the form and we will follow up with next steps—channels,
                budget range, and a realistic launch plan.
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
                      Complete the form to get to know us
                    </p>
                  </div>
                  <ul className="divide-y divide-border/60 p-2">
                    {[
                      "Channel strategy aligned to your audience and goals.",
                      "Creative and copy reviewed before anything goes live.",
                      "Reporting on reach, leads, and conversion—not vanity metrics.",
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
            Digital marketing services
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" aria-hidden />

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Social media marketing
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Our team plans social strategies, monitors platforms, and responds
            on time so your audience gets accurate, on-brand engagement.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Digital marketing methodologies
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            We use proven playbooks to navigate competitive markets—skilled
            specialists align tactics to your goals and measure what matters.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Email marketing
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Professional campaigns keep customers informed about updates,
            offers, and policies—with consent, frequency caps, and clear opt-outs.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            Web design solutions
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Designers, content creators, and developers build customized sites
            that reflect your brand and convert visitors into leads.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">
            SEO services
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            SEO helps your site rank and attract the right traffic. We pair
            quality content with technical basics so search and users both win.
          </p>

          <h3 className="mt-10 text-xl font-bold text-foreground">Our aim</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Callify delivers diversified digital marketing with experienced
            teams and clear management. We treat customers as partners and work
            hard to accompany you toward sustainable growth online.
          </p>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6">
            <p className="text-base font-semibold text-foreground">
              Ready to grow with Callify digital marketing?
            </p>
            <p className="mt-2 text-sm text-muted">
              Share your goals, channels, and timeline—we will respond with a
              clear plan.
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
