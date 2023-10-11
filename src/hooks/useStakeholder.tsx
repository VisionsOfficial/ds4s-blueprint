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
    examples?: string[];
    secondExamples?: string[];
    obligations?: string[];
    benefits?: string[];
    costs?: string[];
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
                title: "Individuals Business",
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
                title: "Individuals Technical",
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
                title: "Individuals Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Edtechs & AI Providers Business",
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
                title: "Edtechs & AI Providers Technical",
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
                title: "Edtechs & AI Providers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Educational Institutions Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Individuals and employees Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "University & Training providers Business",
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
                title: "University & Training providers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Employers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Organisational & employers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Educational & Training providers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Employment Agencies Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Learning & development units Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Public Institutions Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Observatories Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Governments & Pilocy Markers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Orchestator Business",
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
                title: "Orchestator Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
                title: "Infrastructure providers Business",
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
                title: "Infrastructure providers Technical",
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
                title: "Infrastructure providers Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
              },
            },
          ],
        });
        break;
      case "Individuals: Matilda, Francesco, Anita":
        setData({
          name: "Individuals: Matilda, Francesco, Anita",
          image: APP_IMAGES.image.stakeholder.individuals,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Individuals: Matilda, Francesco, Anita Governance",
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
                title: "Individuals: Matilda, Francesco, Anita Business",
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
                title: "Individuals: Matilda, Francesco, Anita Technical",
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
                title: "Individuals: Matilda, Francesco, Anita Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
              },
            },
          ],
        });
        break;
      case "Organisations: DigiFutUX, IntelliAITraining":
        setData({
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
                title: "Organisations: DigiFutUX, IntelliAITraining Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
              },
            },
          ],
        });
        break;
      case "Data Intermediary: InfraTrust":
        setData({
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
                title: "Data Intermediary: InfraTrust Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
              },
            },
          ],
        });
        break;
      case "Governance Authority (association): Fire-X":
        setData({
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
                title: "Governance Authority (association): Fire-X Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
              },
            },
          ],
        });
        break;
      case "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool":
        setData({
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
                  "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
              },
            },
          ],
        });
        break;
      case "Data Providers (Organisational): Jobo, JobRightNow and Jobijob":
        setData({
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
                  "Data Providers (Organisational): Jobo, JobRightNow and Jobijob Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
              },
            },
          ],
        });
        break;
      case "Orchestator: SkillsFast":
        setData({
          name: "Orchestator: SkillsFast",
          image: APP_IMAGES.image.stakeholder.orchestrator,
          categories: [
            {
              name: "Governance",
              content: {
                title: "Orchestator: SkillsFast Governance",
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
                title: "Orchestator: SkillsFast Business",
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
                title: "Orchestator: SkillsFast Technical",
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
                title: "Orchestator: SkillsFast Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
              },
            },
          ],
        });
        break;
      case "Service Providers: SkillProfiX, SDAI, SkillFast":
        setData({
          name: "Service Providers: SkillProfiX, SDAI, SkillFast",
          image: APP_IMAGES.image.stakeholder.infrastructureProviders,
          categories: [
            {
              name: "Governance",
              content: {
                title:
                  "Service Providers: SkillProfiX, SDAI, SkillFast Governance",
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
                  "Service Providers: SkillProfiX, SDAI, SkillFast Business",
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
                title:
                  "Service Providers: SkillProfiX, SDAI, SkillFast Technical",
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
                title: "Service Providers: SkillProfiX, SDAI, SkillFast Value",
                definition:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
                benefits: [
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                  "Benefit definition",
                ],
                costs: [
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                  "Cost definition",
                ],
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
