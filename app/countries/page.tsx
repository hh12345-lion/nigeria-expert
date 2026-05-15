import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { countries } from "@/data/countries";
export const metadata = createMetadata({ title: "Africa Expert Witnesses by Country | Nigeria, Somalia, Eritrea & More", description: "Country-specific Africa expert witnesses for UK immigration tribunals and arbitration: Nigeria, Somalia, Eritrea, Ethiopia, Sudan, Zimbabwe, DRC, Ghana, Kenya, Uganda and more.", path: "/countries" });
export default function CountriesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Countries" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="Africa Expert Witnesses by Country" subtitle="Country-specific expert witnesses targeting [country] expert witness search queries." breadcrumbs={crumbs}>
      <CardGrid items={countries.map((c) => ({ title: c.name, description: c.metaDescription.slice(0, 120) + "...", href: `/countries/${c.slug}` }))} />
    </PageShell>
    </>
  );
}
