"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getAllPosts } from "@/lib/blog";

const PAGE_SIZE = 6;

function formatBlogDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function BlogPage() {
  const posts = useMemo(() => getAllPosts(), []);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const slice = useMemo(() => posts.slice(0, visible), [posts, visible]);
  const canLoadMore = visible < posts.length;

  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary-soft/70 via-white to-surface">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-primary/[0.1] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
        <header className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Insights
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Our blog
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Practical notes on outsourcing, contact centers, and customer
            experience—written for operators and buyers who care about quality.
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {slice.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/90 bg-white shadow-[0_16px_44px_-24px_rgba(65,116,185,0.22)] ring-1 ring-black/[0.03] transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_22px_50px_-22px_rgba(65,116,185,0.35)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-soft/50">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-dark to-primary-muted" />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <time
                  dateTime={post.date}
                  className="text-xs font-semibold uppercase tracking-wide text-primary"
                >
                  {formatBlogDate(post.date)}
                </time>
                <h2 className="mt-3 text-lg font-bold leading-snug tracking-tight text-foreground transition group-hover:text-primary sm:text-xl">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2"
                >
                  Read more
                  <span aria-hidden className="translate-y-px transition">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {canLoadMore ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="rounded-xl border-2 border-primary/25 bg-primary-soft/50 px-8 py-3 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary-soft/80"
              onClick={() =>
                setVisible((v) => Math.min(v + PAGE_SIZE, posts.length))
              }
            >
              Load more
            </button>
          </div>
        ) : (
          <p className="mt-10 text-center text-sm text-muted">
            You have reached the end of the list.
          </p>
        )}
      </div>
    </div>
  );
}
