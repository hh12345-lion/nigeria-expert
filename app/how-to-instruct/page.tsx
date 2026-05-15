import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct an Africa Expert Witness UK | Step-by-Step Solicitor Guide",
  description: "Step-by-step guide for UK solicitors on finding, vetting, and instructing the right Africa expert witness for asylum, immigration, or arbitration cases.",
  path: "/how-to-instruct",
});

const steps = [
  { n: 1, title: "Identify Country and Key Issues", body: "Which African country or region? Asylum or arbitration? LGBTQI+, FGM, trafficking, political persecution, or investment dispute?" },
  { n: 2, title: "Regional and Language Expertise", body: "French-speaking West Africa, East Africa (English), Horn of Africa (Amharic, Somali), North Africa (Arabic), Southern Africa (English/Portuguese)?" },
  { n: 3, title: "Country Guidance Awareness", body: "Which country guidance cases apply? MOJ Somalia, MA Eritrea, RN Zimbabwe? Is the case a departure from guidance?" },
  { n: 4, title: "Submit Your Instruction", body: "Complete our contact form with case type, country, key issues, hearing date, and funding. We match you within one business day." },
  { n: 5, title: "Expert Vetting", body: "Review the expert CV, qualifications, tribunal acceptance record, and proposed scope and fee before confirming instruction." },
  { n: 6, title: "Letter of Instruction", body: "Provide a detailed letter of instruction: factual matrix, specific questions, hearing date, and copies of relevant documents including Home Office refusal and CPIN." },
  { n: 7, title: "Report Delivery", body: "Standard reports in 2–3 weeks. Urgent reports in 5 business days subject to availability. Review and lodge before the hearing deadline." },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];
  return (
    <>
    <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="How to Instruct an Africa Expert Witness" subtitle="How AfricaExpertWitness matches specialists to your case." breadcrumbs={crumbs}>
      <div className="space-y-6">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-4 rounded-[8px] border border-[#D1E3D8] bg-white p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D3B2E] font-bold text-white">{s.n}</span>
            <div><h2 className="font-bold text-[#0D3B2E]">{s.title}</h2><p className="mt-2 text-[#374151]">{s.body}</p></div>
          </div>
        ))}
      </div>
      <h2 className="mt-12 text-xl font-bold text-[#0D3B2E]">Red Flags</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
        <li>Expert claims expertise across the entire continent without country-specific specialism</li>
        <li>No field research history in the relevant African country</li>
        <li>Reports written from secondary sources only</li>
        <li>No tribunal acceptance record</li>
        <li>Unable to address country guidance case factors specifically</li>
      </ul>
      <RelatedLinks links={[
        { label: "Fees & Legal Aid", href: "/fees" },
        { label: "Legal Aid instruction guide", href: "/guides/instructing-africa-experts-legal-aid" },
        { label: "FAQ", href: "/faq" },
        { label: "Instruct an expert", href: "/contact" },
      ]} />
      <Link href="/contact" className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white">Instruct an Expert</Link>
    </PageShell>
    </>
  );
}
