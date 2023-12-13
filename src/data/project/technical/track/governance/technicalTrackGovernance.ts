import { TechnicalTrackGovernance } from "../../../../../types";

export const Technical_Track_Governance: TechnicalTrackGovernance[] = [
  {
    title: "Data Models & Formats",
    description:
      "“This building block will provide guidelines and tools for data space initiatives to publish, create, and maintain shared domain specific vocabularies.” (as defined in the DSSC blueprint)",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/dssc-technical-building-blocks/#1-toc-title",
    },
    functionalities: [
      {
        desctipion:
          "For the skills context and its specific requirements in terms of semantic interoperability, specific functions are required as extension of:",
        functions: [
          {
            description:
              "Integration and alignment of multiple data models to address overlapping or related concepts (DSSC blueprint Function 5):",
            subDescription: [
              "Data Format Conversion, Data Structure Conversion and Taxonomy /Ontology /Learner Model Conversions",
            ],
          },
          {
            description:
              "Easy creation of standardised data models from data assets that are not compliant with standards (DSSC blueprint Function 4):",
            subDescription: ["(Skills) Data Normalisation", " Language Models"],
          },
        ],
      },
      {
        desctipion:
          "For the skills context and its specific requirements in terms of data quality, a specific function is required:",
        functions: [
          {
            description: "Data Quality Assurance",
          },
        ],
      },
    ],
    standards: [
      {
        name: "OSLO standard (based on RDF/OWL)",
        website:
          "https://joinup.ec.europa.eu/collection/oslo-open-standards-linked-organisations-0/about",
      },
      {
        name: "ESCO",
        website: "https://esco.ec.europa.eu/en/classification",
      },
      {
        name: "Lightcast Ontology",
        website:
          "https://lightcast.io/open-skills/skills/KS1278N6G5S9YYGB8SMR/ontologies",
      },
      {
        name: "LinkedIn Ontology",
        website:
          "https://learn.microsoft.com/en-us/linkedin/shared/references/v2/standardized-data/skills",
      },
      {
        name: "Xbildung",
        website:
          "https://www.xrepository.de/details/urn:xoev-de:xbildung-de:def:standard:xbildung_0.6",
      },
      {
        name: "Schema.org Educational or Occupational Credential",
        website: "https://schema.org/",
      },
      {
        name: "CEDS",
        website: "https://ceds.ed.gov/",
      },
      {
        name: "IEEE 1484.20.3",
        website: "https://standards.ieee.org/ieee/1484.20.3/10749/",
      },
      {
        name: "JSON-LD",
        website: "https://json-ld.org/",
      },
      {
        name: "ROME",
        website:
          "https://www.data.gouv.fr/fr/datasets/repertoire-operationnel-des-metiers-et-des-emplois-rome/",
      },
      {
        name: "nodefr",
        website: "https://hal.science/hal-02161156",
      },
      {
        name: "ISCO-08",
        website: "https://www.ilo.org/public/english/bureau/stat/isco/isco08/",
      },
      {
        name: "CompetentNL",
        website: "https://www.competentnl.nl/",
      },
      {
        name: "SKOS",
        website: "https://www.w3.org/2004/02/skos/",
      },
      {
        name: "HR-XML/ HR-RDF",
        website: "https://fr.wikipedia.org/wiki/Human_Resource_XML",
      },
    ],
    referenceImplementations: [
      {
        name: "EQF",
        website:
          "https://europa.eu/europass/en/europass-tools/european-qualifications-framework#:~:text=The%20EU%20developed%20the%20European,and%20professional%20development%20across%20Europe.",
      },
      {
        name: "ELMO",
        website: "https://github.com/emrex-eu/elmo-schemas",
      },
      {
        name: "HeadAI Graphmind",
        website: "https://headai.com/",
      },
    ],
  },
  {
    title: "Data Exchange",
    description:
      "“This building block should provide guidelines and technical specifications about common communication protocols that all data space roles can use to transmit standardised data.” (as defined in the DSSC blueprint).",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/dssc-technical-building-blocks/#2-toc-title",
    },
    functionalities: [
      {
        desctipion:
          "For the skills context and its specific requirements in terms of the human-centred approach and personal data protection, specific functions are required as extension of:",
        functions: [
          {
            description:
              "Generic data exchange protocols (DSSC blueprint Function 2):",
            subDescription: [
              "Safeguard for personal data.",
              "Privacy preserving data exchange protocols.",
            ],
          },
        ],
      },
    ],
    standards: [
      {
        name: "eIDAS",
        website:
          "https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation",
      },
      {
        name: "xAPI",
        website: "https://xapi.com/",
      },
      {
        name: "cmi5",
        website:
          "https://xapi.com/cmi5/?utm_source=google&utm_medium=natural_search",
      },
      {
        name: "HTTP",
        website: "https://www.w3.org/Protocols/",
      },
      {
        name: "REST API",
        website: "https://www.w3.org/2001/sw/wiki/REST",
      },
    ],
    referenceImplementations: [
      {
        name: "GraphQL",
        website: "https://graphql.org/learn/",
      },
      {
        name: "LTI",
        website:
          "https://www.imsglobal.org/activity/learning-tools-interoperability",
      },
      {
        name: "OOAPI",
        website: "https://openonderwijsapi.nl/#/",
      },
      {
        name: "EduAPI",
        website: "https://www.imsglobal.org/edu-api",
      },
    ],
  },
  {
    title: "Access & Usage Policies and Control",
    description:
      "“This building block aims at outlining the available options for achieving this goal of Access and Usage Policies and Control, such as which mark-up languages can be used and whether there are any templates/models available for expressing access and usage policies.” (as defined in the DSSC blueprint).",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/dssc-technical-building-blocks/#5-toc-title",
    },
    functionalities: [
      {
        desctipion:
          "For the skills context and its specific requirements in terms of the human-centred approach and consent, specific functions are required:",
        functions: [
          {
            description: "PDI Consent",
          },
          {
            description: "Personal Data Access Logs",
          },
        ],
      },
    ],
    standards: [
      {
        name: "Kantara Consent Receipt",
        website: "https://kantarainitiative.org/",
      },
      {
        name: "Verifiable Credentials",
        website: "https://www.w3.org/TR/vc-data-model-2.0/",
      },
      {
        name: "Data Privacy Vocabulary W3C",
        website: "https://w3c.github.io/dpv/dpv/",
      },
      {
        name: "ODRL",
        website: "https://www.w3.org/TR/odrl-model/",
      },
      {
        name: "JSON-LD",
        website: "https://json-ld.org/",
      },
    ],
    referenceImplementations: [
      {
        name: "UMA",
        website:
          "https://docs.kantarainitiative.org/uma/wg/rec-oauth-uma-grant-2.0.html",
      },
      {
        name: "MyData Principles",
        website: "https://www.mydata.org/about/purposes-principles/",
      },
      {
        name: "Prometheus-X",
        website: "https://github.com/Prometheus-X-association",
      },
      {
        name: "MyDataShare",
        website: "https://www.mydatashare.com/",
      },
      {
        name: "VisionsTrust",
        website: "https://catalog.visionstrust.com/",
      },
    ],
  },
  {
    title: "Identity Management",
    description:
      "“The building block should create and offer guidelines and tools that enable data space initiatives to determine, establish, and manage their own standards and mechanisms for identifying, authenticating, and authorizing any entities within their data space.” (as defined in the DSSC blueprint).",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/dssc-technical-building-blocks/#6-toc-title",
    },
    functionalities: [
      {
        desctipion:
          "For the skills context and its specific requirements in terms of the human-centred approach, specific functions are required:",
        functions: [
          {
            description: "PDI Identity",
          },
        ],
      },
    ],
    standards: [
      {
        name: "EDC",
        website: "https://projects.eclipse.org/projects/technology.edc",
      },
      {
        name: "OEPass",
        website: "https://oepass.eu/",
      },
      {
        name: "Micro credentials",
        website:
          "https://www.etf.europa.eu/sites/default/files/2023-05/Micro-Credential%20Guidelines%20Final%20Delivery.pdf",
      },
      {
        name: "W3C Verifiable Credentials",
        website: "https://www.w3.org/TR/vc-data-model-2.0/",
      },
      {
        name: "Confidential Storage",
        website: "https://identity.foundation/confidential-storage/",
      },
      {
        name: "W3C WebID",
        website: "https://www.w3.org/wiki/WebID",
      },
      {
        name: "DIDs",
        website: "https://www.w3.org/TR/did-core/",
      },
      {
        name: "OpenID Connect",
        website: "https://openid.net/developers/how-connect-works/",
      },
      {
        name: "SAML 2.0",
        website:
          "https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=security",
      },
      {
        name: "OAuth 2.0 Authorisation Server Metadata",
        website: "https://oauth.net/2/authorization-server-metadata/",
      },
    ],
    referenceImplementations: [
      {
        name: "EDCI",
        website: "https://europa.eu/europass/de/edci-standards",
      },
      {
        name: "SOLID",
        website: "https://solidproject.org/",
      },
      {
        name: "eSignature",
        website:
          "https://ec.europa.eu/digital-building-blocks/wikis/display/DIGITAL/eSignature",
      },
      {
        name: "MyAcademicID",
        website: "https://myacademic-id.eu/",
      },
      {
        name: "eduID",
        website: "https://eduid.nl/",
      },
    ],
  },
  {
    title: "Trust",
    description: `“This building block should specify the functioning of trust anchors in a data space: what are they? How can they be used and how can they work together? And how do they work together with the identity management building block?” (as defined in the DSSC blueprint).<br />
      “Therefore, the purpose of this building block is to provide assurance to all participants of a data space to ensure the secure and reliable exchange of data between different entities within a data ecosystem while fostering data sovereignty” (as defined in the DSSC blueprint).
      `,
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/dssc-technical-building-blocks/#7-toc-title",
    },
    functionalities: [
      {
        desctipion:
          "For the skills context and its specific requirements in terms of the human-centred approach and personal data protection, specific functions are required:",
        functions: [
          {
            description: "Trustworthy AI assessment",
          },
        ],
      },
    ],
    standards: [
      {
        name: "W3C Verifiable Credentials",
        website: "https://www.w3.org/TR/vc-data-model-2.0/",
      },
      {
        name: "DIDs",
        website: "https://www.w3.org/TR/did-core/",
      },
      {
        name: "eIDAS",
        website:
          "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2014.257.01.0073.01.ENG",
      },
      {
        name: "EV SSL",
        website:
          "https://www.globalsign.com/fr/centre-information-ssl/definition-certificat-ev-ssl",
      },
    ],
    referenceImplementations: [
      {
        name: "EBSI",
        website:
          "https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Home",
      },
      {
        name: "Open Badges",
        website: "https://openbadges.org/",
      },
      {
        name: "Open Badge Passport",
        website: "https://openbadgepassport.com/",
      },
    ],
  },
  {
    title: "Data, Services and Offerings Descriptions",
    description:
      "“This building block provides guidelines and tools for the conceptualisation and implementation of self-descriptions.” (as defined in the DSSC blueprint)",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/dssc-technical-building-blocks/#9-toc-title",
    },
    functionalities: [
      {
        desctipion:
          "For the skills context and its specific requirements coming from the business model, specific functions are required:",
        functions: [
          {
            description: "Offering",
          },
        ],
      },
    ],
    standards: [
      {
        name: "CTDL",
        website:
          "https://credentialengine.org/credential-transparency/ctdl/#:~:text=What%20is%20the%20CTDL%3F,discovery%20and%20cross%2Dsystem%20interoperability.",
      },
      {
        name: "JSON-LD",
        website: "https://json-ld.org/",
      },
    ],
    referenceImplementations: [
      {
        name: "DigComp",
        website: "https://joint-research-centre.ec.europa.eu/digcomp_en",
      },
    ],
  },
  {
    title: "Publication & Discovery",
    description:
      "“Once individual self-descriptions have been created, it should be possible to publish them in a catalogue and enable other participants of the data space to find them. This is the scope of the building block for Publication & Discovery.” (as defined in the DSSC blueprint).",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/dssc-technical-building-blocks/#10-toc-title",
    },
    functionalities: [
      {
        desctipion:
          "For the skills context and its specific requirements in terms of the human-centred approach in general, specific functions are required:",
        functions: [
          {
            description: "PDI Catalogue",
          },
          {
            description: "PDI Distributed data visualization",
          },
        ],
      },
      {
        desctipion:
          "For the skills context and its specific requirements coming from the business model, specific functions are required:",
        functions: [
          {
            description: "Publication and discovery services",
          },
        ],
      },
    ],
    standards: [
      {
        name: "Single Digital Gateway (SDG)",
        website:
          "https://single-market-economy.ec.europa.eu/single-market/single-digital-gateway_en",
      },
      {
        name: "JSON-LD",
        website: "https://json-ld.org/",
      },
      {
        name: "DCAT v3",
        website: "https://www.w3.org/TR/vocab-dcat-3/",
      },
      {
        name: "W3C Verifiable Credentials",
        website: "https://www.w3.org/TR/vc-data-model-2.0/",
      },
    ],
    referenceImplementations: [
      {
        name: "Formacode",
        website: "https://formacode.centre-inffo.fr/",
      },
      {
        name: "SCORM",
        website: "https://scorm.com/",
      },
      {
        name: "IMS Caliper Analytics",
        website:
          "https://www.imsglobal.org/activity/caliper#:~:text=Caliper%20Analytics%20enables%20institutions%20to,Student%20recruitment%20and%20retention%20plans",
      },
      {
        name: "International Data Spaces",
        website: "https://internationaldataspaces.org/",
      },
      {
        name: "GAIA-X",
        website: "https://gaia-x.eu/",
      },
      {
        name: "Prometheus-X",
        website: "https://prometheus-x.org/",
      },
      {
        name: "TQF",
        website:
          "https://www.colorado.edu/teaching-quality-framework/about-tqf",
      },
    ],
  },
  {
    title: "Marketplaces & Usage Accounting",
    description:
      "“Data spaces can provide support the creation of multi-sided markets where participants generate (monetary) value out of sharing data. This building block describes common mechanisms for establishing marketplaces of data/services and the related usage accounting (e.g., for billing). There can be different ways of achieving this, e.g., through intermediaries or peer-to-peer.” (as defined in the DSSC blueprint).",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/dssc-technical-building-blocks/#11-toc-title",
    },
    functionalities: [
      {
        desctipion:
          "For the skills context and its specific requirements coming from the business model, specific functions are required:",
        functions: [
          {
            description: "Contract / Order",
          },
          {
            description: "Marketplace",
          },
          {
            description: "Billing",
          },
          {
            description: "Aftersales",
          },
        ],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
  {
    title: "Data spaces protocol building block",
    description:
      "“A Data Space Protocol is used in the context of data spaces with the purpose to support interoperability. It is a set of specifications designed to facilitate interoperable and sovereign data sharing between entities. These specifications define the schemas and protocols required for entities to, for example, publish data, negotiate usage agreements, and access data as part of a federation of technical systems termed a data space.” (as defined in the DSSC blueprint).",
    wiki: {
      link: "",
    },
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
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/skills-data-space-specific-technical-building-blocks/#0-toc-title",
    },
    functionalities: [
      {
        desctipion: `●	The users give or revoke the right to mobilize their data, wherever it is stored, to train AI models.<br />
        ●	A decentralised federated learning protocol allows to train AI models without disclosing users' contributions. Whereas today, the training of AI imposes the need to provide the data in clear to a central actor. Individuals no longer have to arbitrate between altruism and confidentiality. Since data is no longer shared, AI researchers can focus on their core business because they no longer have to spend time on compliance for data access.<br/>
        By mobilising data at its source, decentralised learning increases the relevance of AIs by allowing them to train on more transversal, sensitive and up-to-date data, from multiple sources: data is no longer shared to benefit from the service.
        
            `,
        functions: [],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
  {
    title: "PDI Consent",
    description:
      "Ensuring that human centricity aspect is taken care of in every decision.",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/governance-building-blocks/#2-toc-title",
    },
    functionalities: [
      {
        desctipion: "",
        functions: [
          {
            description:
              "The consent service allows participants of the data space to generate a consent towards an end user to share their data with another participant of the data space.",
          },
          {
            description:
              "People can manage their consent from the services concerned in the data exchange or from their Personal Data Intermediary where they can find and manage all their consents from a single place",
          },
          {
            description:
              "The consent is generated from a data sharing agreement existing between the parties sharing the data; the consent triggers the real data exchange or access.",
          },
        ],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
  {
    title: "PDI Identity",
    description:
      "Ensuring that human centricity aspect is taken care of in every decision.",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/governance-building-blocks/#3-toc-title",
    },
    functionalities: [
      {
        desctipion: "",
        functions: [
          {
            description:
              "Ensuring interoperability across personal identities, providers and standards, including identity delivery tools that are compatible with the use of wallets.",
          },
        ],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
  {
    title: "PDI Catalogue",
    description:
      "Ensuring that human centricity aspect is taken care of in every decision.",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/governance-building-blocks/#6-toc-title",
    },
    functionalities: [
      {
        desctipion: "",
        functions: [
          {
            description: `Allowing people to have a <span>user-friendly catalogue</span> of data users and sources of their personal data space and interact with them from a single point.`,
          },
          {
            description:
              "Allowing people to easily navigate and find the apps, data users and data sources of their personal data space and be matched with the most relevant applications according to their needs and preferences.",
          },
          {
            description:
              "Allowing people to be informed on the risks and value of sharing their personal data with the data space participants.",
          },
        ],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
  {
    title: "PDI Distributed Data Visualisation",
    description:
      "Ensuring that human centricity aspect is taken care of in every decision.",
    wiki: {
      link: "https://www.skillsdataspace.eu/blueprint/governance-building-blocks/#5-toc-title",
    },
    functionalities: [
      {
        desctipion: "",
        functions: [
          {
            description:
              "Allowing recommendations to be shown to people in any UI of the data space",
          },
          {
            description:
              "The data model that is built/constructed/manipulated in the service layer (data storages, APIs, AIs, service providers, etc) and/or in the edge and finally passed to the UI/visualization component in client side.",
          },
          {
            description:
              "Visualization component that can be embedded into any application like Google Ad -plugin component can be embedded into any web page or app. This Google Ad -type of approach is meant to ensure the UI & visualization mechanism is embeddable to any part of the data space.",
          },
        ],
      },
    ],
    standards: [],
    referenceImplementations: [],
  },
];
