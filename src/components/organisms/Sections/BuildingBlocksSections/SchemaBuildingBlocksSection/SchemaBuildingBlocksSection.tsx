import Styles from "./SchemaBuildingBlocksSection.module.scss";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { DataSpaceConnectorSection } from "../DataSpaceConnectorSection/DataSpaceConnectorSection";
import { MainSchemaSection } from "../MainSchemaSection/MainSchemaSection";
import { DataModelsSchemaSection } from "../DataModelsSchemaSection/DataModelsSchemaSection";
import { PersonalDataIntermediarySchema } from "../PersonalDataIntermediarySchema/PersonalDataIntermediarySchema";
import { Arrow } from "../../../../atoms/Arrows/Arrow/Arrow";
import { MouseEvent, useRef, useState } from "react";

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
        <Button variantBgColor="secondary">DSSC generic Building Block</Button>
        <Button variantBgColor="primary">
          DS4Skills specific Building Block
        </Button>
        <Button variantBgColor="lightPrimary">
          DS4Skills specific function
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
          <DataModelsSchemaSection className={Styles.dataModels} />
          <PersonalDataIntermediarySchema className={Styles.personal} />

          <svg viewBox="0 0 350 100" className={Styles.consumerTop}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="290"
              y2="50"
              stroke="#000"
              strokeWidth="4"
              markerEnd="url(#arrowhead)"
            />
          </svg>
          <svg viewBox="0 0 350 100" className={Styles.trustRight}>
            <line
              x1="0"
              y1="50"
              x2="350"
              y2="50"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="175" y="40" dominantBaseline="middle" textAnchor="middle">
              Data
            </text>
          </svg>

          <svg viewBox="0 0 350 100" className={Styles.providerTop}>
            <line
              x1="0"
              y1="50"
              x2="350"
              y2="50"
              stroke="#000"
              strokeWidth="4"
            />
          </svg>
          <svg viewBox="0 0 350 100" className={Styles.trustLeft}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="330"
              y2="50"
              stroke="#000"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <text x="175" y="40" dominantBaseline="middle" textAnchor="middle">
              Data
            </text>
          </svg>

          <svg viewBox="0 0 350 100" className={Styles.connectionIdentify}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="330"
              y2="50"
              stroke="#000"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          </svg>
          <svg viewBox="0 0 350 100" className={Styles.connectionIdentifyRight}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="330"
              y2="50"
              stroke="#000"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          <Arrow type="double" className={Styles.connectionDataSpace} />
          <Arrow type="double" className={Styles.connectionDataSpaceLeft} />
          <Arrow
            type="double"
            className={Styles.connectionPublication}
            text="Data Publication"
          />
          <Arrow
            type="double"
            className={Styles.connectionDiscovery}
            text="Data Discovery"
          />
          <Arrow
            type="double"
            className={Styles.connectionConsent}
            text="Consent"
          />
          <Arrow
            type="double"
            className={Styles.connectionConsentLeft}
            text="Consent"
          />

          <svg viewBox="0 0 350 100" className={Styles.providerPrivacy}>
            <line
              x1="0"
              y1="50"
              x2="350"
              y2="50"
              stroke="#000"
              strokeWidth="4"
            />
          </svg>
          <svg viewBox="0 0 350 100" className={Styles.consumerPrivacy}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="320"
              y2="50"
              stroke="#000"
              strokeWidth="4"
              markerEnd="url(#arrowhead)"
            />
          </svg>
          <svg
            viewBox="0 0 350 100"
            className={Styles.connectionProviderConsumer}
          >
            <line
              x1="0"
              y1="50"
              x2="320"
              y2="50"
              stroke="#000"
              strokeWidth="1"
            />
            <text x="175" y="45" dominantBaseline="middle" textAnchor="middle">
              Data
            </text>
          </svg>

          <svg viewBox="0 0 350 100" className={Styles.consumerBottom}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="320"
              y2="50"
              stroke="#000"
              strokeWidth="1"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          <svg viewBox="0 0 350 100" className={Styles.providerBottom}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="320"
              y2="50"
              stroke="#000"
              strokeWidth="1"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          <svg
            viewBox="0 0 350 100"
            className={Styles.connectionProviderPersonal}
          >
            <line
              x1="0"
              y1="50"
              x2="320"
              y2="50"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="175" y="40" dominantBaseline="middle" textAnchor="middle">
              Consent
            </text>
          </svg>
          <svg
            viewBox="0 0 350 100"
            className={Styles.connectionConsumerPersonal}
          >
            <line
              x1="0"
              y1="50"
              x2="320"
              y2="50"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="175" y="40" dominantBaseline="middle" textAnchor="middle">
              Consent
            </text>
          </svg>

          <svg viewBox="0 0 350 100" className={Styles.connectionDataModels}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="320"
              y2="50"
              stroke="#000"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
          </svg>
          <svg
            viewBox="0 0 350 100"
            className={Styles.connectionDataModelsRight}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="320"
              y2="50"
              stroke="#000"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>
      </SectionContainer>
    </>
  );
};
