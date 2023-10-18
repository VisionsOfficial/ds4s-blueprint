import { PropsWithChildren } from "react";
import Styles from "./DataSpaceConnectorSection.module.scss";
import { APP_IMAGES } from "../../../../../utils/appImages";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";
import { useNavigate } from "react-router-dom";
import { APP_LINKS } from "../../../../../utils/appLinks";
import { APP_PARAMS } from "../../../../../utils/appParams";

type DataSpaceConnectorSectionProps = {
  className?: string;
  category: "provider" | "consumer";
};

export const DataSpaceConnectorSection = ({
  className = "",
  category = "provider",
}: PropsWithChildren<DataSpaceConnectorSectionProps>) => {
  const navigate = useNavigate();

  const handleClick = (bbs: string) => {
    navigate(APP_LINKS.buildingBlocks + `/${bbs}`);
  };

  return (
    <div
      className={`${Styles.DataSpaceConnectorSection} ${className}`}
      style={category === "consumer" ? { flexDirection: "row-reverse" } : {}}
    >
      <figure>
        <img
          src={APP_IMAGES.icon.buildingBlock.organisation}
          alt="Icon organisation"
        />
        <figcaption>
          {category === "provider" ? "Data Provider" : "Data Consumer"}
        </figcaption>
      </figure>

      <svg
        viewBox="0 0 350 100"
        className={Styles.arrow}
        style={category === "consumer" ? { transform: "rotate(180deg)" } : {}}
      >
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
          x2="250"
          y2="50"
          stroke="#000"
          strokeWidth="8"
          markerEnd="url(#arrowhead)"
        />
      </svg>

      <div className={Styles.container}>
        <h4>Data Space connector</h4>
        <Button
          variantBgColor="primary"
          onClick={() => {
            handleClick(APP_PARAMS.buildingBlocks.decentralizedAITraining);
          }}
        >
          Decentralized AI training
        </Button>
        <Button
          variantBgColor="secondary"
          onClick={() => {
            handleClick(
              APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions
            );
          }}
        >
          Data, service and offering descriptions
        </Button>
        <WrapperSchemaButtons
          title="Data exchange"
          onClick={() => {
            handleClick(APP_PARAMS.buildingBlocks.dataExchange);
          }}
          style={{ cursor: "pointer" }}
        >
          <Button variantBgColor="lightPrimary">
            Safeguard for personal data
          </Button>
          <Button variantBgColor="lightPrimary">
            Privacy preserving DE protocols
          </Button>
        </WrapperSchemaButtons>
      </div>
    </div>
  );
};
