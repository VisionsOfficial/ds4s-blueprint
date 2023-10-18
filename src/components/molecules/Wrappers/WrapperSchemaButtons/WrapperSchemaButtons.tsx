import React, { PropsWithChildren, forwardRef } from "react";
import Styles from "./WrapperSchemaButtons.module.scss";
import { Card } from "../../../atoms/Cards/Card/Card";

type WrapperSchemaButtonsProps = React.HTMLProps<HTMLDivElement> & {
  className?: string;
  title: string;
  display?: "flex" | "grid";
};

export const WrapperSchemaButtons = forwardRef<
  HTMLDivElement,
  PropsWithChildren<WrapperSchemaButtonsProps>
>(({ className, children, title, display = "flex", ...rest }, ref) => {
  const setDisplay = () => {
    switch (display) {
      case "grid":
        return Styles.grid;
      default:
        break;
    }
  };

  return (
    <Card
      {...rest}
      className={`${Styles.WrapperSchemaButtons} ${className} ${setDisplay()}`}
      variantBgColor="secondary"
      ref={ref}
    >
      <p>{title}</p>
      <div className={Styles.content}>{children}</div>
    </Card>
  );
});
