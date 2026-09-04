import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is a Nigeria Expert Witness? | UK Immigration Tribunal Role",
  description:
    "A Nigeria expert witness provides independent country condition reports for UK immigration tribunals. IPOB, LGBTQ+, FGM, Boko Haram, and state protection explained for solicitors.",
  path: "/what-is-a-nigeria-expert-witness",
});

export default function WhatIsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "What Is a Nigeria Expert Witness?" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} path="/what-is-a-nigeria-expert-witness" />
      <PageShell
        title="What Is a Nigeria Expert Witness?"
        subtitle="The role, duties, and value of independent Nigeria country evidence in UK First-tier Tribunal and Upper Tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="text-mute leading-relaxed">
          A Nigeria expert witness is an independent specialist who provides country condition reports and, where
          directed, oral evidence for UK immigration tribunals on matters relating to Nigeria. NigeriaExpert instructs
          experts for UK proceedings only: First-tier Tribunal (Immigration and Asylum Chamber) and Upper Tribunal cases
          in England, Wales, Scotland, and Northern Ireland. Unlike witnesses of fact, the expert&apos;s role is to
          assist the tribunal with objective analysis of country conditions, state protection, internal relocation, and
          profile-specific risk.
        </p>
        <p className="mt-4 text-mute leading-relaxed">
          Nigeria is one of the highest-volume asylum claim nationalities in the UK. Expert evidence is essential
          where Home Office refusals rely on generic CPIN positions that do not reflect the appellant&apos;s specific
          profile, whether LGBTQ+ persecution under SSMPA, IPOB separatist claims, Boko Haram risk, FGM,
          trafficking with juju rituals, or political persecution.
        </p>
        <p className="mt-4 text-mute leading-relaxed">
          Expert reports must comply with Immigration Tribunal Practice Direction paragraph 10 and the Expert Reports
          in the Immigration Tribunal guide (October 2025) by Adam Pipe of No.8 Chambers. The expert&apos;s paramount
          duty is to the tribunal, not to the instructing solicitor or the appellant.
        </p>

        <h2 className="mt-10 text-xl font-bold text-ink">What Does a Nigeria Expert Report Cover?</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-mute">
          <li>Profile-specific risk assessment against current country conditions</li>
          <li>State protection analysis citing the August 2024 actors of protection CPIN</li>
          <li>Internal relocation feasibility for Lagos, Abuja, and other cities</li>
          <li>Current CPIN and EUAA 2026 guidance analysis relevant to the claim</li>
          <li>Source citations to OSCOLA standards and field research</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-ink">When should solicitors request a report?</h2>
        <p className="mt-4 text-mute leading-relaxed">
          Request a report as soon as the need for expert evidence is identified, ideally when the appeal is lodged. Allow 2
          to 3 weeks for a standard report. For Legal Aid cases, apply for LAA prior authority before work starts.
        </p>

        <RelatedLinks
          links={[
            { label: "Asylum profiles", href: "/asylum-profiles" },
            { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
            { label: "How it works", href: "/how-to-instruct" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "Request a report", href: "/contact" },
          ]}
        />
        <Link
          href="/#enquire"
          className="mt-8 inline-flex min-h-[44px] items-center bg-hibiscus px-6 py-3 text-sm font-medium text-paper transition hover:bg-hibiscus-soft"
        >
          Request a report
        </Link>
      </PageShell>
    </>
  );
}
