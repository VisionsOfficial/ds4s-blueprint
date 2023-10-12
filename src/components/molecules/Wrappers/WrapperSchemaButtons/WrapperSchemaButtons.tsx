import { PropsWithChildren, forwardRef, Ref } from "react";
import Styles from "./WrapperSchemaButtons.module.scss";
import { Card } from "../../../atoms/Cards/Card/Card";

type WrapperSchemaButtonsProps = {
  className?: string;
  title: string;
  display?: "flex" | "grid";
};

export const WrapperSchemaButtons = forwardRef(
  (
    {
      title,
      className = "",
      display = "flex",
      children,
    }: PropsWithChildren<WrapperSchemaButtonsProps>,
    ref: Ref<HTMLDivElement>
  ) => {
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
        className={`${
          Styles.WrapperSchemaButtons
        } ${className} ${setDisplay()}`}
        variantBgColor="secondary"
        ref={ref}
      >
        <p>{title}</p>

        <div className={Styles.content}>{children}</div>
      </Card>
    );
  }
);
