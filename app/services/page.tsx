import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { servicesPageGraph } from "@/lib/schema";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Nigeria Expert Witness Services | Asylum & Immigration Tribunals",
  description:
    "Nigeria expert witness services: country condition reports, LGBTQ+ asylum, IPOB/Biafra, FGM, trafficking, CPIN challenge, internal relocation, and oral evidence.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} path="/services" />
      <JsonLd
        data={servicesPageGraph(
          services.map((s) => ({ id: s.id, name: s.title, description: s.description }))
        )}
      />
      <PageShell
        title="Nigeria Expert Witness Services"
        subtitle="CPR Part 35 and Immigration Tribunal Practice Direction compliant reports for all major Nigerian asylum profiles."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-mute leading-relaxed">
          NigeriaExpert provides eight specialist expert witness services for UK immigration solicitors, law firms, and
          Legal Aid practitioners. All reports are prepared by qualified Nigeria country experts with current CPIN
          knowledge and field research experience.
        </p>
        <CardGrid
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
            href: `/services/${s.id}`,
          }))}
        />
        <p className="mt-8 text-mute">
          Questions about requesting a report? See{" "}
          <Link href="/how-to-instruct" className="font-semibold text-hibiscus hover:underline">
            how it works
          </Link>{" "}
          or{" "}
          <Link href="/#enquire" className="font-semibold text-hibiscus hover:underline">
            request a report
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
