import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-soft via-white to-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Advance with
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
          Callify Technologies
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          We offer future-ready outsourcing solutions to help you streamline
          operations, elevate customer experience, and scale support without
          sacrificing quality.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-white px-8 py-3 text-center text-base font-semibold text-primary shadow-sm transition hover:bg-primary-soft"
          >
            Services
          </Link>
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-center text-base font-semibold text-white shadow-md transition hover:bg-primary-dark"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
