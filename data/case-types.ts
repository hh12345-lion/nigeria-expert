import type { FAQ } from "@/lib/schema";

export type CaseType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedExpertise: string[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "asylum-appeal-first-tier-tribunal",
    title: "Asylum Appeal - First-tier Tribunal",
    metaTitle: "Africa Expert Witness for Asylum Appeals | First-tier Tribunal UK",
    metaDescription:
      "Africa expert witness for First-tier Tribunal asylum appeals. Country condition reports for UK immigration cases across 54 African nations.",
    h1: "Africa Expert Witness for First-tier Tribunal Asylum Appeals",
    content: [
      "First-tier Tribunal (Immigration and Asylum Chamber) appeals are the primary forum for challenging Home Office refusals of African asylum claims. Expert country condition reports provide the independent, authoritative evidence tribunals require to assess credibility, risk on return, and internal relocation.",
      "Reports must be CPR Part 35 compliant, cite sources to OSCOLA standards, and address the specific grounds raised - whether political persecution, LGBTQI+, FGM, trafficking, or clan-based claims. Early instruction is critical to avoid adjournments.",
      "AfricaExpertWitness matches solicitors with country-specific experts who have tribunal acceptance records and field research experience in the relevant African jurisdiction.",
    ],
    faqs: [
      {
        question: "When should I instruct an Africa expert for a First-tier Tribunal appeal?",
        answer:
          "Instruct as soon as the appeal is lodged and grounds are identified. Allow 2–3 weeks for a standard report. Urgent instructions (5 business days) are available for imminent hearings. Late instruction risks adjournment applications and increased costs.",
      },
      {
        question: "What should an Africa expert report for the First-tier Tribunal contain?",
        answer:
          "Reports should address the specific factual matrix: country conditions relevant to the claim, state protection analysis, internal relocation feasibility, consistency with country guidance where applicable, and source citations to Home Office COI, UN, and field research.",
      },
    ],
    relatedExpertise: ["country-conditions-human-rights", "political-persecution-state-protection"],
  },
  {
    slug: "upper-tribunal-country-guidance",
    title: "Upper Tribunal - Country Guidance",
    metaTitle: "Africa Expert Witness Upper Tribunal | Country Guidance Cases UK",
    metaDescription:
      "Africa expert witness for Upper Tribunal country guidance cases. MOJ Somalia, MA Eritrea, RN Zimbabwe, and departure applications.",
    h1: "Africa Expert Witness for Upper Tribunal Country Guidance Cases",
    content: [
      "Upper Tribunal (Immigration and Asylum Chamber) country guidance cases establish binding precedent for how African asylum claims are assessed across the UK. Leading cases include MOJ Somalia, MA Eritrea, and RN Zimbabwe.",
      "Expert evidence in country guidance and departure cases must meet the highest evidential standards. Experts address whether existing guidance remains current, identify material changes since the leading decision, and provide the granular country analysis the UT requires.",
      "Solicitors instructing experts for UT work should identify whether the case is a country guidance application, a departure from guidance, or a CG review - each requiring different expert scope and methodology.",
    ],
    faqs: [
      {
        question: "What is a country guidance case?",
        answer:
          "A country guidance (CG) case is an Upper Tribunal decision designated as providing authoritative guidance on how claims from a particular country should be assessed. CG decisions are binding on First-tier Tribunals until departed from or superseded.",
      },
      {
        question: "Which African country guidance cases are most significant?",
        answer:
          "MOJ & Ors (Return to Mogadishu) Somalia CG [2014] UKUT 00442; MA (draft evaders) Eritrea CG [2019] UKUT 272; and RN and Others (Returnees) Zimbabwe CG [2008] UKAIT 00083 are the leading African CG cases in UK immigration law.",
      },
    ],
    relatedExpertise: ["country-conditions-human-rights", "political-persecution-state-protection"],
  },
  {
    slug: "lgbtqi-asylum-africa-cases",
    title: "LGBTQI+ Asylum - Africa",
    metaTitle: "LGBTQI+ Africa Asylum Expert Witness UK | Uganda, Nigeria & Ghana",
    metaDescription:
      "LGBTQI+ Africa asylum expert witness for UK tribunals. Uganda Anti-Homosexuality Act, Nigerian SSMPA, and sexuality evidence standards.",
    h1: "LGBTQI+ Asylum from Africa - Expert Witness Evidence",
    content: [
      "LGBTQI+ asylum claims from Africa are among the fastest-growing categories in UK immigration tribunals. Uganda's Anti-Homosexuality Act 2023, Nigeria's SSMPA 2014, and pending Ghanaian legislation have driven significant increases in claim volume.",
      "Expert reports address criminalisation frameworks, enforcement practice, community and family violence, NGO protection availability, and internal relocation - which is rarely viable where criminalisation applies nationwide. Reports must be consistent with the HJ (Iran) and HT (Cameroon) standards.",
      "Country-specific expertise is essential. An expert on Uganda cannot credibly report on Nigeria or Ghana without dedicated knowledge of each jurisdiction's legal and social conditions.",
    ],
    faqs: [
      {
        question: "What evidence standard applies to LGBTQI+ asylum claims?",
        answer:
          "The HJ (Iran) standard requires tribunals to accept the claimant's sexuality unless there is good reason to reject it. Expert witnesses do not determine sexuality but provide country conditions evidence on risk, enforcement, and protection - supporting the tribunal's overall assessment.",
      },
      {
        question: "Which African countries generate the most LGBTQI+ UK asylum claims?",
        answer:
          "Uganda, Nigeria, Ghana, Kenya, Tanzania, Cameroon, DRC, Guinea, Gambia, and Sierra Leone. Uganda has seen the sharpest increase following the Anti-Homosexuality Act 2023.",
      },
    ],
    relatedExpertise: ["lgbtqi-asylum-africa"],
  },
  {
    slug: "fgm-asylum-cases",
    title: "FGM Asylum Cases",
    metaTitle: "FGM Africa Asylum Expert Witness UK | Expert Evidence Guide",
    metaDescription:
      "FGM Africa asylum expert witness for UK tribunals. Prevalence analysis, daughters at risk, and state protection in Guinea, Somalia, Mali, and Nigeria.",
    h1: "FGM Asylum Cases from Africa - Expert Witness Evidence",
    content: [
      "FGM-based asylum claims require expert analysis of prevalence by country, ethnic group, and region. Guinea, Somalia, Mali, Sierra Leone, and Gambia have the highest documented prevalence globally.",
      "Claims succeed where ongoing risk exists - including daughters at risk, Type III re-infibulation, and medical complications - even where the claimant has already undergone FGM. Expert witnesses assess state protection adequacy and internal relocation feasibility.",
      "Reports must address the specific ethnic and geographic context of the claimant, not generic national statistics alone.",
    ],
    faqs: [
      {
        question: "Can FGM asylum claims succeed if FGM has already occurred?",
        answer:
          "Yes. Claims can succeed based on ongoing risk of re-infibulation, daughters at risk, or medical complications requiring treatment unavailable on return. Expert witnesses address prospective risk, not only historical harm.",
      },
      {
        question: "Which countries require FGM expert evidence most frequently?",
        answer:
          "Guinea, Somalia, Mali, Sierra Leone, Gambia, and Nigeria (state-specific variation). Expert witnesses provide ethnic and regional prevalence analysis beyond national averages.",
      },
    ],
    relatedExpertise: ["fgm-gender-based-violence"],
  },
  {
    slug: "trafficking-modern-slavery-cases",
    title: "Trafficking & Modern Slavery",
    metaTitle: "Trafficking Africa Expert Witness UK | NRM & Asylum Evidence",
    metaDescription:
      "Trafficking and modern slavery Africa expert witness for UK NRM and asylum cases. Nigeria, Ghana, and West African route analysis.",
    h1: "Trafficking & Modern Slavery Cases from Africa",
    content: [
      "African trafficking cases in the UK span asylum claims, National Referral Mechanism referrals, and modern slavery statements. Nigerian and Ghanaian trafficking routes - including juju oath exploitation - are among the most documented in UK tribunals.",
      "Expert witnesses analyse trafficking patterns, state protection failures, re-trafficking risk on return, and the credibility of accounts involving ritual exploitation. Reports support both positive asylum decisions and NRM reasonable grounds decisions.",
      "Country conditions evidence on corruption, law enforcement capacity, and NGO support availability is essential for credible trafficking assessments.",
    ],
    faqs: [
      {
        question: "How does expert evidence support NRM trafficking cases?",
        answer:
          "Expert reports provide country conditions context for reasonable grounds and conclusive grounds decisions - documenting trafficking prevalence, state protection failures, and re-trafficking risk that caseworkers and tribunals require.",
      },
      {
        question: "What is juju trafficking and how do experts address it?",
        answer:
          "Juju (or ritual) trafficking involves oath-taking ceremonies used to control victims, primarily from Nigeria. Expert witnesses document the cultural context, credibility of accounts, and risk on return to trafficking networks.",
      },
    ],
    relatedExpertise: ["trafficking-modern-slavery-africa"],
  },
  {
    slug: "investment-treaty-icsid-arbitration",
    title: "Investment Treaty & ICSID Arbitration",
    metaTitle: "ICSID Africa Expert Witness UK | Investment Treaty Arbitration",
    metaDescription:
      "ICSID and investment treaty arbitration Africa expert witness. Guinea mining, West Africa licence revocations, and country conditions evidence.",
    h1: "Investment Treaty & ICSID Arbitration - Africa Expert Witness",
    content: [
      "African states face unprecedented volumes of ICSID and UNCITRAL investment treaty claims. West African mining disputes - Guinea's $28.9 billion Axis International claim, Mali, Burkina Faso, Niger licence revocations - dominate the 2024–2025 landscape.",
      "Expert witnesses provide country conditions analysis for expropriation and fair and equitable treatment claims, African law evidence on regulatory frameworks, and sector-specific knowledge in mining, oil and gas, and infrastructure.",
      "Counsel should instruct experts early in memorial preparation to ensure evidence addresses the specific treaty standards, governing law, and factual matrix of each dispute.",
    ],
    faqs: [
      {
        question: "What expert disciplines are needed in African ICSID cases?",
        answer:
          "Typically: country conditions experts, African law experts, sector specialists (mining, energy), and quantum/damages experts. The specific mix depends on the treaty standards in dispute and governing law.",
      },
      {
        question: "Which African countries face the most ICSID claims?",
        answer:
          "Guinea, Egypt, Algeria, DRC, Tanzania, Kenya, Mozambique, and Libya. West Africa has seen the sharpest increase in 2024–2025 following military regime mining licence revocations.",
      },
    ],
    relatedExpertise: ["investment-treaty-arbitration-africa", "african-law-legal-systems"],
  },
  {
    slug: "commercial-litigation-african-law",
    title: "Commercial Litigation - African Law",
    metaTitle: "African Law Expert Witness UK | Commercial Litigation",
    metaDescription:
      "African law expert witness for UK commercial litigation. Domestic law, OHADA, court procedures, and governing law analysis.",
    h1: "Commercial Litigation - African Law Expert Witness",
    content: [
      "UK commercial courts regularly hear disputes involving African governing law clauses, African party defendants, and enforcement of African judgments. African law experts provide authoritative evidence on how domestic legal systems operate in practice.",
      "Expertise spans OHADA uniform acts, ECOWAS and SADC frameworks, domestic court procedures, and the interaction between national law and international treaty obligations. CPR Part 35 compliance is standard.",
      "Experts are qualified in relevant African jurisdictions and provide evidence that goes beyond textbook law to address practical enforcement realities.",
    ],
    faqs: [
      {
        question: "When is an African law expert needed in UK commercial litigation?",
        answer:
          "Where governing law is African, where foreign law questions arise on procedure or substance, or where enforcement of African judgments is in issue. Experts provide authoritative evidence that UK judges cannot determine without assistance.",
      },
      {
        question: "What is OHADA and when does it apply?",
        answer:
          "OHADA (Organisation for the Harmonisation of Business Law in Africa) provides uniform commercial law across 17 member states. Experts explain when OHADA uniform acts govern and how they interact with national law.",
      },
    ],
    relatedExpertise: ["african-law-legal-systems"],
  },
  {
    slug: "extradition-africa",
    title: "Extradition - Africa",
    metaTitle: "Africa Extradition Expert Witness UK | Country Conditions Evidence",
    metaDescription:
      "Africa extradition expert witness for UK courts. Country conditions, torture risk, fair trial, and prison conditions evidence.",
    h1: "Extradition Cases Involving African States - Expert Witness",
    content: [
      "Extradition proceedings involving African requesting states require expert evidence on prison conditions, torture risk, fair trial guarantees, and political persecution. Experts support both requested person challenges and government responses.",
      "Reports address the specific requesting state, relevant human rights records, and conditions in detention facilities. Political cases - particularly from countries with documented torture - require current, granular analysis.",
      "Expert evidence supports section 87 and human rights act challenges in UK extradition courts.",
    ],
    faqs: [
      {
        question: "What does an Africa expert provide in extradition proceedings?",
        answer:
          "Evidence on prison conditions, torture and ill-treatment risk, fair trial standards, political persecution, and country conditions relevant to human rights bars to extradition under the Extradition Act 2003.",
      },
      {
        question: "Which African states most frequently feature in UK extradition?",
        answer:
          "Nigeria, South Africa, Kenya, Ghana, Rwanda, and Egypt feature regularly. Each requires country-specific expert analysis of detention conditions and human rights records.",
      },
    ],
    relatedExpertise: ["country-conditions-human-rights", "political-persecution-state-protection"],
  },
];

export function getCaseType(slug: string) {
  return caseTypes.find((c) => c.slug === slug);
}
