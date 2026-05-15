import type { Metadata } from "next";
import { IndustryRealEstateCallCenterPage } from "@/components/landing/IndustryRealEstateCallCenterPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Real estate call center — Callify Technologies",
  description:
    "Inbound and outbound real estate call center support for brokerages, investors, and property managers: lead response, ISAs, appointments, tenant lines, and 24/7 coverage.",
};

export default function RealEstateIndustryRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IndustryRealEstateCallCenterPage />
      </main>
      <Footer />
    </>
  );
}
