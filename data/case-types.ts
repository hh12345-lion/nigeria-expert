import type { FAQ } from "@/lib/schema";

export type CaseType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedProfiles: string[];
  relatedServices: string[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "asylum-appeal-ftt",
    title: "FTT Asylum Appeal",
    metaTitle: "Nigeria Expert Witness for FTT Asylum Appeals | First-tier Tribunal UK",
    metaDescription:
      "Nigeria expert witness for First-tier Tribunal asylum appeals. Country condition reports for LGBTQ+, IPOB, FGM, Boko Haram, and trafficking claims. Legal Aid compatible.",
    h1: "Nigeria Expert Witness for First-tier Tribunal Asylum Appeals",
    content: [
      "First-tier Tribunal (Immigration and Asylum Chamber) appeals are the primary forum for challenging Home Office refusals of Nigerian asylum claims. Nigeria is one of the highest-volume asylum claim nationalities in the UK, spanning LGBTQ+ persecution under SSMPA, IPOB separatist claims, Boko Haram risk, FGM, trafficking with juju rituals, and political persecution.",
      "Expert country condition reports provide the independent, authoritative evidence tribunals require to assess credibility, risk on return, state protection, and internal relocation. Reports must comply with Immigration Tribunal Practice Direction paragraph 10 and the Expert Reports in the Immigration Tribunal guide (October 2025) by Adam Pipe of No.8 Chambers.",
      "Early instruction is critical. Allow 2 to 3 weeks for a standard report. NigeriaExpert matches solicitors with qualified Nigeria country experts who have tribunal acceptance records, current CPIN knowledge, and field research experience in Nigeria.",
    ],
    faqs: [
      {
        question: "When should I instruct a Nigeria expert for a First-tier Tribunal appeal?",
        answer:
          "Instruct as soon as the appeal is lodged and grounds are identified. Allow 2 to 3 weeks for a standard report. Urgent instructions are available for imminent hearings. Late instruction risks adjournment applications and increased costs.",
      },
      {
        question: "What should a Nigeria expert report for the FTT contain?",
        answer:
          "Reports should address the specific factual matrix: country conditions relevant to the claim, state protection analysis, internal relocation feasibility, consistency with current CPINs and EUAA 2026 guidance, and source citations to Home Office COI, UNHCR, and field research.",
      },
    ],
    relatedProfiles: ["lgbtq-asylum-nigeria", "ipob-biafra", "actors-of-protection"],
    relatedServices: ["country-condition-reports", "cpin-challenge"],
  },
  {
    slug: "upper-tribunal-nigeria",
    title: "Upper Tribunal Nigeria",
    metaTitle: "Nigeria Expert Witness Upper Tribunal | Country Guidance UK",
    metaDescription:
      "Nigeria expert witness for Upper Tribunal country guidance and departure cases. Current CPIN analysis, EUAA 2026 guidance, and oral evidence.",
    h1: "Nigeria Expert Witness for Upper Tribunal Proceedings",
    content: [
      "Upper Tribunal (Immigration and Asylum Chamber) proceedings include country guidance applications, departure from guidance cases, and appeals from First-tier Tribunal decisions on Nigerian asylum claims. Expert evidence in UT work must meet the highest evidential standards.",
      "With multiple updated Nigeria CPINs in 2025 to 2026, including SOGIESC (June 2025), separatist groups South-East (April 2026), and medical treatment (December 2025), experts must address whether existing guidance and CPIN positions remain current and provide granular country analysis.",
      "Oral evidence is most common in Upper Tribunal country guidance cases. NigeriaExpert experts are experienced in tribunal attendance and cross-examination on Nigeria country conditions.",
    ],
    faqs: [
      {
        question: "When is oral evidence required in Upper Tribunal Nigeria cases?",
        answer:
          "Oral evidence is most common in country guidance cases or where the tribunal directs. Experts should be prepared to give evidence on current CPIN positions, field research findings, and profile-specific risk analysis under cross-examination.",
      },
      {
        question: "Which Nigeria CPINs are most relevant to Upper Tribunal work?",
        answer:
          "The April 2026 CPIN on separatist groups South-East, June 2025 SOGIESC CPIN, August 2024 actors of protection CPIN, and EUAA Country Guidance Nigeria 2026 are the most frequently cited in current Upper Tribunal Nigeria cases.",
      },
    ],
    relatedProfiles: ["ipob-biafra", "lgbtq-asylum-nigeria", "internal-relocation-lagos"],
    relatedServices: ["cpin-challenge", "oral-evidence"],
  },
  {
    slug: "lgbtq-asylum-nigeria",
    title: "LGBTQ+ Asylum Nigeria Claims",
    metaTitle: "LGBTQ+ Nigeria Asylum Expert Witness UK | SSMPA Expert Reports",
    metaDescription:
      "LGBTQ+ Nigeria asylum expert witness for UK tribunals. SSMPA 2013, June 2025 SOGIESC CPIN, HJ (Iran) standard, and internal relocation analysis.",
    h1: "LGBTQ+ Asylum Claims from Nigeria: Expert Witness Evidence",
    content: [
      "LGBTQ+ asylum claims from Nigeria are among the highest-volume sexuality-based claims in UK immigration tribunals. Nigeria's SSMPA 2013 criminalises same-sex relationships nationwide, with death penalty under Sharia law in 12 northern states.",
      "Expert reports address criminalisation frameworks, enforcement practice, community and family violence, NGO protection availability, and internal relocation impossibility. Reports must be consistent with the HJ (Iran) [2010] UKSC 31 standard and the June 2025 updated SOGIESC CPIN.",
      "Country-specific expertise is essential. Expert witnesses must demonstrate current knowledge of Nigeria's legal framework, social attitudes, and the specific risk profile of the appellant.",
    ],
    faqs: [
      {
        question: "What evidence standard applies to LGBTQ+ Nigeria asylum claims?",
        answer:
          "The HJ (Iran) standard requires tribunals to accept the claimant's sexuality unless there is good reason to reject it. Expert witnesses provide country conditions evidence on risk, enforcement, and protection, supporting the tribunal's overall assessment.",
      },
      {
        question: "Can LGBTQ+ Nigerians internally relocate within Nigeria?",
        answer:
          "No. The EUAA 2026 country guidance confirms that where persecution is by the state, internal protection is not available because SSMPA enforcement applies nationwide. Expert witnesses address this directly in relocation analysis.",
      },
    ],
    relatedProfiles: ["lgbtq-asylum-nigeria", "internal-relocation-lagos", "actors-of-protection"],
    relatedServices: ["lgbtq-asylum", "internal-relocation-analysis"],
  },
  {
    slug: "fgm-asylum",
    title: "FGM Asylum Nigeria",
    metaTitle: "FGM Nigeria Asylum Expert Witness UK | Expert Evidence Guide",
    metaDescription:
      "FGM Nigeria asylum expert witness for UK tribunals. Prevalence analysis, daughter-at-risk claims, VAPP Act 2015, and state protection.",
    h1: "FGM Asylum Claims from Nigeria: Expert Witness Evidence",
    content: [
      "FGM asylum claims from Nigeria require expert evidence on prevalence by state and ethnic group, enforcement of the VAPP Act 2015, and state protection availability. Nigeria has one of the highest absolute numbers of FGM cases globally.",
      "Daughter-at-risk claims require the expert to assess whether the extended family has indicated intent, whether state protection is realistically available in the specific locality, and whether internal relocation would provide sufficient protection.",
      "Expert reports address intersectionality with trafficking, forced marriage, and honour-based violence where relevant to the appellant's profile.",
    ],
    faqs: [
      {
        question: "What does an FGM expert report for Nigeria contain?",
        answer:
          "Reports address FGM prevalence in the specific ethnic group and state, legal framework under the VAPP Act 2015, enforcement practice, state protection availability, and internal relocation feasibility for the specific profile.",
      },
      {
        question: "How do tribunals assess daughter-at-risk FGM claims from Nigeria?",
        answer:
          "Tribunals assess whether there is a real risk of FGM for the daughter, considering family intent, community practice, state protection, and relocation options. Expert evidence provides the country-specific analysis required for this assessment.",
      },
    ],
    relatedProfiles: ["fgm-gbv", "internal-relocation-lagos", "actors-of-protection"],
    relatedServices: ["fgm-expert-reports", "internal-relocation-analysis"],
  },
  {
    slug: "trafficking-nrm",
    title: "Trafficking & NRM Nigeria",
    metaTitle: "Trafficking Nigeria Expert Witness UK | NRM & Juju Ritual Evidence",
    metaDescription:
      "Trafficking Nigeria expert witness for UK tribunals. NRM cases, juju ritual evidence, Edo State routes, reintegration risk, and state protection.",
    h1: "Trafficking & NRM Cases from Nigeria: Expert Witness Evidence",
    content: [
      "Trafficking cases from Nigeria frequently involve juju ritual control, particularly from Edo State and Benin City trafficking networks. Expert witnesses explain the role of juju in debt bondage and the cultural context tribunals need to assess credibility and reintegration risk.",
      "The National Referral Mechanism (NRM) in the UK provides a framework for identifying trafficking victims. Expert reports support both asylum and trafficking-related protection claims by addressing state protection inadequacies in Nigeria and re-trafficking risk on return.",
      "Reports cite the updated Home Office CPIN on trafficking of women and address the specific trafficking route, network, and reintegration support available in the appellant's home area.",
    ],
    faqs: [
      {
        question: "How does juju evidence support trafficking asylum claims?",
        answer:
          "Expert witnesses explain how juju rituals are used to control trafficking victims, why victims may fear disclosure, and how the ritual context affects credibility assessments. This cultural evidence is essential for tribunals assessing trafficking claims from Nigeria.",
      },
      {
        question: "What is the re-trafficking risk for returned victims in Nigeria?",
        answer:
          "Returned trafficking victims face retaliation from networks, stigma, family rejection, and re-trafficking. State protection is often inadequate in high-trafficking areas such as Edo State. Expert witnesses assess individual risk against current conditions.",
      },
    ],
    relatedProfiles: ["trafficking-juju", "actors-of-protection", "fgm-gbv"],
    relatedServices: ["trafficking-juju-reports", "country-condition-reports"],
  },
  {
    slug: "ipob-biafra-asylum",
    title: "IPOB & Biafra Asylum",
    metaTitle: "IPOB Biafra Asylum Expert Witness UK | April 2026 CPIN",
    metaDescription:
      "IPOB and Biafra asylum expert witness for UK tribunals. Proscription, arrest risk, UK diaspora activity, and April 2026 CPIN South-East Nigeria.",
    h1: "IPOB & Biafra Asylum Claims: Expert Witness Evidence",
    content: [
      "IPOB asylum claims have increased significantly following the April 2026 updated CPIN on separatist groups in South-East Nigeria. The CPIN confirms arrest and detention risk for members, supporters, and associates, including those whose only IPOB connection is UK diaspora activity.",
      "Expert reports assess the individual's profile against current enforcement patterns in Imo, Anambra, Abia, Enugu, and Ebonyi states. Reports distinguish between high-profile and low-profile membership and address whether UK-based demonstrations or online activity would attract Nigerian authority attention.",
      "Reports cite the April 2026 CPIN, EUAA 2026 guidance, and field research on detention conditions and airport interception practices.",
    ],
    faqs: [
      {
        question: "What does the April 2026 CPIN say about IPOB risk?",
        answer:
          "The April 2026 CPIN confirms that IPOB members, supporters, and associates face real risk of arrest and detention. It also confirms that individuals with no prior IPOB profile in Nigeria have been arrested at airports for expressing IPOB views.",
      },
      {
        question: "How do experts assess UK diaspora IPOB activity?",
        answer:
          "Experts assess whether the appellant's UK-based demonstrations, online activity, social media posts, or leadership roles would bring them to the attention of Nigerian security forces on return, citing the April 2026 CPIN and field research.",
      },
    ],
    relatedProfiles: ["ipob-biafra", "political-persecution", "actors-of-protection"],
    relatedServices: ["ipob-biafra-risk", "cpin-challenge"],
  },
  {
    slug: "deportation-removal-nigeria",
    title: "Deportation & Removal Nigeria",
    metaTitle: "Deportation Removal Nigeria Expert Witness UK | Risk on Return",
    metaDescription:
      "Deportation and removal Nigeria expert witness for UK tribunals. Risk on return analysis, state protection, and interim relief evidence.",
    h1: "Deportation & Removal to Nigeria: Expert Witness Evidence",
    content: [
      "Deportation and removal cases require expert evidence on risk on return, state protection, and internal relocation for Nigerian nationals. This includes appeals against deportation orders, judicial review of removal directions, and interim relief applications.",
      "Expert reports address the specific profile of the individual facing removal, citing current CPINs and EUAA 2026 guidance. Reports must be prepared quickly where removal is imminent.",
      "NigeriaExpert provides urgent instruction capability for deportation cases with hearing dates or removal directions pending.",
    ],
    faqs: [
      {
        question: "Can expert evidence stop a deportation to Nigeria?",
        answer:
          "Expert evidence supports the legal arguments made by the appellant's representatives. The expert provides independent country condition analysis on risk on return, state protection, and relocation that the tribunal or court considers alongside other evidence.",
      },
      {
        question: "How quickly can a Nigeria expert report be prepared for deportation cases?",
        answer:
          "Urgent reports can be prepared within 5 business days where necessary. Contact us with the removal date or hearing date for availability confirmation.",
      },
    ],
    relatedProfiles: ["actors-of-protection", "internal-relocation-lagos", "political-persecution"],
    relatedServices: ["country-condition-reports", "internal-relocation-analysis"],
  },
  {
    slug: "fresh-claims-nigeria",
    title: "Fresh Claims Nigeria",
    metaTitle: "Fresh Claims Nigeria Expert Witness UK | New Evidence Reports",
    metaDescription:
      "Fresh claims Nigeria expert witness for UK immigration cases. New country evidence, updated CPIN analysis, and changed conditions reports.",
    h1: "Fresh Claims from Nigeria: Expert Witness Evidence",
    content: [
      "Fresh claims require evidence that conditions in Nigeria have changed or that new evidence exists which was not previously considered. With multiple CPIN updates in 2025 to 2026, fresh claim evidence often addresses material changes since the original decision.",
      "Expert witnesses identify what has changed since the previous decision, whether new CPINs or EUAA guidance affect the appellant's profile, and provide updated country condition analysis addressing the fresh claim threshold.",
      "Common fresh claim triggers include updated CPINs (SOGIESC June 2025, separatist groups April 2026), changed security conditions in the North-East, and new evidence of UK diaspora activity attracting Nigerian authority attention.",
    ],
    faqs: [
      {
        question: "What makes a fresh claim expert report different from an appeal report?",
        answer:
          "Fresh claim reports must identify what is new since the previous decision, address the fresh claim threshold, and explain why the new evidence could not reasonably have been provided earlier. The expert focuses on material changes in country conditions or new profile information.",
      },
      {
        question: "Which CPIN updates are most relevant to Nigeria fresh claims?",
        answer:
          "The June 2025 SOGIESC CPIN, April 2026 separatist groups South-East CPIN, December 2025 medical treatment CPIN, and EUAA Country Guidance Nigeria 2026 are the most significant recent updates affecting fresh claims.",
      },
    ],
    relatedProfiles: ["ipob-biafra", "lgbtq-asylum-nigeria", "boko-haram-northeast"],
    relatedServices: ["cpin-challenge", "country-condition-reports"],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
