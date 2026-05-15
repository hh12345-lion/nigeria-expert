import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { regions } from "@/data/regions";
export const metadata = createMetadata({ title: "Africa Expert Witnesses by Region | East, West, Southern, North & Horn of Africa", description: "Find Africa expert witnesses by region: East Africa, West Africa, Southern Africa, North Africa, and Horn of Africa country condition specialists.", path: "/regions" });
export default function RegionsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Regions" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="Africa Expert Witnesses by Region" subtitle="Regional specialists for UK immigration tribunals and investment arbitration." breadcrumbs={crumbs}>
      <CardGrid items={regions.map((r) => ({ title: r.title, description: r.countries, href: `/regions/${r.slug}` }))} />
    </PageShell>
    </>
  );
}
