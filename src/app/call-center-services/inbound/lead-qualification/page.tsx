import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { LeadQualificationServicesPage } from "@/components/landing/LeadQualificationServicesPage";

export const metadata: Metadata = {
  title: "Lead qualification services — Callify Technologies",
  description:
    "Inbound lead qualification: higher-quality sales leads, transparent scoring, data enrichment, and workflows that improve conversion rates.",
};

export default function LeadQualificationServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LeadQualificationServicesPage />
      </main>
      <Footer />
    </>
  );
}
