import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { personSchema } from "@/lib/schema";
import { experts } from "@/data/experts";

export const metadata = createMetadata({
  title: "Our Africa Expert Witnesses | Country Specialists UK",
  description: "AfricaExpertWitness.com connects UK solicitors with qualified Africa country experts across all 54 nations - asylum, immigration, and international arbitration.",
  path: "/experts",
});

export default function ExpertsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Experts" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} extra={experts.map((e) => personSchema(e))} />
      <PageShell title="Our Africa Expert Witnesses" subtitle="Qualified country specialists with tribunal and arbitration experience." breadcrumbs={crumbs}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert) => (
            <article key={expert.name} className="rounded-[8px] border border-[#D1E3D8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]">
              <h2 className="text-lg font-bold text-[#0D3B2E]">{expert.name}</h2>
              <p className="text-sm font-medium text-[#C8922A]">{expert.jobTitle}</p>
              <p className="mt-3 text-sm text-[#374151] leading-relaxed">{expert.description}</p>
              <p className="mt-3 text-xs text-[#374151]"><strong>Expertise:</strong> {expert.expertise.join(", ")}</p>
            </article>
          ))}
        </div>
      </PageShell>
    </>
  );
}
