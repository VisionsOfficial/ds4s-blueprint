import { PropsWithChildren } from "react";
import Styles from "./EUDuneCard.module.scss";
import { Card } from "../../../atoms/Cards/Card/Card";
import { APP_IMAGES } from "../../../../utils/appImages";
import { EUDuneCategoryCard } from "../../../../types";

type EUDuneCardProps = {
  category: EUDuneCategoryCard;
  contentDirection?: "normal" | "reverse";
  className?: string;
};

export const EUDuneCard = ({
  category,
  contentDirection = "normal",
  className = "",
}: PropsWithChildren<EUDuneCardProps>) => {
  const setContent = () => {
    switch (category) {
      case "francesco":
        return (
          <>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.manLaptop}
                alt="icon francesco with laptop"
                style={{ transform: "scale(1.1) translateY(-10px)" }}
              />
            </figure>
            <p>
              <span className={Styles.fontHPrimary}>Francesco</span>, her boss,
              introduces her to <span>EU-DUNE</span>, a skills data space use
              case operated by{" "}
              <span className={Styles.fontPrimary}>SkillsFast</span> on top of
              the Fire-X data space. <span>EU-DUNE</span> is aimed at digital
              upskilling for employees. Supported by a training budget from{" "}
              <span className={Styles.fontHPrimary}>Francesco, Matilda</span>{" "}
              logs into the <span>EU-DUNE platform</span>.
            </p>
          </>
        );
      case "gear":
        return (
          <>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.laptopGear}
                alt="icon gear inside computer"
                style={{ transform: "scale(1.1) translateY(6px)" }}
              />
            </figure>
            <div>
              <p>
                On <span>EU-DUNE</span> she finds a collection of services:
              </p>
              <ul>
                <li>
                  <span className={Styles.fontTertiary}>
                    InfraTrust, a Data Intermediary
                  </span>
                  , to help her control and share her data.
                </li>
                <li>
                  <span className={Styles.fontSecondary}>
                    SkillProfiX, a skills assessment tool
                  </span>{" "}
                  to define her skills profile, next career move and skills gap.
                </li>
                <li>
                  <span className={Styles.fontSecondary}>
                    SDAI, a skills AI tool
                  </span>{" "}
                  to match her with relevant training recommendations.
                </li>
              </ul>
            </div>
          </>
        );
      case "cloud":
        return (
          <>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.laptopCloud}
                alt="icon cloud inside computer"
                style={{ transform: "scale(1.1) translate(-16px, 6px)" }}
              />
            </figure>

            <p>
              Thanks to <span className={Styles.fontTertiary}>InfraTrust</span>{" "}
              she logs into{" "}
              <span className={Styles.fontSecondary}>SkillProfiX</span> and can
              import her data from{" "}
              <span className={Styles.fontQuaternary}>DigiFutUX HR system</span>{" "}
              (position, skills, etc), from her past employer (
              <span className={Styles.fontQuaternary}>UXlife</span>) and from
              her university (
              <span className={Styles.fontQuaternary}>UXschool</span>).
            </p>
          </>
        );
      case "graph":
        return (
          <>
            <p>
              <span className={Styles.fontSecondary}>SkillProfiX</span> knows
              the most in-demand UX skills as it can access data from several
              job boards connected to{" "}
              <span className={Styles.fontLPrimary}>Fire-X data space</span> (
              <span className={Styles.fontQuaternary}>
                JobRightNow, Jobijob and Jobo
              </span>
              ) and analyse the skills required, thanks to its use of{" "}
              <span className={Styles.fontTertiary}>InfraTrust</span>.
            </p>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.graph}
                alt="icon graph"
                style={{ transform: "scale(1.2) translateX(35px)" }}
              />
            </figure>
            <p>
              <span className={Styles.fontSecondary}>SkillProfiX</span> uses
              this data to precisely assess her strengths and weaknesses against
              her current UX skills and propose the most interesting areas and
              skills to improve for her.
            </p>
          </>
        );
      case "login":
        return (
          <>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.login}
                alt="icon login template"
                style={{ transform: "scale(1.1) translate(-30px, -20px)" }}
              />
            </figure>
            <p>
              Thanks to <span className={Styles.fontTertiary}>InfraTrust</span>,{" "}
              <span className={Styles.fontHPrimary}>Matilda</span> can then
              share, with her consent, those results from{" "}
              <span className={Styles.fontSecondary}>SkillProfiX</span> to{" "}
              <span className={Styles.fontSecondary}>SDAI</span> to get training
              and learning recommendations.{" "}
              <span className={Styles.fontSecondary}>SDAI</span> can access the
              data, thanks to{" "}
              <span className={Styles.fontTertiary}>InfraTrust</span>, of
              several training catalogues connected to{" "}
              <span className={Styles.fontLPrimary}>Fire-X</span> (
              <span className={Styles.fontQuaternary}>
                FindTraining, YourTraining
              </span>
              ) to match <span className={Styles.fontHPrimary}>Matilda</span>{" "}
              with the right one.
            </p>
          </>
        );
      case "ai":
        return (
          <>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.laptopAI}
                alt="icon ai"
                style={{ transform: "scale(1.1) translateX(30px)" }}
              />
            </figure>
            <p>
              One particularly intriguing opportunity comes from a training
              organisation listed on{" "}
              <span className={Styles.fontQuaternary}>FindTraining</span>:{" "}
              <span className={Styles.fontHPrimary}>IntelliAITraining</span>.
              Matilda decides to select this course, seeing it as a strategic
              move for her career and thanks to{" "}
              <span className={Styles.fontTertiary}>InfraTrust</span>, she can
              share her contact details with{" "}
              <span className={Styles.fontHPrimary}>IntelliAITraining</span>.
            </p>
          </>
        );
      case "anita":
        return (
          <>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.womanPage}
                alt="icon anita"
                style={{ transform: "scale(1.4) translate(-35px, -25px)" }}
              />
            </figure>
            <p>
              <span className={Styles.fontHPrimary}>Anita</span>, a sales
              representative at{" "}
              <span className={Styles.fontHPrimary}>IntelliAITraining</span> can
              see in her
              <span>EU-DUNE</span> account that Matilda is interested in one
              training and contact her. After their exchange,{" "}
              <span className={Styles.fontHPrimary}>Matilda</span> enrolls in
              the training and thanks to{" "}
              <span className={Styles.fontTertiary}>InfraTrust</span>, shares
              her full profile with{" "}
              <span className={Styles.fontHPrimary}>IntelliAITraining’s</span>{" "}
              LMS to register.
            </p>
          </>
        );
      case "money":
        return (
          <>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.money}
                alt="icon money"
                style={{ transform: "scale(1.1) translateX(30px)" }}
              />
            </figure>
            <p>
              <span className={Styles.fontHPrimary}>Francesco</span>, is
              informed through his <span>EU-DUNE</span> portal that{" "}
              <span className={Styles.fontHPrimary}>Matilda</span> has used her
              training budget for that course and can see the new skills she
              will acquire. Francesco pays for connected services to{" "}
              <span className={Styles.fontPrimary}>SkillsFast</span> and
              training to{" "}
              <span className={Styles.fontHPrimary}>IntelliAITraining</span>.
            </p>
          </>
        );
      case "shield":
        return (
          <>
            <figure>
              <img
                src={APP_IMAGES.icon.eudune.shield}
                alt="icon web page with shield"
                style={{ transform: "translateX(40px)" }}
              />
            </figure>
            <p>
              All service and data providers as well as Governance authority
              have their business agreement with{" "}
              <span className={Styles.fontTertiary}>InfraTrust</span>, which
              provides enabling skills data space use case infrastructure for{" "}
              <span className={Styles.fontPrimary}>SkillsFast</span>.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Card
      className={`${Styles.EUDuneCard} ${className}`}
      style={
        contentDirection === "reverse"
          ? { flexDirection: "column-reverse" }
          : {}
      }
    >
      {setContent()}
    </Card>
  );
};
