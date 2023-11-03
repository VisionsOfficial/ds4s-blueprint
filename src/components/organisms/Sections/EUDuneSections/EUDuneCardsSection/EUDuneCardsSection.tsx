import { EUDuneCategoryCard } from "../../../../../types";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { EUDuneCard } from "../../../../molecules/Cards/EUDuneCard/EUDuneCard";
import Styles from "./EUDuneCardsSection.module.scss";

const CONTENT_CARD: EUDuneCategoryCard[] = [
  "francesco",
  "gear",
  "cloud",
  "graph",
  "login",
  "ai",
  "anita",
  "money",
  "shield",
];

export const EUDuneCardsSection = () => {
  const setContentDirection = (el: EUDuneCategoryCard) => {
    if (el === "gear" || el === "ai" || el === "money") return "reverse";
    else return "normal";
  };

  return (
    <SectionContainer className={Styles.EUDuneCardsSection}>
      {CONTENT_CARD.map((el, index) => (
        <EUDuneCard
          key={el + index}
          category={el}
          contentDirection={setContentDirection(el)}
          className={`${Styles.euduneCard} ${
            el == "shield" ? Styles.shield : ""
          }`}
        />
      ))}
    </SectionContainer>
  );
};
