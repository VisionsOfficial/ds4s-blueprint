import { PropsWithChildren } from "react";
import Styles from "./TechnicalTrackGovernanceContent.module.scss";
import { TechnicalTrackGovernance } from "../../../../../types";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { TechnicalTrackGovernanceCard } from "../../../../molecules/Cards/TechnicalTrackGovernanceCard/TechnicalTrackGovernanceCard";

type TechnicalTrackGovernanceContentProps = {
  bbs: TechnicalTrackGovernance;
};

export const TechnicalTrackGovernanceContent = ({
  bbs,
}: PropsWithChildren<TechnicalTrackGovernanceContentProps>) => {
  return (
    <SectionContainer
      className={Styles.TechnicalTrackGovernanceContent}
      variantColor="grey"
    >
      <TechnicalTrackGovernanceCard functionalites={bbs?.functionalities} />
      <TechnicalTrackGovernanceCard standards={bbs?.standards} />
      <TechnicalTrackGovernanceCard
        referenceImplementations={bbs?.referenceImplementations}
      />
    </SectionContainer>
  );
};
