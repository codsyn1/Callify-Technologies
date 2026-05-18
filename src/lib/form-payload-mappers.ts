export type ContactFormFields = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source: string;
};

export function mapStandardContactForm(
  formData: FormData,
  source: string
): ContactFormFields {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim() || undefined,
    message: String(formData.get("message") ?? "").trim(),
    source,
  };
}

export function mapQuoteRequestForm(formData: FormData): ContactFormFields {
  const phoneCode = String(formData.get("phoneCode") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();

  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: [phoneCode, phone].filter(Boolean).join(" ").trim() || undefined,
    message: company ? `Company: ${company}` : "Quote request",
    source: "request-a-quote",
  };
}

const HEAR_ABOUT_LABELS = [
  "Facebook",
  "Indeed",
  "Google",
  "LinkedIn",
  "Rozee.pk",
  "Other",
] as const;

export function mapCallCenterJobsForm(formData: FormData): ContactFormFields {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const position = String(formData.get("position") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const phoneNational = String(formData.get("phoneNational") ?? "").trim();
  const fluentEnglish = String(formData.get("fluentEnglish") ?? "").trim();
  const nightShifts = String(formData.get("nightShifts") ?? "").trim();
  const ccExperience = String(formData.get("ccExperience") ?? "").trim();

  const heardAbout = HEAR_ABOUT_LABELS.filter((label) => {
    const key = `hear_${label.toLowerCase().replace(/\./g, "").replace(/\s+/g, "_")}`;
    return formData.get(key) === "1";
  });

  const lines = [
    `Position: ${position || "—"}`,
    `City: ${city || "—"}`,
    `Fluent English: ${fluentEnglish || "—"}`,
    `Night shifts: ${nightShifts || "—"}`,
    `Call center experience: ${ccExperience || "—"}`,
    `Heard about us: ${heardAbout.length ? heardAbout.join(", ") : "—"}`,
  ];

  return {
    name: [firstName, lastName].filter(Boolean).join(" ").trim(),
    email: "",
    phone: phoneNational ? `+92 ${phoneNational}` : undefined,
    message: lines.join("\n"),
    source: "call-center-jobs",
  };
}
