import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { LivePhoneAnsweringServicesPage } from "@/components/landing/LivePhoneAnsweringServicesPage";

export const metadata: Metadata = {
  title: "Live phone answering service — Callify Technologies",
  description:
    "24/7 live phone answering: certified agents, virtual receptionist, scalability, and cost-effective packages for professional customer coverage.",
};

export default function LivePhoneAnsweringServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LivePhoneAnsweringServicesPage />
      </main>
      <Footer />
    </>
  );
}
