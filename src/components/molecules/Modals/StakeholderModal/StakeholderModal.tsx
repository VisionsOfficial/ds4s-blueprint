import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./StakeholderModal.module.scss";
import { Modal } from "../../../atoms/Modals/Modal/Modal";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { CategoriesContentStakeholder, Stakeholder } from "../../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { APP_LINKS } from "../../../../utils/appLinks";
import { LOCAL_STORAGE_KEY } from "../../../../utils/keys/localStorageKeys";
import React from "react";

type StakeholderModalProps = {
  closingModal: () => void;
  stakeholder: CategoriesContentStakeholder | undefined;
  stakeholderSection: Stakeholder | undefined;
  clasName?: string;
  nthChild?: number;
};

export const StakeholderModal = ({
  closingModal,
  stakeholder,
  clasName = "",
  stakeholderSection,
  nthChild = 0,
}: PropsWithChildren<StakeholderModalProps>) => {
  const navigate = useNavigate();
  const { useCase } = useParams();
  const [child, setChild] = useState<string>();

  const setProps = () => {
    return [Styles.StakeholderModal, clasName, child].join(" ");
  };

  const setContentModal = () => {
    if (
      stakeholder?.name === "Governance" &&
      stakeholder?.content?.governance
    ) {
      return stakeholder?.content?.governance?.map((gov, index) => (
        <React.Fragment key={gov.title + index}>
          <h4>{gov.title}</h4>
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: gov.definition || "",
              }}
            ></p>
          </div>

          <Button
            onClick={() => {
              handleClickButton(index + 1);
            }}
          >
            Learn more
          </Button>
        </React.Fragment>
      ));
    }

    if (stakeholder?.name === "Technical" && stakeholder?.content?.bbs) {
      return (
        <>
          <h4>{stakeholder?.content.title}</h4>
          <p>{stakeholder?.content.definition} :</p>
          <ul>
            {stakeholder?.content?.bbs?.map((bbs, index) => (
              <li key={bbs.name + index}>{bbs.name}</li>
            ))}
          </ul>
          <Button
            onClick={() => {
              handleClickButton();
            }}
          >
            Learn more
          </Button>
        </>
      );
    }

    return (
      <>
        <h4>{stakeholder?.content.title}</h4>
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: stakeholder?.content.definition || "",
            }}
          ></p>
        </div>

        <Button
          onClick={() => {
            handleClickButton();
          }}
        >
          Learn more
        </Button>
      </>
    );
  };

  const handleClickButton = (key?: number) => {
    switch (nthChild % 5) {
      case 0:
        sessionStorage.setItem(
          LOCAL_STORAGE_KEY.color.stakeholder,
          "hightLightPrimary"
        );
        break;
      case 1:
        sessionStorage.setItem(LOCAL_STORAGE_KEY.color.stakeholder, "tertiary");
        break;
      case 2:
        sessionStorage.setItem(
          LOCAL_STORAGE_KEY.color.stakeholder,
          "lightPrimary"
        );
        break;
      case 3:
        sessionStorage.setItem(
          LOCAL_STORAGE_KEY.color.stakeholder,
          "quaternary"
        );
        break;
      case 4:
        sessionStorage.setItem(
          LOCAL_STORAGE_KEY.color.stakeholder,
          "secondary"
        );
        break;

      default:
        break;
    }

    navigate(
      APP_LINKS.useCases +
        `/${useCase ? useCase : "eudune"}/${stakeholderSection?.replace(
          /\s+/g,
          "-"
        )}/${stakeholder?.name}${key ? `?gov=${key}` : ""}`
    );
  };

  useEffect(() => {
    switch (nthChild % 5) {
      case 0:
        setChild(Styles.hightLightPrimary);
        break;
      case 1:
        setChild(Styles.tertiary);
        break;
      case 2:
        setChild(Styles.lightPrimary);
        break;
      case 3:
        setChild(Styles.quaternary);
        break;
      case 4:
        setChild(Styles.secondary);
        break;

      default:
        break;
    }
  }, [nthChild]);

  return (
    <>
      <Modal clonsingModal={closingModal} className={setProps()}>
        <p
          className={Styles.path}
        >{`${stakeholderSection} > ${stakeholder?.name}`}</p>
        <div className={Styles.content}>{setContentModal()}</div>
      </Modal>
      <div
        className={`backdrop ${Styles.backdrop}`}
        onClick={() => {
          closingModal();
        }}
      ></div>
    </>
  );
};
