import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { asylumProfiles } from "@/data/asylum-profiles";

export const metadata = createMetadata({
  title: "Nigerian Asylum Profiles | Expert Witness Evidence UK",
  description:
    "All major Nigerian asylum profiles covered by qualified expert witnesses: LGBTQ+, IPOB/Biafra, Boko Haram, FGM, trafficking, political persecution, and state protection.",
  path: "/asylum-profiles",
});

export default function AsylumProfilesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Asylum Profiles" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Nigerian Asylum Profiles"
        subtitle="Dedicated expert witness evidence for each major Nigerian asylum profile in UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Nigeria is one of the highest-volume asylum claim nationalities in the UK. Each profile below links to a
          dedicated page with CPIN references, country guidance analysis, and profile-specific expert evidence
          guidance for solicitors and Legal Aid practitioners.
        </p>
        <CardGrid
          items={asylumProfiles.map((p) => ({
            title: p.h1,
            description: p.content[0].slice(0, 150) + "...",
            href: `/asylum-profiles/${p.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          Need guidance on current CPINs? See our{" "}
          <Link href="/cpin-country-guidance" className="font-semibold text-[#C8922A] hover:underline">
            Nigeria CPIN & Country Guidance pillar page
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
