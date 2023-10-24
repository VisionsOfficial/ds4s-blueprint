import { PropsWithChildren } from "react";
import Styles from "./Arrow.module.scss";

type ArrowProps = {
  type?: "simpleR" | "simpleL" | "double" | "bar";
  text?: string;
  className?: string;
};

export const Arrow = ({
  className = "",
  type = "simpleR",
  text,
}: PropsWithChildren<ArrowProps>) => {
  const seTArrowType = () => {
    switch (type) {
      case "simpleR":
        return Styles.right;
      case "simpleL":
        return Styles.left;
      case "double":
        return Styles.double;

      default:
        return "";
    }
  };

  return (
    <div className={`${Styles.Arrow} ${className} ${seTArrowType()}`}>
      <div className={Styles.bar}>
        {text && <p>{text}</p>}
        {type !== "bar" && <span className={Styles.arrow}></span>}
        {type === "double" && <span className={Styles.arrowSecond}></span>}
      </div>
    </div>
  );
};
