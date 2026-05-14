import type { Metadata } from "next";
import { IndustryHealthcareCallCenterPage } from "@/components/landing/IndustryHealthcareCallCenterPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Healthcare call center — Callify Technologies",
  description:
    "HIPAA-minded healthcare call center and BPO support: scheduling, billing help, member services, intake, and multichannel patient access for hospitals and digital health.",
};

export default function HealthcareIndustryRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IndustryHealthcareCallCenterPage />
      </main>
      <Footer />
    </>
  );
}
