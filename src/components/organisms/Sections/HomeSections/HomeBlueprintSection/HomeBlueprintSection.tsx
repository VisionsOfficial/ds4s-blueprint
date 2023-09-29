import { APP_IMAGES } from "../../../../../utils/appImages";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./HomeBlueprintSection.module.scss";

export const HomeBlueprintSection = () => {
  return (
    <SectionContainer className={Styles.HomeBlueprintSection}>
      <div className={Styles.HomeBlueprintSectionContent}>
        <h2>Why do we need a Blueprint?</h2>
        <p>
          Developing a Data Space for Skills Blueprint is essential to create a{" "}
          <span>human-centric data space</span>, where individuals have control
          of their data and share it in a trustworthy way
        </p>
        <p>
          The Blueprint will provide the <span>"building blocks"</span>{" "}
          (democratically governed open-source code) that will ensure that any
          organisation can be part of the data space ecosystems without being
          locked into any particular infrastructure provider.
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
    </SectionContainer>
  );
};
