import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | AfricaExpertWitness",
  description: "Terms of use for AfricaExpertWitness.com",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}>
      <p className="text-[#374151] leading-relaxed">AfricaExpertWitness.com is an expert witness matching service. We are not a law firm and do not provide legal advice. Expert witnesses instructed through our service operate independently and owe their primary duty to the court under CPR Part 35.</p>
      <p className="mt-4 text-[#374151] leading-relaxed">Fees quoted are indicative and confirmed on instruction. Cancellation terms are agreed between the instructing solicitor and the expert at the point of engagement.</p>
    </PageShell>
  );
}
