import { google, sheets_v4 } from "googleapis";

type CellValue = string | number | boolean | null;

interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
}

let cachedFirstTab: string | null = null;

function getAuthClient() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

/** All forms write to a single existing tab. Never creates a new sheet. */
async function resolveLeadTab(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string
): Promise<string> {
  const pinned = process.env.GOOGLE_SHEET_TAB_NAME?.trim();
  if (pinned) return pinned;
  if (cachedFirstTab) return cachedFirstTab;

  const meta = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets.properties.title",
  });
  const title = meta.data.sheets?.[0]?.properties?.title;
  if (!title) {
    throw new Error("Spreadsheet has no tabs. Add one tab and share it with the service account.");
  }
  cachedFirstTab = title;
  return title;
}

export async function appendRow(values: CellValue[]): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID");
  }

  const sheetName = await resolveLeadTab(sheets, spreadsheetId);

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}
