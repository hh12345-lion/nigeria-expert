import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { cpinQuickReference } from "@/data/cpin-data";
import { guides } from "@/data/guides";
import { getCpinRelatedLinks } from "@/data/related-links";
import { JsonLd } from "@/components/ui/JsonLd";

const cpinFaqs = [
  {
    question: "What is a CPIN in UK asylum law?",
    answer:
      "A Country Policy Information Note (CPIN) is a Home Office document setting out the UK government's position on country conditions for asylum decision-making. CPINs are not binding on immigration tribunals but carry significant weight. Nigeria has multiple updated CPINs in 2025 to 2026 covering SOGIESC, IPOB, actors of protection, FGM, and trafficking.",
  },
  {
    question: "Which Nigeria CPINs were updated in 2025 to 2026?",
    answer:
      "Key updates include the June 2025 SOGIESC CPIN, April 2026 Separatist Groups South-East (IPOB) CPIN, August 2024 Actors of Protection CPIN, updated 2024 FGM and Trafficking of Women CPINs, December 2025 Medical Treatment CPIN, and EUAA Country Guidance Nigeria 2026 published March 2026.",
  },
  {
    question: "Can expert evidence challenge Home Office CPIN findings?",
    answer:
      "Yes. Expert witnesses provide independent analysis beyond CPIN reproduction. Where the CPIN does not reflect the appellant's profile, the expert may challenge findings with field research, NGO reports, and profile-specific evidence on actors of protection, internal relocation, and SOGIESC.",
  },
];

export const metadata = createMetadata({
  title: "Nigeria CPIN & Country Guidance 2025-2026 | UK Asylum Solicitor Guide",
  description:
    "Current Home Office CPINs and EUAA country guidance on Nigeria for UK asylum practitioners: IPOB, LGBTQ+, FGM, Boko Haram, actors of protection, and internal relocation.",
  path: "/cpin-country-guidance",
});

