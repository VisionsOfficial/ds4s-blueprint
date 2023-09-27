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
  icon?: boolean;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className = "",
    variantBgColor = "secondary",
    icon = false,
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

  return (
    <button
      {...rest}
      className={setProps()}
      style={icon ? { justifyContent: "space-between" } : {}}
    >
      {children}
      {icon && (
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
      )}
    </button>
  );
};
