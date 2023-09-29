import { APP_IMAGES } from "../../../../utils/appImages";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./HomeBanner.module.scss";

export const HomeBanner = () => {
  return (
    <SectionContainer variantColor="primary" className={Styles.HomeBanner}>
      <div className={Styles.description}>
        <h1>Discover the Data Space for Skills Blueprint</h1>
        <Button icon="plus" variantSvgColor="secondary">
          Read the full document
        </Button>
      </div>
      {/* <img src={APP_IMAGES.image.home.homeBanner} alt="team works" /> */}
      <div className={Styles.image}>
        <img
          src={APP_IMAGES.icon.ds4s.cubeDS4S}
          alt=""
          className={Styles.cube}
        />
        <img src={APP_IMAGES.image.home.homeBanner} alt="team works" className={Styles.mainImg} />
      </div>
    </SectionContainer>
  );
};
