import { PropsWithChildren, useState } from "react";
import Styles from "./StakeholderCard.module.scss";
import { Card } from "../../../atoms/Cards/Card/Card";
import { CategoriesContentStakeholder, Stakeholder } from "../../../../types";
import { useStakeholder } from "../../../../hooks/useStakeholder";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { StakeholderModal } from "../../Modals/StakeholderModal/StakeholderModal";
import { useInView } from "react-intersection-observer";
import { SlideTopContainer } from "../../../atoms/Animations/SlideTopContainer/SlideTopContainer";

type StakeholderCardProps = {
  stakeholder: Stakeholder;
  currentIndex?: number;
};

export const StakeholderCard = ({
  stakeholder,
  currentIndex,
}: PropsWithChildren<StakeholderCardProps>) => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  const { data } = useStakeholder({ stakeholder });
  const [activeModal, setActiveModal] = useState(false);
  const [currentStakeholder, setCurrentStakeholder] =
    useState<CategoriesContentStakeholder>();

  const handleActiveModal = (stakeholder?: CategoriesContentStakeholder) => {
    if (stakeholder) setCurrentStakeholder(stakeholder);

    setActiveModal((prev) => !prev);
  };

  return (
    <Card className={Styles.StakeholderCard}>
      <header>
        <img src={data?.image} alt={`Image ${data?.name}`} loading="lazy" />
        <SlideTopContainer ref={ref} InView={InView}>
          <h3>{data?.name}</h3>
        </SlideTopContainer>
      </header>
      <div className={Styles.content}>
        {data?.categories.map((el, index) => (
          <Button
            key={el.name + index}
            icon="plus"
            variantBgColor="transparent"
            variantSvgColor="white"
            onClick={() => {
              handleActiveModal(el);
            }}
            animation="opacity"
          >
            {el.name}
          </Button>
        ))}
      </div>
      {activeModal && (
        <StakeholderModal
          clasName={Styles.modal}
          stakeholderSection={data?.name}
          stakeholder={currentStakeholder}
          nthChild={currentIndex}
          closingModal={() => {
            handleActiveModal();
          }}
        />
      )}
    </Card>
  );
};
