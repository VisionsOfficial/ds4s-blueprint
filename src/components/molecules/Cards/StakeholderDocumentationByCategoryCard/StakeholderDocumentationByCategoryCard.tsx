import React, { PropsWithChildren } from "react";
import Styles from "./StakeholderDocumentationByCategoryCard.module.scss";
import { Card } from "../../../atoms/Cards/Card/Card";
import {
  ColorVariant,
  Stakeholder,
  StakeholderCategories,
} from "../../../../types";
import { useStakeholder } from "../../../../hooks/useStakeholder";
import { UseColor } from "../../../../hooks/useColor/useColor";
import { useLocation } from "react-router-dom";

type StakeholderDocumentationByCategoryCardProps = {
  title:
    | "Benefits"
    | "Costs & Risks"
    | "Examples"
    | "Obligations"
    | "Second Examples";
  stakeholder: Stakeholder;
  category: StakeholderCategories;
  currentColor: ColorVariant;
};

export const StakeholderDocumentationByCategoryCard = ({
  title,
  stakeholder,
  category,
  currentColor,
}: PropsWithChildren<StakeholderDocumentationByCategoryCardProps>) => {
  const { data } = useStakeholder({ stakeholder });
  const { selectedColor } = UseColor({ color: currentColor });
  const location = useLocation();
  const searchLocation = location.search.split("=")[1];

  const setContent = () => {
    const content = data?.categories.map((el) => {
      if (el.name === category) {
        switch (title) {
          case "Obligations":
            if (searchLocation) {
              if (!el.content.governance) return;
              return el.content.governance[
                parseInt(searchLocation) - 1
              ].obligations?.map((obligation, index) => (
                <p className={selectedColor} key={obligation + index}>
                  {obligation}
                </p>
              ));
            } else {
              return el.content.obligations?.map((obligation, index) => (
                <p className={selectedColor} key={obligation + index}>
                  {obligation}
                </p>
              ));
            }
          case "Examples":
            if (el.content.examples?.length) {
              return el.content.examples?.map((ex, index) => (
                <p className={selectedColor} key={ex + index}>
                  {ex}
                </p>
              ));
            } else {
              return (
                <p className={selectedColor} key={'example'}>
                  This stakeholder don't have example
                </p>
              );
            }
          case "Second Examples":
            return el.content.secondExamples?.map((secondEx, index) => (
              <p className={selectedColor} key={secondEx + index}>
                {secondEx}
              </p>
            ));
          case "Benefits":
            return el.content.benefits?.map((ben, index) => (
              <div className={selectedColor} key={ben.actor + index}>
                <p style={{ fontWeight: "bold" }}>{ben.actor}</p>
                <p
                  dangerouslySetInnerHTML={{ __html: ben.definition || "" }}
                ></p>
              </div>
            ));
          case "Costs & Risks":
            return (
              <React.Fragment key={"costs"}>
                <p
                  className={selectedColor}
                  dangerouslySetInnerHTML={{
                    __html: el.content.costsRisks?.costs || "",
                  }}
                ></p>
                <p
                  className={selectedColor}
                  dangerouslySetInnerHTML={{
                    __html: el.content.costsRisks?.risks || "",
                  }}
                ></p>
              </React.Fragment>
            );

          default:
            break;
        }
      } else return null;
    });

    return content;
  };

  return (
    <Card className={Styles.StakeholderDocumentationByCategoryCard}>
      <h3>{title === "Second Examples" ? "Examples" : title}</h3>
      <div className={Styles.content}>{setContent()}</div>
    </Card>
  );
};
