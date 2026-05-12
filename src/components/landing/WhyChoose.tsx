const items = [
  {
    title: "Unmatched professionalism",
    body: "High-quality BPO delivery with disciplined QA and coaching.",
  },
  {
    title: "24/7 support availability",
    body: "Round-the-clock coverage options to match your customers’ time zones.",
  },
  {
    title: "Priority client satisfaction",
    body: "Programs built around your SLAs, scripts, and escalation paths.",
  },
  {
    title: "Efficiency and promptness",
    body: "Clear workflows, fast response times, and reporting you can act on.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Why choose us
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Choose Callify Technologies for professional support, consistent
          quality, and on-time delivery—aligned to how you measure success.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-surface/60 p-6 text-center lg:text-left"
            >
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white lg:mx-0">
                ✓
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
