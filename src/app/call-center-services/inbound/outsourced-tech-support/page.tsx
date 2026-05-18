import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { OutsourcedTechSupportServicesPage } from "@/components/landing/OutsourcedTechSupportServicesPage";

export const metadata: Metadata = {
  title: "Outsourced tech support — Callify Technologies",
  description:
    "Outsourced technical support: 24/7 help desk, remote access, tier 1–3 support, and affordable coverage for calls, chat, email, and social.",
};

export default function OutsourcedTechSupportServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <OutsourcedTechSupportServicesPage />
      </main>
      <Footer />
    </>
  );
}
