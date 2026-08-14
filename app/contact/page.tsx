import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Request a Nigeria Expert Report | NigeriaExpert UK",
  description:
    "Request a Nigeria country expert report for UK immigration tribunals. Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Request a report"
      subtitle="Five fields. We reply within one business day with availability and next steps."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)] lg:gap-16">
        <div className="min-w-0">
          <ContactForm />
        </div>
        <aside className="h-fit border-l-2 border-hibiscus pl-5 sm:pl-6">
          <p className="text-sm text-clay">Before you write</p>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed text-mute">
            <li>Name the asylum profile and tribunal stage if known.</li>
            <li>Flag Legal Aid / prior authority early.</li>
            <li>Note the hearing date—tight deadlines are common.</li>
            <li>
              Prefer email?{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-hibiscus hover:underline">
                {SITE_EMAIL}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </PageShell>
  );
}
