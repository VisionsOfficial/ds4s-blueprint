import { PropsWithChildren } from "react";
import Styles from "./FooterList.module.scss";

type FooterListProps = {
  title?: string;
};

export const FooterList = ({
  title,
  children,
}: PropsWithChildren<FooterListProps>) => {
  return (
    <ul className={Styles.FooterList}>
      {title && <li className={Styles.title}>{title}</li>}
      {children}
    </ul>
  );
};
