import Styles from "./UseCaseDiscoverSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { ExploreCard } from "../../../../molecules/Cards/ExploreCard/ExploreCard";

export const UseCaseDiscoverSection = () => {
  return (
    <SectionContainer className={Styles.UseCaseDiscoverSection}>
      <h2>Let’s discover more</h2>
      <div className={Styles.cards}>
        <ExploreCard category="Examples" variant="discover" />
        <ExploreCard category="Building Blocks" variant="discover" />
      </div>
    </SectionContainer>
  );
};
