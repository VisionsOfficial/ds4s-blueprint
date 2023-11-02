import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./SideNav.module.scss";
import { Link } from "react-router-dom";
import { NavBarLinks } from "../../../../types";

type SideNavProps = {
  closing: () => void;
  linkContent: NavBarLinks[];
};

export const SideNav = ({
  closing,
  linkContent,
}: PropsWithChildren<SideNavProps>) => {
  const [closingAnimation, setClosingAnimation] = useState(false);

  const handleClosingAnimation = () => {
    setClosingAnimation((prev) => !prev);
  };

  const setNavBarLink = (el: NavBarLinks) => {
    if (el.name === "Wiki") {
      return (
        <Link
          to={el.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClosingAnimation();
          }}
        >
          {el.name}
        </Link>
      );
    } else {
      return (
        <Link
          to={el.url}
          onClick={() => {
            handleClosingAnimation();
          }}
        >
          {el.name}
        </Link>
      );
    }
  };

  useEffect(() => {
    if (!closingAnimation) return;
    setTimeout(() => {
      setClosingAnimation(false);
      closing();
    }, 400);
  }, [closingAnimation, closing]);

  return (
    <div
      className="backdrop"
      onClick={() => {
        handleClosingAnimation();
      }}
    >
      <aside
        className={`${Styles.SideNav} ${
          closingAnimation ? Styles.closeMenu : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={Styles.close}
          onClick={() => {
            handleClosingAnimation();
          }}
        >
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
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <ul>
          {linkContent.map((el, index) => (
            <li key={el.name + index}>{setNavBarLink(el)}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
