import type { Metadata } from "next";
import { IndustryCallCenterInsurancePage } from "@/components/landing/IndustryCallCenterInsurancePage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Insurance call center — Callify Technologies",
  description:
    "Compliant insurance BPO and contact center programs for carriers, MGAs, and brokers—claims intake, policy service, retention, and 24/7 support.",
};

export default function InsuranceIndustryRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IndustryCallCenterInsurancePage />
      </main>
      <Footer />
    </>
  );
}
