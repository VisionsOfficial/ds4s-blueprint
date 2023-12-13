import { SectionContainer } from "../../components/atoms/Containers/SectionContainer/SectionContainer";
import { GovernanceBanner } from "../../components/molecules/Banners/GovernanceBanner/GovernanceBanner";
import { NestedDropdown } from "../../components/molecules/Dropdowns/NestedDropdown/NestedDropdown";
import { GovernanceDataSpaceInteractionModel } from "../../components/organisms/Sections/GovernanceSections/GovernanceDataSpaceInteractionModel/GovernanceDataSpaceInteractionModel";
import { GovernanceCategories } from "../../types";
import Styles from "./GovernancePage.module.scss";

const CONTENT_DROPDOWN: GovernanceCategories[] = [
  "Standards",
  "Accession rules",
  "Code of conduct",
  "Use cases",
  "Business model",
  "Data & service usage policies",
  "Building blocks",
];

export const GovernancePage = () => {
  const setTitle = (title: GovernanceCategories) => {
    switch (title) {
      case "Standards":
        return `✅ ${title}`;
      case "Accession rules":
        return `📋 ${title}`;
      case "Code of conduct":
        return `🤝 ${title}`;
      case "Use cases":
        return `🚀 ${title}`;
      case "Business model":
        return `💼 ${title}`;
      case "Data & service usage policies":
        return `📊 ${title}`;
      case "Building blocks":
        return `🛠️ ${title}`;

      default:
        break;
    }
  };

  return (
    <main className={Styles.GovernancePage}>
      <GovernanceBanner />

      <GovernanceDataSpaceInteractionModel />

      <SectionContainer variantColor="white" className={Styles.governances}>
        <h2>The different levels of the data space</h2>
        <div className={Styles.governancesContent}>
          {CONTENT_DROPDOWN.map((el, index) => (
            <div key={el + index}>
              <h3>{setTitle(el)}</h3>
              <NestedDropdown category={el} currentIndex={index} />
            </div>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
};
