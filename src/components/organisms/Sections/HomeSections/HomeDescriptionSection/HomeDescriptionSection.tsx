import Styles from "./HomeDescriptionSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { APP_IMAGES } from "../../../../../utils/appImages";
import { useInView } from "react-intersection-observer";
import { SlideTopContainer } from "../../../../atoms/Animations/SlideTopContainer/SlideTopContainer";

export const HomeDescriptionSection = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });

  return (
    <SectionContainer className={Styles.HomeDescriptionSection}>
      <SlideTopContainer ref={ref} InView={InView}>
        <img src={APP_IMAGES.icon.ds4s.cubeDS4S} alt="icon cube DS4Skils" />
      </SlideTopContainer>
      <p>
        As an important outcome of the DS4Skills project, the Data Space for
        Skills Blueprint{" "}
        <span>
          offers concrete building blocks, governance and business models as
          well illustrated guidelines to equip organisations in building the
          skills data space
        </span>{" "}
        that can offer practical benefits to citizens and businesses.
      </p>
    </SectionContainer>
  );
};
