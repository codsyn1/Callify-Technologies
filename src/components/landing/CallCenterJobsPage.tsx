"use client";

import { FormSubmitStatus } from "@/components/landing/FormSubmitStatus";
import { useContactForm } from "@/hooks/use-contact-form";
import { mapCallCenterJobsForm } from "@/lib/form-payload-mappers";

const positions = [
  { value: "csr", label: "CSR (Call Center Representative)" },
  { value: "closer", label: "Closer" },
  { value: "customer-support", label: "Customer Support" },
  { value: "non-voice", label: "Non Voice (Avatar)" },
  { value: "hr", label: "Human Resource" },
  { value: "it-support", label: "IT Support" },
  { value: "graphic-designer", label: "Graphic Designer" },
  { value: "social-media", label: "Social Media Executive" },
] as const;

const hearAboutGrid: readonly [string, string][] = [
  ["Facebook", "Indeed"],
  ["Google", "LinkedIn"],
  ["Rozee.pk", "Other"],
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border/90 bg-white px-4 py-3 text-[15px] text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-[3px] focus:ring-primary/15";

const labelClass =
  "text-[11px] font-bold uppercase tracking-[0.14em] text-muted";

function hearFieldName(label: string) {
  return `hear_${label
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "_")}`;
}

export function CallCenterJobsPage() {
  const { sent, submitting, error, onSubmit } = useContactForm({
    source: "call-center-jobs",
    mapPayload: (formData) => mapCallCenterJobsForm(formData),
  });

  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary-soft/70 via-white to-surface">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-primary/[0.1] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        <header className="text-center sm:text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Careers
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Call center jobs
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted sm:mx-0 sm:text-base">
            Apply in a few minutes. Fields marked with{" "}
            <span className="font-semibold text-red-600">*</span> are required.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-8 rounded-3xl border border-border/90 bg-white/95 p-6 shadow-[0_24px_60px_-28px_rgba(65,116,185,0.22)] ring-1 ring-primary/[0.06] backdrop-blur-sm sm:p-9"
        >
          <div>
            <label className={labelClass} htmlFor="position">
              Applying for
            </label>
            <select
              id="position"
              required
              name="position"
              defaultValue="csr"
              className={fieldClass}
            >
              {positions.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="firstName">
                First name <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                required
                name="firstName"
                autoComplete="given-name"
                placeholder="First name"
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="lastName">
                Last name <span className="text-red-600">*</span>
              </label>
              <input
                id="lastName"
                required
                name="lastName"
                autoComplete="family-name"
                placeholder="Last name"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <span className={labelClass}>
                Phone number <span className="text-red-600">*</span>
              </span>
              <div className="mt-2 flex overflow-hidden rounded-xl border border-border/90 bg-white shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.02] focus-within:border-primary focus-within:ring-[3px] focus-within:ring-primary/15">
                <span className="inline-flex shrink-0 items-center gap-2 border-r border-border/80 bg-primary-soft/70 px-3.5 py-3 text-sm font-semibold text-primary">
                  <span aria-hidden>🇵🇰</span>
                  +92
                </span>
                <input
                  required
                  type="tel"
                  name="phoneNational"
                  autoComplete="tel-national"
                  placeholder="3XX XXXXXXX"
                  className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-[15px] text-foreground outline-none placeholder:text-muted/55"
                />
              </div>
            </div>
            <div>
              <label className={labelClass} htmlFor="city">
                Your city (Isb &amp; Rwp only){" "}
                <span className="text-red-600">*</span>
              </label>
              <select
                id="city"
                required
                name="city"
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select city
                </option>
                <option value="rawalpindi">Rawalpindi</option>
                <option value="islamabad">Islamabad</option>
              </select>
            </div>
          </div>

          <fieldset className="rounded-2xl border border-border/80 bg-gradient-to-br from-surface/90 to-white p-5 sm:p-6">
            <legend className={`${labelClass} mb-4 block w-full normal-case tracking-normal`}>
              <span className="text-sm font-semibold text-foreground">
                Where did you hear about Callify Technologies?
              </span>
            </legend>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
              {hearAboutGrid.map((col) => (
                <div
                  key={col[0]}
                  className="space-y-3 rounded-xl border border-border/60 bg-white/80 p-3 sm:border-0 sm:bg-transparent sm:p-0"
                >
                  {col.map((label) => (
                    <label
                      key={label}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-1 py-0.5 text-sm font-medium text-foreground transition hover:bg-primary-soft/40"
                    >
                      <input
                        type="checkbox"
                        name={hearFieldName(label)}
                        value="1"
                        className="size-4 shrink-0 rounded border-border text-primary accent-primary"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="fluentEnglish">
                Fluent English? <span className="text-red-600">*</span>
              </label>
              <select
                id="fluentEnglish"
                required
                name="fluentEnglish"
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="maybe">Maybe</option>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="nightShifts">
                Night shifts? <span className="text-red-600">*</span>
              </label>
              <select
                id="nightShifts"
                required
                name="nightShifts"
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <fieldset className="rounded-2xl border border-border/80 bg-gradient-to-br from-surface/90 to-white p-5 sm:p-6">
            <legend className={`${labelClass} mb-4 block w-full normal-case tracking-normal`}>
              <span className="text-sm font-semibold text-foreground">
                Do you have call center experience?
              </span>
            </legend>
            <div className="flex flex-wrap gap-3">
              {(["Yes", "No"] as const).map((opt) => (
                <label
                  key={opt}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/30 hover:bg-primary-soft/30 has-[:checked]:border-primary has-[:checked]:bg-primary-soft/70 has-[:checked]:text-primary-dark has-[:checked]:ring-2 has-[:checked]:ring-primary/20"
                >
                  <input
                    type="radio"
                    name="ccExperience"
                    value={opt.toLowerCase()}
                    className="sr-only"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-4 border-t border-border/70 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={submitting || sent}
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Sending…" : "Submit application"}
            </button>
            {sent ? (
              <p
                className="text-center text-sm font-medium text-primary sm:text-right"
                role="status"
              >
                Thanks! We received your application and will contact shortlisted
                candidates.
              </p>
            ) : (
              <p className="text-center text-xs text-muted sm:text-right">
                We will contact shortlisted candidates by phone or email.
              </p>
            )}
            <FormSubmitStatus
              sent={false}
              error={error}
              className="text-center text-sm sm:col-span-2 sm:text-right"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
