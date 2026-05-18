"use client";

import { type FormEvent, useState } from "react";
import type { ContactFormFields } from "@/lib/form-payload-mappers";

type UseContactFormOptions = {
  source: string;
  mapPayload?: (formData: FormData, source: string) => ContactFormFields;
};

const defaultMapPayload = (
  formData: FormData,
  source: string
): ContactFormFields => ({
  name: String(formData.get("name") ?? "").trim(),
  email: String(formData.get("email") ?? "").trim(),
  phone: String(formData.get("phone") ?? "").trim() || undefined,
  message: String(formData.get("message") ?? "").trim(),
  source,
});

export function useContactForm({
  source,
  mapPayload = defaultMapPayload,
}: UseContactFormOptions) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = mapPayload(formData, source);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        setError(
          result.error ??
            "Something went wrong. Please try again or email info@callifytechnologies.com."
        );
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError(
        "Network error. Please try again or email info@callifytechnologies.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return { sent, submitting, error, onSubmit };
}
