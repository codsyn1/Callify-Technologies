import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { MedicalAnsweringServicesPage } from "@/components/landing/MedicalAnsweringServicesPage";

export const metadata: Metadata = {
  title: "Medical answering service — Callify Technologies",
  description:
    "HIPAA-aware medical answering: 24/7 coverage, after-hours triage, secure messaging, appointments, and virtual reception for healthcare practices.",
};

export default function MedicalAnsweringServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MedicalAnsweringServicesPage />
      </main>
      <Footer />
    </>
  );
}
