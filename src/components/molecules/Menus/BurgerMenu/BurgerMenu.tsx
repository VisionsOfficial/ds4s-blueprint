import { PropsWithChildren } from "react";
import Styles from "./BurgerMenu.module.scss";

type BurgerMenuProps = {
  activeMenu: () => void;
  className?: string;
};

export const BurgerMenu = ({
  activeMenu,
  className = "",
}: PropsWithChildren<BurgerMenuProps>) => {
  return (
    <div
      className={`${Styles.BurgerMenu} ${className}`}
      onClick={() => {
        activeMenu();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
