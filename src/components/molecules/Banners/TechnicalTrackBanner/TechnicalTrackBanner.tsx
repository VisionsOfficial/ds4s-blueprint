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
  return (
    <SectionContainer
      className={Styles.TechnicalTrackBanner}
      variantColor="primary"
    >
      <h1>{bbs?.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: bbs?.description || "" }}></p>
    </SectionContainer>
  );
};
