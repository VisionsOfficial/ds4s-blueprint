import { PropsWithChildren, useState } from "react";
import Styles from "./Carousel.module.scss";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { SchemaUseCase } from "../../../../types";

type CarouselProps = {
  images: string[];
  className?: string;
  content?: JSX.Element | null;
  titleContent?: SchemaUseCase;
  updateParentIndicator?: (index: number) => void;
};

export const Carousel = ({
  images,
  className = "",
  content = null,
  titleContent,
  updateParentIndicator,
}: PropsWithChildren<CarouselProps>) => {
  const [currentCarouselItem, setCurrentCarouselItem] = useState<number>(0);

  const updateIndicator = (index: number) => {
    setCurrentCarouselItem(index);
    if (updateParentIndicator) updateParentIndicator(index);
  };

  return (
    <div className={`${Styles.container} ${className}`}>
      <div className={Styles.Carousel}>
        <ImageCarousel updateIndicator={updateIndicator} images={images} />
        <div className={Styles.useCase}>
          {titleContent && <h3>{titleContent}</h3>}
          {content}
        </div>
      </div>
      <div className={Styles.indicator}>
        {[...Array(images.length)].map((_, index) => (
          <span
            key={"indicator" + index}
            className={
              currentCarouselItem === index ? Styles.activeIndicator : ""
            }
          ></span>
        ))}
      </div>
    </div>
  );
};
