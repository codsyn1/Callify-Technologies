import type { Metadata } from "next";
import { ChatSupportServicesPage } from "@/components/landing/ChatSupportServicesPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Chat support services — Callify Technologies",
  description:
    "Outsourced live chat support: 24/7 coverage, lead follow-up, product queries, transparent reporting, and affordable packages for your website.",
};

export default function ChatSupportServicesRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ChatSupportServicesPage />
      </main>
      <Footer />
    </>
  );
}
