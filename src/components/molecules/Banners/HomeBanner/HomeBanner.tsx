import { Button } from "../../../atoms/Buttons/Button/Button";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./HomeBanner.module.scss";

export const HomeBanner = () => {
  return (
    <SectionContainer variantColor="primary" className={Styles.HomeBanner}>
      <div className={Styles.description}>
        <h1>Discover the Data Space for Skills Blueprint</h1>
        <Button icon variantSvgColor="secondary">Read the full document</Button>
      </div>
      <img src="" alt="" className="img-placeholder" />
    </SectionContainer>
  );
};
