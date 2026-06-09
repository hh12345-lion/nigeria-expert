import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct a Nigeria Expert Witness UK | Step-by-Step Guide",
  description:
    "Step-by-step guide for UK solicitors on instructing a Nigeria expert witness for asylum appeals, Legal Aid cases, and immigration tribunal proceedings.",
  path: "/how-to-instruct",
});

const steps = [
  {
    n: 1,
    title: "Identify the Profile",
    body: "Determine the appellant's asylum profile: LGBTQ+, IPOB/Biafra, Boko Haram/North-East, FGM, trafficking/juju, political persecution, or multiple profiles. This determines which CPINs and expert specialism are required.",
  },
  {
    n: 2,
    title: "Legal Aid or Privately Funded?",
    body: "Most Nigeria expert reports in asylum proceedings are Legal Aid funded. Confirm funding status before instruction. Privately funded cases follow a different fee structure.",
  },
  {
    n: 3,
    title: "Prior Authority from LAA (if Legal Aid)",
    body: "Apply for LAA prior authority before instructing the expert. Include the expert's CV, proposed scope, estimated hours, and fee. Typical LAA rates are £50 to £100 per hour for report preparation.",
  },
  {
    n: 4,
    title: "Letter of Instruction",
    body: "Provide a detailed letter of instruction specifying the expert's role, questions to address, hearing date, and funding arrangements. Reference relevant CPINs (SOGIESC June 2025, IPOB April 2026, actors of protection August 2024).",
  },
  {
    n: 5,
    title: "Provide All Relevant Materials",
    body: "Include the screening record, Asylum Interview Record (AIR), Home Office refusal letter (RFRL), client witness statement, any previous expert reports, and relevant CPINs.",
  },
  {
    n: 6,
    title: "Expert Analysis and Report",
    body: "The expert prepares an independent report addressing the letter of instruction. Standard reports take 2 to 3 weeks. Urgent reports available in 5 business days.",
  },
  {
    n: 7,
    title: "Written Questions and Oral Evidence",
    body: "If required, respond to written questions from the opposing party. Oral evidence is most common in country guidance cases or where the tribunal directs expert attendance.",
  },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct a Nigeria Expert Witness"
        subtitle="Seven steps for UK immigration solicitors and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 rounded-[8px] border border-[#D1E3D8] bg-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D3B2E] font-bold text-white">
                {s.n}
              </span>
              <div>
                <h2 className="font-bold text-[#0D3B2E]">{s.title}</h2>
                <p className="mt-2 text-[#374151]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-[#0D3B2E]">Legal Aid</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Most Nigeria expert reports in asylum proceedings are Legal Aid funded. LAA prior authority is required before
          instruction. See our{" "}
          <Link href="/fees" className="font-semibold text-[#C8922A] hover:underline">
            fees page
          </Link>{" "}
          for typical LAA rates and the{" "}
          <Link href="/guides/instructing-nigeria-expert" className="font-semibold text-[#C8922A] hover:underline">
            instructing guide
          </Link>{" "}
          aligned with the Adam Pipe October 2025 requirements.
        </p>

        <RelatedLinks
          links={[
            { label: "Fees & Legal Aid rates", href: "/fees" },
            { label: "Instructing guide", href: "/guides/instructing-nigeria-expert" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "FAQ", href: "/faq" },
            { label: "Instruct an expert", href: "/contact" },
          ]}
        />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white"
        >
          Instruct an Expert
        </Link>
      </PageShell>
    </>
  );
}
