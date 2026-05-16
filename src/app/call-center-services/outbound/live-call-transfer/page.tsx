import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { LiveCallTransferServicesPage } from "@/components/landing/LiveCallTransferServicesPage";

export const metadata: Metadata = {
  title: "Live call transfer services — Callify Technologies",
  description:
    "Live call transfer, virtual receptionist, and call forwarding: 24/7 coverage, warm handoffs, international numbers, and QA for outbound sales teams.",
};

export default function LiveCallTransferServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LiveCallTransferServicesPage />
      </main>
      <Footer />
    </>
  );
}
