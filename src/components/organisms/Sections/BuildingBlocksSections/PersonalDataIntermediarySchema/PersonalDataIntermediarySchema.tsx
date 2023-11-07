import { PropsWithChildren } from "react";
import Styles from "./PersonalDataIntermediarySchema.module.scss";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";
import { APP_IMAGES } from "../../../../../utils/appImages";
import { Link } from "react-router-dom";

type PersonalDataIntermediarySchemaProps = {
  className?: string;
};

export const PersonalDataIntermediarySchema = ({
  className = "",
}: PropsWithChildren<PersonalDataIntermediarySchemaProps>) => {
  return (
    <div className={`${Styles.PersonalDataIntermediarySchema} ${className}`}>
      <figure>
        <img
          src={APP_IMAGES.icon.buildingBlock.individual}
          alt="Icon individual"
        />
        <figcaption>Individual</figcaption>
      </figure>

      <svg viewBox="0 0 350 100" className={Styles.arrow}>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>
        <line
          x1="0"
          y1="50"
          x2="200"
          y2="50"
          stroke="#000"
          strokeWidth="15"
          markerEnd="url(#arrowhead)"
        />
      </svg>

      <WrapperSchemaButtons
        title="Personal Data Intermediary"
        className={Styles.section}
      >
        <Link
          to={
            "https://www.skillsdataspace.eu/blueprint/governance-building-blocks/#2-toc-title"
          }
          target="_blank"
        >
          <Button variantBgColor="lightPrimary">
            PDI Consent
            <br />
            (extends DSSC Acces & usage Control)
          </Button>
        </Link>
        <Link
          to={
            "https://www.skillsdataspace.eu/blueprint/governance-building-blocks/#3-toc-title"
          }
          target="_blank"
        >
          <Button variantBgColor="lightPrimary">
            PDI Identify <br />
            (extends DSSC Identify Management)
          </Button>
        </Link>
        <Link
          to={
            "https://www.skillsdataspace.eu/blueprint/governance-building-blocks/#6-toc-title"
          }
          target="_blank"
        >
          <Button variantBgColor="lightPrimary">
            PDI Catalogue <br />
            (extends DSSC Publication & Discovery)
          </Button>
        </Link>
        <Link
          to={
            "https://www.skillsdataspace.eu/blueprint/governance-building-blocks/#5-toc-title"
          }
          target="_blank"
        >
          <Button variantBgColor="lightPrimary">
            PDI Distributed Data Visualisation
          </Button>
        </Link>
      </WrapperSchemaButtons>
    </div>
  );
};
