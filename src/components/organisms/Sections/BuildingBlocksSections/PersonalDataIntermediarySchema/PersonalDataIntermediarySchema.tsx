import { PropsWithChildren } from "react";
import Styles from "./PersonalDataIntermediarySchema.module.scss";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";
import { APP_IMAGES } from "../../../../../utils/appImages";
import { useNavigate } from "react-router-dom";
import { APP_LINKS } from "../../../../../utils/appLinks";
import { APP_PARAMS } from "../../../../../utils/appParams";

type PersonalDataIntermediarySchemaProps = {
  className?: string;
};

export const PersonalDataIntermediarySchema = ({
  className = "",
}: PropsWithChildren<PersonalDataIntermediarySchemaProps>) => {
  const navigate = useNavigate();

  const handleClick = (params: string) => {
    navigate(APP_LINKS.buildingBlocks + `/${params}`);
  };

  return (
    <div className={`${Styles.PersonalDataIntermediarySchema} ${className}`}>
      <WrapperSchemaButtons
        title="Personal Data Intermediary"
        onClick={() => {
          handleClick(APP_PARAMS.buildingBlocks.personalDataIntermediary);
        }}
      >
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
