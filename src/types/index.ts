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

export type UseCase = "map" | "match" | "forecast";

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
  | "Infrastructure providers";

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
  | "black";
