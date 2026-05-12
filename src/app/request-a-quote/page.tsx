import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { RequestQuoteSection } from "@/components/landing/RequestQuoteSection";

export const metadata: Metadata = {
  title: "Request a quote — Callify Technologies",
  description:
    "Share your volumes, channels, and goals. We will follow up with a tailored BPO and contact center recommendation.",
};

export default function RequestQuotePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <RequestQuoteSection />
      </main>
      <Footer />
    </>
  );
}
