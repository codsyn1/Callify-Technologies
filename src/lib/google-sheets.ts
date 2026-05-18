import { google } from "googleapis";

const SPREADSHEET_ID =
  process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim() ||
  "1l5TBXAdPXQWk8Nm5Rz9ZYvTVtYcn17uf0UGlQHrmO24";

const SHEET_NAME = process.env.GOOGLE_SHEETS_TAB_NAME?.trim() || "Sheet1";

const HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Phone",
  "Message",
  "Source",
] as const;

function getServiceAccountCredentials():
  | { client_email: string; private_key: string }
  | null {
  const jsonRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (jsonRaw) {
    try {
      const parsed = JSON.parse(jsonRaw) as {
        client_email?: string;
        private_key?: string;
      };
      if (parsed.client_email && parsed.private_key) {
        return {
          client_email: parsed.client_email,
          private_key: parsed.private_key,
        };
      }
    } catch {
      console.error("GOOGLE_SERVICE_ACCOUNT_JSON is invalid JSON.");
      return null;
    }
  }

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();

  if (email && privateKey) {
    return { client_email: email, private_key: privateKey };
  }

  return null;
}

function getSheetsClient() {
  const credentials = getServiceAccountCredentials();
  if (!credentials) {
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function ensureHeaderRow(
  sheets: ReturnType<typeof google.sheets>,
  sheetName: string
) {
  const headerRange = `${sheetName}!A1:F1`;
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: headerRange,
  });

  const firstCell = existing.data.values?.[0]?.[0];
  if (firstCell) {
    return;
  }

  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: headerRange,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [HEADERS as unknown as string[]],
    },
  });
}

export type SheetFormRow = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source: string;
};

export async function appendFormRowToSheet(
  row: SheetFormRow
): Promise<{ ok: true } | { ok: false; error: string }> {
  const sheets = getSheetsClient();
  if (!sheets) {
    console.error("Google service account credentials are not configured.");
    return {
      ok: false,
      error:
        "Form is not connected yet. Please try again later or email us directly.",
    };
  }

  try {
    await ensureHeaderRow(sheets, SHEET_NAME);

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            row.name,
            row.email,
            row.phone ?? "",
            row.message,
            row.source,
          ],
        ],
      },
    });

    return { ok: true };
  } catch (err) {
    console.error("Google Sheets API append failed:", err);
    const message =
      err instanceof Error ? err.message : "Unknown Google Sheets error";

    if (
      message.includes("permission") ||
      message.includes("PERMISSION_DENIED") ||
      message.includes("403")
    ) {
      return {
        ok: false,
        error:
          "Sheet access denied. Share the spreadsheet with the service account email as Editor.",
      };
    }

    return {
      ok: false,
      error:
        "Could not save your message. Please email info@callifytechnologies.com.",
    };
  }
}
