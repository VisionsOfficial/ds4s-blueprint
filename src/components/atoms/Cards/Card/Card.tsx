import React, { PropsWithChildren, forwardRef } from "react";
import Styles from "./Card.module.scss";
import { ColorVariant, ExploreCategories } from "../../../../types";
import { UseColor } from "../../../../hooks/useColor/useColor";

type CardProps = React.HTMLProps<HTMLDivElement> & {
  className?: string;
  category?: ExploreCategories | "default";
  variantBgColor?: ColorVariant;
};

export const Card = forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(
  (props, ref) => {
    const {
      className = "",
      category = "default",
      variantBgColor = "primary",
      children,
      ...rest
    } = props;

    const { selectedColor } = UseColor({ color: variantBgColor });

    const setProps = () => {
      let color: string | undefined = "";

      switch (category) {
        case "default":
          color = selectedColor;
          break;
        case "Usage scenario":
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
      <div {...rest} ref={ref} className={setProps()}>
        {children}
      </div>
    );
  }
);
