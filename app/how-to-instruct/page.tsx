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
        <ol className="divide-y divide-border border-y border-border">
          {steps.map((s) => (
            <li key={s.n} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
              <span className="font-mono text-xs text-palm">{String(s.n).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-lg text-ink sm:text-xl">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mute sm:text-base">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-display mt-12 text-2xl text-ink">Legal Aid</h2>
        <p className="mt-4 text-mute leading-relaxed">
          Most Nigeria expert reports in UK asylum proceedings are Legal Aid funded. LAA prior authority is required before
          instruction. Typical LAA-approved rates are £50 to £100 per hour for report preparation, with fixed-fee reports
          from £800 for standard country condition reports. See the{" "}
          <Link href="/guides/instructing-nigeria-expert" className="font-semibold text-palm hover:underline">
            instructing guide
          </Link>{" "}
          aligned with the Adam Pipe October 2025 requirements.
        </p>

        <RelatedLinks
          links={[
            { label: "Instructing guide", href: "/guides/instructing-nigeria-expert" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "Instruct an expert", href: "/contact" },
          ]}
        />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center bg-palm px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-deep transition hover:bg-palm-soft"
        >
          Send brief
        </Link>
      </PageShell>
    </>
  );
}
