import type { Metadata } from "next";
import { CallCenterJobsPage } from "@/components/landing/CallCenterJobsPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Call center jobs — Callify Technologies",
  description:
    "Apply for CSR, support, IT, design, and operations roles at Callify Technologies. Night shift and English fluency questions included.",
};

export default function CallCenterJobsRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CallCenterJobsPage />
      </main>
      <Footer />
    </>
  );
}
