import { APP_IMAGES } from "../../../../utils/appImages";
import { SlideTopContainer } from "../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./HomeBanner.module.scss";
import { useInView } from "react-intersection-observer";

export const HomeBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <SectionContainer variantColor="primary">
      <SlideTopContainer
        className={Styles.HomeBanner}
        ref={ref}
        InView={inView}
      >
        <div className={Styles.description}>
          <h1>Discover the Data Space for Skills Blueprint</h1>
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
            src={APP_IMAGES.image.home.homeBanner}
            alt="team works"
            className={Styles.mainImg}
          />
        </div>
      </SlideTopContainer>
    </SectionContainer>
  );
};
