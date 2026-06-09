import { appendRow } from "../lib/google-sheets";

async function test() {
  console.log("Testing Google Sheets connection...\n");

  try {
    const result = await appendRow([
      new Date().toISOString(),
      "Test Entry",
      "Test Law Firm",
      "test@example.com",
      "+44 7700 900000",
      "LGBTQ+ Asylum",
      "FTT Asylum Appeal",
      "Legal Aid",
      "",
      "Standard (2-3 weeks)",
      "Test submission from development environment.",
      "Nigeria Expert",
    ]);
    console.log("Row written:", result.updatedRange);
    console.log("\nAll tests passed.");
  } catch (error) {
    console.error("Failed:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

test();
