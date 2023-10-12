import { PropsWithChildren } from "react";
import Styles from "./PersonalDataIntermediarySchema.module.scss";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";

type PersonalDataIntermediarySchemaProps = {
  className?: string;
};

export const PersonalDataIntermediarySchema = ({
  className = "",
}: PropsWithChildren<PersonalDataIntermediarySchemaProps>) => {
  return (
    <div>
      <WrapperSchemaButtons
        title="Personal Data Intermediary"
        className={`${Styles.PersonalDataIntermediarySchema} ${className}`}
      >
        <Button variantBgColor="lightPrimary">PDI consent management</Button>
        <Button variantBgColor="lightPrimary">PDI identify</Button>
      </WrapperSchemaButtons>
    </div>
  );
};
