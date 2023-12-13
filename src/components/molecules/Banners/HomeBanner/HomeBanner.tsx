import { Link } from "react-router-dom";
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
    <SectionContainer variantColor="primary" className={Styles.HomeBanner}>
      <div className={Styles.description}>
        <h1>Discover the Data Space for Skills Blueprint</h1>
        <Link to={"https://www.skillsdataspace.eu/wiki/"} target="_blank">
          <Button icon="arrowRight" variantSvgColor="secondary">
            Read the full document
          </Button>
        </Link>
      </div>
      <SlideTopContainer className={Styles.image} ref={ref} InView={inView}>
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
      </SlideTopContainer>
    </SectionContainer>
  );
};
