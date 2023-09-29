import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./StakeholderModal.module.scss";
import { Modal } from "../../../atoms/Modals/Modal/Modal";
import { CategoriesContentStakeholder } from "../../../../hooks/useStakeholder";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { Stakeholder } from "../../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { APP_LINKS } from "../../../../utils/appLinks";
import { LOCAL_STORAGE_KEY } from "../../../../utils/keys/localStorageKeys";

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

  const handleClickButton = () => {
    if (!useCase) return;
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
        `/${useCase}/${stakeholderSection?.replace(/\s+/g, "-")}/${
          stakeholder?.name
        }`
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
        <div className={Styles.content}>
          <h4>{stakeholder?.content.title}</h4>
          <p>
            <span>Definition:</span>
            <br />
            {stakeholder?.content.definition}
          </p>

          <Button
            onClick={() => {
              handleClickButton();
            }}
          >
            Learn more
          </Button>
        </div>
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
