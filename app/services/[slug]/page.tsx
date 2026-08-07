import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.navLabel },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={service.faqs} />
      <PageShell title={service.title} subtitle={service.description} breadcrumbs={crumbs}>
        {service.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#4D5768] leading-relaxed">
            {p}
          </p>
        ))}

        <div className="mt-6">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#CFD5E0] bg-[#E4E8EF]">
                  <th className="p-3 font-semibold text-[#1C2D5A]">Phase</th>
                  <th className="p-3 font-semibold text-[#1C2D5A]">What We Do</th>
                  <th className="p-3 font-semibold text-[#1C2D5A]">Deliverable</th>
                </tr>
              </thead>
              <tbody>
                {service.methodology.map((row) => (
                  <tr key={row.phase} className="border-b border-[#CFD5E0]">
                    <td className="p-3 font-medium">{row.phase}</td>
                    <td className="p-3 text-[#4D5768]">{row.whatWeDo}</td>
                    <td className="p-3 text-[#4D5768]">{row.deliverable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <Link
          href={service.relatedHref}
          className="mt-6 inline-block text-sm font-medium text-[#D96A1F] hover:underline"
        >
          Related guidance and profiles
        </Link>

        <FAQSection faqs={service.faqs} title="Frequently asked questions" />

        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#D96A1F] px-6 py-3 font-semibold text-white hover:bg-[#C45E1A]"
        >
          Instruct an Expert
        </Link>
      </PageShell>
    </>
  );
}
