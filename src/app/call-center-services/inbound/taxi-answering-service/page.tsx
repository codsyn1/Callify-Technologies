import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { TaxiAnsweringServicesPage } from "@/components/landing/TaxiAnsweringServicesPage";

export const metadata: Metadata = {
  title: "Taxi answering service — Callify Technologies",
  description:
    "24/7 taxi answering and dispatch call center: booking, reservations, driver handoff, and secure call logging for cab fleets.",
};

export default function TaxiAnsweringServiceRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TaxiAnsweringServicesPage />
      </main>
      <Footer />
    </>
  );
}
