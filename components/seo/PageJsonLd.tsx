import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  breadcrumbSchema,
  faqSchema,
  type FAQ,
} from "@/lib/schema";

type Crumb = { label: string; href?: string };

/** Standard SEO JSON-LD: Organization + optional Breadcrumb + FAQ */
export function PageJsonLd({
  breadcrumbs,
  faqs,
  extra,
  path,
}: {
  breadcrumbs?: Crumb[];
  faqs?: FAQ[];
  extra?: object | object[];
  /** Current page path for breadcrumb `item` on the last crumb (e.g. `/guides/foo`) */
  path?: string;
}) {
  const schemas: object[] = [organizationSchema()];
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(breadcrumbSchema(breadcrumbs, path));
  }
  if (faqs && faqs.length > 0) {
    schemas.push(faqSchema(faqs));
  }
  if (extra) {
    const items = Array.isArray(extra) ? extra : [extra];
    schemas.push(...items);
  }
  return <JsonLd data={schemas} />;
}
