import { PropsWithChildren } from "react";
import Styles from "./StakeholderContentSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { Params } from "react-router-dom";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import {
  ColorVariant,
  Stakeholder,
  StakeholderCategories,
} from "../../../../../types";
import { StakeholderDocumentationByCategoryCard } from "../../../../molecules/Cards/StakeholderDocumentationByCategoryCard/StakeholderDocumentationByCategoryCard";

type StakeholderContentSectionProps = {
  currentColor: ColorVariant;
  params: Readonly<Params<string>>;
};

export const StakeholderContentSection = ({
  currentColor,
  params,
}: PropsWithChildren<StakeholderContentSectionProps>) => {
  const { stakeholder, category } = params;

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
              title="Examples"
              stakeholder={currentStakeholder}
              category={currentCategory}
              currentColor={currentColor}
            />
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

  return (
    <SectionContainer className={Styles.StakeholderContentSection}>
      <div className={Styles.cards}>{setCards()}</div>

      <Button
        icon="plus"
        variantSvgColor={currentColor}
        variantBgColor={currentColor}
      >
        Read the full document
      </Button>
    </SectionContainer>
  );
};
