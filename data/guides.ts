export type GuideSection = { heading: string; content: string[] };

export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Service @id fragment on /services — omit for methodology/process guides */
  aboutServiceId?: string;
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "somalia-country-guidance-moj",
    metaTitle: "Somalia Country Guidance MOJ [2014] | Solicitor Guide UK",
    metaDescription:
      "Guide to MOJ & Ors Somalia country guidance for UK solicitors. Clan analysis, Mogadishu return, Al-Shabaab, and expert witness role.",
    h1: "Somalia Country Guidance: MOJ & Ors [2014] — A Guide for UK Solicitors",
    sections: [
      {
        heading: "What is MOJ country guidance?",
        content: [
          "MOJ & Ors (Return to Mogadishu) Somalia CG [2014] UKUT 00442 is the leading country guidance on Somali asylum claims in UK law. It established that return to Mogadishu is not automatically unsafe — safety depends on individual circumstances including clan membership, access to diaspora remittances, and capacity to integrate into civil society.",
          "The decision remains binding on First-tier Tribunals unless departed from. Expert witnesses must address MOJ factors while incorporating material developments since 2014, including Al-Shabaab territorial changes, humanitarian conditions, and IDP camp dynamics.",
        ],
      },
      {
        heading: "The MOJ framework for Mogadishu return",
        content: [
          "MOJ identified key factors: clan membership and whether the claimant belongs to a majority or minority clan in Mogadishu; access to financial support from diaspora remittances; ability to secure accommodation and livelihood; and whether the claimant can integrate into civil society without facing persecution.",
          "The Home Office frequently argues that return to Mogadishu is viable for claimants with diaspora support. Expert witnesses must assess whether remittances are realistically accessible to the specific claimant and whether clan dynamics create risk regardless of financial support.",
        ],
      },
      {
        heading: "Clan analysis in Somali cases",
        content: [
          "Clan membership is central to most Somali asylum claims. Minority clans — including occupational groups and minority lineage clans — face specific risks from majority clan violence and Al-Shabaab targeting. Expert witnesses verify clan claims against documented clan structures and geographic distributions.",
          "Incorrect clan evidence is a common ground for adverse credibility findings. Experts provide independent analysis of whether the claimant's stated clan membership is consistent with documented structures and whether that clan faces real risk in the specific location of proposed return.",
        ],
      },
      {
        heading: "Al-Shabaab and developments since 2014",
        content: [
          "Al-Shabaab continues to control significant territory in south-central Somalia and conducts attacks in Mogadishu. Expert witnesses must address current territorial control, targeting patterns, and the interaction between government forces, AMISOM/ATMIS, and non-state actors.",
          "Developments since MOJ include humanitarian crisis conditions, famine risk, and the growth of IDP populations. Reports should address whether conditions have materially worsened since 2014 in ways that support departure from or distinguished application of MOJ guidance.",
        ],
      },
      {
        heading: "The expert witness role",
        content: [
          "Somalia experts must combine knowledge of MOJ legal framework with current country conditions research. Reports should explicitly address each MOJ factor, cite authoritative sources, and provide reasoned conclusions on return safety for the specific claimant profile.",
          "For Upper Tribunal departure applications, experts must identify material changes since MOJ and explain why the guidance no longer reflects current conditions — or why the claimant's circumstances fall outside the CG framework.",
        ],
      },
    ],
  },
  {
    slug: "lgbtqi-africa-asylum-evidence",
    metaTitle: "LGBTQI+ Asylum from Africa | Expert Evidence Guide UK",
    metaDescription:
      "LGBTQI+ asylum from Africa expert evidence guide. Uganda AHA 2023, Nigerian SSMPA, criminalisation, and HJ (Iran) standard.",
    h1: "LGBTQI+ Asylum from Africa: Expert Evidence Guide for UK Solicitors",
    aboutServiceId: "lgbtqi-asylum",
    sections: [
      {
        heading: "Criminalisation across Africa",
        content: [
          "Same-sex conduct is criminalised in over 30 African states. Penalties range from imprisonment to, in Uganda, the death penalty for aggravated homosexuality under the Anti-Homosexuality Act 2023. Nigeria's Same Sex Marriage Prohibition Act 2014 imposes up to 14 years imprisonment with nationwide application.",
          "Ghana's Human Sexual Rights and Family Values Bill (2024) would significantly expand criminalisation if enacted. Kenya, Tanzania, Cameroon, and Guinea maintain criminalising frameworks with varying enforcement intensity.",
        ],
      },
      {
        heading: "The HJ (Iran) standard and expert evidence",
        content: [
          "In HJ (Iran) v Secretary of State for the Home Department [2010] UKSC 31, the Supreme Court held that asylum seekers should not be required to conceal their sexuality to avoid persecution. Expert witnesses do not determine sexuality — they provide country conditions evidence on whether openly LGBTQI+ individuals face persecution in the relevant country.",
          "Reports must address enforcement practice, not merely the text of criminal laws. De facto persecution in states without formal criminalisation — or with limited enforcement — still requires expert analysis.",
        ],
      },
      {
        heading: "Internal relocation and LGBTQI+ claims",
        content: [
          "Internal relocation is rarely viable for LGBTQI+ asylum claims from Africa. Where criminalisation applies nationwide — as under Uganda's AHA 2023 or Nigeria's SSMPA — the Home Office cannot reasonably argue that relocation within the country eliminates risk.",
          "Expert witnesses should address this explicitly, documenting nationwide legal frameworks, community attitudes, and the absence of safe internal relocation options.",
        ],
      },
      {
        heading: "Country conditions report content",
        content: [
          "LGBTQI+ expert reports should cover: the legal framework and penalties; enforcement practice by police and courts; community and family-based violence; state complicity or failure to protect; availability of LGBTQI+ NGOs; media and social media exposure risk; and consistency of the claimant's account with documented conditions.",
          "Country-specific expertise is essential. An expert on Uganda cannot credibly report on Nigeria without dedicated knowledge of that jurisdiction.",
        ],
      },
    ],
  },
  {
    slug: "fgm-expert-evidence-africa",
    metaTitle: "FGM Expert Evidence in African Asylum Cases | Solicitor Guide",
    metaDescription:
      "FGM expert evidence guide for African asylum cases. Prevalence, daughters at risk, state protection, and report structure.",
    h1: "FGM Expert Evidence in African Asylum Cases: Solicitor Guide",
    aboutServiceId: "fgm-gbv",
    sections: [
      {
        heading: "Prevalence by country",
        content: [
          "FGM prevalence varies dramatically by country and ethnic group. Guinea (approximately 95%), Somalia (98%), Mali (89%), Sierra Leone (83%), and Gambia (75%) have the highest documented rates. Nigeria shows significant state-by-state variation — Edo, Imo, and Ekiti states have high prevalence.",
          "Expert witnesses must provide ethnic and regional analysis, not generic national statistics. A claimant from a low-prevalence ethnic group in a high-prevalence country requires different analysis from one in a high-prevalence community.",
        ],
      },
      {
        heading: "Risk assessment methodology",
        content: [
          "FGM claims can succeed on multiple grounds: risk of Type III infibulation or re-infibulation; daughters at risk; medical complications from prior FGM requiring unavailable treatment; and honour-based violence linked to refusal of FGM.",
          "Experts assess whether FGM has already occurred, whether ongoing risk exists, and whether state protection is adequate — considering laws, enforcement, and community attitudes.",
        ],
      },
      {
        heading: "Expert report structure",
        content: [
          "A well-structured FGM expert report includes: executive summary; country and ethnic prevalence data; legal framework and state protection; analysis of the claimant's specific risk factors; internal relocation assessment; and conclusions with source citations.",
          "Reports should address Fornah (FGM) [2006] UKHL 46 and subsequent tribunal decisions on particular social group and FGM-based persecution.",
        ],
      },
    ],
  },
  {
    slug: "west-africa-mining-arbitration",
    metaTitle: "West Africa Mining Arbitration Expert Witness Guide 2025",
    metaDescription:
      "West Africa mining arbitration guide. Guinea, Mali, Burkina Faso, Niger ICSID claims, licence revocations, and expert evidence.",
    h1: "West Africa Mining Arbitration: Expert Witness Guide 2025",
    aboutServiceId: "investment-arbitration",
    sections: [
      {
        heading: "The 2024–2025 arbitration surge",
        content: [
          "West Africa has become the epicentre of African investment treaty arbitration. Military regimes in Guinea, Mali, Burkina Faso, and Niger have revoked or renegotiated mining licences, generating ICSID claims valued in the billions.",
          "The Axis International v Guinea claim — valued at $28.9 billion — exceeds Guinea's annual GDP. Expert witnesses provide country conditions, regulatory framework, and Guinean law evidence essential to fair and equitable treatment and expropriation analysis.",
        ],
      },
      {
        heading: "BIT framework and governing law",
        content: [
          "Most West African mining disputes arise under bilateral investment treaties between African states and investor home states (France, UK, US, China, and others). Experts must understand the applicable BIT standards — fair and equitable treatment, full protection and security, and expropriation — and how African domestic law interacts with treaty obligations.",
          "OHADA may govern certain commercial aspects while BITs govern investor-state obligations. African law experts clarify this interaction.",
        ],
      },
      {
        heading: "Expert evidence required",
        content: [
          "Typical expert team: country conditions expert (regulatory change, political risk, expropriation context); African law expert (governing law, licence validity, court procedures); mining sector expert (technical and operational context); and quantum expert.",
          "Early instruction during memorial preparation ensures experts can address the specific factual matrix and treaty standards in dispute.",
        ],
      },
    ],
  },
  {
    slug: "home-office-cpin-africa-rebuttal",
    metaTitle: "Challenging Home Office CPINs on Africa | Expert Evidence Guide",
    metaDescription:
      "Guide to challenging Home Office CPINs on African countries. Common weaknesses, rebuttal methodology, and expert instruction.",
    h1: "Challenging Home Office CPINs on African Countries: Expert Evidence Guide",
    aboutServiceId: "rebuttal-sje",
    sections: [
      {
        heading: "What CPINs cover",
        content: [
          "Country Policy Information Notes (CPINs) are Home Office documents summarising country conditions for major asylum source countries. They are influential in asylum decision-making but are not binding on tribunals and can be challenged with expert evidence.",
          "CPINs exist for Nigeria, Somalia, Eritrea, Ethiopia, Sudan, Zimbabwe, and other high-volume countries. They are updated periodically but often lag behind rapidly changing conditions.",
        ],
      },
      {
        heading: "Common CPIN weaknesses",
        content: [
          "CPINs frequently rely on dated sources, understate LGBTQI+ enforcement following new legislation, fail to address post-conflict developments (Sudan 2023, Tigray ceasefire), and present internal relocation as more viable than country conditions support.",
          "Expert rebuttal reports identify specific CPIN propositions that are inaccurate, unsupported, or materially incomplete — with source-backed alternatives.",
        ],
      },
      {
        heading: "Rebuttal methodology",
        content: [
          "Effective rebuttal requires: identifying the specific CPIN propositions in dispute; citing more current or authoritative sources; explaining why the CPIN's conclusion does not follow from its own sources; and providing alternative analysis grounded in field research.",
          "Rebuttal reports are typically shorter and more focused than full country condition reports — addressing only the contested issues.",
        ],
      },
    ],
  },
  {
    slug: "instructing-africa-experts-legal-aid",
    metaTitle: "Instructing Africa Expert Witnesses Under Legal Aid | Guide",
    metaDescription:
      "Legal Aid guide for instructing Africa expert witnesses. LAA prior authority, rates, urgent cases, and multi-country reports.",
    h1: "Instructing Africa Expert Witnesses Under Legal Aid",
    sections: [
      {
        heading: "Legal Aid funding for expert evidence",
        content: [
          "Legal Aid Agency (LAA) funding is available for expert evidence in asylum and immigration cases where the claim has merit and the expert evidence is necessary. Prior authority is required for reports exceeding standard fee thresholds.",
          "AfricaExpertWitness provides rates compatible with LAA prior authority requirements. Standard single-country country condition reports from £800 are within typical prior authority ranges.",
        ],
      },
      {
        heading: "Prior authority process",
        content: [
          "Apply for prior authority before instructing the expert. Provide: the expert's CV and qualifications; proposed scope of report; fee estimate; and explanation of why expert evidence is necessary. The LAA assesses whether the cost is proportionate to the issues in the case.",
          "Multi-issue reports (LGBTQI+, FGM, trafficking combined) and multi-country reports require higher prior authority amounts — typically £1,200–£2,500.",
        ],
      },
      {
        heading: "Urgent instructions",
        content: [
          "Where a hearing is listed within 5–10 days, urgent instruction is possible subject to expert availability. Contact AfricaExpertWitness immediately with the hearing date, funding confirmation, and scope of report required.",
          "Urgent reports may attract a supplementary fee. Confirm LAA prior authority covers the urgent rate before instruction.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
