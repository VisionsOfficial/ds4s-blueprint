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
import { useLocation, useNavigate } from "react-router-dom";

type StakeholderDocumentationByCategoryCardProps = {
  title:
    | "Benefits"
    | "Costs & Risks"
    | "Examples of business models the stakeholder can apply to provide that value"
    | "Obligations"
    | "Second Examples"
    | "Building Blocks"
    | "What the stakeholder gets out of the data space use case"
    | "What the stakeholder brings to the data space use case";
  stakeholder: Stakeholder;
  category: StakeholderCategories;
  currentColor: ColorVariant;
  stakeholderExamples?: () => void;
};

export const StakeholderDocumentationByCategoryCard = ({
  title,
  stakeholder,
  category,
  currentColor,
  stakeholderExamples,
}: PropsWithChildren<StakeholderDocumentationByCategoryCardProps>) => {
  const { data } = useStakeholder({ stakeholder });
  const { selectedColor } = UseColor({ color: currentColor });
  const location = useLocation();
  const searchLocation = location.search.split("=")[1];
  const navigate = useNavigate();

  const checkStakeholderExample = (title: string) => {
    const stringsToCheck = [
      "end user",
      "individuals",
      "organisation",
      "organisational",
    ];

    if (
      stringsToCheck.some((keyword) => title.toLowerCase().includes(keyword))
    ) {
      if (stakeholderExamples) stakeholderExamples();
      return;
    }
  };

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
          case "Examples of business models the stakeholder can apply to provide that value":
            if (searchLocation) {
              if (!el.content.business) return;

              checkStakeholderExample(
                el.content.business[parseInt(searchLocation) - 1].title
              );

              return el.content.business[
                parseInt(searchLocation) - 1
              ].examples?.map((ex, index) => (
                <p className={selectedColor} key={ex + index}>
                  {ex}
                </p>
              ));
            } else {
              checkStakeholderExample(el.content.title);

              if (el.content.examples?.length) {
                return el.content.examples?.map((ex, index) => (
                  <p className={selectedColor} key={ex + index}>
                    {ex}
                  </p>
                ));
              } else {
                return (
                  <p className={selectedColor} key={"example"}>
                    This stakeholder doesn't have an example
                  </p>
                );
              }
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
          case "Building Blocks":
            return el.content.bbs?.map((bbs, index) => (
              <p
                className={selectedColor}
                key={bbs.name + index}
                onClick={() => {
                  navigate(bbs.path);
                }}
                style={{ cursor: "pointer" }}
              >
                {bbs.name}
              </p>
            ));
          case "What the stakeholder gets out of the data space use case":
            if (searchLocation) {
              if (!el.content.business) return;

              if (
                el?.content?.business[parseInt(searchLocation) - 1]
                  ?.valuePropositions?.dataSpace.length === 0
              ) {
                return (
                  <p className={selectedColor} key={"example"}>
                    This stakeholder doesn't have an data space use case's value
                    proposition for the Role
                  </p>
                );
              }

              return el?.content?.business[
                parseInt(searchLocation) - 1
              ]?.valuePropositions?.dataSpace.map((ds, index) => (
                <p className={selectedColor} key={"data space" + index}>
                  {ds}
                </p>
              ));
            } else {
              return (
                <p className={selectedColor} key={"example"}>
                  This stakeholder doesn't have an data space use case's value
                  proposition for the Role
                </p>
              );
            }
          case "What the stakeholder brings to the data space use case":
            if (searchLocation) {
              if (!el.content.business) return;

              if (
                el?.content?.business[parseInt(searchLocation) - 1]
                  ?.valuePropositions?.roleValue.length === 0
              ) {
                return (
                  <p className={selectedColor} key={"example"}>
                    This stakeholder doesn't have an role’s value proposition
                    for other data space use case stakeholders
                  </p>
                );
              } else {
                return el?.content?.business[
                  parseInt(searchLocation) - 1
                ]?.valuePropositions?.roleValue.map((ds, index) => (
                  <p className={selectedColor} key={"data space" + index}>
                    {ds}
                  </p>
                ));
              }
            } else {
              return (
                <p className={selectedColor} key={"example"}>
                  This stakeholder doesn't have an role’s value proposition for
                  other data space use case stakeholders
                </p>
              );
            }

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
