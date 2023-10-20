import Styles from "./BuildingBlocksBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { SlideTopContainer } from "../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { useInView } from "react-intersection-observer";

export const BuildingBlocksBanner = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  return (
    <SectionContainer variantColor="primary" className={`${Styles.bgImage} slide-top-bg-image`}>
      <SlideTopContainer
        className={Styles.BuildingBlocksBanner}
        ref={ref}
        InView={InView}
      >
        <header>
          <h1>Building blocks</h1>
          <p>
            Description: <br />
            The Skills & Education Data Space, designed for decentralized data
            sharing, relies on a set of key technical building blocks. Informed
            by user-centric principles like consent and transparency, these
            building blocks address semantic and conceptual interoperability,
            data quality, and trusted AI applications. The reference
            architecture, aligned with the DSSC blueprint, underscores data
            sovereignty and human-centricity. This introduction sets the stage
            for a detailed exploration of these critical technical building
            blocks.
          </p>
        </header>
        <Button icon="plus" variantSvgColor="secondary">
          Read the full document
        </Button>
      </SlideTopContainer>
    </SectionContainer>
  );
};
