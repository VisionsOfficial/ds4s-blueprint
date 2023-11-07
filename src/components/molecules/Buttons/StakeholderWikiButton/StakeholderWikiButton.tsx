import { PropsWithChildren } from "react";
import Styles from "./StakeholderWikiButton.module.scss";
import {
  ColorVariant,
  Stakeholder,
  StakeholderCategories,
} from "../../../../types";
import { useStakeholder } from "../../../../hooks/useStakeholder";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../atoms/Buttons/Button/Button";

type StakeholderWikiButtonProps = {
  stakeholder: Stakeholder;
  category: StakeholderCategories;
  currentColor: ColorVariant;
};

export const StakeholderWikiButton = ({
  stakeholder,
  category,
  currentColor,
}: PropsWithChildren<StakeholderWikiButtonProps>) => {
  const { data } = useStakeholder({ stakeholder });
  const location = useLocation();
  const searchLocation = location.search.split("=")[1];

  const setBtn = () => {
    const content = data?.categories.map((el, index) => {
      if (el.name === category && category === "Governance") {
        if (el.content.wiki) {
          return (
            <Link to={el.content.wiki} key={el.name + index} target="_blank">
              <Button
                icon="arrowRight"
                variantSvgColor={currentColor}
                variantBgColor={currentColor}
                className={Styles.StakeholderWikiButton}
              >
                Read the full document
              </Button>
            </Link>
          );
        } else {
          if (!el.content.governance) return null;

          if (el.content.governance[parseInt(searchLocation) - 1].wiki) {
            return (
              <Link
                to={
                  el.content.governance[parseInt(searchLocation) - 1].wiki ||
                  "#"
                }
                key={el.name + index}
                target="_blank"
              >
                <Button
                  icon="arrowRight"
                  variantSvgColor={currentColor}
                  variantBgColor={currentColor}
                  className={Styles.StakeholderWikiButton}
                >
                  Read the full document
                </Button>
              </Link>
            );
          } else return null;
        }
      }

      if (el.name === category && category === "Business") {
        if (el.content.wiki) {
          return (
            <Link to={el.content.wiki} key={el.name + index} target="_blank">
              <Button
                icon="arrowRight"
                variantSvgColor={currentColor}
                variantBgColor={currentColor}
                className={Styles.StakeholderWikiButton}
              >
                Read the full document
              </Button>
            </Link>
          );
        } else {
          if (!el.content.business) return null;

          if (el.content.business[parseInt(searchLocation) - 1].wiki) {
            return (
              <Link
                to={
                  el.content.business[parseInt(searchLocation) - 1].wiki || "#"
                }
                key={el.name + index}
                target="_blank"
              >
                <Button
                  icon="arrowRight"
                  variantSvgColor={currentColor}
                  variantBgColor={currentColor}
                  className={Styles.StakeholderWikiButton}
                >
                  Read the full document
                </Button>
              </Link>
            );
          } else return null;
        }
      }

      if (el.name === category && category === "Value") {
        if (el.content.wiki) {
          return (
            <Link to={el.content.wiki} key={el.name + index} target="_blank">
              <Button
                icon="arrowRight"
                variantSvgColor={currentColor}
                variantBgColor={currentColor}
                className={Styles.StakeholderWikiButton}
              >
                Read the full document
              </Button>
            </Link>
          );
        } else return null;
      }

      return null;
    });
    if (content) {
      return content;
    } else return null;
  };

  return <>{setBtn()}</>;
};
