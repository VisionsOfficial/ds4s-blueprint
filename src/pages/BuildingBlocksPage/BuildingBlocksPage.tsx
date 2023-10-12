import { BuildingBlocksBanner } from "../../components/molecules/Banners/BuildingBlocksBanner/BuildingBlocksBanner";
import { SchemaBuildingBlocksSection } from "../../components/organisms/Sections/BuildingBlocksSections/SchemaBuildingBlocksSection/SchemaBuildingBlocksSection";
import Styles from "./BuildingBlocksPage.module.scss";

export const BuildingBlocksPage = () => {
  return (
    <main className={Styles.BuildingBlocksPage}>
      <BuildingBlocksBanner />
      <SchemaBuildingBlocksSection />
    </main>
  );
};
