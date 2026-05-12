"use client";

import { FormEvent, useState } from "react";

export function CtaForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="quote" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete the form to get to know us
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tell us about your volumes, channels, and goals—we will follow up
              with a tailored recommendation.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-foreground">
                Name
                <input
                  required
                  name="name"
                  className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-foreground outline-none ring-primary/30 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-foreground outline-none ring-primary/30 focus:ring-2"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-foreground">
              Message
              <textarea
                required
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-foreground outline-none ring-primary/30 focus:ring-2"
                placeholder="Programs, channels, hours, and goals…"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark sm:w-auto sm:px-10"
            >
              Submit
            </button>
            {sent ? (
              <p className="mt-4 text-sm font-medium text-primary" role="status">
                Thanks—this demo form does not post to a server yet; wire your
                API or form provider here.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
