import { useState } from "react";
import { SlideTopContainer } from "../../components/atoms/Animations/SlideTopContainer/SlideTopContainer";
import { SectionContainer } from "../../components/atoms/Containers/SectionContainer/SectionContainer";
import { GovernanceBanner } from "../../components/molecules/Banners/GovernanceBanner/GovernanceBanner";
import { NestedDropdown } from "../../components/molecules/Dropdowns/NestedDropdown/NestedDropdown";
import { GovernanceCategories } from "../../types";
import Styles from "./GovernancePage.module.scss";
import { useInView } from "react-intersection-observer";

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
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  const [openModal, setOpenModal] = useState<{
    dataSpace: boolean;
    ecosystem: boolean;
    participantLevel: boolean;
  }>();
  const [currentModal, setCurrentModal] = useState(0);

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

  const updateOpenModal = (
    state: {
      dataSpace: boolean;
      ecosystem: boolean;
      participantLevel: boolean;
    },
    index: number
  ) => {
    setOpenModal(state);
    setCurrentModal(index);
  };

  return (
    <main className={Styles.GovernancePage}>
      <GovernanceBanner />

      <SectionContainer variantColor="white">
        <SlideTopContainer
          ref={ref}
          InView={InView}
          className={Styles.governances}
        >
          {CONTENT_DROPDOWN.map((el, index) => (
            <div
              key={el + index}
              style={
                currentModal === index
                  ? {
                      minHeight: openModal?.dataSpace
                        ? 600
                        : openModal?.ecosystem
                        ? 500
                        : openModal?.participantLevel
                        ? 300
                        : 0,
                    }
                  : {}
              }
            >
              <h3>{setTitle(el)}</h3>
              <NestedDropdown
                category={el}
                currentIndex={index}
                updateOpenModal={updateOpenModal}
              />
            </div>
          ))}
        </SlideTopContainer>
      </SectionContainer>
    </main>
  );
};
