import React, { PropsWithChildren } from "react";
import Styles from "./Button.module.scss";
import { ColorVariant } from "../../../../types";
import { UseColor } from "../../../../hooks/useColor/useColor";
import { OpacityContainer } from "../../Animations/OpacityContainer/OpacityContainer";
import { useInView } from "react-intersection-observer";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  variantBgColor?: ColorVariant;
  variantSvgColor?: ColorVariant;
  icon?:
    | "plus"
    | "arrowLeft"
    | "arrowRight"
    | "plusSquare"
    | "arrowDown"
    | "chevronDown";
  iconPosition?: "prev" | "next";
  animation?: "opacity";
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className = "",
    variantBgColor = "secondary",
    icon,
    iconPosition = "next",
    variantSvgColor = "black",
    animation,
    children,
    ...rest
  } = props;
  const [ref, InView] = useInView({
    triggerOnce: true,
  });

  const { selectedColor } = UseColor({ color: variantBgColor });

  const setProps = () => {
    let bgColor = "";
    switch (variantBgColor) {
      case "primary":
        bgColor = Styles.bgPrimary;
        break;
      case "secondary":
        bgColor = Styles.bgSecondary;
        break;
      case "white":
        bgColor = Styles.bgWhite;
        break;
      case "transparent":
        bgColor = Styles.bgTransparent;
        break;
      case "hightLightPrimary":
        bgColor = Styles.bgHightLightPrimary;
        break;
      case "tertiary":
        bgColor = Styles.bgTertiary;
        break;
      case "lightPrimary":
        bgColor = Styles.bgLightPrimary;
        break;
      case "quaternary":
        bgColor = Styles.bgQuaternary;
        break;
      case "black":
        bgColor = Styles.bgBlack;
        break;

      default:
        break;
    }

    return [Styles.Button, className, bgColor, selectedColor].join(" ");
  };

  const setSvgColor = () => {
    switch (variantSvgColor) {
      case "primary":
        return Styles.svgPrimary;
      case "secondary":
        return Styles.svgSecondary;
      case "tertiary":
        return Styles.svgTertiary;
      case "quaternary":
        return Styles.svgQuaternary;
      case "white":
        return Styles.svgWhite;
      case "black":
        return Styles.svgBlack;
      case "hightLightPrimary":
        return Styles.svgHightLightPrimary;
      case "lightPrimary":
        return Styles.svgLightPrimary;
      default:
        return "";
    }
  };

  const setIcons = () => {
    switch (icon) {
      case "plus":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={setSvgColor()}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        );
      case "arrowLeft":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={setSvgColor()}
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        );
      case "arrowRight":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={setSvgColor()}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        );
      case "arrowDown":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={setSvgColor()}
            style={{ padding: 2 }}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        );
      case "chevronDown":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={setSvgColor()}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        );
      case "plusSquare":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={setSvgColor()}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <button
      {...rest}
      className={setProps()}
      style={icon ? { justifyContent: "space-between" } : {}}
    >
      {iconPosition === "prev" && !animation && setIcons()}
      {iconPosition === "prev" && animation === "opacity" && (
        <OpacityContainer ref={ref} InView={InView}>
          {setIcons()}
        </OpacityContainer>
      )}
      {children}
      {iconPosition === "next" && !animation && setIcons()}
      {iconPosition === "next" && animation === "opacity" && (
        <OpacityContainer ref={ref} InView={InView}>
          {setIcons()}
        </OpacityContainer>
      )}
    </button>
  );
};
