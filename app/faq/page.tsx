import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqs } from "@/data/faq";

export const metadata = createMetadata({
  title: "Africa Expert Witness FAQ UK | Common Questions Answered",
  description: "Answers to common questions about Africa expert witnesses - turnaround times, Legal Aid, LGBTQI+ asylum, country guidance, arbitration, and CPR Part 35.",
  path: "/faq",
});

export default function FAQPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqs} />
      <PageShell title="Africa Expert Witness FAQ for UK Solicitors" breadcrumbs={crumbs}>
        <FAQSection faqs={faqs} title="" />
      </PageShell>
    </>
  );
}
