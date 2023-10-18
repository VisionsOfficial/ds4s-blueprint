import { EUDuneBanner } from "../../components/molecules/Banners/EUDuneBanner/EUDuneBanner";
import { EUDuneCardsSection } from "../../components/organisms/Sections/EUDuneSections/EUDuneCardsSection/EUDuneCardsSection";
import { EUDuneCarouselSection } from "../../components/organisms/Sections/EUDuneSections/EUDuneCarouselSection/EUDuneCarouselSection";
import { EUDuneStakeholderSection } from "../../components/organisms/Sections/EUDuneSections/EUDuneStakeholderSection/EUDuneStakeholderSection";
import { EUDuneUXSection } from "../../components/organisms/Sections/EUDuneSections/EUDuneUXSection/EUDuneUXSection";
import Styles from "./EUDunePage.module.scss";

export const EUDunePage = () => {
  return (
    <main className={Styles.EUDunePage}>
      <EUDuneBanner />
      <EUDuneCardsSection />
      <EUDuneStakeholderSection />
      <EUDuneCarouselSection />
      <EUDuneUXSection />
    </main>
  );
};
