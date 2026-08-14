export type RelatedLink = { label: string; href: string };

const INSTRUCTION_LINKS: RelatedLink[] = [
  { label: "How to request a Nigeria expert report", href: "/how-to-instruct" },
  { label: "Request a report", href: "/contact" },
];

/** Appendix D: Profile Minimum Links Matrix + Rule A (how-to-instruct, contact) */
export function getProfileRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "lgbtq-asylum-nigeria": [
      { label: "June 2025 SOGIESC CPIN on Nigeria", href: "/cpin-country-guidance#sogiesc" },
      { label: "LGBTQ+ Asylum Case Type", href: "/case-types/lgbtq-asylum-nigeria" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "LGBTQ+ Asylum Expert Evidence Guide", href: "/guides/lgbtq-nigeria-asylum-guide" },
      { label: "SSMPA (Glossary)", href: "/glossary#ssmpa-same-sex-marriage-prohibition-act-2013" },
    ],
    "ipob-biafra": [
      { label: "April 2026 IPOB CPIN (Separatist Groups South-East)", href: "/cpin-country-guidance#ipob-separatist" },
      { label: "IPOB & Biafra Asylum Case Type", href: "/case-types/ipob-biafra-asylum" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "IPOB & Biafra Expert Evidence Guide", href: "/guides/ipob-biafra-expert-guide" },
      { label: "IPOB (Glossary)", href: "/glossary#ipob-indigenous-people-of-biafra" },
    ],
    "boko-haram-northeast": [
      { label: "Nigeria CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Fresh Claims Nigeria", href: "/case-types/fresh-claims-nigeria" },
      { label: "Nigeria CPIN Guide for Solicitors", href: "/guides/nigeria-cpin-guide-solicitors" },
    ],
    "fgm-gbv": [
      { label: "Nigeria CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "FGM Asylum Case Type", href: "/case-types/fgm-asylum" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "FGM Expert Evidence Guide", href: "/guides/fgm-nigeria-guide" },
      { label: "FGM (Glossary)", href: "/glossary#fgm-female-genital-mutilation" },
    ],
    "trafficking-juju": [
      { label: "Nigeria CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "Trafficking & NRM Case Type", href: "/case-types/trafficking-nrm" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Trafficking & Juju Expert Evidence Guide", href: "/guides/trafficking-juju-guide" },
      { label: "Juju Rituals (Glossary)", href: "/glossary#juju-rituals" },
      { label: "NRM (Glossary)", href: "/glossary#nrm-national-referral-mechanism" },
    ],
    "actors-of-protection": [
      { label: "August 2024 Actors of Protection CPIN", href: "/cpin-country-guidance#actors-of-protection" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Upper Tribunal Nigeria", href: "/case-types/upper-tribunal-nigeria" },
      { label: "Nigeria CPIN Guide for Solicitors", href: "/guides/nigeria-cpin-guide-solicitors" },
      { label: "State Protection (Glossary)", href: "/glossary#state-protection" },
    ],
    "internal-relocation-lagos": [
      { label: "Internal Relocation CPIN Analysis", href: "/cpin-country-guidance#internal-relocation" },
      { label: "Upper Tribunal Nigeria", href: "/case-types/upper-tribunal-nigeria" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Nigeria CPIN Guide for Solicitors", href: "/guides/nigeria-cpin-guide-solicitors" },
      { label: "Internal Relocation (Glossary)", href: "/glossary#internal-relocation-alternative" },
    ],
    "political-persecution": [
      { label: "Nigeria CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "FTT Asylum Appeal", href: "/case-types/asylum-appeal-ftt" },
      { label: "Deportation & Removal Nigeria", href: "/case-types/deportation-removal-nigeria" },
      { label: "Nigeria CPIN Guide for Solicitors", href: "/guides/nigeria-cpin-guide-solicitors" },
    ],
  };

  return [...(map[slug] ?? [{ label: "CPIN & Country Guidance", href: "/cpin-country-guidance" }]), ...INSTRUCTION_LINKS];
}

/** Rule B: Guide → profile, CPIN, instruction, contact */
export function getGuideRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "nigeria-cpin-guide-solicitors": [
      { label: "LGBTQ+ Asylum Profile", href: "/asylum-profiles/lgbtq-asylum-nigeria" },
      { label: "IPOB & Biafra Profile", href: "/asylum-profiles/ipob-biafra" },
      { label: "FGM & GBV Profile", href: "/asylum-profiles/fgm-gbv" },
      { label: "Trafficking & Juju Profile", href: "/asylum-profiles/trafficking-juju" },
      { label: "All Asylum Profiles", href: "/asylum-profiles" },
      { label: "CPIN & Country Guidance Pillar", href: "/cpin-country-guidance" },
      { label: "CPIN Challenge Service", href: "/services/cpin-challenge" },
    ],
    "lgbtq-nigeria-asylum-guide": [
      { label: "LGBTQ+ Asylum Profile", href: "/asylum-profiles/lgbtq-asylum-nigeria" },
      { label: "June 2025 SOGIESC CPIN", href: "/cpin-country-guidance#sogiesc" },
      { label: "LGBTQ+ Asylum Case Type", href: "/case-types/lgbtq-asylum-nigeria" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "ipob-biafra-expert-guide": [
      { label: "IPOB & Biafra Profile", href: "/asylum-profiles/ipob-biafra" },
      { label: "April 2026 IPOB CPIN", href: "/cpin-country-guidance#ipob-separatist" },
      { label: "IPOB Asylum Case Type", href: "/case-types/ipob-biafra-asylum" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "fgm-nigeria-guide": [
      { label: "FGM & GBV Profile", href: "/asylum-profiles/fgm-gbv" },
      { label: "FGM Asylum Case Type", href: "/case-types/fgm-asylum" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "trafficking-juju-guide": [
      { label: "Trafficking & Juju Profile", href: "/asylum-profiles/trafficking-juju" },
      { label: "Trafficking & NRM Case Type", href: "/case-types/trafficking-nrm" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "instructing-nigeria-expert": [
      { label: "LGBTQ+ Asylum Profile", href: "/asylum-profiles/lgbtq-asylum-nigeria" },
      { label: "IPOB & Biafra Profile", href: "/asylum-profiles/ipob-biafra" },
      { label: "FGM & GBV Profile", href: "/asylum-profiles/fgm-gbv" },
      { label: "Trafficking & Juju Profile", href: "/asylum-profiles/trafficking-juju" },
      { label: "Qualifications", href: "/qualifications" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
  };

  return [...(map[slug] ?? [{ label: "CPIN & Country Guidance", href: "/cpin-country-guidance" }]), ...INSTRUCTION_LINKS];
}

export function getCaseTypeRelatedLinks(_slug: string): RelatedLink[] {
  return [
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    { label: "How it works", href: "/how-to-instruct" },
    { label: "Qualifications", href: "/qualifications" },
    { label: "Request a report", href: "/contact" },
  ];
}

/** CPIN pillar: links to all profiles and guides per Section 3 */
export function getCpinRelatedLinks(): RelatedLink[] {
  return [
    { label: "All Asylum Profiles", href: "/asylum-profiles" },
    { label: "LGBTQ+ Asylum Nigeria", href: "/asylum-profiles/lgbtq-asylum-nigeria" },
    { label: "IPOB & Biafra", href: "/asylum-profiles/ipob-biafra" },
    { label: "Boko Haram North-East", href: "/asylum-profiles/boko-haram-northeast" },
    { label: "FGM & GBV", href: "/asylum-profiles/fgm-gbv" },
    { label: "Trafficking & Juju", href: "/asylum-profiles/trafficking-juju" },
    { label: "Actors of Protection", href: "/asylum-profiles/actors-of-protection" },
    { label: "Internal Relocation Lagos", href: "/asylum-profiles/internal-relocation-lagos" },
    { label: "Political Persecution", href: "/asylum-profiles/political-persecution" },
    { label: "All Solicitor Guides", href: "/guides" },
    { label: "Nigeria CPIN Guide", href: "/guides/nigeria-cpin-guide-solicitors" },
    { label: "How it works", href: "/how-to-instruct" },
    { label: "Request a report", href: "/contact" },
  ];
}
