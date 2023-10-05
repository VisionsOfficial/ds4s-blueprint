import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./NestedDropdown.module.scss";
import { ColorVariant, GovernanceCategories } from "../../../../types";

type NestedDropdownProps = {
  category: GovernanceCategories;
  currentIndex: number;
};

type ActiveDropdown = {
  dataSpace: boolean;
  ecosystem: boolean;
  participantLevel: boolean;
};

export const NestedDropdown = ({
  currentIndex,
}: PropsWithChildren<NestedDropdownProps>) => {
  const [colorActive, setColorActive] = useState<ColorVariant>("secondary");
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>({
    dataSpace: false,
    ecosystem: false,
    participantLevel: false,
  });

  const handleClickModal = (
    section: "dataSpace" | "ecosystem" | "participantLevel"
  ) => {
    setActiveDropdown((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const setColor = () => {
    switch (colorActive) {
      case "quaternary":
        return Styles.quaternary;
      case "tertiary":
        return Styles.tertiary;
      case "lightPrimary":
        return Styles.lightPrimary;

      default:
        return "";
    }
  };

  useEffect(() => {
    switch (currentIndex % 4) {
      case 0:
        setColorActive("secondary");
        break;
      case 1:
        setColorActive("quaternary");
        break;
      case 2:
        setColorActive("tertiary");
        break;
      case 3:
        setColorActive("lightPrimary");
        break;

      default:
        break;
    }
  }, [currentIndex]);

  return (
    <div
      className={`${Styles.NestedDropdown} ${setColor()}`}
      style={{ zIndex: 20 - currentIndex }}
    >
      <div
        className={Styles.dataSpace}
        onClick={(e) => {
          e.stopPropagation();
          handleClickModal("dataSpace");
        }}
      >
        <p className={Styles.main}>
          Data Space level{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            className={activeDropdown.dataSpace ? Styles.activeSvg : ""}
          >
            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
          </svg>
        </p>
        {activeDropdown.dataSpace && (
          <p className={Styles.modal}>
            Description: <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            nesciunt dolores odio, dolorum nobis dolore quis perspiciatis natus
            tenetur modi rerum, eligendi deserunt maxime? Aliquid aut ullam
            exercitationem voluptatem quod.
          </p>
        )}
      </div>
      <div className={Styles.ecosystem}>
        <div
          className={Styles.ecosystemContent}
          onClick={(e) => {
            e.stopPropagation();
            handleClickModal("ecosystem");
          }}
        >
          <p className={Styles.main}>
            Ecosystem level{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24"
              height="24"
              className={activeDropdown.ecosystem ? Styles.activeSvg : ""}
            >
              <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
            </svg>
          </p>
          {activeDropdown.ecosystem && (
            <p className={`${Styles.modal} ${Styles.modalEco}`}>
              Description: <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              nesciunt dolores odio, dolorum nobis dolore quis perspiciatis
              natus tenetur modi rerum, eligendi deserunt maxime? Aliquid aut
              ullam exercitationem voluptatem quod.
            </p>
          )}
        </div>
        <div
          className={Styles.participant}
          onClick={(e) => {
            e.stopPropagation();
            handleClickModal("participantLevel");
          }}
        >
          <p className={Styles.main}>
            Participant level{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24"
              height="24"
              className={
                activeDropdown.participantLevel ? Styles.activeSvg : ""
              }
            >
              <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />
            </svg>
          </p>
          {activeDropdown.participantLevel && (
            <p className={`${Styles.modal} ${Styles.modalParticipant}`}>
              Description: <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              nesciunt dolores odio, dolorum nobis dolore quis perspiciatis
              natus tenetur modi rerum, eligendi deserunt maxime? Aliquid aut
              ullam exercitationem voluptatem quod.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
