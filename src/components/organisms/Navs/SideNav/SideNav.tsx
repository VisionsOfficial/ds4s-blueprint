import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./SideNav.module.scss";
import { Link } from "react-router-dom";
import { APP_LINKS } from "../../../../utils/appLinks";

type SideNavProps = {
  closing: () => void;
};

export const SideNav = ({ closing }: PropsWithChildren<SideNavProps>) => {
  const [closingAnimation, setClosingAnimation] = useState(false);

  const handleClosingAnimation = () => {
    setClosingAnimation((prev) => !prev);
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
          <li>
            <Link to={APP_LINKS.home}>Home</Link>
          </li>
          <li>
            <Link to={APP_LINKS.useCases}>Use cases</Link>
          </li>
          <li>
            <Link to={APP_LINKS.buildingBlocks}>Building blocks</Link>
          </li>
          <li>
            <Link to={APP_LINKS.initiatives}>Initiatives</Link>
          </li>
          <li>
            <Link
              to={"http://example.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wiki
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};
