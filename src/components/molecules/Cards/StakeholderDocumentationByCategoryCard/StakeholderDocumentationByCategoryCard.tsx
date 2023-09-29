import { PropsWithChildren } from "react";
import Styles from "./StakeholderDocumentationByCategoryCard.module.scss";
import { Card } from "../../../atoms/Cards/Card/Card";
import {
  ColorVariant,
  Stakeholder,
  StakeholderCategories,
} from "../../../../types";
import { useStakeholder } from "../../../../hooks/useStakeholder";
import { UseColor } from "../../../../hooks/useColor/useColor";

type StakeholderDocumentationByCategoryCardProps = {
  title: "Benefits" | "Costs" | "Examples" | "Obligations" | "Second Examples";
  stakeholder: Stakeholder;
  category: StakeholderCategories;
  currentColor: ColorVariant;
};

export const StakeholderDocumentationByCategoryCard = ({
  title,
  stakeholder,
  category,
  currentColor,
}: PropsWithChildren<StakeholderDocumentationByCategoryCardProps>) => {
  const { data } = useStakeholder({ stakeholder });
  const { selectedColor } = UseColor({ color: currentColor });

  const setContent = () => {
    const content = data?.categories.map((el) => {
      if (el.name === category) {
        switch (title) {
          case "Obligations":
            return el.content.obligations?.map((obligation, index) => (
              <p className={selectedColor} key={obligation + index}>
                {obligation}
              </p>
            ));
          case "Examples":
            return el.content.examples?.map((ex, index) => (
              <p className={selectedColor} key={ex + index}>
                {ex}
              </p>
            ));
          case "Second Examples":
            return el.content.secondExamples?.map((secondEx, index) => (
              <p className={selectedColor} key={secondEx + index}>
                {secondEx}
              </p>
            ));
          case "Benefits":
            return el.content.benefits?.map((ben, index) => (
              <p className={selectedColor} key={ben + index}>
                {ben}
              </p>
            ));
          case "Costs":
            return el.content.costs?.map((cost, index) => (
              <p className={selectedColor} key={cost + index}>
                {cost}
              </p>
            ));

          default:
            break;
        }
      } else return null;
    });

    return content;
  };

  return (
    <Card className={Styles.StakeholderDocumentationByCategoryCard}>
      <h3>{title === "Second Examples" ? "Examples" : title}</h3>
      <div className={Styles.content}>{setContent()}</div>
    </Card>
  );
};
