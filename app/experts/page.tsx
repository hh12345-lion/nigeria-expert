import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { createMetadata } from "@/lib/metadata";
import { organizationSchema, personSchema } from "@/lib/schema";
import { experts } from "@/data/experts";

export const metadata = createMetadata({
  title: "Nigeria Expert Witnesses UK | Qualified Country Experts",
  description:
    "Qualified Nigeria expert witnesses for UK asylum tribunals: LGBTQ+, IPOB, Boko Haram, FGM, trafficking, and state protection specialists.",
  path: "/experts",
});

export default function ExpertsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Experts" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema(), ...experts.map((e) => personSchema(e))],
        }}
      />
      <PageShell
        title="Nigeria Expert Witnesses"
        subtitle="Qualified country conditions specialists for UK immigration and asylum tribunals."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          NigeriaExpert connects UK immigration solicitors with qualified Nigeria country expert witnesses. Each expert
          provides independent, objective evidence compliant with Immigration Tribunal Practice Direction paragraph 10.
          Expert availability varies by profile and hearing date.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="rounded-[8px] border border-[#D1E3D8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-lg font-bold text-[#0D3B2E]">{expert.name}</h2>
              <p className="mt-1 text-sm font-medium text-[#C8922A]">{expert.jobTitle}</p>
              <p className="mt-4 text-sm text-[#374151] leading-relaxed">{expert.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#0D3B2E]">Expertise</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {expert.expertise.map((tag) => (
                  <li key={tag} className="rounded-full bg-[#F7F9F7] px-3 py-1 text-xs text-[#374151]">
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#0D3B2E]">Regions</p>
              <p className="mt-1 text-sm text-[#374151]">{expert.regions.join(", ")}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-[#374151] leading-relaxed">
          To instruct an expert, see our{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
            how to instruct guide
          </Link>{" "}
          and{" "}
          <Link href="/qualifications" className="font-semibold text-[#C8922A] hover:underline">
            qualifications page
          </Link>
          . We match the appropriate expert to your case profile and hearing date.
        </p>
        <RelatedLinks
          links={[
            { label: "Qualifications", href: "/qualifications" },
            { label: "How to Instruct", href: "/how-to-instruct" },
            { label: "Fees", href: "/fees" },
            { label: "Instruct an Expert", href: "/contact" },
          ]}
        />
      </PageShell>
    </>
  );
}
