import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, servicesPageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Africa Expert Witness Services UK | Asylum, Arbitration & Country Reports",
  description: "Africa expert witness services: country condition reports, LGBTQI+ asylum, investment treaty arbitration, African law, trafficking, and political persecution.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          servicesPageGraph(services.map((s) => ({ id: s.id, name: s.title, description: s.description }))),
        ]}
      />
      <PageShell
        title="Africa Expert Witness Services"
        subtitle="CPR Part 35 compliant expert evidence for UK tribunals and international arbitration."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
            href: `/services/${s.id}`,
          }))}
        />
      </PageShell>
    </>
  );
}
