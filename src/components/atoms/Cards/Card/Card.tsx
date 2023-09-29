import React, { PropsWithChildren } from "react";
import Styles from "./Card.module.scss";
import { ExploreCategories } from "../../../../types";

type CardProps = React.HTMLProps<HTMLDivElement> & {
  className?: string;
  category?: ExploreCategories | "default";
};

export const Card = (props: PropsWithChildren<CardProps>) => {
  const { className = "", category = "default", children, ...rest } = props;

  const setProps = () => {
    let color = "";

    switch (category) {
      case "default":
        color = Styles.bgDefault;
        break;
      case "Use cases":
        color = Styles.bgUseCases;
        break;
      case "Building Blocks":
        color = Styles.bgBBs;
        break;
      case "Initiatives":
        color = Styles.bgInitiatives;
        break;

      default:
        color = Styles.bgDefault;
        break;
    }

    return [Styles.Card, className, color].join(" ");
  };

  return (
    <div {...rest} className={setProps()}>
      {children}
    </div>
  );
};
