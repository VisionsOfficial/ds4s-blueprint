import { PropsWithChildren, useState } from "react";
import Styles from "./UXCard.module.scss";
import { UXInstruction } from "../../../../types";
import { Card } from "../../../atoms/Cards/Card/Card";

type UXCardProps = {
  ux: UXInstruction;
};

export const UXCard = ({ ux }: PropsWithChildren<UXCardProps>) => {
  const [activeWrapper, setActiveWrapper] = useState(false);

  return (
    <Card
      className={`${Styles.UXCard} ${activeWrapper ? Styles.isOpen : ""}`}
      onClick={() => {
        setActiveWrapper((prev) => !prev);
      }}
    >
      <h3>{ux.title}</h3>
      <div
        className={`${Styles.wrapper} ${activeWrapper ? Styles.isOpen : ""}`}
      >
        <div className={Styles.inner}>
          {ux?.descriptions?.short
            ? ux.descriptions.short
            : ux.descriptions.long}
        </div>
      </div>
    </Card>
  );
};
