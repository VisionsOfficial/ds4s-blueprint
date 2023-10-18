import { PropsWithChildren, forwardRef } from "react";
import Styles from "./SectionContainer.module.scss";
import { ColorVariant } from "../../../../types";

type SectionContainerProps = React.HTMLProps<HTMLSelectElement> & {
  className?: string;
  variantColor?: ColorVariant;
};

export const SectionContainer = forwardRef<
  HTMLElement,
  PropsWithChildren<SectionContainerProps>
>((props, ref) => {
  const { className, variantColor = "white", children, ...rest } = props;

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

  return (
    <section {...rest} ref={ref} className={setProps()}>
      {children}
    </section>
  );
});
