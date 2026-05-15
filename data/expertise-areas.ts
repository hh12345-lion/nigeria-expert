import type { FAQ } from "@/lib/schema";

export type ExpertiseArea = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  keyPoints?: string[];
  faqs?: FAQ[];
  relatedSlugs?: string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "political-persecution-state-protection",
    title: "Political Persecution & State Protection",
    metaTitle: "Political Persecution Africa Expert Witness UK | State Protection Analysis",
    metaDescription:
      "Africa expert witness evidence on political persecution and state protection failures for UK asylum tribunals across 54 African nations.",
    h1: "Political Persecution & State Protection — Africa Expert Witness",
    content: [
      "Political persecution is the most common asylum ground across African countries appearing in UK tribunals. Expert witnesses analyse whether the state is the agent of persecution, whether it is willing and able to provide protection, and whether non-state actors operate with state acquiescence.",
      "Reports address opposition party membership, activist profiles, election-related violence, and the credibility of internal relocation alternatives. Country-specific analysis is essential — political risk in Zimbabwe differs fundamentally from Nigeria or Ethiopia.",
    ],
    keyPoints: [
      "State vs non-state actor persecution analysis",
      "Government willingness and capacity to protect",
      "Opposition party and activist risk profiling",
      "Election-related violence documentation",
      "Internal relocation feasibility assessment",
    ],
    faqs: [
      {
        question: "How do experts assess state protection in African asylum cases?",
        answer:
          "Experts examine whether the state is willing and able to protect the claimant from the specific threat — considering police capacity, judicial independence, corruption, and documented failures to investigate or prosecute similar cases. Non-state actor persecution requires analysis of state acquiescence or inability to control the threat.",
      },
      {
        question: "Which African countries generate the most political persecution claims?",
        answer:
          "Zimbabwe, Ethiopia, Sudan, Eritrea, Nigeria, Uganda, Egypt, and the DRC generate significant political persecution claims in UK tribunals. Each requires country-specific expert analysis rather than generic regional reports.",
      },
    ],
    relatedSlugs: ["asylum-appeal-first-tier-tribunal", "upper-tribunal-country-guidance"],
  },
  {
    slug: "lgbtqi-asylum-africa",
    title: "LGBTQI+ Asylum",
    metaTitle: "LGBTQI+ Asylum Africa Expert Witness UK | Uganda, Nigeria & Ghana",
    metaDescription:
      "LGBTQI+ Africa expert witness for UK asylum tribunals. Uganda Anti-Homosexuality Act, Nigerian SSMPA, Ghana legislation, and country conditions reports.",
    h1: "LGBTQI+ Asylum — Africa Expert Witness",
    content: [
      "Same-sex conduct is criminalised in over 30 African states, generating a fast-growing volume of UK LGBTQI+ asylum claims. Uganda's Anti-Homosexuality Act 2023 — with penalties up to life imprisonment and the death penalty for aggravated homosexuality — has driven a dramatic increase in claims.",
      "Nigeria's Same Sex Marriage Prohibition Act 2014, Ghana's pending Human Sexual Rights and Family Values Bill, and criminalisation in Kenya, Tanzania, Cameroon, and Guinea all require country-specific expert analysis. Reports address state enforcement patterns, community and family violence, NGO protection availability, internal relocation (rarely viable for LGBTQI+ claims), and consistency with the HJ (Iran) standard for sexuality evidence.",
    ],
    keyPoints: [
      "Criminalisation in 30+ African states",
      "Uganda Anti-Homosexuality Act 2023",
      "Nigerian SSMPA 2014 — nationwide application",
      "Ghana pending criminalisation legislation",
      "Internal relocation rarely viable",
      "HJ (Iran) standard and sexuality evidence",
    ],
    faqs: [
      {
        question: "Which African countries generate the most LGBTQI+ asylum claims in the UK?",
        answer:
          "Uganda (post-2023 Act), Nigeria, Ghana, Kenya, Tanzania, Cameroon, DRC, Guinea, Gambia, and Sierra Leone generate significant UK LGBTQI+ asylum claims. Uganda has seen a dramatic increase since the Anti-Homosexuality Act 2023 imposed life imprisonment penalties. Expert witnesses provide country-specific analysis of enforcement, risk, and protection availability.",
      },
      {
        question: "What does an LGBTQI+ Africa expert witness report address?",
        answer:
          "Reports cover: the legal framework (criminal penalties, enforcement practice); community and family-based violence; state complicity or failure to protect; availability of LGBTQI+ support organisations in-country; feasibility of internal relocation; and consistency of the claimant's account with documented country conditions for LGBTQI+ individuals.",
      },
    ],
    relatedSlugs: ["lgbtqi-asylum-africa-cases"],
  },
  {
    slug: "fgm-gender-based-violence",
    title: "FGM & Gender-Based Violence",
    metaTitle: "FGM Africa Expert Witness UK | Gender-Based Violence Reports",
    metaDescription:
      "FGM and gender-based violence Africa expert witness for UK asylum tribunals. Guinea, Somalia, Mali, Nigeria, and prevalence analysis.",
    h1: "FGM & Gender-Based Violence — Africa Expert Witness",
    content: [
      "FGM-based asylum claims require expert analysis of prevalence rates by country, ethnic group, and region. Guinea (approximately 95%), Mali (89%), Somalia (98%), Sierra Leone (83%), and Gambia (75%) have among the highest documented prevalence globally.",
      "Expert reports address Type III infibulation, risk to daughters, state protection inadequacy, honour-based violence, forced marriage, and girl child persecution. Claims can succeed even where FGM has already occurred — if ongoing risk, daughters at risk, or medical complications exist.",
    ],
    keyPoints: [
      "Country and ethnic prevalence analysis",
      "Type III infibulation and re-infibulation risk",
      "Daughters at risk assessment",
      "State protection inadequacy",
      "Honour-based violence and forced marriage",
    ],
    faqs: [
      {
        question: "Which African countries have the highest FGM prevalence?",
        answer:
          "Guinea (approximately 95%), Mali (approximately 89%), Somalia (approximately 98%), Sierra Leone (approximately 83%), and Gambia (approximately 75%) have the highest documented prevalence. Expert witnesses provide country-specific analysis of prevalence rates, ethnic/regional variation, state protection measures, and the credibility of protective factors claimed.",
      },
      {
        question: "Can a woman claim asylum from Africa on FGM grounds even if she has already undergone FGM?",
        answer:
          "Yes — FGM-based claims can still succeed if: the claimant faces ongoing risk of Type III procedures or re-infibulation; she has daughters at risk; or she has suffered FGM-related medical complications requiring treatment unavailable on return. Expert witnesses address ongoing and prospective risk, not merely historical harm.",
      },
    ],
    relatedSlugs: ["fgm-asylum-cases"],
  },
  {
    slug: "trafficking-modern-slavery-africa",
    title: "Trafficking & Modern Slavery",
    metaTitle: "Trafficking Africa Expert Witness UK | Modern Slavery Evidence",
    metaDescription:
      "Trafficking and modern slavery Africa expert witness for UK asylum and NRM cases. Route analysis, juju rituals, and country conditions.",
    h1: "Trafficking & Modern Slavery — Africa Expert Witness",
    content: [
      "African trafficking routes to Europe — particularly from Nigeria, Ghana, and West Africa — generate significant UK asylum and National Referral Mechanism cases. Expert witnesses analyse trafficking patterns, juju and ritual oath exploitation, and country conditions supporting credibility assessments.",
      "Reports address whether return would expose claimants to re-trafficking, state protection from trafficking networks, and the role of corruption and complicity in origin countries.",
    ],
  },
  {
    slug: "investment-treaty-arbitration-africa",
    title: "Investment Treaty Arbitration",
    metaTitle: "Africa Investment Treaty Arbitration Expert Witness UK | ICSID",
    metaDescription:
      "Africa investment treaty arbitration expert witness. ICSID, Guinea mining, West Africa licence revocations, and country conditions evidence.",
    h1: "Africa Investment Treaty Arbitration Expert Witness",
    content: [
      "Sub-Saharan Africa accounted for 16% of all new ICSID cases in 2024. West African mining disputes — Guinea, Mali, Burkina Faso, Niger — have generated claims valued in the billions following military regime licence revocations. The Axis International v Guinea claim alone is valued at $28.9 billion.",
      "Expert witnesses provide country conditions analysis for fair and equitable treatment and expropriation claims, regulatory framework evidence, African law expertise, and sector-specific knowledge in mining, oil and gas, and infrastructure.",
    ],
    faqs: [
      {
        question: "What types of expert evidence are needed in African ICSID disputes?",
        answer:
          "Typically: African law experts (on governing law, regulatory framework, and domestic court procedures); country conditions experts (for expropriation and fair treatment standard analysis); sector-specific experts (mining, oil and gas, energy, infrastructure); and economic/damages experts (for quantum).",
      },
      {
        question: "How significant is African investment arbitration in 2025?",
        answer:
          "Extremely. Sub-Saharan Africa accounted for 16% of all new ICSID cases in 2024. West Africa alone has seen multiple $1B+ claims following military regime mining licence revocations in Guinea, Mali, Burkina Faso, and Niger. The Axis International v Guinea claim is $28.9 billion — larger than Guinea's annual GDP.",
      },
    ],
    relatedSlugs: ["investment-treaty-icsid-arbitration"],
  },
  {
    slug: "african-law-legal-systems",
    title: "African Law & Legal Systems",
    metaTitle: "African Law Expert Witness UK | OHADA, ECOWAS & Legal Systems",
    metaDescription:
      "African law expert witness for UK commercial litigation and arbitration. Domestic law, OHADA, ECOWAS, SADC, and BIT obligations.",
    h1: "African Law & Legal Systems — Expert Witness",
    content: [
      "African law experts provide evidence on governing law clauses, domestic court procedures, regulatory frameworks, and the interaction between national law and supranational systems including OHADA, ECOWAS, and SADC.",
      "Qualified in relevant African jurisdictions, these experts support commercial litigation, ICSID arbitration, and CPR Part 35 proceedings with authoritative analysis of how African legal systems operate in practice.",
    ],
  },
  {
    slug: "nationality-statelessness",
    title: "Nationality & Statelessness",
    metaTitle: "Nationality & Statelessness Africa Expert Witness UK",
    metaDescription:
      "Nationality and statelessness Africa expert witness for UK immigration tribunals. Citizenship law, documentation, and statelessness across Africa.",
    h1: "Nationality & Statelessness — Africa Expert Witness",
    content: [
      "Nationality disputes arise where claimants face persecution partly because of lack of effective nationality, or where citizenship is disputed, withdrawn, or unattainable. Expert witnesses analyse citizenship laws, documentation requirements, and statelessness risk across African jurisdictions.",
      "Reports support particular social group claims, documentation challenges, and the interaction between nationality law and asylum protection in UK tribunals.",
    ],
  },
  {
    slug: "country-conditions-human-rights",
    title: "Country Conditions & Human Rights",
    metaTitle: "Country Conditions Africa Expert Witness UK | Human Rights Reports",
    metaDescription:
      "Country conditions and human rights Africa expert witness for UK tribunals. Authoritative reports citing Home Office COI, UN, and field research.",
    h1: "Country Conditions & Human Rights — Africa Expert Witness",
    content: [
      "Country conditions experts provide the foundational evidence for most African asylum cases in UK tribunals. Reports synthesise Home Office COI, UNHCR, Amnesty International, and field research into authoritative, OSCOLA-cited analysis tailored to the specific claim.",
      "Experts must address country guidance cases where applicable, identify departures from guidance, and provide current analysis that supplements or challenges Home Office CPIN positions.",
    ],
  },
];

// Add default FAQs for entries missing them
expertiseAreas.forEach((area) => {
  if (!area.faqs) {
    area.faqs = [
      {
        question: `Why instruct an Africa expert witness for ${area.title.toLowerCase()} cases?`,
        answer: `UK tribunals and arbitration panels require authoritative, country-specific evidence on ${area.title.toLowerCase()}. Generic reports drawn from secondary sources are routinely challenged. AfricaExpertWitness connects solicitors with specialists who have field research experience and tribunal acceptance records.`,
      },
      {
        question: `How quickly can a ${area.title.toLowerCase()} expert report be delivered?`,
        answer:
          "Standard reports are typically delivered within 2–3 weeks. Urgent instructions (5 business days) are available subject to expert availability. Contact us with your hearing date for a confirmed timeline.",
      },
    ];
  }
});

export function getExpertiseArea(slug: string) {
  return expertiseAreas.find((e) => e.slug === slug);
}
