import Styles from "./UseCaseDiscoverSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { ExploreCard } from "../../../../molecules/Cards/ExploreCard/ExploreCard";
import { SlideTopContainer } from "../../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { useInView } from "react-intersection-observer";

export const UseCaseDiscoverSection = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  return (
    <SectionContainer>
      <SlideTopContainer
        className={Styles.UseCaseDiscoverSection}
        ref={ref}
        InView={InView}
      >
        <h2>Let’s discover more</h2>
        <div className={Styles.cards}>
          <ExploreCard category="Examples" variant="discover" />
          <ExploreCard category="Building Blocks" variant="discover" />
          {/* <ExploreCard category="Initiatives" variant="discover" /> */}
        </div>
      </SlideTopContainer>
    </SectionContainer>
  );
};
