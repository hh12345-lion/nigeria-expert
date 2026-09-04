import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How NigeriaExpert collects, uses, and protects personal data for UK immigration solicitors requesting Nigeria country expert reports. GDPR and UK data protection.",
  path: "/privacy",
  noindex: true,
  follow: false,
});

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}>
      <p className="text-mute leading-relaxed">
        NigeriaExpert.com is operated to connect UK solicitors with qualified Nigeria expert witnesses. We collect
        personal data submitted through our contact form (name, law firm, email, phone, and case details) solely to
        respond to instruction requests and match appropriate experts.
      </p>
      <p className="mt-4 text-mute leading-relaxed">
        Contact form submissions are processed securely via our lead notification service and retained only as long as necessary to fulfil
        your request. We do not sell personal data. You may request deletion by emailing {SITE_EMAIL}. We
        use cookies as described in our Cookie Policy. Non-essential tracking scripts load only after you grant consent.
      </p>
      <h2 className="mt-8 text-lg font-bold text-ink">Your Rights (GDPR)</h2>
      <p className="mt-4 text-mute leading-relaxed">
        You have the right to access, rectify, erase, restrict processing, and port your personal data. You may
        withdraw consent for non-essential cookies at any time via Cookie Settings in the footer. To exercise your
        rights, contact {SITE_EMAIL}.
      </p>
    </PageShell>
  );
}
