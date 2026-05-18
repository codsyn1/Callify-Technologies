import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { OutsourceEmailSupportServicesPage } from "@/components/landing/OutsourceEmailSupportServicesPage";

export const metadata: Metadata = {
  title: "Outsource email support — Callify Technologies",
  description:
    "24/7 outsourced email support: fast responses, flexible plans, list management, templates, campaigns, and improved customer satisfaction.",
};

export default function OutsourceEmailSupportServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <OutsourceEmailSupportServicesPage />
      </main>
      <Footer />
    </>
  );
}
