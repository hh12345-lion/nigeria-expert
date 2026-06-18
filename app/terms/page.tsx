import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | NigeriaExpert",
  description: "Terms of use for NigeriaExpert.com",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}>
      <p className="text-[#374151] leading-relaxed">
        NigeriaExpert.com is a UK-only expert witness matching service for immigration solicitors in England, Wales,
        Scotland, and Northern Ireland. We are not a law firm and do not provide legal advice. Expert witnesses
        instructed through our service operate independently and owe their primary duty to the tribunal under
        Immigration Tribunal Practice Direction paragraph 10.
      </p>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Fees quoted are indicative and confirmed on instruction. Cancellation terms are agreed between the instructing
        solicitor and the expert at the point of engagement.
      </p>
    </PageShell>
  );
}
