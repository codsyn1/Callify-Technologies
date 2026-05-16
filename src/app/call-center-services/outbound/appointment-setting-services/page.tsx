import type { Metadata } from "next";
import { AppointmentSettingServicesPage } from "@/components/landing/AppointmentSettingServicesPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Appointment setting services — Callify Technologies",
  description:
    "Outbound B2B appointment setting: confirmed meetings with decision-makers, list building, real-time reporting, and 24/7 coverage for your sales team.",
};

export default function AppointmentSettingServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AppointmentSettingServicesPage />
      </main>
      <Footer />
    </>
  );
}
