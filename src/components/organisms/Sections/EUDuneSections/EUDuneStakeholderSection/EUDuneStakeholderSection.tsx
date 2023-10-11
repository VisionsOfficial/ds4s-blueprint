import Styles from "./EUDuneStakeholderSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { Stakeholder } from "../../../../../types";
import { StakeholderCard } from "../../../../molecules/Cards/StakeholderCard/StakeholderCard";

const CONTENT_STAKEHOLDER: Stakeholder[] = [
  "Individuals: Matilda, Francesco, Anita",
  "Organisations: DigiFutUX, IntelliAITraining",
  "Data Intermediary: InfraTrust",
  "Governance Authority (association): Fire-X",
  "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool",
  "Data Providers (Organisational): Jobo, JobRightNow and Jobijob",
  "Orchestator: SkillsFast",
  "Service Providers: SkillProfiX, SDAI, SkillFast",
];

export const EUDuneStakeholderSection = () => {
  return (
    <SectionContainer
      className={Styles.EUDuneStakeholderSection}
      variantColor="grey"
    >
      <h2>Choose a Stakeholder</h2>
      <div>
        {CONTENT_STAKEHOLDER?.map((el, index) => (
          <StakeholderCard
            key={el + index}
            stakeholder={el}
            currentIndex={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
