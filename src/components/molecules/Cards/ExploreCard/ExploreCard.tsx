import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./ExploreCard.module.scss";
import { ExploreCategories, ExploreLinksCards } from "../../../../types";
import { Card } from "../../../atoms/Cards/Card/Card";
import { Button } from "../../../atoms/Buttons/Button/Button";

type ExploreCardProps = {
  category: ExploreCategories;
};

export const ExploreCard = ({
  category,
}: PropsWithChildren<ExploreCardProps>) => {
  const [linksCard, setLinksCard] = useState<ExploreLinksCards[]>([]);
  const [activeWrapper, setActiveWrapper] = useState(false);

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

      default:
        return "black";
    }
  };

  useEffect(() => {
    switch (category) {
      case "Use cases":
        setLinksCard([
          { linkName: "1) MAP", url: "#" },
          { linkName: "2) MATCH", url: "#" },
          { linkName: "3) FORECAST", url: "#" },
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

      default:
        setLinksCard([]);
        break;
    }
  }, [category]);

  return (
    <Card className={Styles.ExploreCard} category={category}>
      <img
        src=""
        alt=""
        className="img-placeholder"
        onClick={() => {
          setActiveWrapper((prev) => !prev);
        }}
      />
      <Button
        variantBgColor="transparent"
        className={setMainButton()}
        variantSvgColor={setSvgColor()}
        icon
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
              icon
              variantSvgColor={setSvgColor()}
            >
              {el.linkName}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};
