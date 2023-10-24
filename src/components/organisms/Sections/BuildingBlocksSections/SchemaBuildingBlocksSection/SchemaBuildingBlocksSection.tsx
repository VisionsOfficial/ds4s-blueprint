import Styles from "./SchemaBuildingBlocksSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { DataSpaceConnectorSection } from "../DataSpaceConnectorSection/DataSpaceConnectorSection";
import { MainSchemaSection } from "../MainSchemaSection/MainSchemaSection";
import { MouseEvent, useRef, useState } from "react";
import { Arrow } from "../../../../atoms/Arrows/Arrow/Arrow";

export type CoordinatesReducer = {
  trust: number;
};

export const SchemaBuildingBlocksSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartX;

    if (containerRef.current) {
      containerRef.current.scrollLeft -= deltaX;
    }

    setDragStartX(e.clientX);
  };

  return (
    <>
      <SectionContainer className={Styles.legend}>
        <Button variantBgColor="secondary">
          DSSC Technical Building Block
        </Button>
        <Button variantBgColor="tertiary">
          DSSC Governance Building Block
        </Button>
        <Button variantBgColor="primary">
          DS4Skills Specific Building Block
        </Button>
        <Button variantBgColor="lightPrimary">
          DS4Skills Specific Function
        </Button>
      </SectionContainer>
      <SectionContainer
        className={Styles.SchemaBuildingBlocksSection}
        ref={containerRef}
        onMouseDown={(e: MouseEvent) => {
          handleMouseDown(e);
        }}
        onMouseUp={handleMouseUp}
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
      >
        <div className={Styles.schema}>
          <DataSpaceConnectorSection
            category="provider"
            className={Styles.provider}
          />
          <MainSchemaSection className={Styles.main} />
          <DataSpaceConnectorSection
            category="consumer"
            className={Styles.consumer}
          />

          <Arrow className={Styles.PDILeft} />
          <Arrow className={Styles.PDIRight} type="simpleL" />

          <Arrow className={Styles.providerTop} />
          <Arrow className={Styles.consumerTop} />

          <Arrow className={Styles.trustLeft} text="Data" />
          <Arrow className={Styles.trustRight} type="simpleL" text="Data" />

          <Arrow className={Styles.providerBarTop} type="bar" />
          <Arrow className={Styles.consumerBarTop} type="bar" />

          <Arrow className={Styles.identifyLeft} />
          <Arrow className={Styles.identifyRight} type="simpleL" />

          <Arrow className={Styles.marketLeft} type="double" />
          <Arrow className={Styles.marketRight} type="double" />

          <Arrow
            className={Styles.publicationLeft}
            type="double"
            text="Data Publication"
          />
          <Arrow
            className={Styles.publicationRight}
            type="double"
            text="Data Discovery"
          />

          <Arrow className={Styles.accessLeft} type="double" />
          <Arrow className={Styles.accessRight} type="double" />

          <Arrow className={Styles.connectionProvider} type="bar" />
          <Arrow className={Styles.connectionConsumer} type="simpleL" />
          <Arrow className={Styles.connection} type="bar" text="Data" />

          <Arrow className={Styles.providerBot} type="simpleL" />
          <Arrow className={Styles.consumerBot} type="simpleL" />

          <Arrow className={Styles.dataModelsLeft} />
          <Arrow className={Styles.dataModelsRight} type="simpleL" />
        </div>
      </SectionContainer>
    </>
  );
};
