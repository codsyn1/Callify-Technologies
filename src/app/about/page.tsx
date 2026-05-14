import type { Metadata } from "next";
import { AboutPage } from "@/components/landing/AboutPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "About us — Callify Technologies",
  description:
    "Who we are, leadership, mission and vision, and how Callify Technologies delivers accountable BPO and contact center programs.",
};

export default function AboutRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
