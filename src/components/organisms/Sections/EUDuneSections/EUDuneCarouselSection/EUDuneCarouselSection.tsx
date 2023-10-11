import React,{ useState } from "react";
import { APP_IMAGES } from "../../../../../utils/appImages";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./EUDuneCarouselSection.module.scss";
import { UseCase } from "../../../../../types";
import { ImageCarousel } from "../../../../molecules/Carousels/ImageCarousel/ImageCarousel";

type SchemaUseCase = {
  name: UseCase;
  definition: string;
};

const CONTENT_CAROUSEL: SchemaUseCase[] = [
  {
    name: "map",
    definition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque praesentium ratione nesciunt odit aspernatur accusamus sit ea eveniet? Velit facilis assumenda vero ducimus aperiam pariatur in esse mollitia officia!",
  },
  {
    name: "match",
    definition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque praesentium ratione nesciunt odit aspernatur accusamus sit ea eveniet? Velit facilis assumenda vero ducimus aperiam pariatur in esse mollitia officia!",
  },
  {
    name: "forecast",
    definition:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque praesentium ratione nesciunt odit aspernatur accusamus sit ea eveniet? Velit facilis assumenda vero ducimus aperiam pariatur in esse mollitia officia!",
  },
];

export const EUDuneCarouselSection = () => {
  const [currentCarouselItem, setCurrentCarouselItem] = useState<number>(0);

  const updateIndicator = (index: number) => {
    setCurrentCarouselItem(index);
  };

  return (
    <SectionContainer className={Styles.EUDuneCarouselSection}>
      <h2>Check other examples</h2>
      <div>
        <div className={Styles.carousel}>
          <ImageCarousel
            updateIndicator={updateIndicator}
            images={[
              APP_IMAGES.image.schema.schemaMap,
              APP_IMAGES.image.schema.schemaMatch,
              APP_IMAGES.image.schema.schemaForecast,
            ]}
          />
          <div className={Styles.useCase}>
            {CONTENT_CAROUSEL.map((el, index) => {
              if (index === currentCarouselItem) {
                return (
                  <React.Fragment key={el.name + index}>
                    <h3>
                      <span>{el.name}</span> (use case)
                    </h3>
                    <p>
                      Definition: <br />
                      {el.definition}
                    </p>
                  </React.Fragment>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className={Styles.indicator}>
          {[...Array(3)].map((_, index) => (
            <span
              key={"indicator" + index}
              className={
                currentCarouselItem === index ? Styles.activeIndicator : ""
              }
              onClick={() => {
                setCurrentCarouselItem(index);
              }}
            ></span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
