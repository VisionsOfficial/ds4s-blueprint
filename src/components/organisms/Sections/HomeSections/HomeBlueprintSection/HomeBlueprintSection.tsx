import { APP_IMAGES } from "../../../../../utils/appImages";
import { SlideTopContainer } from "../../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./HomeBlueprintSection.module.scss";
import { useInView } from "react-intersection-observer";

export const HomeBlueprintSection = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  return (
    <SectionContainer>
      <SlideTopContainer
        className={Styles.HomeBlueprintSection}
        ref={ref}
        InView={InView}
      >
        <div className={Styles.HomeBlueprintSectionContent}>
          <h2>Why do we need a Blueprint?</h2>
          <p>
            Developing a Data Space for Skills Blueprint is essential to create
            a <span>human-centric data space</span>, where individuals have
            control of their data and share it in a trustworthy way
          </p>
          <p>
            The Blueprint will provide guidelines, governance and business
            models as well as the <span>"building blocks"</span> (democratically
            governed open-source code) that will help organisations put in place
            the complex multi stakeholder collaboration the data space needs.
          </p>

          <Button icon="plus" variantSvgColor="secondary">
            Read the full document
          </Button>
        </div>
        <div className={Styles.image}>
          <img
            src={APP_IMAGES.icon.ds4s.cubeDS4S}
            alt=""
            className={Styles.cube}
          />
          <img
            src={APP_IMAGES.image.home.homeBlueprint}
            alt="laptop"
            className={Styles.laptop}
          />
        </div>
      </SlideTopContainer>
    </SectionContainer>
  );
};
