import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./UseCaseBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import { UseCase } from "../../../../types";
import { APP_LINKS } from "../../../../utils/appLinks";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../../../atoms/Dropdowns/Dropdown/Dropdown";

type UseCaseBannerProps = {
  useCase: UseCase | string;
};

type BannerContent = {
  links: {
    prev?: {
      name: UseCase;
      link: string;
    };
    next?: {
      name: UseCase;
      link: string;
    };
  };
  icon: string;
  title: "1) MATCH" | "2) FORECAST";
  description: string;
  endDescription: string;
  mainValue: string[];
};

export const UseCaseBanner = ({
  useCase,
}: PropsWithChildren<UseCaseBannerProps>) => {
  const navigate = useNavigate();

  const [contentBanner, setContentBanner] = useState<BannerContent>();
  const [useCaseError, setUseCaseError] = useState<boolean>(false);

  useEffect(() => {
    if (useCaseError) {
      setUseCaseError(false);
    }

    switch (useCase) {
      case "match":
        setContentBanner({
          links: {
            next: {
              name: "forecast",
              link: APP_LINKS.useCases + "/forecast",
            },
          },
          icon: "🎲",
          title: "1) MATCH",
          description: `The "Match" usage scenario aims to intelligently link job seekers and employees with suitable job and training opportunities based on their unique skills and requirements. Utilising advanced algorithms and comprehensive skills taxonomies, it bridges the gap between individual competencies and market demands. This streamlined process aids in reducing recruitment inefficiencies, enhancing skill development, and ensuring more harmonious job placements.
            `,
          mainValue: [
            "Precision Matching: Accurately aligns individual skills with market needs, reducing mismatches and enhancing job satisfaction",
            "Efficiency Boost: Streamlines the recruitment and training process, saving time and resources for both employers and job seekers.",
            "Skill Development: Highlights areas for personal upskilling, leading to continuous professional growth and meeting evolving market demands.",
          ],
          endDescription:
            "To put into place such a use case, different stakeholders needs to interact and each have different roles and incentives. You can explore those for each:",
        });
        break;
      case "forecast":
        setContentBanner({
          links: {
            prev: {
              name: "match",
              link: APP_LINKS.useCases + "/match",
            },
          },
          icon: "🎲",
          title: "2) FORECAST",
          description: `The “Forecast” usage scenario integrates complex algorithms and comprehensive data sets to predict upcoming trends in skill requirements. By evaluating current skill availabilities against projected industry shifts, it offers a visionary outlook on potential mismatches in the job market. This foresight facilitates educational institutions in curating curriculum, empowers businesses to strategise talent management, and aids individuals in making informed decisions about their career trajectories, ensuring that they remain aligned with the evolving demands of the global workforce.`,
          mainValue: [
            "Proactive Approach: Allows stakeholders to anticipate market changes, facilitating the creation of timely and relevant educational and training programs.",
            "Strategic Decision-Making: Provides businesses with valuable insights to align their talent acquisition and development strategies with future demands.",
            "Empowered Career Planning: Equips individuals with foresight on emerging skills, enabling them to remain competitive and relevant in their professions.",
          ],
          endDescription:
            "To put into place such a use case, different stakeholders needs to interact and each have different roles and incentives. You can explore those for each:",
        });
        break;

      default:
        setUseCaseError(true);
        break;
    }
  }, [useCase, navigate, useCaseError]);

  if (useCaseError) {
    return (
      <SectionContainer variantColor="primary">
        <p>Sorry this usage scenario does not exist</p>
        <Button
          onClick={() => {
            navigate(APP_LINKS.home);
          }}
        >
          Home Page
        </Button>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer variantColor="primary" className={Styles.bgImage}>
      <div className={Styles.UseCaseBanner}>
        <div className={Styles.nav}>
          <Dropdown
            text="Usage scenario"
            options={[
              { name: `Match`, url: APP_LINKS.useCases + "/match" },
              { name: "Forecast", url: APP_LINKS.useCases + "/forecast" },
            ]}
          />
          {/* {contentBanner?.links?.prev && (
            <Button
              variantBgColor="transparent"
              onClick={() => {
                if (contentBanner?.links?.prev)
                  navigate(contentBanner?.links?.prev?.link);
              }}
              icon="arrowLeft"
              iconPosition="prev"
            >
              Previous usage scenario{" "}
              <span>({contentBanner?.links.prev.name})</span>
            </Button>
          )}
          {contentBanner?.links?.next && (
            <Button
              variantBgColor="transparent"
              onClick={() => {
                if (contentBanner?.links?.next)
                  navigate(contentBanner?.links.next.link);
              }}
              icon="arrowRight"
            >
              Next usage scenario{" "}
              <span>({contentBanner?.links.next.name})</span>
            </Button>
          )} */}
        </div>

        <header>
          <span>{contentBanner?.icon}</span>
          <h1>{contentBanner?.title}</h1>
        </header>
        <p>{contentBanner?.description}</p>
        {contentBanner?.mainValue.length && (
          <ul>
            {contentBanner.mainValue.map((value, index) => (
              <li key={"mainValue" + index}>{value}</li>
            ))}
          </ul>
        )}
        <p className={Styles.endDescription}>{contentBanner?.endDescription}</p>
      </div>
    </SectionContainer>
  );
};
