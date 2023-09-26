import { useState } from "react";
import Styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { APP_LINKS } from "../../../../utils/appLinks";
import { APP_IMAGES } from "../../../../utils/appImages";
import { SideNav } from "../../../organisms/Navs/SideNav/SideNav";
import { BurgerMenu } from "../../Menus/BurgerMenu/BurgerMenu";
import { NavBarLinks } from "../../../../types";

const CONTENT_NAVBAR: NavBarLinks[] = [
  {
    name: "Home",
    url: APP_LINKS.home,
  },
  {
    name: "Use cases",
    url: APP_LINKS.useCases,
  },
  {
    name: "Building blocks",
    url: APP_LINKS.buildingBlocks,
  },
  {
    name: "Initiatives",
    url: APP_LINKS.initiatives,
  },
  {
    name: "Wiki",
    url: "http://example.com",
  },
];

export const NavBar = () => {
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
      <img src={APP_IMAGES.logo.ds4skills} alt="DS4Skills logo" />
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
          closing={() => {
            handleSideNavActive();
          }}
        />
      )}
    </nav>
  );
};
