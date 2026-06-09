import { PageShell } from "@/components/layout/PageShell";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Nigeria Expert Witness Glossary | Key Terms for UK Legal Proceedings",
  description:
    "Definitions of key Nigeria expert witness and asylum law terms: CPIN, SSMPA, IPOB, FGM, juju, state protection, internal relocation, and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];
  const faqItems = glossaryTerms.map((t) => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
  }));

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqItems} />
      <PageShell
        title="Nigeria Expert Witness & Asylum Law Glossary"
        subtitle="30 definition-first terms for UK immigration practitioners."
        breadcrumbs={crumbs}
      >
        <GlossarySearch terms={glossaryTerms} />
      </PageShell>
    </>
  );
}
