export type Expert = {
  name: string;
  jobTitle: string;
  description: string;
  expertise: string[];
  regions: string[];
};

export const experts: Expert[] = [
  {
    name: "Dr Amara Okafor",
    jobTitle: "West Africa Country Conditions Expert",
    description:
      "PhD in African Politics (SOAS). Fifteen years of field research in Nigeria, Ghana, and Guinea. Tribunal-accepted expert on Boko Haram, LGBTQI+ persecution under SSMPA, and FGM prevalence analysis. Fluent in English, Hausa, and Yoruba.",
    expertise: ["Nigeria", "Ghana", "Guinea", "LGBTQI+ asylum", "FGM", "Political persecution"],
    regions: ["West Africa"],
  },
  {
    name: "Dr Hassan Abdi",
    jobTitle: "Horn of Africa & East Africa Expert",
    description:
      "PhD in Conflict Studies (Oxford). Specialist in Somalia (MOJ country guidance), Eritrea (MA guidance), Ethiopia, and Sudan. Extensive clan structure analysis experience. Fluent in English, Somali, and Amharic.",
    expertise: ["Somalia", "Eritrea", "Ethiopia", "Sudan", "Clan evidence", "Country guidance"],
    regions: ["Horn of Africa", "East Africa"],
  },
  {
    name: "Advocate Thandiwe Mthembu",
    jobTitle: "Southern Africa & Investment Arbitration Expert",
    description:
      "Advocate of the High Court of South Africa. Zimbabwe country guidance (RN) specialist. ICSID experience in DRC mining and Mozambique LNG disputes. OHADA and SADC legal framework expertise.",
    expertise: ["Zimbabwe", "DRC", "Mozambique", "ICSID arbitration", "African law"],
    regions: ["Southern Africa"],
  },
];
