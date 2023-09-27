import { PropsWithChildren } from "react";
import Styles from "./SectionContainer.module.scss";

type SectionContainerProps = {
  className?: string;
  variantColor?: "primary" | "secondary" | "white";
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

      default:
        break;
    }

    return [Styles.SectionContainer, className, color].join(" ");
  };

  return <section className={setProps()}>{children}</section>;
};
