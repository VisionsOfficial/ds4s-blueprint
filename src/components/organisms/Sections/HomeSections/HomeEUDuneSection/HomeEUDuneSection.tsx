import { useInView } from "react-intersection-observer";
import { SlideTopContainer } from "../../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./HomeEUDuneSection.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { APP_IMAGES } from "../../../../../utils/appImages";

export const HomeEUDuneSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <SectionContainer
      className={Styles.HomeEUDuneSection}
      variantColor="primary"
    >
      <div className={Styles.information}>
        <h2>Follow Matilda's Journey</h2>
        <p>
          Visit EU-DUNE, a fictional use case, to understand how a skills data
          space could support citizens in their career progression and training
          options, empowered by data-driven insights and seamless data
          interconnections.
        </p>
        <Link
          to={
            "https://www.skillsdataspace.eu/blueprint/eu-dune-user-experience/"
          }
          target="_blank"
        >
          <Button
            icon="arrowRight"
            variantSvgColor="secondary"
            className={Styles.btn}
          >
            Visit EU-Dune
          </Button>
        </Link>
      </div>
      <SlideTopContainer className={Styles.image} ref={ref} InView={inView}>
        <img
          src={APP_IMAGES.image.home.homeMatilda}
          alt="Matilda highlight"
          className={Styles.mainImg}
        />
      </SlideTopContainer>
    </SectionContainer>
  );
};
