import Styles from "./HomeDescriptionSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { APP_IMAGES } from "../../../../../utils/appImages";

export const HomeDescriptionSection = () => {
  return (
    <SectionContainer className={Styles.HomeDescriptionSection}>
      <img src={APP_IMAGES.icon.ds4s.cubeDS4S} alt="icon cube DS4Skils" />
      <p>
        As an important outcome of the DS4Skills project, the Data Space for
        Skills Blueprint{" "}
        <span>
          offers concrete building blocks and illustrated guidelines to equip
          organisations in building data space ecosystems
        </span>{" "}
        that can offer practical benefits to citizens and businesses.
      </p>
    </SectionContainer>
  );
};
