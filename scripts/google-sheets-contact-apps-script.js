/**
 * Callify Technologies — Contact form → Google Sheet
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1l5TBXAdPXQWk8Nm5Rz9ZYvTVtYcn17uf0UGlQHrmO24/
 *
 * Setup:
 * 1. Open the spreadsheet → Extensions → Apps Script
 * 2. Paste this file (replace any default code) → Save
 * 3. Project Settings → Script properties → Add property:
 *      FORM_SECRET = (same random string as GOOGLE_SHEETS_SECRET in .env.local)
 * 4. Deploy → New deployment → Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 5. Copy the Web app URL into .env.local as GOOGLE_SHEETS_WEB_APP_URL
 */

const SPREADSHEET_ID = "1l5TBXAdPXQWk8Nm5Rz9ZYvTVtYcn17uf0UGlQHrmO24";
const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties().getProperty(
      "FORM_SECRET"
    );

    if (expectedSecret && payload.secret !== expectedSecret) {
      return jsonResponse({ success: false, error: "Unauthorized" }, 401);
    }

    const sheet = getOrCreateSheet();
    ensureHeaderRow(sheet);

    sheet.appendRow([
      new Date().toISOString(),
      String(payload.name || ""),
      String(payload.email || ""),
      String(payload.phone || ""),
      String(payload.message || ""),
      String(payload.source || "contact-us"),
    ]);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse(
      { success: false, error: String(err && err.message ? err.message : err) },
      500
    );
  }
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}

function ensureHeaderRow(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Message",
      "Source",
    ]);
    sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
  }
}

function jsonResponse(body, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
  if (statusCode) {
    // Apps Script Web Apps don't support HTTP status codes directly;
    // clients should check the JSON body.
  }
  return output;
}
