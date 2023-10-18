import Styles from "./TechnicalTrackPage.module.scss";
import { TechnicalTrackBanner } from "../../components/molecules/Banners/TechnicalTrackBanner/TechnicalTrackBanner";
import { useNavigate, useParams } from "react-router-dom";
import { useTechnicalTrackGovernance } from "../../hooks/useTechnicalTrackGovernance";
import { TechnicalTrackGovernanceContent } from "../../components/organisms/Sections/TechnicalTrackSections/TechnicalTrackGovernanceContent/TechnicalTrackGovernanceContent";
import { SectionContainer } from "../../components/atoms/Containers/SectionContainer/SectionContainer";
import { Button } from "../../components/atoms/Buttons/Button/Button";
import { APP_LINKS } from "../../utils/appLinks";

export const TechnicalTrackPage = () => {
  const { bbs } = useParams();
  const { data } = useTechnicalTrackGovernance({ bbs: bbs || "" });
  const navigate = useNavigate();

  if (!data) {
    return (
      <SectionContainer variantColor="primary">
        <p style={{ marginBottom: 20 }}>Error no data</p>
        <Button
          onClick={() => {
            navigate(APP_LINKS.buildingBlocks);
          }}
        >
          Go back to the building blocks page
        </Button>
      </SectionContainer>
    );
  }

  return (
    <main className={Styles.TechnicalTrackPage}>
      <TechnicalTrackBanner bbs={data} />
      <TechnicalTrackGovernanceContent bbs={data} />
    </main>
  );
};
