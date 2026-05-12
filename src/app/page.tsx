import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { WhoWeAre } from "@/components/landing/WhoWeAre";
import { ServicesShowcase } from "@/components/landing/ServicesShowcase";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { Testimonials } from "@/components/landing/Testimonials";
import { CtaForm } from "@/components/landing/CtaForm";
import { Faq } from "@/components/landing/Faq";
import { Industries } from "@/components/landing/Industries";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhoWeAre />
        <ServicesShowcase />
        <WhyChoose />
        <Testimonials />
        <CtaForm />
        <Faq />
        <GrowthSection />
        <Industries />
      </main>
      <Footer />
    </>
  );
}

function GrowthSection() {
  return (
    <section className="border-t border-border bg-gradient-to-b from-white to-primary-soft/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Brilliant, dependable customer experiences
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Your customers expect consistent service across voice, chat, email,
              and SMS. Callify Technologies scales trained agents with the
              workflows, QA, and reporting you need—so every touchpoint feels
              intentional.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-muted">
              <li>Live agents aligned to your scripts, compliance, and tone.</li>
              <li>Lead verification and qualification with transparent outcomes.</li>
              <li>After-care outreach that turns satisfied users into advocates.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-foreground">
              Hack growth with smarter outsourcing
            </h3>
            <p className="mt-4 text-muted leading-relaxed">
              Pair outbound prospecting with inbound excellence: one partner, one
              operating cadence, and dashboards your leadership team can trust.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We collaborate closely on buyer personas, objection handling, and
              escalation paths—so your funnel stays cohesive end to end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
