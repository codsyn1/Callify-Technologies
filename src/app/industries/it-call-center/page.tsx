import type { Metadata } from "next";
import { IndustryITCallCenterPage } from "@/components/landing/IndustryITCallCenterPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "IT call center services — Callify Technologies",
  description:
    "IT call center and tech support outsourcing: help desk, troubleshooting, 24/7 coverage, and multichannel support for SaaS, MSPs, and enterprise IT teams.",
};

export default function ITIndustryRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IndustryITCallCenterPage />
      </main>
      <Footer />
    </>
  );
}
