import Styles from "./Footer.module.scss";
import { FooterList } from "../../molecules/Lists/FooterList/FooterList";
import { Link } from "react-router-dom";
import { APP_IMAGES } from "../../../utils/appImages";
import { APP_LINKS } from "../../../utils/appLinks";
import { Copyright } from "../Copyright/Copyright";

export const Footer = () => {
  return (
    <footer className={Styles.Footer}>
      <div className={Styles.FooterContent}>
        <div className={Styles.description}>
          <div className={Styles.logos}>
            <img
              src={APP_IMAGES.logo.ds4skills}
              alt="Logo DS4Skills"
              className={Styles.ds4skillsLogo}
            />
            <img
              src={APP_IMAGES.logo.euFunded}
              alt="Funded European Union logo"
            />
          </div>

          <p>
            <span>Funded by the European Union.</span> View and opinions
            expressed are however those of the author(s) only and do not
            necessarily reflect those of the European Commission. Neither the
            European union nor the gratting authority can be held responsible
            for them
          </p>
        </div>
        <div className={Styles.listsContainer}>
          <FooterList title="Blueprint">
            <li>
              <Link
                to={"https://www.skillsdataspace.eu/what-is/"}
                target="_blank"
              >
                About
              </Link>
            </li>
            <li>
              <Link to={APP_LINKS.useCases + "/match"}>Usage scenario</Link>
            </li>
            <li>
              <Link to={APP_LINKS.buildingBlocks}>Building Blocks</Link>
            </li>
          </FooterList>

          <FooterList title="Follow Us">
            <li>
              <Link to={"https://www.skillsdataspace.eu/"} target="_blank">
                Website
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/company/skillsdataspace/"}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to={"https://twitter.com/skillsdataspace"} target="_blank">
                Twitter
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.youtube.com/@skillsdataspace"}
                target="_blank"
              >
                Youtube
              </Link>
            </li>
          </FooterList>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};
