import { PageShell } from "@/components/layout/PageShell";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, servicesPageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
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
      <PageShell title="Africa Expert Witness Services" subtitle="CPR Part 35 compliant expert evidence for UK tribunals and international arbitration." breadcrumbs={crumbs}>
        <div className="space-y-12">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="scroll-mt-24 min-w-0 rounded-[8px] border border-[#D1E3D8] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] sm:p-6">
              <h2 className="text-lg font-bold text-[#0D3B2E] sm:text-xl">{service.title}</h2>
              <p className="mt-2 text-sm text-[#374151] sm:text-base">{service.description}</p>
              <div className="mt-6">
                <ResponsiveTableWrap>
                  <table className="w-full min-w-[500px] text-left text-sm">
                    <thead><tr className="border-b border-[#D1E3D8] bg-[#F7F9F7]"><th className="p-3 font-semibold text-[#0D3B2E]">Phase</th><th className="p-3 font-semibold text-[#0D3B2E]">What We Do</th><th className="p-3 font-semibold text-[#0D3B2E]">Deliverable</th></tr></thead>
                    <tbody>{service.methodology.map((row) => (
                      <tr key={row.phase} className="border-b border-[#D1E3D8]"><td className="p-3 font-medium">{row.phase}</td><td className="p-3 text-[#374151]">{row.whatWeDo}</td><td className="p-3 text-[#374151]">{row.deliverable}</td></tr>
                    ))}</tbody>
                  </table>
                </ResponsiveTableWrap>
              </div>
              <Link href={service.href} className="mt-4 inline-block text-sm font-medium text-[#C8922A] hover:underline">Learn more →</Link>
            </article>
          ))}
        </div>
      </PageShell>
    </>
  );
}
