import type { Metadata } from "next";
import { ContactUsPage } from "@/components/landing/ContactUsPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Contact us — Callify Technologies",
  description:
    "Reach Callify Technologies for BPO and contact center inquiries. Email, coverage regions, and a quick message form.",
};

export default function ContactUsRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactUsPage />
      </main>
      <Footer />
    </>
  );
}
