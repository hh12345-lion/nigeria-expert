import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Nigeria Expert Witness Fees UK | Legal Aid & Private Rates",
  description:
    "Legal Aid and private fee rates for Nigeria expert witness reports in UK asylum appeals. LAA prior authority, typical hourly rates, and fixed-fee country condition reports.",
  path: "/fees",
});

const feeRows = [
  ["Standard country condition report", "£800 to £1,200", "Single profile, 2 to 3 weeks"],
  ["Complex multi-issue report (LGBTQ+, IPOB, trafficking)", "£1,500 to £2,500", "3 to 4 weeks"],
  ["CPIN challenge / actors of protection analysis", "£1,200 to £2,000", "Profile-specific challenge"],
  ["Internal relocation analysis", "£800 to £1,500", "Lagos/Abuja feasibility"],
  ["Supplementary report / addendum", "£400 to £800", "Subject to scope"],
  ["Oral evidence (FTT/UT)", "£600 to £1,200 per day", "Plus preparation time"],
  ["Written questions response", "£200 to £400", "Per round"],
];

export default function FeesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Fees" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Nigeria Expert Witness Fees"
        subtitle="Legal Aid compatible rates and private fee guidance for UK immigration solicitors."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          Nigeria expert witness fees depend on profile complexity, report scope, and urgency. Most asylum expert reports
          are Legal Aid funded through the Legal Aid Agency (LAA). Prior authority must be obtained before instruction.
          NigeriaExpert provides LAA-compatible rates for all major Nigerian asylum profiles.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Legal Aid Rates and Prior Authority</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Legal Aid funded cases require LAA prior authority before instructing an expert. Typical LAA-approved rates are
          £50 to £100 per hour for report preparation, with fixed-fee reports available for standard country condition
          reports. Include the expert CV, proposed scope, estimated hours, hearing date, and fee estimate in your prior
          authority application.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-[#374151]">
          <li>Confirm Legal Aid funding and case category with your LAA contract manager.</li>
          <li>Apply for prior authority with scope, CV, and fee estimate before instruction.</li>
          <li>Issue a detailed letter of instruction once authority is granted.</li>
          <li>Provide AIR, RFRL, witness statement, and relevant CPINs with the instruction.</li>
        </ol>
        <p className="mt-4 text-[#374151] leading-relaxed">
          See our{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
            how to instruct page
          </Link>{" "}
          for the full seven-step Legal Aid instruction process.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Typical Fee Schedule (Indicative)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <caption className="mb-3 text-left text-base font-semibold text-[#0D3B2E]">
              Indicative Nigeria expert witness fees for UK asylum proceedings
            </caption>
            <thead>
              <tr className="border-b border-[#D1E3D8] bg-[#F7F9F7]">
                <th className="px-4 py-3 text-left font-semibold text-[#0D3B2E]">Report type</th>
                <th className="px-4 py-3 text-left font-semibold text-[#0D3B2E]">Indicative fee</th>
                <th className="px-4 py-3 text-left font-semibold text-[#0D3B2E]">Turnaround</th>
              </tr>
            </thead>
            <tbody>
              {feeRows.map(([type, fee, turnaround]) => (
                <tr key={type} className="border-b border-[#D1E3D8]">
                  <td className="px-4 py-3 text-[#374151]">{type}</td>
                  <td className="px-4 py-3 text-[#374151]">{fee}</td>
                  <td className="px-4 py-3 text-[#374151]">{turnaround}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[#374151]">
          Fees are indicative and confirmed on instruction. Urgent reports (5 business days) may attract a supplementary
          urgency fee. Contact us for a quote tailored to your case profile and hearing date.
        </p>

        <RelatedLinks
          links={[
            { label: "How to Instruct", href: "/how-to-instruct" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "Instructing Nigeria Expert Guide", href: "/guides/instructing-nigeria-expert" },
            { label: "Instruct an Expert", href: "/contact" },
          ]}
        />
      </PageShell>
    </>
  );
}
