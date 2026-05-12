import Link from "next/link";

const inbound = [
  "Direct response call center",
  "Customer care services",
  "Appointment scheduling",
  "Order tracking services",
  "Taxi & dispatch answering",
  "Help desk support",
];

const outbound = [
  "Market research & surveys",
  "Lead generation",
  "Appointment booking",
  "Telesales call center",
  "Customer service calls",
  "Follow-up campaigns",
];

export function ServicesShowcase() {
  return (
    <section id="services" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">
          Our specialized BPO services
        </p>
        <h2 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Outsourcing services to boost your business growth
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Whether you need qualified leads, sales motion, or exceptional support,
          Callify Technologies brings the people, process, and visibility to
          execute—together.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase text-primary">
                Inbound
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {inbound.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-foreground/90"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/request-a-quote"
              className="mt-8 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Contact us
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase text-primary">
                Outbound
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {outbound.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-foreground/90"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/request-a-quote"
              className="mt-8 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
