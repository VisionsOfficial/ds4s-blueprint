import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./useColor.module.scss";
import { ColorVariant } from "../../types";

type UseColorProps = {
  color: ColorVariant;
  type?: "bg" | "text";
};

export const UseColor = ({
  color,
  type = "bg",
}: PropsWithChildren<UseColorProps>) => {
  const [selectedColor, setSelectedColor] = useState<string>();

  useEffect(() => {
    switch (color) {
      case "primary":
        setSelectedColor(type === "bg" ? Styles.bgPrimary : Styles.primary);
        break;
      case "hightLightPrimary":
        setSelectedColor(
          type === "bg" ? Styles.bgHightLightPrimary : Styles.hightLightPrimary
        );
        break;
      case "tertiary":
        setSelectedColor(type === "bg" ? Styles.bgTertiary : Styles.tertiary);
        break;
      case "lightPrimary":
        setSelectedColor(
          type === "bg" ? Styles.bgLightPrimary : Styles.lightPrimary
        );
        break;
      case "quaternary":
        setSelectedColor(
          type === "bg" ? Styles.bgQuaternary : Styles.quaternary
        );
        break;
      case "secondary":
        setSelectedColor(type === "bg" ? Styles.bgSecondary : Styles.secondary);
        break;
      case "white":
        setSelectedColor(type === "bg" ? Styles.bgWhite : Styles.white);
        break;
      case "black":
        setSelectedColor(type === "bg" ? Styles.bgBlack : Styles.black);
        break;

      default:
        break;
    }
  }, [color, type]);

  return { selectedColor };
};
