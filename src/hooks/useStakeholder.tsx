import { useEffect, useState } from "react";
import { Stakeholder, StakeholderCategories } from "../types";
import { APP_IMAGES } from "../utils/appImages";

type Props = {
  stakeholder: Stakeholder;
};

export type ContentStakeholder = {
  name: Stakeholder;
  image: string;
  categories: CategoriesContentStakeholder[];
};

export type CategoriesContentStakeholder = {
  name: StakeholderCategories;
  content: {
    title: string;
    definition: string;
  };
};

export const useStakeholder = ({ stakeholder }: Props) => {
  const [data, setData] = useState<ContentStakeholder>();

  useEffect(() => {
    switch (stakeholder) {
      case "Individuals":
        setData({
          name: "Individuals",
          image: APP_IMAGES.image.stakeholder.individuals,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Individuals Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Individuals Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Individuals Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Individuals Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Edtechs & AI Providers":
        setData({
          name: "Edtechs & AI Providers",
          image: APP_IMAGES.image.stakeholder.edtechsAIProviders,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Edtechs & AI Providers Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Edtechs & AI Providers Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Edtechs & AI Providers Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Edtechs & AI Providers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Educational Institutions":
        setData({
          name: "Educational Institutions",
          image: APP_IMAGES.image.stakeholder.educationalInstitutions,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Educational Institutions Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Educational Institutions Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Educational Institutions Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Educational Institutions Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Individuals and employees":
        setData({
          name: "Individuals and employees",
          image: APP_IMAGES.image.stakeholder.individuals,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Individuals and employees Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Individuals and employees Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Individuals and employees Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Individuals and employees Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "University & Training providers":
        setData({
          name: "University & Training providers",
          image: APP_IMAGES.image.stakeholder.employmentAgencies,
          categories: [
            {
              name: "Governance",
              content: {
                title: "University & Training providers Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "University & Training providers Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "University & Training providers Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "University & Training providers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Employers":
        setData({
          name: "Employers",
          image: APP_IMAGES.image.stakeholder.employers,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Employers Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Employers Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Employers Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Employers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Organisational & employers":
        setData({
          name: "Organisational & employers",
          image: APP_IMAGES.image.stakeholder.employers,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Organisational & employers Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Organisational & employers Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Organisational & employers Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Organisational & employers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Educational & Training providers":
        setData({
          name: "Educational & Training providers",
          image: APP_IMAGES.image.stakeholder.employmentAgencies,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Educational & Training providers Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Educational & Training providers Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Educational & Training providers Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Educational & Training providers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Employment Agencies":
        setData({
          name: "Employment Agencies",
          image: APP_IMAGES.image.stakeholder.employmentAgencies,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Employment Agencies Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Employment Agencies Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Employment Agencies Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Employment Agencies Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Learning & development units":
        setData({
          name: "Learning & development units",
          image: APP_IMAGES.image.stakeholder.learningDevelopmentUnits,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Learning & development units Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Learning & development units Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Learning & development units Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Learning & development units Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Public Institutions":
        setData({
          name: "Public Institutions",
          image: APP_IMAGES.image.stakeholder.publicInstitutions,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Public Institutions Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Public Institutions Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Public Institutions Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Public Institutions Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Observatories":
        setData({
          name: "Observatories",
          image: APP_IMAGES.image.stakeholder.observatories,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Observatories Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Observatories Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Observatories Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Observatories Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Governments & Pilocy Markers":
        setData({
          name: "Governments & Pilocy Markers",
          image: APP_IMAGES.image.stakeholder.governmentPolicyMarkers,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Governments & Pilocy Markers Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Governments & Pilocy Markers Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
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
                title: "Governments & Pilocy Markers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Orchestator":
        setData({
          name: "Orchestator",
          image: APP_IMAGES.image.stakeholder.orchestrator,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Orchestator Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Orchestator Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Orchestator Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Orchestator Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Infrastructure service":
        setData({
          name: "Infrastructure service",
          image: APP_IMAGES.image.stakeholder.infrastructureProviders,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Infrastructure service Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Infrastructure service Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Infrastructure service Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Infrastructure service Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;
      case "Infrastructure providers":
        setData({
          name: "Infrastructure providers",
          image: APP_IMAGES.image.stakeholder.infrastructureProviders,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Infrastructure providers Governance",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Business",
              content: {
                title: "Infrastructure providers Business",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Technical",
              content: {
                title: "Infrastructure providers Technical",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
            {
              name: "Value",
              content: {
                title: "Infrastructure providers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
              },
            },
          ],
        });
        break;

      default:
        break;
    }
  }, [stakeholder]);

  return { data };
};
