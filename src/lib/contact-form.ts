export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
};

export type ContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

export function parseContactFormBody(
  body: unknown
): { data: ContactFormPayload } | { error: string } {
  if (!body || typeof body !== "object") {
    return { error: "Invalid request body." };
  }

  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";
  const phone =
    typeof raw.phone === "string" ? raw.phone.trim() : undefined;
  const source =
    typeof raw.source === "string" ? raw.source.trim() : "contact-us";

  if (!name || name.length > 200) {
    return { error: "Please enter your name." };
  }

  if (email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
      return { error: "Please enter a valid email address." };
    }
  } else if (!phone) {
    return { error: "Please enter a valid email address or phone number." };
  }

  if (!message || message.length > 5000) {
    return { error: "Please enter a message." };
  }

  if (phone && phone.length > 40) {
    return { error: "Phone number is too long." };
  }

  return {
    data: {
      name,
      email,
      message,
      ...(phone ? { phone } : {}),
      source: source || "contact-us",
    },
  };
}

export async function submitContactToGoogleSheet(
  data: ContactFormPayload
): Promise<ContactFormResult> {
  const { appendFormRowToSheet } = await import("@/lib/google-sheets");

  const result = await appendFormRowToSheet({
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    source: data.source ?? "contact-us",
  });

  if (!result.ok) {
    return { ok: false, error: result.error };
  }

  return { ok: true };
}
