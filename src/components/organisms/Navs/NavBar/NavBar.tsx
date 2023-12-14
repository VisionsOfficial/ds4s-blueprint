import { useState } from "react";
import Styles from "./NavBar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { APP_LINKS } from "../../../../utils/appLinks";
import { APP_IMAGES } from "../../../../utils/appImages";
import { SideNav } from "../SideNav/SideNav";
import { BurgerMenu } from "../../../molecules/Menus/BurgerMenu/BurgerMenu";
import { NavBarLinks } from "../../../../types";

const CONTENT_NAVBAR: NavBarLinks[] = [
  {
    name: "Home",
    url: APP_LINKS.home,
  },
  {
    name: "Usage scenario",
    url: APP_LINKS.useCases + "/match",
  },
  {
    name: "Building blocks",
    url: APP_LINKS.buildingBlocks,
  },
  {
    name: "Governance model",
    url: APP_LINKS.govervance,
  },
  {
    name: "Wiki",
    url: "https://www.skillsdataspace.eu/wiki/",
  },
];

export const NavBar = () => {
  const navigate = useNavigate();
  const [sideNavActive, setSideNavActive] = useState(false);

  const handleSideNavActive = () => {
    setSideNavActive((prev) => !prev);
  };

  const setNavBarLink = (el: NavBarLinks) => {
    if (el.name === "Wiki") {
      return (
        <Link to={el.url} target="_blank" rel="noopener noreferrer">
          {el.name}
        </Link>
      );
    } else {
      return <Link to={el.url}>{el.name}</Link>;
    }
  };

  return (
    <nav className={Styles.NavBar}>
      <img
        src={APP_IMAGES.logo.ds4skills}
        alt="DS4Skills logo"
        onClick={() => {
          navigate(APP_LINKS.home);
        }}
      />
      <ul>
        {CONTENT_NAVBAR.map((el, index) => (
          <li key={el.name + index}>{setNavBarLink(el)}</li>
        ))}
      </ul>

      <BurgerMenu
        activeMenu={() => {
          handleSideNavActive();
        }}
      />

      {sideNavActive && (
        <SideNav
          linkContent={CONTENT_NAVBAR}
          closing={() => {
            handleSideNavActive();
          }}
        />
      )}
    </nav>
  );
};
