import Styles from "./BuildingBlocksBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import { Button } from "../../../atoms/Buttons/Button/Button";

export const BuildingBlocksBanner = () => {
  return (
    <SectionContainer
      variantColor="primary"
      className={Styles.BuildingBlocksBanner}
    >
      <header>
        <h1>Building blocks</h1>
        <p>
          Description: <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          quaerat iusto rem iste quas quasi accusamus error, dicta assumenda,
          ratione reiciendis commodi. Nulla possimus incidunt repudiandae nemo
          inventore rem excepturi!
        </p>
      </header>
      <Button icon="plus" variantSvgColor="secondary">
        Read the full document
      </Button>
    </SectionContainer>
  );
};
