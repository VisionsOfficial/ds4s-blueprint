import { PropsWithChildren } from "react";
import Styles from "./SectionContainer.module.scss";
import { ColorVariant } from "../../../../types";

type SectionContainerProps = {
  className?: string;
  variantColor?: ColorVariant;
};

export const SectionContainer = ({
  className = "",
  variantColor = "white",
  children,
}: PropsWithChildren<SectionContainerProps>) => {
  const setProps = () => {
    let color = "";

    switch (variantColor) {
      case "primary":
        color = Styles.primary;
        break;
      case "secondary":
        color = Styles.secondary;
        break;
      case "white":
        color = Styles.white;
        break;
      case "grey":
        color = Styles.grey;
        break;
      case "hightLightPrimary":
        color = Styles.hightLightPrimary;
        break;
      case "tertiary":
        color = Styles.tertiary;
        break;
      case "lightPrimary":
        color = Styles.lightPrimary;
        break;
      case "quaternary":
        color = Styles.quaternary;
        break;

      default:
        break;
    }

    return [Styles.SectionContainer, className, color].join(" ");
  };

  return <section className={setProps()}>{children}</section>;
};
