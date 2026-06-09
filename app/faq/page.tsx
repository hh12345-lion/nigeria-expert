import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqs } from "@/data/faq";

export const metadata = createMetadata({
  title: "Nigeria Expert Witness FAQ | UK Asylum & Immigration Tribunals",
  description:
    "Frequently asked questions about instructing Nigeria expert witnesses for UK asylum appeals: CPINs, Legal Aid, report timelines, LGBTQ+, IPOB, FGM, and trafficking.",
  path: "/faq",
});

export default function FaqPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqs} />
      <PageShell
        title="Nigeria Expert Witness FAQ"
        subtitle="Common questions from UK immigration solicitors and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          Answers to frequently asked questions about Nigeria country expert witnesses, CPIN knowledge, Legal Aid
          instruction, report timelines, and profile-specific evidence for UK asylum and immigration tribunals.
        </p>
        <FAQSection faqs={faqs} />
        <RelatedLinks
          links={[
            { label: "How to Instruct", href: "/how-to-instruct" },
            { label: "Fees & Legal Aid Rates", href: "/fees" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
            { label: "Instruct an Expert", href: "/contact" },
          ]}
        />
      </PageShell>
    </>
  );
}
