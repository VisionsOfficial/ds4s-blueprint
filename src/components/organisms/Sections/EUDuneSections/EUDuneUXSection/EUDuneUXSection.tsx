import Styles from "./EUDuneUXSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { UX_Instruction } from "../../../../../data/project/userExperience/instructions/uxInstructions";
import { UXCard } from "../../../../molecules/Cards/UXCard/UXCard";

export const EUDuneUXSection = () => {
  return (
    <SectionContainer className={Styles.EUDuneUXSection}>
      <h2>User Experience</h2>
      <div className={Styles.cards}>
        {UX_Instruction.map((ux, index) => (
          <UXCard key={ux.title + index} ux={ux} />
        ))}
      </div>
    </SectionContainer>
  );
};
