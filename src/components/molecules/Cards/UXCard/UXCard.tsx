import { PropsWithChildren, useState } from "react";
import Styles from "./UXCard.module.scss";
import { UXInstruction } from "../../../../types";
import { Card } from "../../../atoms/Cards/Card/Card";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { Link } from "react-router-dom";

type UXCardProps = {
  ux: UXInstruction;
};

export const UXCard = ({ ux }: PropsWithChildren<UXCardProps>) => {
  const [activeWrapper, setActiveWrapper] = useState(false);

  return (
    <Card
      className={`${Styles.UXCard} ${activeWrapper ? Styles.isOpen : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setActiveWrapper((prev) => !prev);
      }}
    >
      <h3>{ux.title}</h3>
      <div
        className={`${Styles.wrapper} ${activeWrapper ? Styles.isOpen : ""}`}
      >
        <div className={Styles.inner}>
          <p>
            {ux?.descriptions?.short
              ? ux.descriptions.short
              : ux.descriptions.long}
          </p>

          <Link to={ux.wiki.link} target="_blank">
            <Button
              className={Styles.btnReadMore}
              variantBgColor="hightLightPrimary"
              variantSvgColor="hightLightPrimary"
              icon="arrowRight"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
