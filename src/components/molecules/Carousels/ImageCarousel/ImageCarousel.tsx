import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./ImageCarousel.module.scss";

type ImageCarouselProps = {
  images: string[];
  updateIndicator?: (index: number) => void;
};

export const ImageCarousel = ({
  images,
  updateIndicator,
}: PropsWithChildren<ImageCarouselProps>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (updateIndicator) {
      updateIndicator(currentIndex);
    }
  }, [currentIndex, updateIndicator]);

  const imageStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    width: `calc(100% * ${images?.length})`,
  };

  return (
    <div className={Styles.ImageCarousel}>
      <button
        onClick={() => {
          handlePrev();
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
          className={Styles.prev}
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <div className={Styles.container}>
        <div className={Styles.wrapper} style={imageStyle}>
          {images?.map((img, index) => (
            <img
              src={img}
              alt={`Image ${index}`}
              onClick={() => {
                window.open(img);
              }}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          handleNext();
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
          className={Styles.next}
          onClick={() => {
            handleNext();
          }}
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  );
};
