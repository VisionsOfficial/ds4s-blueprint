import Styles from "./UseCasePage.module.scss";
import { UseCaseBanner } from "../../components/molecules/Banners/UseCaseBanner/UseCaseBanner";
import { useParams } from "react-router-dom";
import { UseCaseDiscoverSection } from "../../components/organisms/Sections/UseCaseSections/UseCaseDiscoverSection/UseCaseDiscoverSection";
import { UseCaseStakeholderSection } from "../../components/organisms/Sections/UseCaseSections/UseCaseStakeholderSection/UseCaseStakeholderSection";
import { EUDuneUXSection } from "../../components/organisms/Sections/EUDuneSections/EUDuneUXSection/EUDuneUXSection";

export const UseCasePage = () => {
  const { useCase } = useParams();

  if (!useCase) return <>Loader</>;

  return (
    <main className={Styles.UseCasePage}>
      <UseCaseBanner useCase={useCase} />
      <UseCaseStakeholderSection useCase={useCase} />
      <UseCaseDiscoverSection />
      <EUDuneUXSection />
    </main>
  );
};
