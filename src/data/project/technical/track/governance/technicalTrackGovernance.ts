import { TechnicalTrackGovernance } from "../../../../../types";

export const Technical_Track_Governance: TechnicalTrackGovernance[] = [
  {
    title: "Data Models & Formats",
    description:
      "“This building block will provide guidelines and tools for data space initiatives to publish, create, and maintain shared domain specific vocabularies.” (as defined in the DSSC blueprint)",
    functionalities: [
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements in terms of semantic interoperability, specific functions are required:",
        functions: [
          "Data Format Conversion",
          "Data Structure Conversion",
          "Taxonomy /Ontology/ Learner Model Conversions",
          "(Skills) Data Normalisation",
          "Language Models",
        ],
      },
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements in terms of data quality, a specific function is required:",
        functions: ["Data Quality Assurance"],
      },
    ],
    standards: [
      {
        name: "OSLO standard (based on RDF/OWL)",
        website: "http://www.example.com",
      },
      {
        name: "Xbildung",
        website: "http://www.example.com",
      },
      {
        name: "Schema.org Educational or Occupational Credential",
        website: "http://www.example.com",
      },
      {
        name: "CEDS",
        website: "http://www.example.com",
      },
      {
        name: "IEEE 1484.20.3",
        website: "http://www.example.com",
      },
    ],
    referenceImplementations: [
      {
        name: "IFrame",
        website: "http://www.example.com",
      },
      {
        name: "EQF",
        website: "http://www.example.com",
      },
      {
        name: "SKOS",
        website: "http://www.example.com",
      },
      {
        name: "HR-RDF which extends HR-XML",
        website: "http://www.example.com",
      },
      {
        name: "ELMO",
        website: "http://www.example.com",
      },
    ],
  },
  {
    title: "Data Exchange",
    description:
      "“This building block should provide guidelines and technical specifications about common communication protocols that all data space roles can use to transmit standardised data.” (as defined in the DSSC blueprint).",
    functionalities: [
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements in terms of the human-centred approach and personal data protection, specific functions are required: ",
        functions: [
          "Safeguard for personal data.",
          "Privacy preserving data exchange protocols.",
        ],
      },
    ],
    standards: [
      {
        name: "eIDAS",
        website: "http://www.example.com",
      },
      {
        name: "xAPI",
        website: "http://www.example.com",
      },
    ],
    referenceImplementations: [
      {
        name: "cmi5",
        website: "http://www.example.com",
      },
      {
        name: "GraphQL",
        website: "http://www.example.com",
      },
      {
        name: "HATEOAS",
        website: "http://www.example.com",
      },
      {
        name: "LTI",
        website: "http://www.example.com",
      },
      {
        name: "OOAPI",
        website: "http://www.example.com",
      },
      {
        name: "EduAPI",
        website: "http://www.example.com",
      },
    ],
  },
  {
    title: "Access & Usage Policies and Control",
    description:
      "“This building block aims at outlining the available options for achieving this goal of Access and Usage Policies and Control, such as which mark-up languages can be used and whether there are any templates/models available for expressing access and usage policies.” (as defined in the DSSC blueprint).",
    functionalities: [
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements in terms of the human-centred approach and consent, specific functions are required:",
        functions: ["Consent", "Personal Data Access Logs"],
      },
    ],
    standards: [
      {
        name: "Kantara Consent Receipt",
        website: "htpp://www.example.com",
      },
      {
        name: "Verifiable Credentials",
        website: "htpp://www.example.com",
      },
      {
        name: "Data Privacy Vocabulary W3C",
        website: "htpp://www.example.com",
      },
    ],
    referenceImplementations: [
      {
        name: "UMA",
        website: "htpp://www.example.com",
      },
      {
        name: "MyData Principles",
        website: "htpp://www.example.com",
      },
      {
        name: "Prometheus-X",
        website: "htpp://www.example.com",
      },
      {
        name: "MyDataShare",
        website: "htpp://www.example.com",
      },
      {
        name: "VisionsTrust",
        website: "htpp://www.example.com",
      },
    ],
  },
  {
    title: "Identity Management",
    description:
      "“The building block should create and offer guidelines and tools that enable data space initiatives to determine, establish, and manage their own standards and mechanisms for identifying, authenticating, and authorizing any entities within their data space.” (as defined in the DSSC blueprint).",
    functionalities: [
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements in terms of the human-centred approach, specific functions are required:",
        functions: ["PDI Identity"],
      },
    ],
    standards: [
      {
        name: "EDC",
        website: "http://www.example.com",
      },
      {
        name: "OEPass",
        website: "http://www.example.com",
      },
      {
        name: "Micro credentials",
        website: "http://www.example.com",
      },
      {
        name: "W3C Verifiable Credentials",
        website: "http://www.example.com",
      },
      {
        name: "W3C Verifiable Presentations",
        website: "http://www.example.com",
      },
      {
        name: "Confidential Storage",
        website: "http://www.example.com",
      },
      {
        name: "W3C WebID",
        website: "http://www.example.com",
      },
      {
        name: "DIDs",
        website: "http://www.example.com",
      },
      {
        name: "OpenID Connect",
        website: "http://www.example.com",
      },
    ],
    referenceImplementations: [
      {
        name: "EDCI",
        website: "http://www.example.com",
      },
      {
        name: "SOLID",
        website: "http://www.example.com",
      },
      {
        name: "eSignature",
        website: "http://www.example.com",
      },
      {
        name: "OICD",
        website: "http://www.example.com",
      },
      {
        name: "MyAcademicID",
        website: "http://www.example.com",
      },
      {
        name: "W3C DID",
        website: "http://www.example.com",
      },
      {
        name: "OAuth 2.0 Authorisation Server Metadata",
        website: "http://www.example.com",
      },
      {
        name: "SAML 2.0",
        website: "http://www.example.com",
      },
      {
        name: "SOLIDW3C",
        website: "http://www.example.com",
      },
    ],
  },
  {
    title: "Trust",
    description:
      "“This building block should specify the functioning of trust anchors in a data space: what are they? How can they be used and how can they work together? And how do they work together with the identity management building block?” (as defined in the DSSC blueprint).",
    functionalities: [
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements in terms of the human-centred approach and personal data protection, specific functions are required:",
        functions: ["Trustworthy AI assessment"],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
  {
    title: "Data, Services and Offerings Descriptions",
    description:
      "“This building block provides guidelines and tools for the conceptualisation and implementation of self-descriptions.” (as defined in the DSSC blueprint)",
    functionalities: [
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements coming from the business model, specific functions are required:",
        functions: ["Offerings"],
      },
    ],
    standards: [
      {
        name: "RDFS",
        website: "http://www.example.com",
      },
      {
        name: "CTDL Suite",
        website: "http://www.example.com",
      },
      {
        name: "RDF",
        website: "http://www.example.com",
      },
      {
        name: "CTDL-ASN",
        website: "http://www.example.com",
      },
      {
        name: "CompetentNL",
        website: "http://www.example.com",
      },
    ],
    referenceImplementations: [
      {
        name: "ESCO",
        website: "http://www.example.com",
      },
      {
        name: "ROME",
        website: "http://www.example.com",
      },
      {
        name: "nodefr",
        website: "http://www.example.com",
      },
      {
        name: "ISCO-08",
        website: "http://www.example.com",
      },
      {
        name: "DigComp",
        website: "http://www.example.com",
      },
    ],
  },
  {
    title: "Publication & Discovery",
    description:
      "“Once individual self-descriptions have been created, it should be possible to publish them in a catalogue and enable other participants of the data space to find them. This is the scope of the building block for Publication & Discovery.” (as defined in the DSSC blueprint).",
    functionalities: [
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements in terms of the human-centred approach in general, specific functions are required:",
        functions: [
          "PDI Data and service catalogue",
          "PDI Distributed data visualization",
        ],
      },
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements coming from the business model, specific functions are required:",
        functions: ["Publication and discovery services"],
      },
    ],
    standards: [
      {
        name: "TQF",
        website: "http://www.example.com",
      },
      {
        name: "Single Digital Gateway (SDG)",
        website: "http://www.example.com",
      },
      {
        name: "JSON-LD",
        website: "http://www.example.com",
      },
      {
        name: "DCAT v3",
        website: "http://www.example.com",
      },
      {
        name: "Shex / Shacl",
        website: "http://www.example.com",
      },
      {
        name: "VC / DID",
        website: "http://www.example.com",
      },
    ],
    referenceImplementations: [
      {
        name: "Power BI",
        website: "http://www.example.com",
      },
      {
        name: "Formacode",
        website: "http://www.example.com",
      },
      {
        name: "SCORM",
        website: "http://www.example.com",
      },
      {
        name: "IMS Caliper Analytics",
        website: "http://www.example.com",
      },
      {
        name: "IDS, GAIA-X and Prometheus-X metadata brokers are the baseline to build the Catalogue",
        website: "http://www.example.com",
      },
    ],
  },
  {
    title: "Marketplaces & Usage Accounting",
    description:
      "“Data spaces can provide support the creation of multi-sided markets where participants generate (monetary) value out of sharing data. This building block describes common mechanisms for establishing marketplaces of data/services and the related usage accounting (e.g., for billing). There can be different ways of achieving this, e.g., through intermediaries or peer-to-peer.” (as defined in the DSSC blueprint).",
    functionalities: [
      {
        desctipion:
          "On top of the DSSC building block, for the skills context and its specific requirements coming from the business model, specific functions are required: ",
        functions: ["Contract / Order", "Marketplace", "Billing", "Aftersales"],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
  {
    title: "Data spaces protocol building block",
    description:
      "“A Data Space Protocol is used in the context of data spaces with the purpose to support interoperability. It is a set of specifications designed to facilitate interoperable and sovereign data sharing between entities. These specifications define the schemas and protocols required for entities to, for example, publish data, negotiate usage agreements, and access data as part of a federation of technical systems termed a data space.” (as defined in the DSSC blueprint).",
    functionalities: [
      {
        desctipion:
          "Due to the specific requirements in the skills context in terms of semantic interoperability, this focus is chosen.",
        functions: [],
      },
    ],
    standards: [
      {
        name: "",
        website: "",
        description:
          "“The Data Spaces Protocol has an overarching influence on other building blocks” (as defined in the DSSC blueprint). Hence no separate skills specific standards are found in the DS4Skills inventory",
      },
    ],
    referenceImplementations: [
      {
        name: "Prometheus-X",
        website: "htpp://www.example.com",
      },
    ],
  },
  {
    title: "Decentralized AI training",
    description:
      "AI providers need user data to train their models, while data providers need AI models to provide innovative features to their users. This building block is an answer to this need by making the link between AI providers and data providers through secure and trusted decentralized learning protocol.",
    functionalities: [
      {
        desctipion: `Key Functionalities <br />
            Users give or revoke consent or their personal data.<br />
            Each contributor securely receives the AI model to train, including the weights, and the related algorithms. The relevant user data, already in place, is identified and queried.   <br />
            The computation is then made in a secure environment to guarantee the robustness and trustworthiness of the execution.  <br />
            During the process, no user data is exposed whatsoever, ensuring the security and the privacy of the users.  <br />
            Any organisation or individual can implement its own learning model and submit it to a call for contribution so that individuals can participate with their data.
            `,
        functions: [],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
];
