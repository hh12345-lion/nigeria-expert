import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Nigeria Expert Witness Qualifications UK | Credentials & Standards",
  description:
    "What qualifications should a Nigeria expert witness hold? Academic credentials, field research, language skills, CPIN knowledge, and Immigration Tribunal Practice Direction compliance.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Nigeria Expert Witness Qualifications UK" breadcrumbs={crumbs}>
        <h2 className="text-xl font-bold text-[#1C2D5A]">What Makes a Qualified Nigeria Expert</h2>
        <p className="mt-4 text-[#4D5768] leading-relaxed">
          A qualified Nigeria expert witness holds academic credentials (PhD, MA, or equivalent research background) in
          African Studies, Political Science, International Relations, Anthropology, Law, or a related discipline.
          Field research experience in Nigeria is essential, not optional.
        </p>
        <p className="mt-4 text-[#4D5768] leading-relaxed">
          Language expertise in Hausa, Igbo, Yoruba, and/or Pidgin demonstrates the ability to assess conditions beyond
          English-language sources. Current knowledge of country conditions, including familiarity with all relevant
          Nigeria CPINs and EUAA 2026 guidance, is required. Prior tribunal acceptance demonstrates evidential
          reliability.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1C2D5A]">
          Immigration Tribunal Practice Direction: Expert Duties
        </h2>
        <p className="mt-4 text-[#4D5768] leading-relaxed">
          An expert&apos;s paramount duty is to the tribunal: to assist it in reaching a decision by providing an
          objective, unbiased opinion on matters within their expertise, not to advocate for either the appellant or
          the Home Office. Expert evidence should be the independent product of the expert, uninfluenced by the
          pressures of litigation.
        </p>
        <p className="mt-4 text-[#4D5768] leading-relaxed">
          Reports must address matters within the expert&apos;s expertise, cite verifiable sources, and distinguish
          fact from opinion. The expert must not express views on the credibility of the appellant or the ultimate
          legal conclusion on refugee status.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1C2D5A]">Red Flags</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#4D5768]">
          <li>Expert without current knowledge of Nigeria</li>
          <li>Reports that simply reproduce CPIN without independent analysis</li>
          <li>No field research or in-country experience</li>
          <li>Cannot distinguish between regional conditions within Nigeria</li>
          <li>No prior tribunal acceptance</li>
        </ul>
      </PageShell>
    </>
  );
}
