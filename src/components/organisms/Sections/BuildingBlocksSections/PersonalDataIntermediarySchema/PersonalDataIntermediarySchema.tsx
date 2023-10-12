import { PropsWithChildren } from "react";
import Styles from "./PersonalDataIntermediarySchema.module.scss";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";
import { APP_IMAGES } from "../../../../../utils/appImages";

type PersonalDataIntermediarySchemaProps = {
  className?: string;
};

export const PersonalDataIntermediarySchema = ({
  className = "",
}: PropsWithChildren<PersonalDataIntermediarySchemaProps>) => {
  return (
    <div className={`${Styles.PersonalDataIntermediarySchema} ${className}`}>
      <WrapperSchemaButtons title="Personal Data Intermediary">
        <Button variantBgColor="lightPrimary">PDI consent management</Button>
        <Button variantBgColor="lightPrimary">PDI identify</Button>
      </WrapperSchemaButtons>

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

      <img
        src={APP_IMAGES.icon.buildingBlock.individual}
        alt="Icon individual"
      />
    </div>
  );
};
