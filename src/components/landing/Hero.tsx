import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85";

export function Hero() {
  return (
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Advance with
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            Callify Technologies
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We offer future-ready outsourcing solutions to help you streamline
            operations, elevate customer experience, and scale support without
            sacrificing quality.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-white px-7 py-3.5 text-center text-sm font-semibold text-primary shadow-sm transition hover:bg-primary-soft"
            >
              Services
            </Link>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              Get a quote
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
              alt="Business team collaborating in a modern office"
              fill
              priority
              className="object-cover object-[center_30%]"
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
  );
}
