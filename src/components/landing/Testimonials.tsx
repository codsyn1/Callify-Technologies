const quotes = [
  {
    text: "Our satisfaction scores improved once Callify Technologies was onboard. Their inbound team is professional, flexible, and treats our customers like their own.",
    name: "Avery Meskell",
    role: "Operations",
  },
  {
    text: "We struggled with qualified leads until Callify stepped in. Their outbound specialists consistently delivered mature, convertible opportunities.",
    name: "Celia Riley",
    role: "Growth",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-primary-soft/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Client feedback
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Acquisition, engagement, and retention depend on great experiences—here
          is what partners say about our outsourcing programs.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <p className="text-foreground/90 leading-relaxed">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-6">
                <p className="font-bold text-primary">{q.name}</p>
                <p className="text-sm text-muted">{q.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
