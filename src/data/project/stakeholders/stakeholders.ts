import { ContentStakeholder } from "../../../types";
import { APP_IMAGES } from "../../../utils/appImages";

export const STAKEHOLDER_CONTENT: ContentStakeholder[] = [
  {
    name: "Individuals",
    image: APP_IMAGES.image.stakeholder.individuals,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Individuals (end users)",
          definition: "Person using the system for their career and learning",
          obligations: [
            "MUST participate in the value exchange",
            "CAN exerce their rights on their data across the ecosystem",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Individuals (end users)",
          definition: "End users as clients don't have business models",
          examples: [
            "Freemium model - free data products with limited features and charges users a premium for additional features.",
            "Matilda will have basic functions and some of trainings available for free.",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Individuals (end users)",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Individuals (end users)",
          definition: "Get innovative employment and orientation services.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "Bonuses, salary, allowances",
            },
            {
              actor: "Non-monetary benefits",
              definition:
                "Personalized skill development, enhanced career planning, time efficiency, job satisfaction, improved opportunities, skill validation, greater control, lifelong learning, career advancement, personal growth.",
            },
          ],
          costsRisks: {
            costs:
              "Potential cost of services, insights, results (not everything is freemium).",
            risks:
              "Limited number of services, poor data quality, high costs, and a complex system can all negatively impact the network effect, making it difficult for the data space use case to grow and improve.",
          },
        },
      },
    ],
  },
  {
    name: "University & Training providers",
    image: APP_IMAGES.image.stakeholder.employmentAgencies,
    categories: [
      {
        name: "Governance",
        content: {
          title: "University & Training providers",
          definition: "",
          governance: [
            {
              title: "University & Training providers (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title: "University & Training providers (data provider)",
              definition: "Organisations that provide data",
              obligations: [
                "MUST describe their organisations and service offerings in a machine readable format and human readable",
                "MUST define clear data set terms of use",
                "MUST accept and comply with requests from the person on data sharing, consent and GDPR rights",
                "MUST accept Personal Data Intermediary as valid representation of people",
                "MUST define pricing and value sharing on the use of the data",
              ],
            },
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "University & Training providers",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
            E.g.: Transaction, freemium, subscription model,
            `,
          examples: [],
        },
      },
      {
        name: "Technical",
        content: {
          title: "University & Training providers Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "University & Training Providers (data and service providers)",
          definition: "Match their offers with relevant profiles.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition:
                "Reduced manual work and management time of verifying skills, searching insight, and foresight into skills and trainings.",
            },
            {
              actor: "Non-monetary benefits",
              definition:
                "Enhanced employee performance, increased employee satisfaction, improved talent retention, competitive advantage, stronger employer brand, employee empowerment etc.",
            },
          ],
          costsRisks: {
            costs: "Cost of services, insights, results",
            risks:
              "Limited number of services, poor data quality, high costs, and a complex system can all negatively impact the network effect, making it difficult for the data space use case to grow and improve.",
          },
        },
      },
    ],
  },
  {
    name: "Employers",
    image: APP_IMAGES.image.stakeholder.employers,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Employers",
          definition: "",
          governance: [
            {
              title: "Employers (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title: "Employers (data provider)",
              definition: "Organisations that provide data",
              obligations: [
                "MUST describe their organisations and service offerings in a machine readable format and human readable",
                "MUST define clear data set terms of use",
                "MUST accept and comply with requests from the person on data sharing, consent and GDPR rights",
                "MUST accept Personal Data Intermediary as valid representation of people",
                "MUST define pricing and value sharing on the use of the data",
              ],
            },
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Employers Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Employers Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Employers (data providers and end users)",
          definition:
            "Match their offers with relevant profiles and get precise employee profiles. ",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Educational Institutions",
    image: APP_IMAGES.image.stakeholder.educationalInstitutions,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Educational Institutions Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Educational Institutions Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Educational Institutions Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Educational Institutions (service providers and end users)",
          definition:
            "Provide students with innovative employment and orientation services. ",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Governments & Pilocy Markers",
    image: APP_IMAGES.image.stakeholder.governmentPolicyMarkers,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Governments & Pilocy Markers Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Governments & Pilocy Markers Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Governments & Pilocy Markers Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Governments and Policy Makers (data providers and end users)",
          definition:
            "Frame training policies based on regional skills gap analysis and promote courses and training that fill the identified skills gaps. ",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Employment Agencies",
    image: APP_IMAGES.image.stakeholder.employmentAgencies,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Employment Agencies Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Employment Agencies Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Employment Agencies Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Employment Agencies (service providers and end users)",
          definition: "Offer innovative employment and orientation services.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Edtechs & AI Providers",
    image: APP_IMAGES.image.stakeholder.edtechsAIProviders,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Edtechs & AI Providers (data and service providers)",
          governance: [
            {
              title:
                "Edtechs & AI Providers (service providers for organisation)",
              definition:
                "Organisations that provide innovative services for organisations (B2B / B2G)",
              obligations: [
                "MUST describe their organisations and service offerings in a machine readable format and human readable",
                "MUST define clear data policies stating what data is used, for which purposes, the security measures, the third parties it is shared with, if there is an advertisement model in a human and machine readable way",
                "MUST use the data only for stated purposes",
                "MUST define pricing / value sharing on use of services",
                "MUST accept and comply with requests from the person on data sharing, consent and GDPR rights",
                "MUST accept PDIs as valid representation of people",
                "MUST inform if AI is used in the product",
                "MUST inform on the attributes and data sets used to create the AI product model",
                "MUST respect data set terms & conditions",
                "MUST describe risks and safegaurds on AI",
              ],
            },
            {
              title:
                "Edtechs & AI Providers (service providers for Individuals)",
              definition:
                "Organisations that provide innovative services for individuals (B2C)",
              obligations: [
                "MUST describe their organisations and service offerings in a machine readable format and human readable",
                "MUST define clear data policies stating what data is used, for which purposes, the security measures, the third parties it is shared with, if there is an advertisement model in a human and machine readable way",
                "MUST use the data only for stated purposes",
                "MUST define pricing / value sharing on use of services",
                "MUST accept and comply with requests from the person on data sharing, consent and GDPR rights",
                "MUST accept PDIs as valid representation of people",
                "MUST inform if AI is used in the product",
                "MUST inform on the attributes and data sets used to create the AI product model",
                "MUST respect data set terms & conditions",
                "MUST describe risks and safegaurds on AI",
              ],
            },
          ],
          definition: "",
        },
      },
      {
        name: "Business",
        content: {
          title: "Edtechs & AI Providers (data and service providers)",
          definition: "E.g.: Transaction, freemium, subscription model, ",
          examples: [
            "Data based - pays only for tailored or custom data product. Example: SkillProfiX charges for the data included in the analytics towards the employers.",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Edtechs & AI Providers (data and service providers)",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Edtechs & AI Providers (data and service providers)",
          definition:
            "Offer better-personalised services due to better data access. ",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: `Gets paid for services. <br/><br/>
              Service providers benefit from easy access to high-quality data, resulting in lower costs, faster time to market, and improved service
              `,
            },
            {
              actor: "Non-monetary benefits",
              definition: `Access to data space and users: being part of a data space use case provides service providers with a ready audience, opening doors to user engagement and potential business.<br/><br/>
              Increased user base and brand visibility: inclusion in a data space naturally amplifies brand recognition and extends the service provider's reach, benefiting from economies of scale.<br/><br/>
              Reduced marketing and customer acquisition costs: a collaborative data space can serve as a shared platform for marketing, thereby reducing individual customer acquisition costs for service providers.<br/><br/>
              Access to diverse data sources: membership in a data space use case grants service providers access to a variety of data sources, enriching their service capabilities.<br/><br/>
              Shared marketing costs: marketing expenses can be distributed among multiple stakeholders in the data space use case, making promotional efforts more cost-effective.<br/><br/>
              Lower development costs: the standardization of data interoperability, compliance, and governance within a data space can reduce the costs associated with developing new services and integrating new data space use cases.<br/><br/>
              Innovation opportunities: service providers have the chance to continuously improve, iterate, and even create entirely new services based on emerging needs and insights from the data space.
              
              `,
            },
          ],
          costsRisks: {
            costs: `Pays for own & DS operational costs.  <br/><br/>
            Pays for costs of their data product (e.g., data usage, other services included).
            `,
            risks:
              "Limited number of consumers, paying customers, data sources, limited engagement and interest from users, service/data providers, inability to generate value for stakeholders. ",
          },
        },
      },
    ],
  },
  {
    name: "Infrastructure providers",
    image: APP_IMAGES.image.stakeholder.infrastructureProviders,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Infrastructure providers",
          definition: "",
          governance: [
            {
              title:
                "Infrastructure providers (organisational data intermediary)",
              definition:
                "Tools for data and service providers to connect to the data ecosystem",
              obligations: [
                "MUST be a data intermediary compliant with Data Governance Act",
                "MUST Verify the validity of agreements between data providers and data users",
                "MUST describe their organisations and service offerings in a machine readable format and human readable",
                "MUST implement the rules and building blocks defined by the Alliance Structure and the Orchestrator",
                "MUST publish its endpoints",
              ],
            },
            {
              title: "Infrastructure providers (personal data intermediary)",
              definition:
                "Tool for the person to navigate the data ecosystem, exercise their rights, manage consent and data sharing, discover the apps and use them, be informed on risks etc",
              obligations: [
                "CAN NOT be service or data provider or end user",
                "MUST be a data intermediary compliant with Data Governance Act ",
                "MUST ensure traceability and record, revocation, verification of consent and data rights exertion",
                "MUST verify the validity of agreements between data providers and data users",
                "MUST inform the person of the value and risks of sharing their data",
                "MUST implement the standards and protocols defined by the Alliance Structure ",
              ],
            },
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Infrastructure providers",
          definition: "E.g.: Transaction, freemium, subscription model, ",
          examples: [],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Infrastructure providers",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Infrastructure Providers",
          definition:
            "Offer services and building blocks to enable data matching, including consent, contract, interoperability, data visualisation, and decentralised processing.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "Gets paid for services",
            },
            {
              actor: "Non-monetary benefits",
              definition: `Gets requirements to improve their services. <br/>
              Gets digital commons to operate 
              `,
            },
          ],
          costsRisks: {
            costs: "Pays for Data space operational costs",
            risks:
              "Limited number of consumers, paying customers, data sources, limited engagement and interest from users, service/data providers, inability to generate value for stakeholders. ",
          },
        },
      },
    ],
  },
  {
    name: "Orchestator",
    image: APP_IMAGES.image.stakeholder.orchestrator,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Orchestator",
          definition:
            "Organisation that organises operationally the data ecosystem and ensures its diffusion and commercialisation.",
          obligations: [
            "MUST define the precise governance rules",
            "MUST define the Code of conduct",
            "MUST define the Accession rules",
            "MUST define the Incentive mechanisms",
            "MUST define how other participants can be involved in code of conduct / accession rules definition (democratic or centralised governance)",
            "MUST ensure the respect of rules set by the Alliance Structure",
            "MUST make the rules and values of the data ecosystem publicly available in machine readable format",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Orchestator",
          definition:
            "E.g.: Transaction (sell reports), Subscription (portal access), Freemium",
          examples: [
            "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
            "Marketplace model - a marketplace provider typically charges participants on commission on transactions (either per number of transactions or per monetary value of transactions). Example: SkillsFast provides a qualified skills profile",
            "Usage-based - pays for the usage of a software or data product instead of for its availability. Example: YourTraining pays SkillsFast a subscription according to the number of individual profile it receives.",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Orchestator Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Orchestator",
          definition:
            "Provides the ecosystem portal and coordinates governance, use cases, and business model discussions.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition:
                "Gets paid for services they provide for the use case, governance model, portal, marketing etc.",
            },
            {
              actor: "Non-monetary benefits",
              definition: `Societal impact - faster, cost-effective and new innovations for employment, skills mismatch problem.<br/><br/>   
              Recognition, awards 
              `,
            },
          ],
          costsRisks: {
            costs:
              "E.g.: Operational, marketing, data space use case management",
            risks:
              "No engagement and interest from users, service/data providers, inability to generate value for stakeholders and attract more users and services.",
          },
        },
      },
    ],
  },
  {
    name: "Organisational & employers",
    image: APP_IMAGES.image.stakeholder.employers,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Organisational & employers Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Organisational & employers Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Organisational & employers Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Organisational & employers (end users and data providers)",
          definition:
            "They are primary data consumers that analyse the skills inventory, identify gaps, and strategize for future needs, they contribute data about their job positions.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Learning & development units",
    image: APP_IMAGES.image.stakeholder.learningDevelopmentUnits,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Learning & development units Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Learning & development units Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Learning & development units Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Learning & development units (end users and data providers)",
          definition:
            "They use the dashboard for targeted training and contribute data on training efficacy and skill development.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Educational & Training providers",
    image: APP_IMAGES.image.stakeholder.employmentAgencies,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Educational & Training providers Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Educational & Training providers Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Educational & Training providers Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title:
            "Educational & Training providers (data providers and end users)",
          definition:
            "Contribute data on training outcomes and skill development, while using the dashboard to tailor their educational programs.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Public Institutions",
    image: APP_IMAGES.image.stakeholder.publicInstitutions,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Public Institutions Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Public Institutions Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Public Institutions Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Public Institutions (data providers and end users)",
          definition:
            "Use data for policy formulation and governance, while also contributing public-sector data to enrich the dataset.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Individuals and employees",
    image: APP_IMAGES.image.stakeholder.individuals,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Individuals and employees Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Individuals and employees Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Individuals and employees Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Individuals and employees (data providers and end users)",
          definition:
            "Their skills data enriches the ecosystem, and they also benefit from better job and training matching.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Observatories",
    image: APP_IMAGES.image.stakeholder.observatories,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Observatories Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Observatories Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Observatories Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Observatories (data providers)",
          definition:
            "Collect, store, and provide data from multiple sources, including public and private sectors.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Infrastructure service",
    image: APP_IMAGES.image.stakeholder.infrastructureProviders,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Infrastructure service Governance",
          definition: "",
          governance: [
            {
              title:
                "Infrastructure providers (organisational data intermediary)",
              definition:
                "Tools for data and service providers to connect to the data ecosystem",
              obligations: [
                "MUST be a data intermediary compliant with Data Governance Act",
                "MUST Verify the validity of agreements between data providers and data users",
                "MUST describe their organisations and service offerings in a machine readable format and human readable",
                "MUST implement the rules and building blocks defined by the Alliance Structure and the Orchestrator",
                "MUST publish its endpoints",
              ],
            },
            {
              title: "Infrastructure providers (personal data intermediary)",
              definition:
                "Tool for the person to navigate the data ecosystem, exercise their rights, manage consent and data sharing, discover the apps and use them, be informed on risks etc",
              obligations: [
                "CAN NOT be service or data provider or end user",
                "MUST be a data intermediary compliant with Data Governance Act ",
                "MUST ensure traceability and record, revocation, verification of consent and data rights exertion",
                "MUST verify the validity of agreements between data providers and data users",
                "MUST inform the person of the value and risks of sharing their data",
                "MUST implement the standards and protocols defined by the Alliance Structure ",
              ],
            },
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Infrastructure service Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Infrastructure service Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Infrastructure service Value",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
  {
    name: "Orchestator: SkillsFast",
    image: APP_IMAGES.image.stakeholder.orchestrator,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Orchestator: SkillsFast",
          definition:
            "Organisation that organises operationally the data ecosystem and ensures its diffusion and commercialisation.",
          obligations: [
            "MUST define the precise governance rules",
            "MUST define the Code of conduct",
            "MUST define the Accession rules",
            "MUST define the Incentive mechanisms",
            "MUST define how other participants can be involved in code of conduct / accession rules definition (democratic or centralised governance)",
            "MUST ensure the respect of rules set by the Alliance Structure",
            "MUST make the rules and values of the data ecosystem publicly available in machine readable format",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Orchestator: SkillsFast",
          definition:
            "E.g.: Transaction (sell reports), Subscription (portal access), Freemium",
          examples: [
            "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees",
            "Marketplace model - a marketplace provider typically charges participants on commission on transactions (either per number of transactions or per monetary value of transactions). Example: SkillsFast provides a qualified skills profile marketplace for training catalogues such as YourTraining to access.",
            "Usage-based - pays for the usage of a software or data product instead of for its availability. Example: YourTraining pays SkillsFast a subscription according to the number of individual profile it receives. ",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Orchestator: SkillsFast",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Orchestator: SkillsFast",
          definition:
            "SkillsFast orchestrates the ecosystem, ensuring seamless coordination between different services and data providers as well as its commercialisation. ",
          benefits: [
            {
              actor: "Monetary benefits",
              definition:
                "Gets paid for services they provide for the use case, governance model, portal, marketing etc.",
            },
            {
              actor: "Non-monetary benefits",
              definition: `Societal impact - faster, cost-effective and new innovations for employment, skills mismatch problem.   <br />
              Recognition, awards 
              `,
            },
          ],
          costsRisks: {
            costs:
              "E.g.: Operational, marketing, data space use case management",
            risks:
              "No engagement and interest from users, service/data providers, inability to generate value for stakeholders and attract more users and services.  ",
          },
        },
      },
    ],
  },
  {
    name: "Service Providers: SkillProfiX, SDAI, SkillFast",
    image: APP_IMAGES.image.stakeholder.infrastructureProviders,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Service Providers: SkillProfiX, SDAI, SkillFast Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Service Providers: SkillProfiX, SDAI, SkillFast",
          definition: "E.g.: Transaction, freemium, subscription model.",
          examples: [
            "Data based - pays only for tailored or custom data product. Example: SkillProfiX charges for the data included in the analytics towards the employers.",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Service Providers: SkillProfiX, SDAI, SkillFast Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Service Providers: SkillProfiX, SDAI, SkillFast",
          definition:
            "SkillProfiX and SDAI offer skills assessment and training recommendation services, respectively",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: `Gets paid for services.  <br /> <br />
              Service providers benefit from easy access to high-quality data, resulting in lower costs, faster time to market, and improved service
              `,
            },
            {
              actor: "Non-monetary benefits",
              definition: `Access to data space and users: being part of a data space use case provides service providers with a ready audience, opening doors to user engagement and potential business.<br /><br/>
              Increased user base and brand visibility: inclusion in a data space naturally amplifies brand recognition and extends the service provider's reach, benefiting from economies of scale.<br /><br/>
              Reduced marketing and customer acquisition costs: a collaborative data space can serve as a shared platform for marketing, thereby reducing individual customer acquisition costs for service providers.<br /><br/>
              Access to diverse data sources: membership in a data space use case grants service providers access to a variety of data sources, enriching their service capabilities.<br /><br/>
              Shared marketing costs: marketing expenses can be distributed among multiple stakeholders in the data space use case, making promotional efforts more cost-effective.<br /><br/>
              Lower development costs: the standardization of data interoperability, compliance, and governance within a data space can reduce the costs associated with developing new services and integrating new data space use cases.<br /><br/>
              Innovation opportunities: service providers have the chance to continuously improve, iterate, and even create entirely new services based on emerging needs and insights from the data space.
              
              `,
            },
          ],
          costsRisks: {
            costs: `Pays for own & DS operational costs. <br />
            Pays for costs of their data product (e.g., data usage, other services included).
            `,
            risks:
              "Limited number of consumers, paying customers, data sources, limited engagement and interest from users, service/data providers, inability to generate value for stakeholders. ",
          },
        },
      },
    ],
  },
  {
    name: "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool",
    image: APP_IMAGES.image.stakeholder.learningDevelopmentUnits,
    categories: [
      {
        name: "Governance",
        content: {
          title:
            "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title:
            "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool Business",
          definition: "E.g.: Transaction, freemium, subscription model, ",
          examples: [
            "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
            "Aggregation model - an aggregation of data products from multiple sources. Example: YourTraining aggregates data from multiple training organisations and sells it to SDAI.",
            "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
            "Advertisement model - offers data products to consumers without payment (data product is sold for advertisement). Example: IntelliAITraining provides data about its training to be advertised on YourTraining. ",
            "Availability based - charges users for the availability of the data product regardless of whether it is used or not. Example: SkillProfiX buys API access for JobRightNow, Jobijob and Jobo.",
            "Performance-based - pays for the performance of the data product. Example: SkillProfiX pays for a platform access that will support peak times.",
            "Value-based - pays for a value that could be financial gain, functional or even emotional outcome received. However, some value streams may not be directly chargeable or it's difficult to find applicable charging metrics. Example: IntelliAITraining pays to YourTraining a percentage on the trainings it sells thanks to its service. ",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title:
            "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title:
            "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool",
          definition:
            "SkillProfiX, DigiFutUX, UXlife, and UXschool provide Matilda's skills data.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "Gets paid for services",
            },
            {
              actor: "Non-monetary benefits",
              definition: `Gets requirements to improve their services.<br />
              Gets digital commons to operate 
              `,
            },
          ],
          costsRisks: {
            costs: "Pays for Data space operational costs",
            risks:
              "Limited number of consumers, paying customers, data sources, limited engagement and interest from users, service/data providers, inability to generate value for stakeholders. ",
          },
        },
      },
    ],
  },
  {
    name: "Data Providers (Organisational): Jobo, JobRightNow and Jobijob",
    image: APP_IMAGES.image.stakeholder.employers,
    categories: [
      {
        name: "Governance",
        content: {
          title:
            "Data Providers (Organisational): Jobo, JobRightNow and Jobijob Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title:
            "Data Providers (Organisational): Jobo, JobRightNow and Jobijob Business",
          definition: "E.g.: Transaction, freemium, subscription model, ",
          examples: [
            "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
            "Aggregation model - an aggregation of data products from multiple sources. Example: YourTraining aggregates data from multiple training organisations and sells it to SDAI.",
            "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
            "Advertisement model - offers data products to consumers without payment (data product is sold for advertisement). Example: IntelliAITraining provides data about its training to be advertised on YourTraining. ",
            "Availability based - charges users for the availability of the data product regardless of whether it is used or not. Example: SkillProfiX buys API access for JobRightNow, Jobijob and Jobo.",
            "Performance-based - pays for the performance of the data product. Example: SkillProfiX pays for a platform access that will support peak times.",
            "Value-based - pays for a value that could be financial gain, functional or even emotional outcome received. However, some value streams may not be directly chargeable or it's difficult to find applicable charging metrics. Example: IntelliAITraining pays to YourTraining a percentage on the trainings it sells thanks to its service. ",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title:
            "Data Providers (Organisational): Jobo, JobRightNow and Jobijob Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title:
            "Data Providers (Organisational): Jobo, JobRightNow and Jobijob",
          definition:
            "JobRightNow, Jobijob, and Jobo provide job market data; FindTraining and YourTraining offer training catalogues.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "Gets paid for services",
            },
            {
              actor: "Non-monetary benefits",
              definition: `Gets requirements to improve their services.<br />
                Gets digital commons to operate 
                `,
            },
          ],
          costsRisks: {
            costs: "Pays for Data space operational costs",
            risks:
              "Limited number of consumers, paying customers, data sources, limited engagement and interest from users, service/data providers, inability to generate value for stakeholders. ",
          },
        },
      },
    ],
  },
  {
    name: "Individuals: Matilda, Francesco, Anita",
    image: APP_IMAGES.image.stakeholder.individuals,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Individuals: Matilda, Francesco, Anita Governance",
          definition: "Person using the system for their career and learning",
          obligations: [
            "MUST participate in the value exchange",
            "CAN exerce their rights on their data across the ecosystem",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Individuals: Matilda, Francesco, Anita",
          definition: "End users as clients don't have business models",
          examples: [
            "Freemium model - free data products with limited features and charges users a premium for additional features.",
            "Matilda will have basic functions and some of trainings available for free.",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Individuals: Matilda, Francesco, Anita",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Individuals: Matilda, Francesco, Anita",
          definition:
            "Matilda (trainee), Francesco (employer), Anita (training sales representative).",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "Bonuses, salary, allowances",
            },
            {
              actor: "Non-monetary benefits",
              definition:
                "Personalized skill development, enhanced career planning, time efficiency, job satisfaction, improved opportunities, skill validation, greater control, lifelong learning, career advancement, personal growth",
            },
          ],
          costsRisks: {
            costs: "Cost of services, insights, results.",
            risks:
              "Limited number of services, poor data quality, high costs, and a complex system can all negatively impact the network effect, making it difficult for the data space use case to grow and improve.",
          },
        },
      },
    ],
  },
  {
    name: "Organisations: DigiFutUX, IntelliAITraining",
    image: APP_IMAGES.image.stakeholder.employmentAgencies,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Organisations: DigiFutUX, IntelliAITraining Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Organisations: DigiFutUX, IntelliAITraining Business",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br />
            E.g.: Transaction, freemium, subscription model,
            `,
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Organisations: DigiFutUX, IntelliAITraining Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Organisations: DigiFutUX, IntelliAITraining",
          definition:
            "DigiFutUX (employer), IntelliAITraining (training provider).",
          benefits: [
            {
              actor: "Monetary benefits",
              definition:
                "Reduced manual work and management time of verifying skills, searching insight, and foresight into skills and trainings.",
            },
            {
              actor: "Non-monetary benefits",
              definition:
                "Enhanced employee performance, increased employee satisfaction, improved talent retention, competitive advantage, stronger employer brand, employee empowerment etc. ",
            },
          ],
          costsRisks: {
            costs: "Cost of services, insights, results.",
            risks:
              "Limited number of services, poor data quality, high costs, and a complex system can all negatively impact the network effect, making it difficult for the data space use case to grow and improve",
          },
        },
      },
    ],
  },
  {
    name: "Governance Authority (association): Fire-X",
    image: APP_IMAGES.image.stakeholder.publicInstitutions,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Governance Authority (association): Fire-X Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Governance Authority (association): Fire-X Business",
          definition: `Non-profit organization and business model. At the beginning a public and private partnership comes of a great importance when guaranteeing the sufficient funds for the functioning of the skills data space.<br/><br/>
            Later different business models could be used to sustain itself.  
            `,
        },
      },
      {
        name: "Technical",
        content: {
          title: "Governance Authority (association): Fire-X Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Governance Authority (association): Fire-X",
          definition:
            "Fire-X sets and oversees the data space standards as well provides building blocks and certifies InfraTrust.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition:
                "Gets paid for their services; governance model, building blocks.",
            },
            {
              actor: "Non-monetary benefits",
              definition: `Gets recognition in the domain and across data spaces, gets more influence, visibility, and power.<br/><br/>
            Gets requirements from concrete use cases to provide the right/better digital commons 
            `,
            },
          ],
          costsRisks: {
            costs:
              "Operational, management and development costs (e.g., building blocks)",
            risks:
              "A critical mass of engagement and usage of the authorisation framework has to be achieved and soft infrastructure set up in order to make the Skills Data Space up and running, and in the long run a sustainable business for all stakeholders.   ",
          },
        },
      },
    ],
  },
  {
    name: "Data Intermediary: InfraTrust",
    image: APP_IMAGES.image.stakeholder.dataIntermediary,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Data Intermediary: InfraTrust Governance",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          obligations: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Data Intermediary: InfraTrust Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Data Intermediary: InfraTrust Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          secondExamples: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Data Intermediary: InfraTrust",
          definition:
            "InfraTrust manages data flows and ensures compliance with Fire-X standards.",
          benefits: [
            {
              actor: "Monetary benefits",
              definition: "",
            },
            {
              actor: "Non-monetary benefits",
              definition: "",
            },
          ],
          costsRisks: {
            costs: "",
            risks: "",
          },
        },
      },
    ],
  },
];
