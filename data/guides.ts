export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  aboutServiceId?: string;
  sections: { heading: string; content: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "nigeria-cpin-guide-solicitors",
    metaTitle: "Nigeria CPINs 2025-2026: Solicitor's Guide to Country Guidance",
    metaDescription:
      "Current Home Office CPINs on Nigeria for UK asylum solicitors. How to use CPINs, challenge findings, and instruct expert witnesses beyond the CPIN.",
    h1: "Nigeria CPINs 2025-2026: A Solicitor's Guide to Current Country Guidance",
    aboutServiceId: "cpin-challenge",
    sections: [
      {
        heading: "Current Nigeria CPINs",
        content: [
          "The Home Office publishes Country Policy Information Notes (CPINs) on Nigeria covering actors of protection (August 2024), separatist groups South-East including IPOB (April 2026), SOGIESC (June 2025), FGM (updated 2024), trafficking of women (updated 2024), medical treatment (December 2025), and internal relocation.",
          "The EUAA Country Guidance Nigeria 2026, published March 2026, provides parallel analysis that tribunals may consider alongside Home Office CPINs. Solicitors should cite both sources and identify where they diverge.",
        ],
      },
      {
        heading: "How to Use CPINs in Tribunal Submissions",
        content: [
          "CPINs are not binding on tribunals but carry significant weight. Solicitors should identify the relevant CPIN for the appellant's profile, extract the key findings, and address whether the appellant's individual circumstances fall within or outside the general CPIN position.",
          "Where the CPIN supports the appellant, cite it directly. Where it does not, instruct an expert to provide independent analysis challenging the CPIN's general findings with profile-specific and locality-specific evidence.",
        ],
      },
      {
        heading: "The Expert Role Beyond the CPIN",
        content: [
          "An expert witness does not simply reproduce CPIN content. The expert's role is to provide independent, objective analysis of whether the appellant's specific profile creates a real risk, applying current field research and source citations beyond the CPIN.",
          "Reports that merely restate CPIN findings without independent analysis are a red flag identified in the Adam Pipe October 2025 guide on expert reports in the immigration tribunal.",
        ],
      },
      {
        heading: "Challenging CPIN Findings",
        content: [
          "CPINs can be challenged with field research, updated country evidence, NGO reports, and profile-specific analysis. Common challenge areas include actors of protection (August 2024 CPIN overstates protection for LGBTQ+ and IPOB profiles), internal relocation (Lagos/Abuja viability for specific profiles), and SOGIESC (June 2025 CPIN general position vs individual risk).",
          "Expert reports supporting CPIN challenges must cite sources to OSCOLA standards and address the Immigration Tribunal Practice Direction paragraph 10 requirements for expert evidence.",
        ],
      },
    ],
  },
  {
    slug: "lgbtq-nigeria-asylum-guide",
    metaTitle: "LGBTQ+ Asylum from Nigeria: Expert Evidence Guide for Solicitors",
    metaDescription:
      "LGBTQ+ asylum from Nigeria expert evidence guide. SSMPA, HJ (Iran) standard, June 2025 SOGIESC CPIN, state protection, and internal relocation.",
    h1: "LGBTQ+ Asylum from Nigeria: Expert Evidence Guide",
    aboutServiceId: "lgbtq-asylum",
    sections: [
      {
        heading: "Legal Framework: SSMPA and Sharia Law",
        content: [
          "Nigeria's Same Sex Marriage (Prohibition) Act 2013 criminalises same-sex relationships with up to 14 years imprisonment. In 12 northern states, Sharia law applies with the death penalty for same-sex conduct. Expert reports must address both the statutory framework and enforcement practice.",
          "The June 2025 updated SOGIESC CPIN confirms that state protection is generally unavailable for LGBTQ+ individuals in Nigeria, with risk from both state and non-state actors.",
        ],
      },
      {
        heading: "The HJ (Iran) Standard",
        content: [
          "The HJ (Iran) [2010] UKSC 31 standard requires tribunals to accept the claimant's sexuality unless there is good reason to reject it. Expert witnesses do not determine sexuality but provide country conditions evidence on risk, enforcement, and protection.",
          "Reports should address whether the appellant's profile (visibility, family knowledge, prior incidents) creates a real risk beyond the general CPIN position.",
        ],
      },
      {
        heading: "State Protection Analysis",
        content: [
          "The August 2024 actors of protection CPIN confirms limited state protection for LGBTQ+ individuals. Police actively participate in persecution in many areas. NGO protection is limited and may itself attract attention.",
          "Expert reports must address both formal protection mechanisms and their practical effectiveness for the specific appellant.",
        ],
      },
      {
        heading: "Internal Relocation Impossibility",
        content: [
          "Internal relocation to Lagos or Abuja is not viable for LGBTQ+ Nigerians. The EUAA 2026 country guidance confirms that where persecution is by the state, internal protection is not available because SSMPA enforcement applies nationwide.",
          "Expert reports should address this directly and cite the EUAA 2026 guidance and June 2025 SOGIESC CPIN.",
        ],
      },
    ],
  },
  {
    slug: "ipob-biafra-expert-guide",
    metaTitle: "IPOB & Biafra Asylum Claims: Expert Evidence Guide",
    metaDescription:
      "IPOB and Biafra asylum expert evidence guide. Proscription, arrest risk, UK diaspora activity, April 2026 CPIN, and profile assessment.",
    h1: "IPOB & Biafra Asylum Claims: Expert Evidence Guide",
    aboutServiceId: "ipob-biafra-risk",
    sections: [
      {
        heading: "IPOB Proscription and Legal Status",
        content: [
          "IPOB was proscribed as a terrorist organisation in September 2017. Membership, support, or association with IPOB creates real risk of arrest and detention by Nigerian security forces under the Terrorism Prevention Act.",
          "The April 2026 updated CPIN on separatist groups in South-East Nigeria confirms this risk and provides the current Home Office position for tribunal submissions.",
        ],
      },
      {
        heading: "Arrest Risk and Enforcement Patterns",
        content: [
          "Expert reports address current enforcement patterns in Imo, Anambra, Abia, Enugu, and Ebonyi states, including DSS operations, army deployments, and airport interceptions.",
          "Reports distinguish between high-profile members (publicly known leaders) and low-profile supporters, as the April 2026 CPIN recognises different risk levels.",
        ],
      },
      {
        heading: "UK Diaspora Activity",
        content: [
          "The April 2026 CPIN confirms that individuals with no prior IPOB profile in Nigeria have been arrested at airports for expressing IPOB views. Expert reports assess whether the appellant's UK-based demonstrations, online activity, or leadership roles would attract Nigerian authority attention.",
          "Social media activity, protest attendance, and financial contributions to IPOB-related causes are all relevant to profile assessment.",
        ],
      },
      {
        heading: "Profile Assessment Methodology",
        content: [
          "Expert reports apply a structured methodology: identify the appellant's IPOB connection, assess visibility, analyse UK activity against known interception patterns, and conclude on real risk on return citing the April 2026 CPIN and field research.",
        ],
      },
    ],
  },
  {
    slug: "fgm-nigeria-guide",
    metaTitle: "FGM Asylum Claims from Nigeria: Expert Evidence Guide",
    metaDescription:
      "FGM Nigeria expert evidence guide. Prevalence, state protection, daughter-at-risk claims, VAPP Act 2015, and expert report structure.",
    h1: "FGM Asylum Claims from Nigeria: Expert Evidence Guide",
    aboutServiceId: "fgm-expert-reports",
    sections: [
      {
        heading: "FGM Prevalence in Nigeria",
        content: [
          "Nigeria has one of the highest absolute numbers of FGM cases globally, with significant variation by state and ethnic group. Expert reports must provide locality-specific and community-specific prevalence data, not national averages.",
          "Common high-prevalence areas include states in the South-South and South-East, but prevalence varies significantly even within regions.",
        ],
      },
      {
        heading: "Legal Framework: VAPP Act 2015",
        content: [
          "The Violence Against Persons (Prohibition) Act 2015 prohibits FGM nationally. However, enforcement is inconsistent and the updated FGM CPIN confirms that state protection is generally inadequate in practising communities.",
          "Expert reports address both the legal prohibition and practical enforcement, including whether police and courts in the specific state effectively protect against FGM.",
        ],
      },
      {
        heading: "Daughter-at-Risk Claims",
        content: [
          "In daughter-at-risk cases, the expert assesses: prevalence in the specific ethnic group and state, whether the extended family has indicated intent, whether state protection is realistically available, and whether internal relocation would provide sufficient protection.",
          "Reports should address the mother's own experience of FGM and the family's attitudes toward continuing the practice.",
        ],
      },
      {
        heading: "Expert Report Structure",
        content: [
          "FGM expert reports should follow Immigration Tribunal Practice Direction paragraph 10: expert qualifications, methodology, sources cited, specific conclusions on risk and state protection, and a declaration of independence.",
          "Reports should cross-reference the updated FGM CPIN and identify where the appellant's circumstances differ from the general CPIN position.",
        ],
      },
    ],
  },
  {
    slug: "trafficking-juju-guide",
    metaTitle: "Trafficking & Juju Ritual Asylum Claims: Expert Evidence Guide",
    metaDescription:
      "Trafficking and juju ritual Nigeria expert evidence guide. Juju mechanism, NRM, trafficking routes, expert role, and state protection.",
    h1: "Trafficking & Juju Ritual Asylum Claims: Expert Evidence Guide",
    aboutServiceId: "trafficking-juju-reports",
    sections: [
      {
        heading: "Understanding Juju in Trafficking Context",
        content: [
          "Juju rituals are used by Nigerian trafficking networks, particularly from Edo State, to bind victims through fear of supernatural consequences. Expert witnesses explain the cultural and psychological mechanism without sensationalising the practice.",
          "Understanding juju is essential for credibility assessment: victims may fear disclosure because of perceived supernatural consequences, not because their account lacks credibility.",
        ],
      },
      {
        heading: "The National Referral Mechanism (NRM)",
        content: [
          "The NRM in the UK identifies trafficking victims and provides support. Expert reports complement NRM decisions by addressing country conditions on return, including re-trafficking risk and state protection inadequacies.",
          "Reports should address the specific trafficking route (commonly Edo State to Libya/Italy/UK) and the network structure.",
        ],
      },
      {
        heading: "Trafficking Routes and Networks",
        content: [
          "Benin City in Edo State is the primary origin for Nigerian trafficking to Europe. Expert reports address the specific network, debt bondage mechanisms, and the role of juju practitioners in maintaining control.",
          "Returned victims face retaliation, stigma, and re-trafficking. The updated trafficking CPIN confirms inadequate state protection.",
        ],
      },
      {
        heading: "Expert Role in Trafficking Cases",
        content: [
          "The expert explains juju mechanism, assesses reintegration risk, addresses state protection availability, and provides cultural context for credibility assessment. Reports must comply with Immigration Tribunal Practice Direction paragraph 10.",
        ],
      },
    ],
  },
  {
    slug: "instructing-nigeria-expert",
    metaTitle: "Instructing a Nigeria Expert Witness: Solicitor's Guide",
    metaDescription:
      "How to instruct a Nigeria expert witness. Adam Pipe October 2025 guide, letter of instruction, Legal Aid prior authority, and required documents.",
    h1: "Instructing a Nigeria Expert Witness: A Solicitor's Guide",
    aboutServiceId: "country-condition-reports",
    sections: [
      {
        heading: "The Adam Pipe October 2025 Guide",
        content: [
          "Adam Pipe's Expert Reports in the Immigration Tribunal guide (October 2025, No.8 Chambers) sets out key requirements for expert evidence in immigration proceedings. Reports must be the independent product of the expert, address matters within expertise, cite sources, and comply with Practice Direction requirements.",
          "Reports that simply reproduce CPIN content without independent analysis fail to meet the standard identified in the guide.",
        ],
      },
      {
        heading: "Letter of Instruction Requirements",
        content: [
          "The letter of instruction should identify the expert's role, list questions to be addressed, provide all relevant case materials, specify the deadline, and confirm funding arrangements. For Nigeria cases, identify the specific asylum profile (LGBTQ+, IPOB, FGM, etc.) and the CPINs relevant to the claim.",
          "Include the screening record, Asylum Interview Record (AIR), Home Office refusal letter (RFRL), and client witness statement as minimum materials.",
        ],
      },
      {
        heading: "Legal Aid Prior Authority",
        content: [
          "Most Nigeria expert reports in asylum proceedings are Legal Aid funded. LAA prior authority is required before instruction. Typical LAA-approved rates are £50 to £100 per hour for report preparation, with fixed fee reports also available.",
          "Apply for prior authority as soon as the need for expert evidence is identified. Include the expert's CV, proposed scope, and estimated cost.",
        ],
      },
      {
        heading: "Documents to Provide",
        content: [
          "Provide: screening record, AIR, RFRL, any previous expert reports, country guidance decisions, CPINs relevant to the claim, client witness statement, and any supporting documentary evidence.",
          "The more complete the instruction materials, the more focused and cost-effective the expert report.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
