import React, { PropsWithChildren } from "react";
import Styles from "./Button.module.scss";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  variantBgColor?: "primary" | "secondary" | "transparent" | "white";
  variantSvgColor?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "white"
    | "black";
  icon?: "plus" | "arrowLeft" | "arrowRight" | "plusSquare";
  iconPosition?: "prev" | "next";
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className = "",
    variantBgColor = "secondary",
    icon,
    iconPosition = "next",
    variantSvgColor = "black",
    children,
    ...rest
  } = props;

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

      default:
        break;
    }

    return [Styles.Button, className, bgColor].join(" ");
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
            strokeWidth="4"
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
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={setSvgColor()}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
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
      {iconPosition === "prev" && setIcons()}
      {children}
      {iconPosition === "next" && setIcons()}
    </button>
  );
};
