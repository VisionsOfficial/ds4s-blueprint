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

type ContentCategory = {
  dataSpace: string;
  ecosystem: string;
  participantLevel: string;
};

export const NestedDropdown = ({
  currentIndex,
  category,
}: PropsWithChildren<NestedDropdownProps>) => {
  const [colorActive, setColorActive] = useState<ColorVariant>("secondary");
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>({
    dataSpace: false,
    ecosystem: false,
    participantLevel: false,
  });
  const [currentCategoryContent, setCurrentCategoryContent] =
    useState<ContentCategory>();

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

  useEffect(() => {
    if (!category) return;

    switch (category) {
      case "Standards":
        setCurrentCategoryContent({
          dataSpace:
            "DSGA prescribes the usage of a minimal set of standards essential for the functioning of the dataspace. It may also propose a list of optional standards that may facilitate interoperability of the dataspaces. It bases its decision/choice on sector-specific standards and DSSC for enabling interoperability among data spaces and usage of generic building blocks.",
          ecosystem:
            "On this level the selection of additional standards relevant for the Data space use case is conducted. Depending on the data space use case and its specific use cases, the applicable sectorial standards will vary. Furthermore, the guidelines, best practices, and examples relevant for the data space use case are set. On this level the on-boarding of new participants is carried out and a critical mass of users is achieved. Furthermore, a roadmap for the implementation of missing technical components could be proposed at this decision level (e. g., data space connectors supporting specific legacy systems).",
          participantLevel:
            "Participants are responsible for the implementation of standards and adherence compliance rules. Participants decide themselves how to implement their solutions to support interoperability.",
        });
        break;
      case "Accession rules":
        setCurrentCategoryContent({
          dataSpace: `Definition of accession rules (who can enter the data space) must include trust (ensuring that data exchange occurs in a secure, reliable, and controlled manner, respecting the rights of all parties involved), accession process, possible certification and different levels of sectoral labels.<br />
            The overall onboarding process is managed at the data space level, as well as on the use case participant level.
            `,
          ecosystem:
            "It drives the accession process and checks compliance. It may impose additional accession criteria for a data space use case.",
          participantLevel:
            "Participants must comply with accession rules and ensure continuous compliance.",
        });
        break;
      case "Code of conduct":
        setCurrentCategoryContent({
          dataSpace:
            "Code of Conduct is a set of commonly acceptable norms that make cooperation between members more convenient by setting the direction for more detailed rules defined by the implementing organisations1. At this level, a set of ethical rules that must be applied by all use cases is imposed. Those rules are based on generic guidance from DSSC and sector-specific requirements considering human-centricity of the Skills data space.This approach will make cooperation between members more convenient by setting the direction for more detailed rules defined by Data space use cases.",
          ecosystem:
            "It primarily ensures compliance with the data space level rules. Also, specific sectorial or other ethical principles would be added, which are crucial for gaining trust at the use case level.",
          participantLevel:
            "The participant decides how to implement the rules. In any case, they must adhere to ethical requirements and code of conduct and ensure full compliance.",
        });
        break;
      case "Use cases":
        setCurrentCategoryContent({
          dataSpace:
            "Proposes a list of use cases with a basic description, roles, and responsibilities. This is a list of potential use cases that have the potential to provide benefits to use case participants.",
          ecosystem:
            "From all proposed use cases at data space level, a group of participants selects and implements a use case they would like to setup based on their organisation’s objectives and business interest. They prepare guidelines and definitions of roles for the specific use-case.",
          participantLevel:
            "The participant joins use cases of interest and complies with roles and responsibilities.",
        });
        break;
      case "Business model":
        setCurrentCategoryContent({
          dataSpace:
            "At this level the participant can either choose taking data intermediary services, compliant with the data space, that handle all functionalities, or they can choose to operate building blocks on their own.",
          ecosystem:
            "A Data space use case decides which business models can be applied (i.e., what are the value sharing mechanisms) for the particular use case. Concrete examples about value sharing are proposed in the business section of this report.",
          participantLevel:
            "Decides which business models to apply and sets the parameters for that business model (e.g., pricing)",
        });
        break;
      case "Data & service usage policies":
        setCurrentCategoryContent({
          dataSpace:
            "Prepares Data & service policy templates. At this level, a generic set of restrictions and options is prepared on access to and the usage of data and services (registration information, data sharing agreements, contractual frameworks). Restrictions are designed to ensure that data is used in a manner that respects the rights of the data owner, complies with legal and regulatory requirements, and maintains trust among all participants in the data ecosystem.",
          ecosystem:
            "Defines technical and organisational aspects for data policy enforcement and ensures compliance with those policies. Technical aspects can include access control policies, implementation of technical controls, encryption and data integrity checks. Organisational aspects can include formal data governance structures, administrative control and data protection policies. It can also define some general rules on data policies, like which participant roles are allowed to access specific data types",
          participantLevel:
            "Defines policies for their own data products based on general rules set by the DSGA. It also adheres to policies of other participants when using their data products. Special care must be taken in usage policies for derived products.",
        });
        break;
      case "Building blocks":
        setCurrentCategoryContent({
          dataSpace: `At this level, building blocks and infrastructure requirements relevant for the dataspace are defined.
            The design and implementation of data spaces comprises of several building blocks: technical (like standardized APIs), organisational and business building blocks (like business, legal or operational agreements). All these must be clearly defined on the level of the Data space for the Data space use cases to have a catalogue of the possible building blocks to apply. As part of the governance framework there may exist a certification process to verify that candidate building blocks meet the specific criteria prescribed at data space level (security, reliability, application of standards, environmental and technical constraints, quality of service, functionality). Just like standards, generic building blocks should be proposed by DSSC.<br /><br/>
            
            In addition to those generic building blocks, a set of sector-specific building blocks for skills may be proposed (like those that deal with human centricity or with skills data interoperability) through a collaborative process. Typically, stakeholders will identify sector-specific needs that cannot be addressed by existing building blocks. Based on this assessment, they formulate proposals for sector-specific building blocks that aim to address the identified needs and challenges.<br /><br/>
            
            For each building block a set of requirements, specifications and standards is proposed, based on a DSSC Blueprint. According to the Data Space Asset Model from the DSSC Blueprint, each building block consists of a technical and functional specification. Furthermore, at this level also a list of open-source reference implementations is prepared.
            `,
          ecosystem:
            "Defines which building blocks and services are deployed by each participant and decides how to implement the common services. At data space use case level, specific building blocks are customized for specific usage.",
          participantLevel:
            "At this level the participant can either choose taking data intermediary services, compliant with the data space, that handle all functionalities, or they can choose to operate building blocks on their own.",
        });
        break;

      default:
        break;
    }
  }, [category]);

  return (
    <div
      className={`${Styles.NestedDropdown} ${setColor()}`}
      style={{ zIndex: 20 - currentIndex }}
    >
      <div className={Styles.dataSpace}>
        <p
          className={Styles.main}
          onClick={(e) => {
            e.stopPropagation();
            handleClickModal("dataSpace");
          }}
        >
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
            <span
              dangerouslySetInnerHTML={{
                __html: currentCategoryContent?.dataSpace || "'",
              }}
            ></span>
          </p>
        )}
      </div>
      <div className={Styles.ecosystem}>
        <div className={Styles.ecosystemContent}>
          <p
            className={Styles.main}
            onClick={(e) => {
              e.stopPropagation();
              handleClickModal("ecosystem");
            }}
          >
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
              {currentCategoryContent?.ecosystem}
            </p>
          )}
        </div>
        <div className={Styles.participant}>
          <p
            className={Styles.main}
            onClick={(e) => {
              e.stopPropagation();
              handleClickModal("participantLevel");
            }}
          >
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
              {currentCategoryContent?.participantLevel}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
