import { PropsWithChildren } from "react";
import Styles from "./TechnicalTrackGovernanceCard.module.scss";
import { Card } from "../../../atoms/Cards/Card/Card";

type TechnicalTrackGovernanceCardProps = {
  functionalites?: {
    desctipion: string;
    functions: {
      description: string;
      subDescription?: string[];
    }[];
  }[];
  standards?: {
    name: string;
    website: string;
    description?: string;
  }[];
  referenceImplementations?: {
    name: string;
    website: string;
  }[];
};

export const TechnicalTrackGovernanceCard = ({
  functionalites,
  standards,
  referenceImplementations,
}: PropsWithChildren<TechnicalTrackGovernanceCardProps>) => {
  const openNewWindow = (url: string) => {
    const newWin = window.open(url);

    if (!newWin || newWin.closed || typeof newWin.closed == "undefined") {
      alert("Your browser block the new tab");
    }
  };

  const setContent = () => {
    if (functionalites?.length) {
      return (
        <Card className={Styles.TechnicalTrackGovernanceCard}>
          <h3>Functionalities</h3>
          {functionalites.map((el, index) => (
            <div key={"description" + index} className={Styles.content}>
              <p dangerouslySetInnerHTML={{ __html: el.desctipion || "" }}></p>
              <ul className={Styles.listFunctionalites}>
                {el.functions.map((func, i) => (
                  <li key={"functions" + i}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: func.description || "",
                      }}
                    ></p>
                    {func?.subDescription?.length && (
                      <ul>
                        {func.subDescription.map((sub, index) => (
                          <li key={sub + index}>- {sub}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Card>
      );
    }

    if (standards?.length) {
      return (
        <Card className={Styles.TechnicalTrackGovernanceCard}>
          <h3>Standards</h3>
          <ul>
            {standards.map((el, index) => (
              <li
                key={el.name + index}
                className={Styles.clickable}
                onClick={() => {
                  if (el?.website) {
                    openNewWindow(el?.website);
                  }
                }}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </Card>
      );
    }

    if (referenceImplementations?.length) {
      return (
        <Card className={Styles.TechnicalTrackGovernanceCard}>
          <h3>Reference implementations</h3>
          <ul>
            {referenceImplementations.map((el, index) => (
              <li
                key={el.name + index}
                className={Styles.clickable}
                onClick={() => {
                  if (el?.website) {
                    openNewWindow(el?.website);
                  }
                }}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </Card>
      );
    }

    return null;
  };

  return setContent();
};
