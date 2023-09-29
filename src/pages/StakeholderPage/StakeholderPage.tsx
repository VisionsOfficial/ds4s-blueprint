import { useParams } from "react-router-dom";
import Styles from "./StakeholderPage.module.scss";
import { StakeholderBanner } from "../../components/molecules/Banners/StakeholderBanner/StakeholderBanner";
import { LOCAL_STORAGE_KEY } from "../../utils/keys/localStorageKeys";
import { ColorVariant } from "../../types";
import { StakeholderContentSection } from "../../components/organisms/Sections/StakeholderSections/StakeholderContentSection/StakeholderContentSection";

export const StakeholderPage = () => {
  const params = useParams();

  const setColor = () => {
    const local = sessionStorage.getItem(LOCAL_STORAGE_KEY.color.stakeholder);

    if (local) {
      return local;
    } else {
      return "hightLightPrimary";
    }
  };

  if (!params) {
    return <>Error</>;
  }

  return (
    <main className={Styles.StakeholderPage}>
      <StakeholderBanner
        variantBgColor={setColor() as ColorVariant}
        params={params}
      />

      <StakeholderContentSection
        currentColor={setColor() as ColorVariant}
        params={params}
      />
    </main>
  );
};
