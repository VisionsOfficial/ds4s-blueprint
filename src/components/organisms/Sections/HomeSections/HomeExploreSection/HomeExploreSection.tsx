import { SlideTopContainer } from "../../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { ExploreCard } from "../../../../molecules/Cards/ExploreCard/ExploreCard";
import Styles from "./HomeExploreSection.module.scss";
import { useInView } from "react-intersection-observer";

export const HomeExploreSection = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  return (
    <SectionContainer variantColor="primary">
      <SlideTopContainer
        ref={ref}
        InView={InView}
        className={Styles.HomeExploreSection}
      >
        <h2>What do you want to explore?</h2>
        <div className={Styles.cards}>
          <ExploreCard category="Use cases" />
          <ExploreCard category="Building Blocks" />
          {/* <ExploreCard category="Initiatives" /> */}
        </div>
      </SlideTopContainer>
    </SectionContainer>
  );
};
