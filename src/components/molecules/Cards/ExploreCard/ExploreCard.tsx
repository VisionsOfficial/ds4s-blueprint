import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./ExploreCard.module.scss";
import { ExploreCategories, ExploreLinksCards } from "../../../../types";
import { Card } from "../../../atoms/Cards/Card/Card";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { APP_LINKS } from "../../../../utils/appLinks";
import { useNavigate } from "react-router-dom";
import { APP_IMAGES } from "../../../../utils/appImages";

type ExploreCardProps = {
  category: ExploreCategories;
  variant?: "discover";
};

export const ExploreCard = ({
  category,
  variant,
}: PropsWithChildren<ExploreCardProps>) => {
  const navigate = useNavigate();
  const [linksCard, setLinksCard] = useState<ExploreLinksCards[]>([]);
  const [activeWrapper, setActiveWrapper] = useState(false);

  const setImage = () => {
    switch (category) {
      case "Use cases":
        return (
          <img
            src={APP_IMAGES.image.card.useCase}
            alt="use case"
            onClick={() => {
              setActiveWrapper((prev) => !prev);
            }}
          />
        );
      case "Examples":
        return (
          <img
            src={APP_IMAGES.image.card.useCase}
            alt="examples"
            onClick={() => {
              setActiveWrapper((prev) => !prev);
            }}
          />
        );
      case "Building Blocks":
        return (
          <img
            src={APP_IMAGES.image.card.BBs}
            alt="building blocks"
            onClick={() => {
              setActiveWrapper((prev) => !prev);
            }}
          />
        );
      case "Initiatives":
        return (
          <img
            src={APP_IMAGES.image.card.initiatives}
            alt="initiatives"
            onClick={() => {
              setActiveWrapper((prev) => !prev);
            }}
          />
        );

      default:
        break;
    }
  };

  const setMainButton = () => {
    const animation = activeWrapper ? Styles.animationMainButton : "";

    return [Styles.mainButton, animation].join(" ");
  };

  const setSvgColor = () => {
    switch (category) {
      case "Use cases":
        return "tertiary";
      case "Building Blocks":
        return "secondary";
      case "Initiatives":
        return "quaternary";
      case "Examples":
        return "white";

      default:
        return "black";
    }
  };

  useEffect(() => {
    switch (category) {
      case "Use cases":
        setLinksCard([
          { linkName: "1) MAP", url: APP_LINKS.useCases + "/map" },
          { linkName: "2) MATCH", url: APP_LINKS.useCases + "/match" },
          { linkName: "3) FORECAST", url: APP_LINKS.useCases + "/forecast" },
        ]);
        break;
      case "Building Blocks":
        setLinksCard([
          { linkName: "Governance model", url: "#" },
          { linkName: "Technical architecture and BBs", url: "#" },
        ]);
        break;
      case "Initiatives":
        setLinksCard([
          { linkName: "Link 1", url: "#" },
          { linkName: "link 2", url: "#" },
        ]);
        break;
      case "Examples":
        setLinksCard([
          { linkName: "Link 1", url: "#" },
          { linkName: "link 2", url: "#" },
        ]);
        break;

      default:
        setLinksCard([]);
        break;
    }
  }, [category]);

  return (
    <Card
      className={`${Styles.ExploreCard} ${
        variant === "discover" ? Styles.discover : ""
      }`}
      category={variant === "discover" ? "default" : category}
    >
      {setImage()}
      <Button
        variantBgColor="transparent"
        className={setMainButton()}
        variantSvgColor={variant === "discover" ? "white" : setSvgColor()}
        icon={variant === "discover" ? "plusSquare" : "plus"}
        onClick={() => {
          setActiveWrapper((prev) => !prev);
        }}
      >
        {category}
      </Button>
      <div
        className={`${Styles.wrapper} ${activeWrapper ? Styles.isOpen : ""}`}
      >
        <div className={Styles.inner}>
          {linksCard?.map((el, index) => (
            <Button
              key={el.linkName + index}
              variantBgColor="transparent"
              icon={variant === "discover" ? "plusSquare" : "plus"}
              variantSvgColor={variant === "discover" ? "white" : setSvgColor()}
              onClick={() => {
                navigate(el.url);
              }}
            >
              {el.linkName}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};
