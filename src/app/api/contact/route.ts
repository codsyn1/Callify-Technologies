import { NextResponse } from "next/server";
import {
  parseContactFormBody,
  submitContactToGoogleSheet,
} from "@/lib/contact-form";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = parseContactFormBody(body);
  if ("error" in parsed) {
    return NextResponse.json(
      { success: false, error: parsed.error },
      { status: 400 }
    );
  }

  const result = await submitContactToGoogleSheet(parsed.data);

  if (!result.ok) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
