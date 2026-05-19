export function WhoWeAre() {
  return (
    <section id="about" className="border-y border-border bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">
          BPO services
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Who we are — a BPO service provider
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Callify Technologies is a trusted partner for high-quality BPO and
          contact center programs, helping businesses grow across insurance,
          healthcare, real estate, financial services, and technology. From
          qualified leads and sales support to dependable customer care, we
          tailor playbooks, QA, and reporting to your brand.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          Our team of trained representatives ensures every interaction
          reflects your standards—so you earn loyalty, clarity, and measurable
          outcomes.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Vision",
              body: "Revolutionizing client success through dependable, modern contact center delivery.",
            },
            {
              title: "Mission",
              body: "Fueling your growth with value-driven outsourcing and transparent operations.",
            },
            {
              title: "Core values",
              body: "Human-centered, collaborative, competent, trustworthy, transparent, diverse.",
            },
            {
              title: "Our team",
              body: "Skilled professionals ready to support your programs—any channel, any shift.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
