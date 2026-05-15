import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is an Africa Expert Witness? | Role, Reports & UK Tribunal Standards",
  description: "An Africa expert witness provides country condition reports and testimony for UK immigration tribunals, asylum appeals, and international investment arbitration. Learn their role.",
  path: "/what-is-an-africa-expert-witness",
});

export default function WhatIsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "What Is an Africa Expert Witness?" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="What Is an Africa Expert Witness?" subtitle="Independent expert evidence for UK legal proceedings involving African countries." breadcrumbs={crumbs}>
      <p className="mb-4 text-[#374151] leading-relaxed">An Africa expert witness is an independent specialist instructed to provide expert evidence on country conditions, African law, or sector-specific matters in UK immigration tribunals, asylum appeals, and international arbitration. Unlike witnesses of fact, experts have an overriding duty to the court to provide objective, impartial analysis.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">CPR Part 35 and expert duties</h2>
      <p className="mb-4 mt-4 text-[#374151] leading-relaxed">In England and Wales, expert evidence in civil proceedings is governed by CPR Part 35 and the accompanying Practice Direction. An expert&apos;s primary duty is to the court, not to the party instructing them. Experts must give independent, objective evidence and must not act as advocates for either side.</p>
      <p className="mb-4 text-[#374151] leading-relaxed">The duties of independence and objectivity were articulated in <em>The Ikarian Reefer</em> [1993] 2 Lloyd&apos;s Rep 68, which remains the foundation for how UK courts assess expert evidence. Reports must state the substance of material instructions, distinguish fact from opinion, and not omit material facts.</p>
      <p className="mb-4 text-[#374151] leading-relaxed">Where the tribunal or parties agree a Single Joint Expert (SJE), one expert is jointly instructed to report on agreed issues. SJE appointments are common in contested country conditions cases and require the expert to maintain the same overriding duty to the court while addressing issues defined in joint instructions.</p>
      <p className="mb-4 text-[#374151] leading-relaxed">In asylum and immigration cases, Africa experts produce country condition reports addressing whether a claimant faces a well-founded fear of persecution on return. Reports analyse state protection, internal relocation, and consistency with country guidance cases such as MOJ Somalia and MA Eritrea.</p>
      <p className="mb-4 text-[#374151] leading-relaxed">In investment treaty arbitration, Africa experts provide evidence on country conditions relevant to fair and equitable treatment and expropriation claims, regulatory frameworks, and African legal systems governing ICSID and UNCITRAL disputes.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">When to instruct an Africa expert</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
        <li>Home Office refusal or appeal to the First-tier Tribunal</li>
        <li>Upper Tribunal country guidance or departure applications</li>
        <li>LGBTQI+, FGM, trafficking, or political persecution claims</li>
        <li>ICSID, UNCITRAL, or commercial arbitration involving African states</li>
        <li>Rebuttal of Home Office CPIN positions</li>
      </ul>
      <Link href="/how-to-instruct" className="mt-8 inline-flex min-h-[44px] items-center text-[#C8922A] font-semibold hover:underline">How to instruct an expert →</Link>
    </PageShell>
    </>
  );
}
