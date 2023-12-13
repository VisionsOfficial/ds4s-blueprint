import Styles from "./BuildingBlocksBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { Link } from "react-router-dom";

export const BuildingBlocksBanner = () => {
  return (
    <SectionContainer
      variantColor="primary"
      className={`${Styles.bgImage} ${Styles.BuildingBlocksBanner}`}
    >
      <header>
        <h1>Building blocks</h1>
        <p>
          The Skills & Education Data Space, designed for decentralized data
          sharing, relies on a set of key technical building blocks. Informed by
          user-centric principles like consent and transparency, these building
          blocks address semantic and conceptual interoperability, data quality,
          and trusted AI applications. The reference architecture, aligned with
          the DSSC blueprint, underscores data sovereignty and human-centricity.
          This introduction sets the stage for a detailed exploration of these
          critical technical building blocks.
        </p>
      </header>
      <Link
        to={"https://www.skillsdataspace.eu/blueprint/tech-introduction/"}
        target="_blank"
      >
        <Button icon="arrowRight" variantSvgColor="secondary">
          Read the full document
        </Button>
      </Link>
    </SectionContainer>
  );
};
