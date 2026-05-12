const faqs = [
  {
    q: "What is the difference between a BPO and a call center?",
    a: "BPO delegates broader business processes to a partner. A call center is often one component—focused on handling customer interactions across voice, chat, and email.",
  },
  {
    q: "What value do you offer?",
    a: "We combine trained agents, clear processes, and reporting so you can scale support and revenue activities without building everything in-house.",
  },
  {
    q: "What are advantages of outsourcing?",
    a: "Common benefits include access to skilled capacity, cost predictability, specialized expertise, focus on core work, scalability, and time-zone coverage.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-center text-muted">
          Straight answers about how we work with your team and your customers.
        </p>
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-border bg-white px-5 py-1 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none py-4 font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-primary transition group-open:rotate-180">▾</span>
                </span>
              </summary>
              <p className="border-t border-border pb-4 pt-2 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
