import type { Metadata } from "next";
import { IndustryFinancialServicesCallCenterPage } from "@/components/landing/IndustryFinancialServicesCallCenterPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Financial services call center — Callify Technologies",
  description:
    "Secure financial services call center and BPO support for banks, lenders, and fintech: account servicing, card support, 24/7 coverage, and compliance-minded delivery.",
};

export default function FinancialServicesIndustryRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IndustryFinancialServicesCallCenterPage />
      </main>
      <Footer />
    </>
  );
}
