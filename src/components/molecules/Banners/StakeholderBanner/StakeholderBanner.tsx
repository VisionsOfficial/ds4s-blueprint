import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./StakeholderBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import {
  ColorVariant,
  Stakeholder,
  StakeholderCategories,
} from "../../../../types";
import { Link, Params, useLocation } from "react-router-dom";
import { APP_LINKS } from "../../../../utils/appLinks";
import { useStakeholder } from "../../../../hooks/useStakeholder";

type StakeholderBannerProps = {
  className?: string;
  variantBgColor: ColorVariant;
  params: Readonly<Params<string>>;
};

export const StakeholderBanner = ({
  className = "",
  variantBgColor,
  params,
}: PropsWithChildren<StakeholderBannerProps>) => {
  const { useCase, stakeholder, category } = params;
  const location = useLocation();
  const searchLocation = location.search.split("=")[1];
  const { data } = useStakeholder({
    stakeholder: stakeholder?.replace(/-/g, " ") as Stakeholder,
  });
  const [currentDefintion, setCurrentDefinition] = useState<string>("");

  const setProps = () => {
    return [Styles.StakeholderBanner, className].join(" ");
  };

  const setNavigateLink = () => {
    if (useCase === "eudune") {
      return APP_LINKS.EUDune;
    }

    return APP_LINKS.useCases + `/${useCase}`;
  };

  const setTitle = () => {
    const title = data?.categories.map((el) => {
      if (el.name === (category as StakeholderCategories)) {
        if (el.content.governance) {
          return el.content.governance[parseInt(searchLocation) - 1].title;
        } else return "";
      } else return "";
    });

    return title;
  };

  useEffect(() => {
    if (searchLocation) {
      data?.categories.map((el) => {
        if (el.name === (category as StakeholderCategories)) {
          if (el.content.governance) {
            setCurrentDefinition(
              el.content.governance[parseInt(searchLocation) - 1].definition
            );
          } else return "";
        } else return "";
      });
      return;
    }

    data?.categories.map((el) => {
      if (el.name === (category as StakeholderCategories)) {
        setCurrentDefinition(el.content.definition);
      } else return null;
    });
  }, [data, category, searchLocation]);

  if (searchLocation) {
    return (
      <SectionContainer className={setProps()} variantColor={variantBgColor}>
        <p className={Styles.path}>
          <Link to={setNavigateLink()} className={Styles.useCase}>
            {useCase}
          </Link>{" "}
          {">"}{" "}
          <Link to={setNavigateLink()}>{stakeholder?.replace(/-/g, " ")}</Link>{" "}
          {">"} <Link to={setNavigateLink()}>{category}</Link>
        </p>

        <div className={Styles.content}>
          <h2>{setTitle()}</h2>
          <p dangerouslySetInnerHTML={{ __html: currentDefintion || "" }}></p>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className={setProps()} variantColor={variantBgColor}>
      <p className={Styles.path}>
        <Link to={setNavigateLink()} className={Styles.useCase}>
          {useCase}
        </Link>{" "}
        {">"}{" "}
        <Link to={setNavigateLink()}>{stakeholder?.replace(/-/g, " ")}</Link>{" "}
        {">"} <Link to={setNavigateLink()}>{category}</Link>
      </p>

      <div className={Styles.content}>
        <h2>{data?.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: currentDefintion || "" }}></p>
      </div>
    </SectionContainer>
  );
};
