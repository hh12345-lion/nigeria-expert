import type { FAQ } from "@/lib/schema";

export type ServicePhase = {
  phase: string;
  whatWeDo: string;
  deliverable: string;
};

export type Service = {
  id: string;
  title: string;
  navLabel: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  relatedHref: string;
  methodology: ServicePhase[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    id: "country-condition-reports",
    title: "Country Condition Reports (Asylum & Immigration)",
    navLabel: "Country Condition Reports",
    description:
      "Authoritative country condition reports for UK First-tier Tribunal and Upper Tribunal asylum appeals across all 54 African nations.",
    metaTitle: "Africa Country Condition Reports UK | Asylum & Immigration Expert Evidence",
    metaDescription:
      "CPR Part 35 country condition reports for UK asylum and immigration tribunals across all 54 African nations. OSCOLA-cited, tribunal-ready expert evidence.",
    relatedHref: "/expertise-areas/country-conditions-human-rights",
    methodology: [
      { phase: "Case scoping", whatWeDo: "Identify country, claim grounds, and applicable country guidance", deliverable: "Scope confirmation and expert match" },
      { phase: "Research", whatWeDo: "Field research, Home Office COI, UN, and primary sources", deliverable: "Source bibliography" },
      { phase: "Report drafting", whatWeDo: "OSCOLA-cited report addressing specific claim matrix", deliverable: "CPR Part 35 compliant expert report" },
    ],
    faqs: [
      {
        question: "What should a country condition report include for UK tribunals?",
        answer:
          "Reports address the specific claim matrix - political opinion, religion, clan, internal relocation, and state protection - with OSCOLA-cited sources including Home Office COI, UNHCR, and field research. They must comply with CPR Part 35 and address any binding country guidance.",
      },
      {
        question: "How long does a standard Africa country condition report take?",
        answer: "Typically 2–3 weeks from instruction. Urgent turnaround (5 business days) may be available subject to expert availability and case complexity.",
      },
      {
        question: "Which African countries do you cover?",
        answer: "All 54 African nations, including high-volume tribunal countries such as Nigeria, Somalia, Eritrea, Ethiopia, Sudan, Zimbabwe, DRC, Ghana, Kenya, and Uganda.",
      },
    ],
  },
  {
    id: "lgbtqi-asylum",
    title: "LGBTQI+ Asylum Expert Evidence",
    navLabel: "LGBTQI+ Asylum",
    description:
      "Country-specific LGBTQI+ asylum reports covering criminalisation, enforcement, community violence, and internal relocation.",
    metaTitle: "LGBTQI+ Africa Asylum Expert Witness UK | Country Conditions Reports",
    metaDescription:
      "LGBTQI+ asylum expert reports for UK tribunals: criminalisation, enforcement, community violence, and internal relocation across African countries.",
    relatedHref: "/expertise-areas/lgbtqi-asylum-africa",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Analyse criminal laws, penalties, and enforcement practice", deliverable: "Legislative analysis section" },
      { phase: "Risk assessment", whatWeDo: "Community violence, state protection, NGO availability", deliverable: "Risk on return analysis" },
      { phase: "Report", whatWeDo: "HJ/HT consistent country conditions report", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "How do LGBTQI+ expert reports approach sexuality?",
        answer:
          "Experts provide country conditions context only - they do not determine the claimant's sexuality. Reports are consistent with HJ (Iran) and address criminalisation, enforcement, and risk on return.",
      },
      {
        question: "Which countries have the highest LGBTQI+ asylum volume?",
        answer: "Uganda, Nigeria, and Ghana are among the most common in UK tribunals. Reports are tailored to the specific country and claim matrix.",
      },
      {
        question: "Can reports address internal relocation for LGBTQI+ claimants?",
        answer: "Yes. Reports assess whether internal relocation is a viable option, including visibility, community attitudes, and state protection in alternative locations.",
      },
    ],
  },
  {
    id: "fgm-gbv",
    title: "FGM & Gender-Based Violence Reports",
    navLabel: "FGM & GBV",
    description:
      "FGM prevalence analysis, daughters at risk assessment, and gender-based violence country conditions for UK tribunals.",
    metaTitle: "FGM & Gender-Based Violence Expert Reports Africa | UK Tribunals",
    metaDescription:
      "FGM prevalence and gender-based violence expert reports for UK asylum tribunals - daughters at risk, state protection, and internal relocation.",
    relatedHref: "/expertise-areas/fgm-gender-based-violence",
    methodology: [
      { phase: "Prevalence analysis", whatWeDo: "Country, ethnic, and regional FGM data", deliverable: "Prevalence profile" },
      { phase: "Risk assessment", whatWeDo: "Ongoing risk, daughters at risk, state protection", deliverable: "Risk analysis" },
      { phase: "Report", whatWeDo: "Tailored FGM expert report", deliverable: "CPR Part 35 compliant report" },
    ],
    faqs: [
      {
        question: "What FGM evidence do expert reports address?",
        answer:
          "Prevalence by country, ethnic group, and region; ongoing risk including daughters at risk; Type III re-infibulation; state protection; and internal relocation feasibility.",
      },
      {
        question: "Can a claim succeed if FGM has already occurred?",
        answer: "Yes. Claims can succeed where prospective risk exists, including daughters at risk or re-infibulation following Type III FGM.",
      },
      {
        question: "Which countries feature most in FGM asylum cases?",
        answer: "Somalia, Guinea, Nigeria, Egypt, and other countries with documented FGM prevalence. Reports are tailored to ethnic and regional profiles.",
      },
    ],
  },
  {
    id: "trafficking",
    title: "Trafficking & Modern Slavery Reports",
    navLabel: "Trafficking",
    description:
      "Trafficking route analysis, juju exploitation context, and re-trafficking risk for NRM and asylum proceedings.",
    metaTitle: "Africa Trafficking Expert Witness UK | Modern Slavery & NRM Reports",
    metaDescription:
      "Trafficking and modern slavery expert reports for UK NRM and asylum proceedings - route analysis, juju context, and re-trafficking risk on return.",
    relatedHref: "/expertise-areas/trafficking-modern-slavery-africa",
    methodology: [
      { phase: "Route analysis", whatWeDo: "Document trafficking patterns from origin country", deliverable: "Trafficking context section" },
      { phase: "Protection assessment", whatWeDo: "State protection and re-trafficking risk on return", deliverable: "Protection analysis" },
      { phase: "Report", whatWeDo: "NRM and tribunal-ready report", deliverable: "Expert report" },
    ],
    faqs: [
      {
        question: "What does a trafficking expert report cover?",
        answer:
          "Origin-country trafficking patterns, juju and ritual exploitation context where relevant, state protection, and re-trafficking risk on return for NRM and asylum proceedings.",
      },
      {
        question: "Are reports suitable for National Referral Mechanism cases?",
        answer: "Yes. Reports can support NRM reasonable grounds decisions and asylum appeals with country-specific trafficking context.",
      },
      {
        question: "Which West African countries feature in trafficking cases?",
        answer: "Nigeria, Ghana, and other West African countries are common in UK trafficking cases. Reports address specific routes and exploitation patterns.",
      },
    ],
  },
  {
    id: "investment-arbitration",
    title: "Investment Treaty Arbitration Support",
    navLabel: "Investment Arbitration",
    description:
      "Country conditions and regulatory framework evidence for ICSID, UNCITRAL, and ICC investment treaty disputes.",
    metaTitle: "Africa Investment Treaty Arbitration Expert | ICSID & UNCITRAL Evidence",
    metaDescription:
      "Investment treaty arbitration expert evidence for African disputes - ICSID, UNCITRAL, regulatory change, and expropriation context.",
    relatedHref: "/expertise-areas/investment-treaty-arbitration-africa",
    methodology: [
      { phase: "Dispute scoping", whatWeDo: "Identify treaty standards, governing law, and sector", deliverable: "Expert team proposal" },
      { phase: "Analysis", whatWeDo: "Country conditions, regulatory change, and expropriation context", deliverable: "Memorial-ready expert analysis" },
      { phase: "Testimony", whatWeDo: "Written evidence and hearing testimony if required", deliverable: "Expert report and oral evidence" },
    ],
    faqs: [
      {
        question: "What investment arbitration cases involve Africa?",
        answer:
          "Sub-Saharan Africa accounted for 16% of new ICSID cases in 2024, including mining, energy, and expropriation disputes in Guinea, DRC, Mali, Burkina Faso, and Egypt.",
      },
      {
        question: "What evidence do country experts provide in ICSID cases?",
        answer:
          "Country conditions, regulatory framework changes, political risk, and factual context for treaty breach and damages analysis - memorial-ready written evidence and testimony if required.",
      },
      {
        question: "How are experts instructed in arbitration?",
        answer: "Typically during memorial preparation. Early instruction allows thorough research on governing law, sector regulation, and country conditions.",
      },
    ],
  },
  {
    id: "african-law",
    title: "African Law Expert Evidence",
    navLabel: "African Law",
    description:
      "Governing law, court procedures, OHADA, and domestic legal framework evidence for commercial litigation and arbitration.",
    metaTitle: "African Law Expert Witness UK | OHADA & Commercial Litigation",
    metaDescription:
      "African law expert evidence for UK commercial litigation and arbitration - governing law, OHADA, court procedures, and domestic legal frameworks.",
    relatedHref: "/expertise-areas/african-law-legal-systems",
    methodology: [
      { phase: "Legal framework", whatWeDo: "Identify governing law and applicable instruments", deliverable: "Legal framework memorandum" },
      { phase: "Analysis", whatWeDo: "Domestic law and practice analysis", deliverable: "Expert opinion" },
      { phase: "Report", whatWeDo: "CPR Part 35 or arbitration-compliant report", deliverable: "Expert report" },
    ],
    faqs: [
      {
        question: "What does an African law expert witness provide?",
        answer:
          "Evidence on governing law, court procedures, OHADA instruments, and domestic legal frameworks for commercial litigation and arbitration involving African jurisdictions.",
      },
      {
        question: "When is African law expert evidence needed in UK courts?",
        answer:
          "Where foreign law is a question of fact under conflict of laws rules, or where arbitration requires expert opinion on African legal systems and practice.",
      },
      {
        question: "Do experts cover OHADA jurisdictions?",
        answer: "Yes. Experts can address OHADA uniform acts and member-state implementation for West and Central African commercial disputes.",
      },
    ],
  },
  {
    id: "nationality-statelessness",
    title: "Nationality & Statelessness Assessment",
    navLabel: "Nationality",
    description:
      "Citizenship law analysis and statelessness risk assessment for UK immigration tribunals.",
    metaTitle: "Africa Nationality & Statelessness Expert Witness UK",
    metaDescription:
      "Nationality and statelessness expert assessments for UK immigration tribunals - citizenship law, documentation risk, and return feasibility.",
    relatedHref: "/expertise-areas/nationality-statelessness",
    methodology: [
      { phase: "Citizenship analysis", whatWeDo: "Review nationality laws and documentation requirements", deliverable: "Citizenship assessment" },
      { phase: "Risk assessment", whatWeDo: "Statelessness and documentation risk on return", deliverable: "Risk analysis" },
      { phase: "Report", whatWeDo: "Tribunal-ready nationality expert report", deliverable: "Expert report" },
    ],
    faqs: [
      {
        question: "What does a nationality expert report address?",
        answer:
          "Citizenship law of the relevant African state, acquisition and loss of nationality, documentation requirements, and statelessness risk on return.",
      },
      {
        question: "When are nationality experts instructed?",
        answer:
          "In cases involving disputed nationality, documentation barriers, or risk of being unable to establish identity or citizenship on return.",
      },
      {
        question: "Can reports address dual nationality issues?",
        answer: "Yes. Reports analyse how domestic law treats dual nationals and practical consequences for return and documentation.",
      },
    ],
  },
  {
    id: "rebuttal-sje",
    title: "Rebuttal Reports & Single Joint Expert",
    navLabel: "Rebuttal & SJE",
    description:
      "Rebuttal of Home Office CPINs and opposing expert reports; Single Joint Expert appointments for contested country conditions.",
    metaTitle: "Africa Expert Rebuttal Reports & Single Joint Expert UK",
    metaDescription:
      "Rebuttal of Home Office CPINs and opposing expert reports; Single Joint Expert appointments for contested Africa country conditions.",
    relatedHref: "/guides/home-office-cpin-africa-rebuttal",
    methodology: [
      { phase: "Review", whatWeDo: "Analyse opposing report or CPIN position", deliverable: "Gap analysis" },
      { phase: "Rebuttal", whatWeDo: "Source-backed challenge to specific propositions", deliverable: "Rebuttal report" },
      { phase: "SJE", whatWeDo: "Joint instructions and agreed issues for SJE", deliverable: "Single Joint Expert report" },
    ],
    faqs: [
      {
        question: "What is a CPIN rebuttal report?",
        answer:
          "A source-backed challenge to specific propositions in a Home Office Country Policy Information Note, addressing gaps, outdated sources, or mischaracterisation of country conditions.",
      },
      {
        question: "When is a Single Joint Expert appropriate?",
        answer:
          "Where both parties agree on appointing one expert on defined country conditions issues, reducing costs and conflicting expert evidence.",
      },
      {
        question: "How quickly can rebuttal reports be prepared?",
        answer: "Typically 1–2 weeks depending on scope. Urgent rebuttals may be available before hearing dates subject to expert availability.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getServicePath(id: string): string {
  return `/services/${id}`;
}
