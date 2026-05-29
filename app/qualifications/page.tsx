import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Africa Expert Witness Qualifications UK | Credentials & Vetting Standards",
  description: "What qualifications should an Africa expert witness hold? Academic credentials, field research, language skills, CPR Part 35, and Legal Aid compliance explained.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="Africa Expert Witness Qualifications & Vetting Standards" breadcrumbs={crumbs}>
      <h2 className="text-xl font-bold text-[#0D3B2E]">Country Conditions Experts</h2>
      <p className="mt-4 text-[#374151]">PhD or research degree in African Studies, Political Science, International Relations, Anthropology, or Law. Field research in relevant African countries. Language skills including French, Swahili, Arabic, Amharic, Hausa, and Somali. Tribunal acceptance history and OSCOLA citation standard.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">African Law Experts</h2>
      <p className="mt-4 text-[#374151]">Qualified in relevant African jurisdiction(s). Knowledge of OHADA, ECOWAS, and SADC legal frameworks. Experience with BIT obligations. CPR Part 35 compliant.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">Investment Arbitration Experts</h2>
      <p className="mt-4 text-[#374151]">ICSID, UNCITRAL, ICC, and LCIA experience. Sector expertise in mining, energy, and infrastructure. African country and law knowledge.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">LGBTQI+ Specialists</h2>
      <p className="mt-4 text-[#374151]">Human rights advocacy and research background. Country-specific expertise. Training in sexuality and gender identity evidence standards.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">CPR Part 35</h2>
      <p className="mt-4 text-[#374151]">In England and Wales, CPR Part 35 governs expert evidence in civil proceedings. An expert&apos;s primary duty is to the court - not to the instructing solicitor or client. Experts must provide independent, objective analysis and must not act as advocates.</p>
      <p className="mt-4 text-[#374151]"><em>The Ikarian Reefer</em> [1993] 2 Lloyd&apos;s Rep 68 established the core duties of independence and objectivity that UK tribunals still apply. Reports must state the substance of all material instructions, distinguish fact from opinion, and not omit material facts. Africa country evidence is subject to the same rigorous standards as any UK expert evidence.</p>
      <p className="mt-4 text-[#374151]">Where parties agree a Single Joint Expert (SJE), one expert is jointly instructed on defined issues while retaining the same overriding duty to the court. SJE appointments are frequently used in contested country conditions and CPIN rebuttal cases.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">Legal Aid Compliance</h2>
      <p className="mt-4 text-[#374151]">Experts on our panel work within LAA prior authority frameworks. Standard country reports from £800 are compatible with typical prior authority thresholds. See our Legal Aid guide for the prior authority process.</p>
    </PageShell>
    </>
  );
}
