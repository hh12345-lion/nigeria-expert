import { NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

const BRAND_NAME = "AfricaExpertWitness";

type LeadBody = {
  fullName?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  country?: string;
  caseType?: string;
  keyIssues?: string;
  deadline?: string;
  funding?: string;
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
        error: "Lead storage not configured. Add Google Sheets vars to .env.local (not .env.example) and restart `npm run dev`.",
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
    sanitize(body.country ?? ""),
    sanitize(body.caseType ?? ""),
    sanitize(body.keyIssues ?? ""),
    body.deadline ?? "",
    sanitize(body.funding ?? ""),
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
      "Law Firm / Organisation": row[2],
      Email: row[3],
      Phone: row[4],
      "African Country/Region of Case": row[5],
      "Case Type": row[6],
      "Key Issues": row[7],
      "Hearing/Deadline Date": row[8],
      Funding: row[9],
      Urgency: row[10],
      "Brief Case Summary": row[11],
      "Brand name": row[12],
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
