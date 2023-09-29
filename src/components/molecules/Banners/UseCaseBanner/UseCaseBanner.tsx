import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./UseCaseBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import { UseCase } from "../../../../types";
import { APP_LINKS } from "../../../../utils/appLinks";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { useNavigate } from "react-router-dom";

type UseCaseBannerProps = {
  useCase: UseCase | string;
};

type BannerContent = {
  links: {
    prev: {
      name: UseCase;
      link: string;
    };
    next: {
      name: UseCase;
      link: string;
    };
  };
  icon: string;
  title: "1) MAP" | "2) MATCH" | "3) FORECAST";
  description: string;
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
      case "map":
        setContentBanner({
          links: {
            prev: {
              name: "forecast",
              link: APP_LINKS.useCases + "/forecast",
            },
            next: {
              name: "match",
              link: APP_LINKS.useCases + "/match",
            },
          },
          icon: "🔎",
          title: "1) MAP",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
        });
        break;
      case "match":
        setContentBanner({
          links: {
            prev: {
              name: "map",
              link: APP_LINKS.useCases + "/map",
            },
            next: {
              name: "forecast",
              link: APP_LINKS.useCases + "/forecast",
            },
          },
          icon: "🎲",
          title: "2) MATCH",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
        });
        break;
      case "forecast":
        setContentBanner({
          links: {
            prev: {
              name: "match",
              link: APP_LINKS.useCases + "/match",
            },
            next: {
              name: "map",
              link: APP_LINKS.useCases + "/map",
            },
          },
          icon: "🎲",
          title: "3) FORECAST",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatibus voluptatem eaque omnis optio officiis. Adipisci et quos ipsam illum, sit eos voluptatibus nulla optio, voluptatum ex delectus debitis praesentium.",
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
        <p>Sorry this use case does not exist</p>
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
    <SectionContainer variantColor="primary" className={Styles.UseCaseBanner}>
      <div className={Styles.nav}>
        <Button
          variantBgColor="transparent"
          onClick={() => {
            if (contentBanner) navigate(contentBanner?.links.prev.link);
          }}
          icon="arrowLeft"
          iconPosition="prev"
        >
          Previous use case <span>({contentBanner?.links.prev.name})</span>
        </Button>
        <Button
          variantBgColor="transparent"
          onClick={() => {
            if (contentBanner) navigate(contentBanner?.links.next.link);
          }}
          icon="arrowRight"
        >
          Next use case <span>({contentBanner?.links.next.name})</span>
        </Button>
      </div>

      <header>
        <span>{contentBanner?.icon}</span>
        <h1>{contentBanner?.title}</h1>
      </header>
      <p>
        Description and main value: <br /> {contentBanner?.description}
      </p>
    </SectionContainer>
  );
};
