import { PropsWithChildren, useState } from "react";
import Styles from "./StakeholderContentSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { Params } from "react-router-dom";
import {
  ColorVariant,
  Stakeholder,
  StakeholderCategories,
} from "../../../../../types";
import { StakeholderDocumentationByCategoryCard } from "../../../../molecules/Cards/StakeholderDocumentationByCategoryCard/StakeholderDocumentationByCategoryCard";
import { StakeholderWikiButton } from "../../../../molecules/Buttons/StakeholderWikiButton/StakeholderWikiButton";

type StakeholderContentSectionProps = {
  currentColor: ColorVariant;
  params: Readonly<Params<string>>;
};

export const StakeholderContentSection = ({
  currentColor,
  params,
}: PropsWithChildren<StakeholderContentSectionProps>) => {
  const { stakeholder, category } = params;
  const [showExamples, setShowExamples] = useState(true);

  const updateExampleByCurrentStakeHolder = () => {
    setShowExamples(false);
  };

  const setCards = () => {
    const currentStakeholder = stakeholder?.replace(/-/g, " ") as Stakeholder;
    const currentCategory = category as StakeholderCategories;

    switch (category as StakeholderCategories) {
      case "Governance":
        return (
          <>
            <StakeholderDocumentationByCategoryCard
              title="Obligations"
              stakeholder={currentStakeholder}
              category={currentCategory}
              currentColor={currentColor}
            />
          </>
        );
      case "Technical":
        return (
          <>
            <StakeholderDocumentationByCategoryCard
              title="Building Blocks"
              stakeholder={currentStakeholder}
              category={currentCategory}
              currentColor={currentColor}
            />
          </>
        );
      case "Business":
        return (
          <>
            <StakeholderDocumentationByCategoryCard
              title="What the stakeholder gets out of the data space use case"
              stakeholder={currentStakeholder}
              category={currentCategory}
              currentColor={currentColor}
            />
            <StakeholderDocumentationByCategoryCard
              title="What the stakeholder brings to the data space use case"
              stakeholder={currentStakeholder}
              category={currentCategory}
              currentColor={currentColor}
            />
            {showExamples && (
              <StakeholderDocumentationByCategoryCard
                title="Examples of business models the stakeholder can apply to provide that value"
                stakeholder={currentStakeholder}
                category={currentCategory}
                currentColor={currentColor}
                stakeholderExamples={updateExampleByCurrentStakeHolder}
              />
            )}
          </>
        );
      case "Value":
        return (
          <>
            <StakeholderDocumentationByCategoryCard
              title="Benefits"
              stakeholder={currentStakeholder}
              category={currentCategory}
              currentColor={currentColor}
            />
            <StakeholderDocumentationByCategoryCard
              title="Costs & Risks"
              stakeholder={currentStakeholder}
              category={currentCategory}
              currentColor={currentColor}
            />
          </>
        );

      default:
        break;
    }
  };

  const setBtn = () => {
    const currentStakeholder = stakeholder?.replace(/-/g, " ") as Stakeholder;
    const currentCategory = category as StakeholderCategories;

    switch (category as StakeholderCategories) {
      case "Governance":
        return (
          <StakeholderWikiButton
            category={currentCategory}
            stakeholder={currentStakeholder}
            currentColor={currentColor}
          />
        );
      case "Business":
        return (
          <StakeholderWikiButton
            category={currentCategory}
            stakeholder={currentStakeholder}
            currentColor={currentColor}
          />
        );
      case "Value":
        return (
          <StakeholderWikiButton
            category={currentCategory}
            stakeholder={currentStakeholder}
            currentColor={currentColor}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SectionContainer className={Styles.StakeholderContentSection}>
      <div className={Styles.cards}>{setCards()}</div>
      {setBtn()}
    </SectionContainer>
  );
};
