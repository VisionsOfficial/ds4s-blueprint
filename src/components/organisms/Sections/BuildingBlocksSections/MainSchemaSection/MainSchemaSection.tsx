import { PropsWithChildren } from "react";
import Styles from "./MainSchemaSection.module.scss";
import { PersonalDataIntermediarySchema } from "../PersonalDataIntermediarySchema/PersonalDataIntermediarySchema";
import { DataSpaceIntermediary } from "../DataSpaceIntermediary/DataSpaceIntermediary";

type MainSchemaSectionProps = {
  className?: string;
};

export const MainSchemaSection = ({
  className = "",
}: PropsWithChildren<MainSchemaSectionProps>) => {
  return (
    <div className={`${Styles.MainSchemaSection} ${className}`}>
      <PersonalDataIntermediarySchema />
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
      <DataSpaceIntermediary />
    </div>
  );
};