export default function CpinCountryGuidancePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "CPIN & Country Guidance" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={cpinFaqs} />
      <JsonLd
        data={articleSchema({
          headline: "Nigeria CPIN & Country Guidance 2025-2026: A Guide for UK Asylum Solicitors",
          description:
            "Current Home Office CPINs and EUAA country guidance on Nigeria for UK asylum practitioners: IPOB, LGBTQ+, FGM, Boko Haram, actors of protection, and internal relocation.",
          path: "/cpin-country-guidance",
        })}
      />
      <PageShell
        title="Nigeria CPIN & Country Guidance 2025-2026: A Guide for UK Asylum Solicitors"
        subtitle="Current Home Office CPINs, EUAA guidance, and the expert witness role beyond generic country policy."
        breadcrumbs={crumbs}
      >
        <p className="text-[#4D5768] leading-relaxed">
          A Country Policy Information Note (CPIN) is a Home Office document setting out the UK government&apos;s
          position on country conditions for asylum decision-making. CPINs are not binding on immigration tribunals
          but carry significant weight. For Nigerian asylum claims, multiple CPINs have been updated in 2025 to 2026,
          making current knowledge essential for both solicitors and expert witnesses.
        </p>
        <p className="mt-4 text-[#4D5768] leading-relaxed">
          This guide provides a quick reference to all current Nigeria CPINs, summarises the EUAA Country Guidance
          Nigeria 2026, and explains how expert reports relate to and may challenge CPIN findings. It is designed for
          UK immigration solicitors, Legal Aid practitioners, and barristers instructing Nigeria country experts.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1C2D5A]">Current Nigeria CPINs: Quick Reference Table</h2>
        <div className="mt-4">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <caption className="mb-3 text-left text-base font-semibold text-[#1C2D5A]">
                Nigeria CPIN quick reference for UK asylum practitioners (2025 to 2026)
              </caption>
              <thead>
                <tr className="border-b border-[#CFD5E0] bg-[#E4E8EF]">
                  <th className="px-4 py-3 text-left font-semibold text-[#1C2D5A]">CPIN Topic</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#1C2D5A]">Version/Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#1C2D5A]">Key Finding</th>
                </tr>
              </thead>
              <tbody>
                {cpinQuickReference.map((row) => (
                  <tr key={row.topic} className="border-b border-[#CFD5E0]">
                    <td className="px-4 py-3 text-[#4D5768]">{row.topic}</td>
                    <td className="px-4 py-3 text-[#4D5768]">{row.versionDate}</td>
                    <td className="px-4 py-3 text-[#4D5768]">{row.keyFinding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <section id="sogiesc" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#1C2D5A]">June 2025 SOGIESC CPIN</h2>
          <p className="mt-4 text-[#4D5768] leading-relaxed">
            The June 2025 CPIN on sexual orientation, gender identity and expression, and sex characteristics (SOGIESC)
            in Nigeria confirms that state protection is generally unavailable for LGBTQ+ individuals. SSMPA 2013
            criminalises same-sex conduct nationwide, with death penalty under Sharia in 12 northern states. See the{" "}
            <Link href="/asylum-profiles/lgbtq-asylum-nigeria" className="font-semibold text-[#D96A1F] hover:underline">
              LGBTQ+ asylum profile
            </Link>{" "}
            and{" "}
            <Link href="/guides/lgbtq-nigeria-asylum-guide" className="font-semibold text-[#D96A1F] hover:underline">
              LGBTQ+ expert evidence guide
            </Link>
            .
          </p>
        </section>

        <section id="ipob-separatist" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#1C2D5A]">April 2026 IPOB & Separatist Groups CPIN</h2>
          <p className="mt-4 text-[#4D5768] leading-relaxed">
            The April 2026 CPIN on separatist groups in Nigeria&apos;s South-East covers IPOB, MASSOB, and related
            movements. Members and supporters face arrest risk. Expert evidence addresses proscription, diaspora activity,
            and profile-specific risk. See the{" "}
            <Link href="/asylum-profiles/ipob-biafra" className="font-semibold text-[#D96A1F] hover:underline">
              IPOB & Biafra profile
            </Link>{" "}
            and{" "}
            <Link href="/guides/ipob-biafra-expert-guide" className="font-semibold text-[#D96A1F] hover:underline">
              IPOB expert evidence guide
            </Link>
            .
          </p>
        </section>

        <section id="euaa-2026" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#1C2D5A]">EUAA Country Guidance Nigeria 2026</h2>
          <p className="mt-4 text-[#4D5768] leading-relaxed">
            The European Union Agency for Asylum (EUAA) published Country Guidance Nigeria 2026 in March 2026. While
            primarily intended for EU member states, UK tribunals may consider EUAA guidance alongside Home Office CPINs,
            particularly where the guidance provides more recent or detailed analysis.
          </p>
          <p className="mt-4 text-[#4D5768] leading-relaxed">
            Key EUAA 2026 findings relevant to UK practice include: state protection is generally unavailable for LGBTQ+
            individuals nationwide; IPOB members and supporters face real risk in the South-East; state protection is
            limited in North-Eastern states affected by Boko Haram; and internal relocation to Lagos or Abuja is profile-
            specific rather than universally available.
          </p>
        </section>

        <section id="actors-of-protection" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#1C2D5A]">August 2024 Actors of Protection CPIN</h2>
          <p className="mt-4 text-[#4D5768] leading-relaxed">
            The August 2024 updated CPIN on actors of protection confirms that protection is generally available in Lagos
            and Abuja for many profiles, but is limited or unavailable for LGBTQ+ individuals, IPOB members, Boko Haram
            targets in the North-East, and trafficking victims in high-risk areas. See the{" "}
            <Link href="/asylum-profiles/actors-of-protection" className="font-semibold text-[#D96A1F] hover:underline">
              actors of protection profile
            </Link>
            .
          </p>
        </section>

        <section id="internal-relocation" className="scroll-mt-24 mt-10">
          <h2 className="text-xl font-bold text-[#1C2D5A]">Internal Relocation: Lagos & Abuja</h2>
          <p className="mt-4 text-[#4D5768] leading-relaxed">
            Lagos and Abuja are frequently proposed as internal relocation alternatives. Viability depends entirely on
            the appellant&apos;s profile. LGBTQ+ Nigerians generally cannot safely relocate because SSMPA enforcement
            applies nationwide. See the{" "}
            <Link href="/asylum-profiles/internal-relocation-lagos" className="font-semibold text-[#D96A1F] hover:underline">
              internal relocation profile
            </Link>{" "}
            and{" "}
            <Link href="/services/internal-relocation-analysis" className="font-semibold text-[#D96A1F] hover:underline">
              internal relocation analysis service
            </Link>
            .
          </p>
        </section>

        <h2 className="mt-10 text-xl font-bold text-[#1C2D5A]">How Expert Reports Relate to CPINs</h2>
        <p className="mt-4 text-[#4D5768] leading-relaxed">
          Expert witnesses do not simply reproduce CPIN content. The expert&apos;s role is to provide independent,
          objective analysis of whether the appellant&apos;s specific profile creates a real risk, applying current
          field research and source citations beyond the CPIN. Reports that merely restate CPIN findings without
          independent analysis are identified as a red flag in the Adam Pipe October 2025 guide.
        </p>
        <p className="mt-4 text-[#4D5768] leading-relaxed">
          Where the CPIN supports the appellant, the expert confirms and applies the CPIN to the individual profile.
          Where the CPIN does not support the appellant, the expert may challenge CPIN findings with field research,
          NGO reports, and profile-specific evidence. See our{" "}
          <Link href="/services/cpin-challenge" className="font-semibold text-[#D96A1F] hover:underline">
            CPIN challenge reports service
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1C2D5A]">Legal Aid Compatibility</h2>
        <p className="mt-4 text-[#4D5768] leading-relaxed">
          Most Nigeria expert reports in asylum proceedings are Legal Aid funded through the Legal Aid Agency (LAA).
          Prior authority is required before instruction. See our{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#D96A1F] hover:underline">
            how to instruct page
          </Link>{" "}
          for the LAA prior authority process and typical UK Legal Aid rates.
        </p>

        <div className="mt-10 rounded-[8px] border border-[#CFD5E0] bg-[#E4E8EF] p-6">
          <h3 className="font-semibold text-[#1C2D5A]">All Nigerian Asylum Profiles</h3>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <li><Link href="/asylum-profiles/lgbtq-asylum-nigeria" className="text-[#D96A1F] hover:underline">LGBTQ+ Asylum Nigeria</Link></li>
            <li><Link href="/asylum-profiles/ipob-biafra" className="text-[#D96A1F] hover:underline">IPOB & Biafra Separatists</Link></li>
            <li><Link href="/asylum-profiles/boko-haram-northeast" className="text-[#D96A1F] hover:underline">Boko Haram North-East</Link></li>
            <li><Link href="/asylum-profiles/fgm-gbv" className="text-[#D96A1F] hover:underline">FGM & Gender-Based Violence</Link></li>
            <li><Link href="/asylum-profiles/trafficking-juju" className="text-[#D96A1F] hover:underline">Trafficking & Juju Rituals</Link></li>
            <li><Link href="/asylum-profiles/actors-of-protection" className="text-[#D96A1F] hover:underline">Actors of Protection</Link></li>
            <li><Link href="/asylum-profiles/internal-relocation-lagos" className="text-[#D96A1F] hover:underline">Internal Relocation Lagos & Abuja</Link></li>
            <li><Link href="/asylum-profiles/political-persecution" className="text-[#D96A1F] hover:underline">Political Persecution</Link></li>
          </ul>
        </div>

        <div className="mt-8 rounded-[8px] border border-[#CFD5E0] bg-[#E4E8EF] p-6">
          <h3 className="font-semibold text-[#1C2D5A]">Solicitor Guides</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="text-[#D96A1F] hover:underline">
                  {g.h1.replace(/:.*$/, "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FAQSection faqs={cpinFaqs} />
        <RelatedLinks links={getCpinRelatedLinks()} />
      </PageShell>
    </>
  );
}
