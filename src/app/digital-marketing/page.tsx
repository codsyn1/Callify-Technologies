import type { Metadata } from "next";
import { DigitalMarketingPage } from "@/components/landing/DigitalMarketingPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Digital marketing services — Callify Technologies",
  description:
    "SEO, social media, email, and web design from Callify Technologies—digital marketing that grows leads, engagement, and customer loyalty.",
};

export default function DigitalMarketingRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <DigitalMarketingPage />
      </main>
      <Footer />
    </>
  );
}
