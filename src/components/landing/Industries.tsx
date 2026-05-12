const industries = [
  "Insurance",
  "Healthcare",
  "Real estate",
  "Financial services",
  "Information technology",
];

export function Industries() {
  return (
    <section id="industries" className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-foreground">Industries</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Programs tuned to regulated environments, fast-moving sales cycles, and
          technical troubleshooting—without losing the human touch.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {industries.map((name) => (
            <li
              key={name}
              className="rounded-full border border-primary/25 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
