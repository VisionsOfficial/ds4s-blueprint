import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { ExploreCard } from "../../../../molecules/Cards/ExploreCard/ExploreCard";
import Styles from "./HomeExploreSection.module.scss";

export const HomeExploreSection = () => {
  return (
    <SectionContainer
      variantColor="primary"
      className={Styles.HomeExploreSection}
    >
      <h2>What do you want to explore?</h2>
      <div className={Styles.cards}>
        <ExploreCard category="Use cases" />
        <ExploreCard category="Building Blocks" />
      </div>
    </SectionContainer>
  );
};
