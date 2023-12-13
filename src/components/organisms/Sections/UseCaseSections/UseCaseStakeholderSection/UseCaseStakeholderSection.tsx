import Styles from "./UseCaseStakeholderSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { StakeholderCard } from "../../../../molecules/Cards/StakeholderCard/StakeholderCard";
import { Stakeholder, UseCase } from "../../../../../types";
import { useEffect, useState } from "react";

type UseCaseStakeholderSectionProps = {
  useCase: UseCase | string;
};

export const UseCaseStakeholderSection = ({
  useCase,
}: UseCaseStakeholderSectionProps) => {
  const [content, setContent] = useState<Stakeholder[]>();

  useEffect(() => {
    switch (useCase) {
      case "map":
        setContent([
          "Individuals",
          "Educational Institutions",
          "Employers",
          "Governments & Pilocy Markers",
          "Edtechs & AI Providers",
        ]);
        break;
      case "match":
        setContent([
          "Individuals",
          "University & Training providers",
          "Employers",
          "Educational Institutions",
          "Employment Agencies",
          "Edtechs & AI Providers",
          "Orchestrator",
          "Infrastructure providers",
        ]);
        break;
      case "forecast":
        setContent([
          "Individuals and employees",
          "Educational & Training providers",
          "Organisational & employers",
          "Learning & development units",
          "Public Institutions",
          "Observatories",
          "Orchestrator",
          "Infrastructure providers",
        ]);
        break;

      default:
        break;
    }
  }, [useCase]);

  return (
    <SectionContainer
      variantColor="grey"
      className={Styles.UseCaseStakeholderSection}
    >
      <h2>Choose a Stakeholder</h2>
      <div>
        {content?.map((el, index) => (
          <StakeholderCard
            key={el + index}
            stakeholder={el}
            currentIndex={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
