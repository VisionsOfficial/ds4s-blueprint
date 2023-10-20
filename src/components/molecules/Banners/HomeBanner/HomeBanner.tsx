import { APP_IMAGES } from "../../../../utils/appImages";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./HomeBanner.module.scss";
import { useInView } from "react-intersection-observer";

export const HomeBanner = () => {
  const [imageRef, inView] = useInView({
    triggerOnce: true,
  });
  const [textRef, inViewText] = useInView({
    triggerOnce: true,
  });

  return (
    <SectionContainer variantColor="primary" className={Styles.HomeBanner}>
      <div
        className={`${Styles.description} ${
          inViewText ? "slide-top-animation" : ""
        }`}
        ref={textRef}
      >
        <h1>Discover the Data Space for Skills Blueprint</h1>
        <Button icon="plus" variantSvgColor="secondary">
          Read the full document
        </Button>
      </div>
      {/* <img src={APP_IMAGES.image.home.homeBanner} alt="team works" /> */}
      <div
        className={`${Styles.image} ${inView ? "slide-top-animation" : ""}`}
        ref={imageRef}
      >
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
    </SectionContainer>
  );
};
