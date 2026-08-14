import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Nigeria Asylum Case Types | Expert Witness UK",
  description:
    "Nigeria expert witness evidence for FTT asylum appeals, Upper Tribunal, LGBTQ+ claims, FGM, trafficking, IPOB, deportation, and fresh claims.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Nigeria Asylum Case Types"
        subtitle="Expert witness evidence for all major UK immigration tribunal proceedings involving Nigerian nationals."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-mute leading-relaxed">
          NigeriaExpert provides qualified country expert witnesses for First-tier Tribunal appeals, Upper Tribunal
          proceedings, LGBTQ+ and FGM claims, trafficking and NRM cases, IPOB/Biafra asylum, deportation and removal,
          and fresh claims with updated CPIN evidence.
        </p>
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.content[0].slice(0, 140) + "...",
            href: `/case-types/${c.slug}`,
          }))}
        />
        <p className="mt-8 text-mute">
          See also our{" "}
          <Link href="/asylum-profiles" className="font-semibold text-hibiscus hover:underline">
            asylum profiles hub
          </Link>{" "}
          for profile-specific expert evidence pages.
        </p>
      </PageShell>
    </>
  );
}
