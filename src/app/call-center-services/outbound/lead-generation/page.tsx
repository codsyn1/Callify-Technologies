import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { LeadGenerationServicesPage } from "@/components/landing/LeadGenerationServicesPage";

export const metadata: Metadata = {
  title: "Lead generation services — Callify Technologies",
  description:
    "Outbound B2B lead generation: prospecting calls, email, social outreach, telemarketing, fast turnaround, and transparent reporting for your sales team.",
};

export default function LeadGenerationServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LeadGenerationServicesPage />
      </main>
      <Footer />
    </>
  );
}
