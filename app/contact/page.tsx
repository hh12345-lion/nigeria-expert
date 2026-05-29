import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct an Africa Expert Witness | AfricaExpertWitness UK",
  description: "Submit your case details to be matched with the right Africa expert witness for your country and case type. Confidential, Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell title="Instruct an Africa Expert Witness" subtitle="Confidential case submission - response within one business day." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}>
      <div className="grid min-w-0 gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="min-w-0 lg:col-span-2"><ContactForm /></div>
        <aside className="h-fit rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-5 sm:p-6">
          <h2 className="font-bold text-[#0D3B2E]">Why instruct through us</h2>
          <ul className="mt-4 space-y-4 text-sm text-[#374151]">
            <li>✓ 54 African countries covered</li>
            <li>✓ Legal Aid rates available</li>
            <li>✓ Reports accepted by UK tribunals</li>
            <li>✓ Response within 1 business day</li>
          </ul>
        </aside>
      </div>
    </PageShell>
  );
}
