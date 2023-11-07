import { PropsWithChildren } from "react";
import Styles from "./TechnicalTrackGovernanceContent.module.scss";
import { TechnicalTrackGovernance } from "../../../../../types";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { TechnicalTrackGovernanceCard } from "../../../../molecules/Cards/TechnicalTrackGovernanceCard/TechnicalTrackGovernanceCard";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { Link } from "react-router-dom";

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
      <div className={Styles.content}>
        <TechnicalTrackGovernanceCard
          functionalites={bbs?.functionalities || []}
        />
        <TechnicalTrackGovernanceCard standards={bbs?.standards || []} />
        <TechnicalTrackGovernanceCard
          referenceImplementations={bbs?.referenceImplementations || []}
        />
      </div>

      <Link to={bbs.wiki.link} target="_blank">
        <Button
          className={Styles.btn}
          variantBgColor="primary"
          icon="arrowRight"
        >
          Read the full document
        </Button>
      </Link>
    </SectionContainer>
  );
};
