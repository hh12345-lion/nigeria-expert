import { NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

const BRAND_NAME = "Nigeria Expert";

type LeadBody = {
  fullName?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  caseProfile?: string;
  proceedings?: string;
  funding?: string;
  deadline?: string;
  urgency?: string;
  summary?: string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function sheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

export async function POST(request: Request) {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!sheetsConfigured() && !webhookUrl) {
    const missing: string[] = [];
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    if (!process.env.GOOGLE_PRIVATE_KEY) missing.push("GOOGLE_PRIVATE_KEY");
    if (!process.env.GOOGLE_SHEET_ID) missing.push("GOOGLE_SHEET_ID");
    return NextResponse.json(
      {
        error:
          "Lead storage not configured. Add Google Sheets vars to .env.local and restart the dev server.",
        ...(process.env.NODE_ENV === "development" && { missing }),
      },
      { status: 500 }
    );
  }

  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = sanitize(body.fullName ?? "");
  const email = (body.email ?? "").toLowerCase().trim();

  if (!fullName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const row = [
    new Date().toISOString(),
    fullName,
    sanitize(body.organisation ?? ""),
    email,
    sanitize(body.phone ?? ""),
    sanitize(body.caseProfile ?? ""),
    sanitize(body.proceedings ?? ""),
    sanitize(body.funding ?? ""),
    body.deadline ?? "",
    sanitize(body.urgency ?? ""),
    sanitize(body.summary ?? ""),
    BRAND_NAME,
  ];

  if (sheetsConfigured()) {
    try {
      await appendRow(row);
    } catch (error) {
      console.error("Google Sheets write failed:", {
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
    }
  }

  if (webhookUrl) {
    const payload = {
      Timestamp: row[0],
      "Full Name": row[1],
      "Law Firm": row[2],
      Email: row[3],
      "Phone Number": row[4],
      "Case Profile": row[5],
      Proceedings: row[6],
      Funding: row[7],
      "Deadline / Hearing Date": row[8],
      Urgency: row[9],
      "Brief Case Description": row[10],
      "Brand name": row[11],
    };

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("Lead webhook failed:", res.status);
        if (!sheetsConfigured()) {
          return NextResponse.json({ error: "Webhook failed" }, { status: 502 });
        }
      }
    } catch {
      if (!sheetsConfigured()) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
      }
      console.error("Lead webhook request failed");
    }
  }

  return NextResponse.json({ ok: true });
}
