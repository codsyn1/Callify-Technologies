import { SocialIcons } from "@/components/landing/SocialIcons";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block leading-none">
              <Image
                src="/callify-logo-dark.png"
                alt="Callify Technologies"
                width={1063}
                height={383}
                className="h-16 w-auto sm:h-[4.75rem] lg:h-[5.25rem]"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              When it comes to dependable contact center delivery under your
              brand standards, Callify Technologies is built to execute with
              clarity and care.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary-muted">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <Link href="/#services" className="hover:text-white">
                  Outbound call center
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Inbound call center
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-white">
                  Digital marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary-muted">
              Industries
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="/industries/call-center-insurance"
                  className="hover:text-white"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare-call-center"
                  className="hover:text-white"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/real-estate-call-center"
                  className="hover:text-white"
                >
                  Real estate
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/financial-services-call-center"
                  className="hover:text-white"
                >
                  Financial
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/it-call-center"
                  className="hover:text-white"
                >
                  IT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>United States (program delivery)</li>
              <li>
                <Link href="/call-center-jobs" className="hover:text-white">
                  Call center careers
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white">
                  Contact form &amp; locations
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="hover:text-white">
                  Book a discovery call
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 lg:justify-between">
          <a
            href="mailto:info@callifytechnologies.com"
            className="text-sm font-semibold text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
          >
            info@callifytechnologies.com
          </a>
          <SocialIcons
            iconClassName="border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
          />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/about"
              className="text-sm font-semibold text-primary-muted underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white"
            >
              About us
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary-muted underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Callify Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <span className="cursor-default">Privacy policy</span>
            <span className="cursor-default">Terms &amp; conditions</span>
            <span className="cursor-default">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
