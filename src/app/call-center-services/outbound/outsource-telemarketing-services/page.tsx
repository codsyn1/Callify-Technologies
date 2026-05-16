import type { Metadata } from "next";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { OutsourceTelemarketingServicesPage } from "@/components/landing/OutsourceTelemarketingServicesPage";

export const metadata: Metadata = {
  title: "Outsource telemarketing services — Callify Technologies",
  description:
    "Outbound B2B and B2C telemarketing: customer acquisition, lead generation, 24/7 coverage, and campaign execution with transparent reporting.",
};

export default function OutsourceTelemarketingServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <OutsourceTelemarketingServicesPage />
      </main>
      <Footer />
    </>
  );
}
