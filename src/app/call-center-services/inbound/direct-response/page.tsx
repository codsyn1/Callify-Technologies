import type { Metadata } from "next";
import { DirectResponseCallCenterPage } from "@/components/landing/DirectResponseCallCenterPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Direct response call center — Callify Technologies",
  description:
    "Inbound direct response call center: help desk, overflow management, campaign support, CDR analysis, and live chat for measurable conversions.",
};

export default function DirectResponseCallCenterRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <DirectResponseCallCenterPage />
      </main>
      <Footer />
    </>
  );
}
