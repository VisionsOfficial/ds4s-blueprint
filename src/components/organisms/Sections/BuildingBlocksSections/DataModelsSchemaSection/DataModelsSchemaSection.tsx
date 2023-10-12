import { PropsWithChildren } from "react";
import Styles from "./DataModelsSchemaSection.module.scss";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";
import { Button } from "../../../../atoms/Buttons/Button/Button";

type DataModelsSchemaSectionProps = {
  className?: string;
};

export const DataModelsSchemaSection = ({
  className = "",
}: PropsWithChildren<DataModelsSchemaSectionProps>) => {
  return (
    <WrapperSchemaButtons
      className={`${Styles.DataModelsSchemaSection} ${className}`}
      display="grid"
      title="Data Models & Formats"
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
