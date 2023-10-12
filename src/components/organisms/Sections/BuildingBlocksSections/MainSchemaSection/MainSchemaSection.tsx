import { PropsWithChildren } from "react";
import Styles from "./MainSchemaSection.module.scss";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";

type MainSchemaSectionProps = {
  className?: string;
};

export const MainSchemaSection = ({
  className = "",
}: PropsWithChildren<MainSchemaSectionProps>) => {
  return (
    <div className={`${Styles.MainSchemaSection} ${className}`}>
      <WrapperSchemaButtons title="Trust">
        <Button variantBgColor="lightPrimary">Trustworthy AI assessment</Button>
      </WrapperSchemaButtons>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 100"
        className={Styles.arrow}
        style={{ transform: "rotate(90deg)" }}
      >
        <defs>
          <marker
            id="startarrow"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="10 0, 10 7, 0 3.5" fill="#000" />
          </marker>
          <marker
            id="endarrow"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
          </marker>
        </defs>
        <line
          x1="100"
          y1="50"
          x2="250"
          y2="50"
          stroke="#000"
          strokeWidth="12"
          markerEnd="url(#endarrow)"
          markerStart="url(#startarrow)"
        />
      </svg>

      <WrapperSchemaButtons title="Identity management">
        <Button variantBgColor="lightPrimary">PDI identity</Button>
      </WrapperSchemaButtons>

      <Button variantBgColor="secondary">Marketplace & usage accounting</Button>

      <WrapperSchemaButtons title="Publication & discovery">
        <Button variantBgColor="lightPrimary">
          PDI data & service catalog
        </Button>
        <Button variantBgColor="lightPrimary">
          Distrib. data visualisation
        </Button>
      </WrapperSchemaButtons>

      <WrapperSchemaButtons title="Access & usage policies and control">
        <Button variantBgColor="lightPrimary">Personal data access logs</Button>
        <Button variantBgColor="lightPrimary">PDI consent</Button>
      </WrapperSchemaButtons>
    </div>
  );
};
