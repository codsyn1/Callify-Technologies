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
                src="/callify-logo.png"
                alt="Callify Technologies"
                width={1063}
                height={383}
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
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
                <Link href="#services" className="hover:text-white">
                  Outbound call center
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Inbound call center
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white">
                  Digital customer experience
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary-muted">
              Industries
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {["Insurance", "Healthcare", "Financial", "Real estate", "IT"].map(
                (x) => (
                  <li key={x}>
                    <Link href="#industries" className="hover:text-white">
                      {x}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-primary-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>United States (program delivery)</li>
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
              <li>
                <a
                  href="mailto:info@callifytechnologies.com"
                  className="hover:text-white"
                >
                  info@callifytechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
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
