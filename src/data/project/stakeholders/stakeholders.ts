import { ContentStakeholder } from "../../../types";
import { APP_IMAGES } from "../../../utils/appImages";
import { APP_LINKS } from "../../../utils/appLinks";
import { APP_PARAMS } from "../../../utils/appParams";

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
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
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
          business: [
            {
              title: "University & Training providers (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
            {
              title: "University & Training providers (data provider)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "University & Training providers Technical",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
          title: "Employers",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
          E.g.: Transaction, freemium, subscription model,
          `,
          business: [
            {
              title: "Employers (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
            {
              title: "Employers (data provider)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Employers Technical",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
    name: "Educational Institutions",
    image: APP_IMAGES.image.stakeholder.educationalInstitutions,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Educational Institutions",
          definition: "",
          governance: [
            {
              title: "Educational Institutions (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title: "Educational Institutions (data provider)",
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
          title: "Educational Institutions",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
            E.g.: Transaction, freemium, subscription model,
            `,
          business: [
            {
              title: "Educational Institutions (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
            {
              title: "Educational Institutions (data provider)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Educational Institutions Technical",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Decentralized AI training",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.decentralizedAITraining}`,
            },
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Educational Institutions (service providers and end users)",
          definition:
            "Provide students with innovative employment and orientation services.",
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
        },
      },
      {
        name: "Business",
        content: {
          title: "Governments & Pilocy Markers Business",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
          examples: [],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Governments & Pilocy Markers Technical",
          definition:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
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
          title: "Employment Agencies (end user)",
          definition:
            "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
          obligations: [
            "MUST define clear data usage policies",
            "MUST participate in the value exchange",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Employment Agencies (end user)",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
          E.g.: Transaction, freemium, subscription model,
          `,
          business: [
            {
              title: "Employment Agencies (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Employment Agencies Technical",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
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
          business: [
            {
              title:
                "Edtechs & AI Providers (service providers for organisation & individuals)",
              definition:
                "Offer better-personalised services due to better data access.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
                "Data based - pays only for tailored or custom data product. Example: SkillProfiX charges for the data included in the analytics towards the employers.",
              ],
              valuePropositions: {
                dataSpace: [
                  "New customer acquisition, access to unique data sets, enhanced visibility",
                  "Empower service providers to expand their business, improve their offerings, and establish a competitive advantage. The data space use case serves as both a marketplace and a marketing channel, extending their reach and bolstering credibility.",
                ],
                roleValue: [
                  "For the data space use case, the inclusion of service providers specializing in areas like skills matching or analytics adds significant value by diversifying the range of services available to participants. These specialized services not only attract a broader audience but also encourage higher engagement within the data space use case. By integrating services that meet specific needs, such as analytics, the data space use case becomes more robust, versatile, and appealing, thereby fostering its overall growth and sustainability.",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Edtechs & AI Providers (data and service providers)",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Decentralized AI training",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.decentralizedAITraining}`,
            },
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
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
          business: [
            {
              title:
                "Infrastructure providers (organisational & personal data intermediary)",
              definition:
                "Offer better-personalised services due to better data access.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
                "Data based - pays only for tailored or custom data product. Example: SkillProfiX charges for the data included in the analytics towards the employers.",
              ],
              valuePropositions: {
                dataSpace: [
                  "All use cases need infrastructure services, joining use cases allows the data intermediaries to generate business.",
                ],
                roleValue: [
                  "Data Intermediaries provide data space enabling services to use case participants (such as identity, authorisation management, interoperability, catalogue, matching). They allow the use case to easily share data while implementing the data space building blocks",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Infrastructure providers",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
    name: "Orchestrator",
    image: APP_IMAGES.image.stakeholder.orchestrator,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Orchestrator",
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
          title: "Orchestrator",
          definition:
            "E.g.: Transaction (sell reports), Subscription (portal access), Freemium",
          business: [
            {
              title: "Orchestrator",
              definition:
                "Organisation that organises operationally the data ecosystem and ensures its diffusion and commercialisation.",
              examples: [
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
                "Marketplace model - a marketplace provider typically charges participants on commission on transactions (either per number of transactions or per monetary value of transactions). Example: SkillsFast provides a qualified skills profile",
                "Usage-based - pays for the usage of a software or data product instead of for its availability. Example: YourTraining pays SkillsFast a subscription according to the number of individual profile it receives.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
              ],
              valuePropositions: {
                dataSpace: [
                  "The orchestrator sets up the use case. He is serving the end users and need to combine providers in order to provide better value to end users, he can find and combine thanks to the data space.",
                ],
                roleValue: [
                  "The orchestrator takes care of the business and governance operations of the data space use case.",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Orchestrator Technical",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Orchestrator",
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
          title: "Organisational & employers",
          definition: "",
          governance: [
            {
              title: "Organisational & employers (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title: "Organisational & employers (data provider)",
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
          title: "Organisational & employers",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
          E.g.: Transaction, freemium, subscription model,
          `,
          business: [
            {
              title: "Organisational & employers (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
            {
              title: "Organisational & employers (data provider)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Organisational & employers",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Organisational & employers (data providers and end users)",
          definition:
            "Match their offers with relevant profiles and get precise employee profiles. ",
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
    name: "Learning & development units",
    image: APP_IMAGES.image.stakeholder.learningDevelopmentUnits,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Learning & development units",
          definition: "",
          governance: [
            {
              title: "Learning & development units (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title: "Learning & development units (data provider)",
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
          title: "Learning & development units",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
            E.g.: Transaction, freemium, subscription model,
            `,
          business: [
            {
              title: "Learning & development units (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
            {
              title: "Learning & development units (data provider)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Learning & development units Technical",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Decentralized AI training",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.decentralizedAITraining}`,
            },
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
    name: "Educational & Training providers",
    image: APP_IMAGES.image.stakeholder.employmentAgencies,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Educational & Training providers",
          definition: "",
          governance: [
            {
              title: "Educational & Training providers (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title: "Educational & Training providers (data provider)",
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
          title: "Educational & Training providers",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
            E.g.: Transaction, freemium, subscription model,
            `,
          business: [
            {
              title: "Educational & Training providers (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
            {
              title: "Educational & Training providers (data provider)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Educational & Training providers",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
          ],
        },
      },
      {
        name: "Value",
        content: {
          title:
            "Educational & Training providers (data and service providers)",
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
    name: "Public Institutions",
    image: APP_IMAGES.image.stakeholder.publicInstitutions,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Public Institutions",
          definition:
            "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
          obligations: [
            "MUST define clear data usage policies",
            "MUST participate in the value exchange",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Public Institutions",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
          E.g.: Transaction, freemium, subscription model,
          `,
          business: [
            {
              title: "Public Institutions (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Public Institutions",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
    name: "Individuals and employees",
    image: APP_IMAGES.image.stakeholder.individuals,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Individuals and employees (end users)",
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
          title: "Individuals and employees (end users)",
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
          title: "Individuals and employees (end users)",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Individuals and employees (end users)",
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
    name: "Observatories",
    image: APP_IMAGES.image.stakeholder.observatories,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Observatories",
          definition: "",
          governance: [
            {
              title: "Observatories (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title: "Observatories (data provider)",
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
          title: "Observatories",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br/>
            E.g.: Transaction, freemium, subscription model,
            `,
          business: [
            {
              title: "Observatories (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
            {
              title: "Observatories (data provider)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Observatories",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Observatories (data and service providers)",
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
    name: "Infrastructure service",
    image: APP_IMAGES.image.stakeholder.infrastructureProviders,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Infrastructure service",
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
          examples: [],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Infrastructure service",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Infrastructure service",
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
    name: "Orchestrator: SkillsFast",
    image: APP_IMAGES.image.stakeholder.orchestrator,
    categories: [
      {
        name: "Governance",
        content: {
          title: "Orchestrator: SkillsFast",
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
          title: "Orchestrator: SkillsFast",
          definition:
            "E.g.: Transaction (sell reports), Subscription (portal access), Freemium",
          business: [
            {
              title: "Orchestrator: SkillsFast",
              definition:
                "Organisation that organises operationally the data ecosystem and ensures its diffusion and commercialisation.",
              examples: [
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
                "Marketplace model - a marketplace provider typically charges participants on commission on transactions (either per number of transactions or per monetary value of transactions). Example: SkillsFast provides a qualified skills profile",
                "Usage-based - pays for the usage of a software or data product instead of for its availability. Example: YourTraining pays SkillsFast a subscription according to the number of individual profile it receives.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
              ],
              valuePropositions: {
                dataSpace: [
                  "The orchestrator sets up the use case. He is serving the end users and need to combine providers in order to provide better value to end users, he can find and combine thanks to the data space.",
                  "SkillsFast as the orchestrator can combine SKillProfiX and SDAI to provide an augmented and powerful app to end users.",
                ],
                roleValue: [
                  "The orchestrator takes care of the business and governance operations of the data space use case.",
                  "SkillsFast commercialises EU-DUNE and brings more business to all the use case participants.",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Orchestrator: SkillsFast",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
          ],
        },
      },
      {
        name: "Value",
        content: {
          title: "Orchestrator: SkillsFast",
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
          title: "Service Providers: SkillProfiX, SDAI, SkillFast",
          definition: "E.g.: Transaction, freemium, subscription model.",
          business: [
            {
              title:
                "Service Providers: SkillProfiX, SDAI, SkillFast (organisational & personal data intermediary)",
              definition:
                "Offer better-personalised services due to better data access.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
                "Data based - pays only for tailored or custom data product. Example: SkillProfiX charges for the data included in the analytics towards the employers.",
              ],
              valuePropositions: {
                dataSpace: [
                  "All use cases need infrastructure services, joining use cases allows the data intermediaries to generate business.",
                  "EU-Dune needs a data intermediary to operate.",
                  "SkillsFast, SDAI, SkillPRofiX, IntelliAITraining and all job boards and training catalogs pay a subscription to InfraTrust services.",
                  "InfraTrust gets building blocks and certifications from Fire-X to operate a trusted data intermediary service.",
                ],
                roleValue: [
                  "Data Intermediaries provide data space enabling services to use case participants (such as identity, authorisation management, interoperability, catalogue, matching). They allow the use case to easily share data while implementing the data space building blocks",
                  "InfraTrust, Personal and Organisational Data Intermediary provides Personal and Organisational Data sharing services to ensure EU-Dune is compliant with all regulations and data can flow between all players, compliant with the rules set out by Fire-X.",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Service Providers: SkillProfiX, SDAI, SkillFast",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
            "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool",
          definition: "",
          governance: [
            {
              title:
                "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title:
                "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool (data provider)",
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
          title:
            "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool",
          definition: "E.g.: Transaction, freemium, subscription model, ",
          business: [
            {
              title:
                "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Aggregation model - an aggregation of data products from multiple sources. Example: YourTraining aggregates data from multiple training organisations and sells it to SDAI.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Advertisement model - offers data products to consumers without payment (data product is sold for advertisement). Example: IntelliAITraining provides data about its training to be advertised on YourTraining. ",
                "Availability based - charges users for the availability of the data product regardless of whether it is used or not. Example: SkillProfiX buys API access for JobRightNow, Jobijob and Jobo.",
                "Performance-based - pays for the performance of the data product. Example: SkillProfiX pays for a platform access that will support peak times.",
                "Value-based - pays for a value that could be financial gain, functional or even emotional outcome received. However, some value streams may not be directly chargeable or it's difficult to find applicable charging metrics. Example: IntelliAITraining pays to YourTraining a percentage on the trainings it sells thanks to its service. ",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                  "Personal data providers: SkillProfiX, DigiFutUX, UXlife, UXschool,",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                  "DigiFutUX HR system (position, skills, etc), from her past employer (UXlife) and from her university (UXschool).",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title:
            "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Decentralized AI training",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.decentralizedAITraining}`,
            },
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
            "Data Providers (Organisational): Jobo, JobRightNow and Jobijob",
          definition: "",
          governance: [
            {
              title:
                "Data Providers (Organisational): Jobo, JobRightNow and Jobijob Governance (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title:
                "Data Providers (Organisational): Jobo, JobRightNow and Jobijob Governance (data provider)",
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
          title:
            "Data Providers (Organisational): Jobo, JobRightNow and Jobijob",
          definition: "E.g.: Transaction, freemium, subscription model, ",
          examples: [],
          business: [
            {
              title:
                "Data Providers (Organisational): Jobo, JobRightNow and Jobijob",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Aggregation model - an aggregation of data products from multiple sources. Example: YourTraining aggregates data from multiple training organisations and sells it to SDAI.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Advertisement model - offers data products to consumers without payment (data product is sold for advertisement). Example: IntelliAITraining provides data about its training to be advertised on YourTraining. ",
                "Availability based - charges users for the availability of the data product regardless of whether it is used or not. Example: SkillProfiX buys API access for JobRightNow, Jobijob and Jobo.",
                "Performance-based - pays for the performance of the data product. Example: SkillProfiX pays for a platform access that will support peak times.",
                "Value-based - pays for a value that could be financial gain, functional or even emotional outcome received. However, some value streams may not be directly chargeable or it's difficult to find applicable charging metrics. Example: IntelliAITraining pays to YourTraining a percentage on the trainings it sells thanks to its service. ",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                  "Organisational data providers: JobRightNow, Jobijob and Jobo, NewJob, FindTraining, YourTraining, IntelliAITraining",
                  "EU-DUNE is a service that needs, uses and leverages all data providers data for upskilling use case, for skills analysis and for job and training recommendations. Data providers get paid for their data. EU-DUNE is also a service that can scale their data for new users, enable new use case around the data and monetize it in different ways.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                  "jobs data; JobRightNow, Jobijob and Jobo, NewJob",
                  "Training catalogues: FindTraining, YourTraining",
                  "Trainings in LMS: IntelliAITraining",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title:
            "Data Providers (Organisational): Jobo, JobRightNow and Jobijob",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
          title: "Individuals: Matilda, Francesco, Anita",
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
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
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
          title: "Organisations: DigiFutUX, IntelliAITraining",
          definition: "",
          governance: [
            {
              title: "Organisations: DigiFutUX, IntelliAITraining (end user)",
              definition:
                "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
              obligations: [
                "MUST define clear data usage policies",
                "MUST participate in the value exchange",
              ],
            },
            {
              title:
                "Organisations: DigiFutUX, IntelliAITraining (data provider)",
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
          title: "Organisations: DigiFutUX, IntelliAITraining",
          definition: `Give data for the data space use case, get back services provided and pay for the services. <br />
            E.g.: Transaction, freemium, subscription model,
            `,
          business: [
            {
              title: "Organisations: DigiFutUX, IntelliAITraining (end user)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                  "DigiFutUX: Get valuable insights and recommendations to futureproof their employees.",
                  "IntelliAITraining: New leads and customer acquisition, access to data and services to provide better and more focused trainings and services, and enhanced visibility.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                  "DigiFutUX serve as the primary client and financial contributor for all roles, particularly service providers.",
                  "IntelliAITraining is a client for services and data providers, uses the system and pays for it. ",
                ],
              },
            },
            {
              title:
                "Organisations: DigiFutUX, IntelliAITraining (data provider)",
              definition:
                "Give data for the data space use case, get back services provided and pay for the services.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "A data provider joins the data space to find a use case that can leverage the provided data and attract diverse data users on its data set.",
                  "EU-DUNE is a service that needs, uses and leverages all data providers data for upskilling use case, for skills analysis and for job and training recommendations. Data providers get paid for their data. EU-DUNE is also a service that can scale their data for new users, enable new use case around the data and monetize it in different ways.",
                ],
                roleValue: [
                  `The data provided serves as a fundamental resource, or "oil," that powers activities, insights, and value generation across all other roles with the possibility of accessing, combining, and comparing it with other sources in the data space use case.`,
                  "DigiFutUX HR system (position, skills, etc), from her past employer (UXlife) and from her university (UXschool).",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Organisations: DigiFutUX, IntelliAITraining",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Data, Services and Offerings Descriptions",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
          title: "Governance Authority (association): Fire-X",
          definition:
            "End users and customers of the data space use case, make use of the functionalities and the result in their day-to-day activities.",
          obligations: [
            "MUST define clear data usage policies",
            "MUST participate in the value exchange",
          ],
        },
      },
      {
        name: "Business",
        content: {
          title: "Governance Authority (association): Fire-X",
          definition: `Non-profit organization and business model. At the beginning a public and private partnership comes of a great importance when guaranteeing the sufficient funds for the functioning of the skills data space.<br/><br/>
            Later different business models could be used to sustain itself.  
            `,
          business: [
            {
              title: "Governance Authority (association): Fire-X",
              definition: `Non-profit organization and business model. At the beginning a public and private partnership comes of a great importance when guaranteeing the sufficient funds for the functioning of the skills data space.<br/><br/>
              Later different business models could be used to sustain itself.  
              `,
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "Get valuable insights and recommendations to futureproof individuals and organizations at the labour market.",
                  "Access skills data for informed planning and decision-making. Utilize data-driven insights to shape effective policies and strategies.",
                  "Trust and fairness: Data sharing is transparent and equitable.",
                  "Access to valuable skills data sources, services resources to enhance your services. Bolster research capabilities and offer trend analysis to better serve your clients.",
                  "Platform for skill-related data management.",
                ],
                roleValue: [
                  "Organisational end users are the main clients of the data space use cases.",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Governance Authority (association): Fire-X",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Data Models & Formats",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataModelAndFormat}`,
            },
            {
              name: "Publication & Discovery",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.publicationAndDiscovery}`,
            },
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
          title: "Data Intermediary: InfraTrust",
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
      },
      {
        name: "Business",
        content: {
          title: "Data Intermediary: InfraTrust",
          definition: "E.g.: Transaction, freemium, subscription model, ",
          business: [
            {
              title: "Data Intermediary: InfraTrust",
              definition:
                "Offer better-personalised services due to better data access.",
              examples: [
                "Transaction model - one-off fee for having access to data product. Example: Anita from IntelliAITraining pays one-off fee to YourTraining for each qualified lead sent. YourTraining pays one-off fee to SkillsFast for each profile sent.",
                "Freemium model - free data products with limited features and charges users a premium for additional features. Example: Matilda will have basic functions and some of trainings available for free.",
                "Subscription model - a recurring subscription revenue for access to data products. Example: Francesco from DIgiFutUX pays subscription to SkillsFast to provide the service to his employees.",
              ],
              valuePropositions: {
                dataSpace: [
                  "All use cases need infrastructure services, joining use cases allows the data intermediaries to generate business.",
                  "EU-Dune needs a data intermediary to operate.",

                  "InfraTrust gets building blocks and certifications from Fire-X to operate a trusted data intermediary service.",
                ],
                roleValue: [
                  "Data Intermediaries provide data space enabling services to use case participants (such as identity, authorisation management, interoperability, catalogue, matching). They allow the use case to easily share data while implementing the data space building blocks",
                  "InfraTrust, Personal and Organisational Data Intermediary provides Personal and Organisational Data sharing services to ensure EU-Dune is compliant with all regulations and data can flow between all players, compliant with the rules set out by Fire-X.",
                ],
              },
            },
          ],
        },
      },
      {
        name: "Technical",
        content: {
          title: "Data Intermediary: InfraTrust",
          definition: "Type of building blocks used per this stakeholder",
          bbs: [
            {
              name: "Access & Usage Policies and Control",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl}`,
            },
            {
              name: "Identity Management",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.identifyManagement}`,
            },
            {
              name: "Trust",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.trust}`,
            },
            {
              name: "Data Exchange",
              path: `${APP_LINKS.buildingBlocks}/${APP_PARAMS.buildingBlocks.dataExchange}`,
            },
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
