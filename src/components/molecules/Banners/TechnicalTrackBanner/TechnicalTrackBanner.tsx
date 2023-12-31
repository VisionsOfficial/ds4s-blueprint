import { PropsWithChildren } from "react";
import Styles from "./TechnicalTrackBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import { TechnicalTrackGovernance } from "../../../../types";

type TechnicalTrackBannerProps = {
  bbs: TechnicalTrackGovernance;
};

export const TechnicalTrackBanner = ({
  bbs,
}: PropsWithChildren<TechnicalTrackBannerProps>) => {
  const addSubTitle = () => {
    switch (bbs.title) {
      case "PDI Consent":
        return <small>(extends DSSC Acces & usage Control)</small>;
      case "PDI Identity":
        return <small>(extends DSSC Identity Management)</small>;
      case "PDI Catalogue":
        return <small>(extends DSSC Publication & Discovery)</small>;

      default:
        return null;
    }
  };

  return (
    <SectionContainer
      className={Styles.TechnicalTrackBanner}
      variantColor="primary"
    >
      <h1>
        {bbs?.title} {addSubTitle()}
      </h1>
      <p dangerouslySetInnerHTML={{ __html: bbs?.description || "" }}></p>
    </SectionContainer>
  );
};
