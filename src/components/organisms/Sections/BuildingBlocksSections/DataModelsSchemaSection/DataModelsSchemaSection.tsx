import { PropsWithChildren } from "react";
import Styles from "./DataModelsSchemaSection.module.scss";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { useNavigate } from "react-router-dom";
import { APP_LINKS } from "../../../../../utils/appLinks";

type DataModelsSchemaSectionProps = {
  className?: string;
};

export const DataModelsSchemaSection = ({
  className = "",
}: PropsWithChildren<DataModelsSchemaSectionProps>) => {
  const navigate = useNavigate();

  const handleClick = (bbs: string) => {
    navigate(APP_LINKS.buildingBlocks + `/${bbs}`);
  };

  return (
    <WrapperSchemaButtons
      className={`${Styles.DataModelsSchemaSection} ${className}`}
      display="grid"
      title="Data Models & Formats"
      onClick={() => {
        handleClick("data-models-and-format");
      }}
    >
      <Button variantBgColor="lightPrimary">Data normalisation</Button>
      <Button variantBgColor="lightPrimary">Data format conversion</Button>
      <Button variantBgColor="lightPrimary">Language models</Button>
      <Button variantBgColor="lightPrimary">Data structure conversion</Button>
      <Button variantBgColor="lightPrimary">Data quality assurance</Button>
      <Button variantBgColor="lightPrimary">
        Tax / Ont / Learner model conversions
      </Button>
    </WrapperSchemaButtons>
  );
};
