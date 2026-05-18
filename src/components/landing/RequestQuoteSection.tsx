"use client";

import Image from "next/image";
import { FormSubmitStatus } from "@/components/landing/FormSubmitStatus";
import { useContactForm } from "@/hooks/use-contact-form";
import { mapQuoteRequestForm } from "@/lib/form-payload-mappers";

/** Team collaboration — background photo */
const QUOTE_BG_SRC =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80";

const phoneCodes = [
  { value: "+1", label: "+1 · US" },
  { value: "+44", label: "+44 · UK" },
  { value: "+92", label: "+92 · PK" },
];

const highlights = [
  {
    title: "Fast clarity",
    body: "We reply with questions answered—not a generic brochure dump.",
  },
  {
    title: "Aligned coverage",
    body: "Inbound, outbound, or hybrid—scoped to your hours and channels.",
  },
  {
    title: "Transparent next steps",
    body: "You’ll know timelines, ownership, and what good looks like.",
  },
];

export function RequestQuoteSection() {
  const { sent, submitting, error, onSubmit } = useContactForm({
    source: "request-a-quote",
    mapPayload: (formData) => mapQuoteRequestForm(formData),
  });

  return (
    <section className="relative isolate overflow-hidden">
        {/* Single photo + single tint (avoid stacked layers that read as two images) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={QUOTE_BG_SRC}
            alt=""
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-foreground/88 via-foreground/76 to-primary/38"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
          <header className="mb-10 max-w-3xl lg:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-muted">
              Get started
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Request a quote
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Share a few details—we&apos;ll follow up with a tailored
              recommendation for your volumes, channels, and customer experience
              goals.
            </p>
          </header>

          <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">
                <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/70">
                  Your details
                </h2>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="rq-name"
                      className="text-xs font-semibold uppercase tracking-wide text-white/55"
                    >
                      Full name
                    </label>
                    <input
                      id="rq-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="e.g. Jordan Lee"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[15px] text-foreground shadow-inner outline-none ring-primary/30 transition placeholder:text-muted/70 focus:border-primary/40 focus:ring-2"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-white/55">
                      Phone
                    </span>
                    <div className="mt-1.5 flex gap-2">
                      <label htmlFor="rq-phone-code" className="sr-only">
                        Country code
                      </label>
                      <select
                        id="rq-phone-code"
                        name="phoneCode"
                        defaultValue="+1"
                        className="shrink-0 cursor-pointer rounded-xl border border-white/10 bg-white/95 px-3 py-3 text-sm font-medium text-foreground outline-none ring-primary/30 focus:ring-2"
                      >
                        {phoneCodes.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <input
                        id="rq-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Your number"
                        className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white px-4 py-3 text-[15px] text-foreground shadow-inner outline-none ring-primary/30 transition placeholder:text-muted/70 focus:border-primary/40 focus:ring-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="rq-email"
                      className="text-xs font-semibold uppercase tracking-wide text-white/55"
                    >
                      Work email
                    </label>
                    <input
                      id="rq-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[15px] text-foreground shadow-inner outline-none ring-primary/30 transition placeholder:text-muted/70 focus:border-primary/40 focus:ring-2"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="rq-company"
                      className="text-xs font-semibold uppercase tracking-wide text-white/55"
                    >
                      Company
                    </label>
                    <input
                      id="rq-company"
                      name="company"
                      required
                      autoComplete="organization"
                      placeholder="Organization name"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[15px] text-foreground shadow-inner outline-none ring-primary/30 transition placeholder:text-muted/70 focus:border-primary/40 focus:ring-2"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || sent}
                    className="group relative w-full overflow-hidden rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px] sm:px-10"
                  >
                    <span className="relative z-10 inline-flex items-center justify-center gap-2">
                      {submitting ? "Sending…" : "Send request"}
                      <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </button>

                  {sent ? (
                    <div
                      className="flex items-start gap-3 rounded-xl border border-primary-muted/40 bg-primary-soft/90 px-4 py-3 text-sm text-foreground"
                      role="status"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <CheckIcon className="size-4" />
                      </span>
                      <p>
                        <span className="font-semibold">Received.</span> We will
                        follow up with a tailored recommendation soon.
                      </p>
                    </div>
                  ) : null}
                  <FormSubmitStatus sent={false} error={error} />
                </form>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-10 lg:col-span-7 lg:pl-4">
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 shadow-xl backdrop-blur-md sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-muted">
                  Why reach out
                </p>
                <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl sm:leading-snug">
                  A quote should feel like the start of a partnership—not a
                  ticket into the void.
                </p>
                <ul className="mt-8 space-y-5">
                  {highlights.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/90 text-white shadow-md shadow-primary/20">
                        <CheckIcon className="size-4" />
                      </span>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-white/65">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-primary/90 to-primary px-6 py-5 shadow-lg shadow-black/20 sm:px-8">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Ready when you are
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-white sm:text-base">
                    Prefer email?{" "}
                    <a
                      href="mailto:info@callifytechnologies.com"
                      className="underline decoration-white/40 underline-offset-2 hover:decoration-white"
                    >
                      info@callifytechnologies.com
                    </a>
                  </p>
                </div>
                <div className="hidden h-12 w-px bg-white/25 sm:block" aria-hidden />
                <p className="max-w-[200px] text-xs leading-relaxed text-white/85 sm:text-sm">
                  Working hours:{" "}
                  <span className="whitespace-nowrap font-semibold text-white">
                    8pm – 6am
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
