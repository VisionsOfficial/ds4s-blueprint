import { HomeBanner } from "../../components/molecules/Banners/HomeBanner/HomeBanner";
import { HomeBlueprintSection } from "../../components/organisms/Sections/HomeSections/HomeBlueprintSection/HomeBlueprintSection";
import { HomeExploreSection } from "../../components/organisms/Sections/HomeSections/HomeExploreSection/HomeExploreSection";
import { HomeDescriptionSection } from "../../components/organisms/Sections/HomeSections/HomeDescriptionSection/HomeDescriptionSection";
import { HomeEUDuneSection } from "../../components/organisms/Sections/HomeSections/HomeEUDuneSection/HomeEUDuneSection";

export const HomePage = () => {
  return (
    <main>
      <HomeBanner />
      <HomeDescriptionSection />
      <HomeExploreSection />
      <HomeEUDuneSection />
      <HomeBlueprintSection />
    </main>
  );
};
