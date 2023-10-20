import Styles from "./EUDuneUXSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { UX_Instruction } from "../../../../../data/project/userExperience/instructions/uxInstructions";
import { UXCard } from "../../../../molecules/Cards/UXCard/UXCard";
import { SlideTopContainer } from "../../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { useInView } from "react-intersection-observer";

export const EUDuneUXSection = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  return (
    <SectionContainer>
      <SlideTopContainer
        className={Styles.EUDuneUXSection}
        ref={ref}
        InView={InView}
      >
        <h2>User Experience</h2>
        <div className={Styles.cards}>
          {UX_Instruction.map((ux, index) => (
            <UXCard key={ux.title + index} ux={ux} />
          ))}
        </div>
      </SlideTopContainer>
    </SectionContainer>
  );
};
