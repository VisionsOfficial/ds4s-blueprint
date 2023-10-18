export type NavBarLinks = {
  name: "Home" | "Use cases" | "Building blocks" | "Initiatives" | "Wiki";
  url: string;
};

export type ExploreCategories =
  | "Use cases"
  | "Building Blocks"
  | "Initiatives"
  | "Examples";

export type ExploreLinksCards = {
  linkName: string;
  url: string;
};

export type UseCase = "match" | "forecast";

export type Stakeholder =
  | "Individuals"
  | "Individuals and employees"
  | "University & Training providers"
  | "Employers"
  | "Organisational & employers"
  | "Educational Institutions"
  | "Educational & Training providers"
  | "Employment Agencies"
  | "Edtechs & AI Providers"
  | "Learning & development units"
  | "Public Institutions"
  | "Observatories"
  | "Governments & Pilocy Markers"
  | "Orchestator"
  | "Infrastructure service"
  | "Infrastructure providers"
  | "Individuals: Matilda, Francesco, Anita"
  | "Organisations: DigiFutUX, IntelliAITraining"
  | "Data Intermediary: InfraTrust"
  | "Governance Authority (association): Fire-X"
  | "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool"
  | "Data Providers (Organisational): Jobo, JobRightNow and Jobijob"
  | "Orchestator: SkillsFast"
  | "Service Providers: SkillProfiX, SDAI, SkillFast";

export type StakeholderCategories =
  | "Governance"
  | "Business"
  | "Technical"
  | "Value";

export type ColorVariant =
  | "hightLightPrimary"
  | "tertiary"
  | "lightPrimary"
  | "quaternary"
  | "secondary"
  | "primary"
  | "white"
  | "transparent"
  | "black"
  | "grey";

export type GovernanceCategories =
  | "Standards"
  | "Accession rules"
  | "Code of conduct"
  | "Use cases"
  | "Business model"
  | "Data & service usage policies"
  | "Building blocks";

export type EUDuneCategoryCard =
  | "francesco"
  | "gear"
  | "cloud"
  | "graph"
  | "login"
  | "ai"
  | "anita"
  | "money"
  | "shield";

export type TechnicalTrackGovernanceCategory =
  | "Data Models & Formats"
  | "Data Exchange"
  | "Access & Usage Policies and Control"
  | "Identity Management"
  | "Trust"
  | "Data, Services and Offerings Descriptions"
  | "Publication & Discovery"
  | "Marketplaces & Usage Accounting"
  | "Data spaces protocol building block"
  | "Decentralized AI training";

export type TechnicalTrackGovernance = {
  title: TechnicalTrackGovernanceCategory;
  description: string;
  functionalities: {
    desctipion: string;
    functions: string[];
  }[];
  standards: {
    name: string;
    website: string;
    description?: string;
  }[];
  referenceImplementations: {
    name: string;
    website: string;
  }[];
};
