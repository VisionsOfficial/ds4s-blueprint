export type NavBarLinks = {
  name:
    | "Home"
    | "Use cases"
    | "Building blocks"
    | "Initiatives"
    | "Wiki"
    | "Governance model";
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
  | "Orchestrator"
  | "Infrastructure service"
  | "Infrastructure providers"
  | "Individuals: Matilda, Francesco, Anita"
  | "Organisations: DigiFutUX, IntelliAITraining"
  | "Data Intermediary: InfraTrust"
  | "Governance Authority (association): Fire-X"
  | "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool"
  | "Data Providers (Organisational): Jobo, JobRightNow and Jobijob"
  | "Orchestrator: SkillsFast"
  | "Service Providers: SkillProfiX, SDAI, SkillFast"
  | "Governance Authority (association): Fire X";

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
  wiki: {
    link: string;
  };
  functionalities: {
    desctipion: string;
    functions: {
      description: string;
      subDescription?: string[];
    }[];
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

export type UXInstruction = {
  title: "Accessibility" | "Trust" | "Holistic UX Approach";
  wiki: {
    link: string;
  };
  descriptions: {
    short?: string;
    long: string;
  };
};

export type BuildingBlocks =
  | "Identity Management"
  | "Data Models & Formats"
  | "Data Exchange"
  | "Access & Usage Policies and Control"
  | "Trust"
  | "Data, Services and Offerings Descriptions"
  | "Publication & Discovery"
  | "Marketplaces & Usage Accounting"
  | "Decentralized AI training";

export type ContentStakeholder = {
  name: Stakeholder;
  image: string;
  categories: CategoriesContentStakeholder[];
};

export type CategoriesContentStakeholder = {
  name: StakeholderCategories;
  content: {
    title: string;
    wiki?: string;
    governance?: {
      title: string;
      definition: string;
      obligations?: string[];
      wiki?: string;
    }[];
    business?: {
      title: string;
      definition: string;
      wiki?: string;
      examples?: string[];
      valuePropositions?: {
        dataSpace: string[];
        roleValue: string[];
      };
    }[];
    definition: string;
    examples?: string[];
    bbs?: {
      name: BuildingBlocks;
      path: string;
    }[];
    secondExamples?: string[];
    obligations?: string[];
    benefits?: {
      actor: "Monetary benefits" | "Non-monetary benefits";
      definition: string;
    }[];
    costsRisks?: {
      costs: string;
      risks: string;
    };
  };
};

export type SchemaUseCase =
  | "business model radar"
  | "data value chain tracker"
  | "data value chain tracker BB";
