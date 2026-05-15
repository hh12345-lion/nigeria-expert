import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Africa Expert Witness Fees UK | Country Report Costs & Hourly Rates",
  description: "Africa expert witness fees: country report costs from £800–£2,500, Legal Aid rates, arbitration hourly rates, and what affects total engagement costs.",
  path: "/fees",
});

export default function FeesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Fees" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="Africa Expert Witness Fees UK" breadcrumbs={crumbs}>
      <h2 className="text-xl font-bold text-[#0D3B2E]">Country Condition Report Fees</h2>
      <ul className="mt-4 space-y-2 text-[#374151]">
        <li><strong>Standard single-country report:</strong> £800–£1,500</li>
        <li><strong>Complex multi-issue report (LGBTQI+, FGM, trafficking):</strong> £1,200–£2,500</li>
        <li><strong>Multi-country/regional report:</strong> £1,500–£3,000</li>
        <li><strong>Rebuttal report:</strong> £500–£1,200</li>
        <li><strong>Supplementary/updating report:</strong> £300–£800</li>
      </ul>
      <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Legal Aid</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">AfricaExpertWitness works with Legal Aid funded cases. Prior authority from the Legal Aid Agency is required above standard thresholds. Our rates are compatible with LAA prior authority requirements. See our <a href="/guides/instructing-africa-experts-legal-aid" className="text-[#C8922A] hover:underline">Legal Aid instruction guide</a> for the prior authority process.</p>
      <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Arbitration & Commercial</h2>
      <ul className="mt-4 space-y-2 text-[#374151]">
        <li><strong>African law expert evidence:</strong> £250–£600/hour</li>
        <li><strong>Investment arbitration country expert:</strong> £350–£700/hour</li>
        <li><strong>Senior/leading African law experts:</strong> can exceed £1,000/hour</li>
      </ul>
      <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Sources</h2>
      <p className="mt-4 text-sm text-[#374151]">Fees reflect market rates for qualified country conditions experts with PhD-level credentials and tribunal acceptance records. Final fees depend on complexity, urgency, and scope. Contact us for a quote tailored to your case.</p>
    </PageShell>
    </>
  );
}
