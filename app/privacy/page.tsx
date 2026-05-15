import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy | AfricaExpertWitness",
  description: "Privacy policy for AfricaExpertWitness.com",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}>
      <p className="text-[#374151] leading-relaxed">AfricaExpertWitness.com is operated to connect UK solicitors with qualified Africa expert witnesses. We collect personal data submitted through our contact form (name, organisation, email, phone, and case details) solely to respond to instruction requests and match appropriate experts.</p>
      <p className="mt-4 text-[#374151] leading-relaxed">Contact form submissions are processed securely via our lead notification service and retained only as long as necessary to fulfil your request. We do not sell personal data. You may request deletion by emailing info@africaexpertwitness.com. We use cookies only where necessary for site functionality and analytics if enabled.</p>
    </PageShell>
  );
}
