import Image from "next/image";
import Link from "next/link";
import type { BlogPostDocument } from "@/types/blog";
import { getRelatedPosts } from "@/lib/blog";

function formatBlogDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}

function TocNav({
  sections,
  takeawayTitle,
}: {
  sections: BlogPostDocument["sections"];
  takeawayTitle: string;
}) {
  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
        On this page
      </p>
      <ul className="mt-4 space-y-2 border-l-2 border-primary/20 pl-4">
        {sections.map((s) => (
          <li
            key={s.id}
            className={s.level === 3 ? "pl-3 text-[13px] text-muted" : ""}
          >
            <a
              href={`#${s.id}`}
              className="font-medium text-foreground transition hover:text-primary"
            >
              {s.title}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#takeaway"
            className="font-medium text-foreground transition hover:text-primary"
          >
            {takeawayTitle}
          </a>
        </li>
        <li>
          <a
            href="#faqs"
            className="font-medium text-foreground transition hover:text-primary"
          >
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
}

type Props = { post: BlogPostDocument };

export function BlogArticleView({ post }: Props) {
  const related = getRelatedPosts(post.slug, post.relatedSlugs, 2);

  return (
    <>
      <section className="relative border-b border-border bg-gradient-to-b from-primary-soft/35 via-white to-surface">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(65,116,185,0.12),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12">
          <figure className="relative aspect-[2/1] max-h-[min(52vw,22rem)] overflow-hidden rounded-2xl border border-border/80 bg-primary-soft shadow-[0_20px_50px_-20px_rgba(65,116,185,0.35)] ring-1 ring-primary/10 sm:max-h-[min(42vw,26rem)]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/35 via-foreground/5 to-transparent"
              aria-hidden
            />
          </figure>

          <div className="relative z-10 -mt-5 rounded-2xl border border-border/90 bg-white/95 p-6 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:-mt-7 sm:p-8">
            <Link
              href="/blog"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/25 bg-primary-soft/50 px-5 py-3 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/45 hover:bg-primary-soft/90 hover:shadow-md sm:w-auto sm:justify-start"
            >
              <ArrowLeftIcon className="size-4 shrink-0" />
              Back to blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <time
                dateTime={post.date}
                className="inline-flex items-center rounded-full border border-primary/15 bg-primary-soft/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-dark"
              >
                {formatBlogDate(post.date)}
              </time>
            </div>

            <h1 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.125rem] lg:leading-snug">
              {post.title}
            </h1>
            <div className="mt-5 space-y-4 sm:space-y-5">
              {post.intro.map((p, i) => (
                <p
                  key={i}
                  className="text-[17px] leading-relaxed text-muted sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-border/80 bg-white/90 p-5 shadow-sm">
              <TocNav
                sections={post.sections}
                takeawayTitle={post.takeaway.title}
              />
            </div>
          </aside>

          <div className="min-w-0">
            <details className="group mb-10 rounded-2xl border border-border/90 bg-white p-4 shadow-sm lg:hidden">
              <summary className="cursor-pointer list-none text-sm font-bold text-foreground [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-2">
                  Table of contents
                  <span className="text-primary transition group-open:rotate-180">
                    ▼
                  </span>
                </span>
              </summary>
              <div className="mt-4 border-t border-border/70 pt-4">
                <TocNav
                  sections={post.sections}
                  takeawayTitle={post.takeaway.title}
                />
              </div>
            </details>

            <div className="space-y-10">
              {post.sections.map((section) => {
                const HeadingTag = section.level === 2 ? "h2" : "h3";
                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                  >
                    <HeadingTag
                      className={
                        section.level === 2
                          ? "text-2xl font-bold tracking-tight text-foreground"
                          : "text-xl font-semibold tracking-tight text-foreground"
                      }
                    >
                      {section.title}
                    </HeadingTag>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((para, i) => (
                        <p
                          key={i}
                          className="text-[17px] leading-relaxed text-muted"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>

            <div
              id="takeaway"
              className="mt-12 scroll-mt-28 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-soft/80 to-white p-6 sm:p-8"
            >
              <h2 className="text-xl font-bold text-foreground">
                {post.takeaway.title}
              </h2>
              <div className="mt-4 space-y-4">
                {post.takeaway.paragraphs.map((p, i) => (
                  <p key={i} className="text-[17px] leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div id="faqs" className="mt-12 scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Frequently asked questions
              </h2>
              <div className="mt-6 divide-y divide-border rounded-2xl border border-border/90 bg-white">
                {post.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group px-5 py-1 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-left text-sm font-semibold text-foreground hover:text-primary">
                      {faq.question}
                      <span className="shrink-0 text-muted transition group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <div className="pb-4 pr-8 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {related.length > 0 ? (
              <div className="mt-14 border-t border-border pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Related posts
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group flex overflow-hidden rounded-2xl border border-border/90 bg-white shadow-sm transition hover:border-primary/25 hover:shadow-md"
                    >
                      <div className="relative hidden w-28 shrink-0 sm:block">
                        <Image
                          src={r.coverImage}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="112px"
                        />
                      </div>
                      <div className="min-w-0 p-4 sm:p-5">
                        <time className="text-[10px] font-bold uppercase tracking-wide text-primary">
                          {formatBlogDate(r.date)}
                        </time>
                        <p className="mt-2 font-semibold leading-snug text-foreground transition group-hover:text-primary">
                          {r.title}
                        </p>
                        <p className="mt-2 line-clamp-2 text-xs text-muted">
                          {r.excerpt}
                        </p>
                        <span className="mt-3 inline-block text-xs font-semibold text-primary">
                          Read more →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-12 rounded-2xl border border-primary/15 bg-primary-soft/50 p-6">
              <p className="text-sm font-semibold text-foreground">
                Want to talk about your program?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Reach our team for a discovery call or quote—no obligation.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Contact us
                </Link>
                <Link
                  href="/request-a-quote"
                  className="inline-flex rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/30"
                >
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
