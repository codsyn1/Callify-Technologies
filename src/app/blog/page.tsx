import type { Metadata } from "next";
import { BlogPage } from "@/components/landing/BlogPage";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
  title: "Blog — Callify Technologies",
  description:
    "Articles on BPO, call centers, outsourcing, and customer experience from Callify Technologies.",
};

export default function BlogRoute() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BlogPage />
      </main>
      <Footer />
    </>
  );
}
