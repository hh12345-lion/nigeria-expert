import { PageShell } from "@/components/layout/PageShell";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Africa Expert Witness Glossary | Key Terms for UK Legal Proceedings",
  description:
    "Definitions of key Africa expert witness and asylum law terms — from country guidance to FGM, LGBTQI+ persecution, ICSID, and CPR Part 35.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];
  const faqs = glossaryTerms.map((t) => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
  }));

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqs} />
      <PageShell
        title="Africa Expert Witness & Asylum Law Glossary"
        subtitle="34 definition-first terms for UK immigration and arbitration practitioners."
        breadcrumbs={crumbs}
      >
        <GlossarySearch terms={glossaryTerms} />
      </PageShell>
    </>
  );
}
