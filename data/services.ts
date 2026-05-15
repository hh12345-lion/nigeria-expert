export type ServicePhase = {
  phase: string;
  whatWeDo: string;
  deliverable: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  methodology: ServicePhase[];
};

export const services: Service[] = [
  {
    id: "country-condition-reports",
    title: "Country Condition Reports (Asylum & Immigration)",
    description:
      "Authoritative country condition reports for UK First-tier Tribunal and Upper Tribunal asylum appeals across all 54 African nations.",
    href: "/expertise-areas/country-conditions-human-rights",
    methodology: [
      { phase: "Case scoping", whatWeDo: "Identify country, claim grounds, and applicable country guidance", deliverable: "Scope confirmation and expert match" },
      { phase: "Research", whatWeDo: "Field research, Home Office COI, UN, and primary sources", deliverable: "Source bibliography" },
      { phase: "Report drafting", whatWeDo: "OSCOLA-cited report addressing specific claim matrix", deliverable: "CPR Part 35 compliant expert report" },
    ],
  },
  {
    id: "lgbtqi-asylum",
    title: "LGBTQI+ Asylum Expert Evidence",
    description:
      "Country-specific LGBTQI+ asylum reports covering criminalisation, enforcement, community violence, and internal relocation.",
    href: "/expertise-areas/lgbtqi-asylum-africa",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Analyse criminal laws, penalties, and enforcement practice", deliverable: "Legislative analysis section" },
      { phase: "Risk assessment", whatWeDo: "Community violence, state protection, NGO availability", deliverable: "Risk on return analysis" },
      { phase: "Report", whatWeDo: "HJ/HT consistent country conditions report", deliverable: "Tribunal-ready expert report" },
    ],
  },
  {
    id: "fgm-gbv",
    title: "FGM & Gender-Based Violence Reports",
    description:
      "FGM prevalence analysis, daughters at risk assessment, and gender-based violence country conditions for UK tribunals.",
    href: "/expertise-areas/fgm-gender-based-violence",
    methodology: [
      { phase: "Prevalence analysis", whatWeDo: "Country, ethnic, and regional FGM data", deliverable: "Prevalence profile" },
      { phase: "Risk assessment", whatWeDo: "Ongoing risk, daughters at risk, state protection", deliverable: "Risk analysis" },
      { phase: "Report", whatWeDo: "Tailored FGM expert report", deliverable: "CPR Part 35 compliant report" },
    ],
  },
  {
    id: "trafficking",
    title: "Trafficking & Modern Slavery Reports",
    description:
      "Trafficking route analysis, juju exploitation context, and re-trafficking risk for NRM and asylum proceedings.",
    href: "/expertise-areas/trafficking-modern-slavery-africa",
    methodology: [
      { phase: "Route analysis", whatWeDo: "Document trafficking patterns from origin country", deliverable: "Trafficking context section" },
      { phase: "Protection assessment", whatWeDo: "State protection and re-trafficking risk on return", deliverable: "Protection analysis" },
      { phase: "Report", whatWeDo: "NRM and tribunal-ready report", deliverable: "Expert report" },
    ],
  },
  {
    id: "investment-arbitration",
    title: "Investment Treaty Arbitration Support",
    description:
      "Country conditions and regulatory framework evidence for ICSID, UNCITRAL, and ICC investment treaty disputes.",
    href: "/expertise-areas/investment-treaty-arbitration-africa",
    methodology: [
      { phase: "Dispute scoping", whatWeDo: "Identify treaty standards, governing law, and sector", deliverable: "Expert team proposal" },
      { phase: "Analysis", whatWeDo: "Country conditions, regulatory change, and expropriation context", deliverable: "Memorial-ready expert analysis" },
      { phase: "Testimony", whatWeDo: "Written evidence and hearing testimony if required", deliverable: "Expert report and oral evidence" },
    ],
  },
  {
    id: "african-law",
    title: "African Law Expert Evidence",
    description:
      "Governing law, court procedures, OHADA, and domestic legal framework evidence for commercial litigation and arbitration.",
    href: "/expertise-areas/african-law-legal-systems",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Identify governing law and applicable instruments", deliverable: "Legal framework memorandum" },
      { phase: "Analysis", whatWeDo: "Domestic law and practice analysis", deliverable: "Expert opinion" },
      { phase: "Report", whatWeDo: "CPR Part 35 or arbitration-compliant report", deliverable: "Expert report" },
    ],
  },
  {
    id: "nationality-statelessness",
    title: "Nationality & Statelessness Assessment",
    description:
      "Citizenship law analysis and statelessness risk assessment for UK immigration tribunals.",
    href: "/expertise-areas/nationality-statelessness",
    methodology: [
      { phase: "Citizenship analysis", whatWeDo: "Review nationality laws and documentation requirements", deliverable: "Citizenship assessment" },
      { phase: "Risk assessment", whatWeDo: "Statelessness and documentation risk on return", deliverable: "Risk analysis" },
      { phase: "Report", whatWeDo: "Tribunal-ready nationality expert report", deliverable: "Expert report" },
    ],
  },
  {
    id: "rebuttal-sje",
    title: "Rebuttal Reports & Single Joint Expert",
    description:
      "Rebuttal of Home Office CPINs and opposing expert reports; Single Joint Expert appointments for contested country conditions.",
    href: "/guides/home-office-cpin-africa-rebuttal",
    methodology: [
      { phase: "Review", whatWeDo: "Analyse opposing report or CPIN position", deliverable: "Gap analysis" },
      { phase: "Rebuttal", whatWeDo: "Source-backed challenge to specific propositions", deliverable: "Rebuttal report" },
      { phase: "SJE", whatWeDo: "Joint instructions and agreed issues for SJE", deliverable: "Single Joint Expert report" },
    ],
  },
];
