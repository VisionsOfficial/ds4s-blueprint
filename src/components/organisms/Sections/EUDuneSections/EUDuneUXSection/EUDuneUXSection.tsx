import Styles from "./EUDuneUXSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { UX_Instruction } from "../../../../../data/project/userExperience/instructions/uxInstructions";
import { UXCard } from "../../../../molecules/Cards/UXCard/UXCard";

export const EUDuneUXSection = () => {
  return (
    <SectionContainer className={Styles.EUDuneUXSection}>
      <header>
        <h2>User Experience</h2>
        <div>
          <p>
            User experience is crucial for human-centric data spaces to keep
            things usable and accessible. The users need to understand what is
            expected of them, what is possible and to be an active part of the
            journey. Also, as the landscape of rapid innovation with surrounding
            complexities is present, UX creates understandable and usable front
            stage for users.
          </p>
          <p>
            One big challenge is that user experience is very universal, and it
            is hard to pinpoint what is specific in Skills Data Space. The
            approach used in this work is to address things in general and show
            concrete examples within the Data Space context. User experience in
            Skills data space emphasizes clear and trustworthy interfaces,
            ensuring user control over their data. This work paves the way for
            human-centric data spaces keeping focus on accessibility and trust.
            To get practical, examples of Matilda’s journey in EU-DUNE use case
            have been created to demonstrate actual user experience scenarios.
          </p>
        </div>
      </header>
      <div className={Styles.cards}>
        {UX_Instruction.map((ux, index) => (
          <UXCard key={ux.title + index} ux={ux} />
        ))}
      </div>
    </SectionContainer>
  );
};
