import { PropsWithChildren } from "react";
import Styles from "./StakeholderBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import {
  ColorVariant,
  Stakeholder,
  StakeholderCategories,
} from "../../../../types";
import { Link, Params } from "react-router-dom";
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
  const { data } = useStakeholder({
    stakeholder: stakeholder?.replace(/-/g, " ") as Stakeholder,
  });
  const setProps = () => {
    return [Styles.StakeholderBanner, className].join(" ");
  };

  const setNavigateLink = () => {
    return APP_LINKS.useCases + `/${useCase}`;
  };

  const setDefinition = () => {
    const definition = data?.categories.map((el) => {
      if (el.name === (category as StakeholderCategories)) {
        return el.content.definition;
      } else return null;
    });

    return definition;
  };

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
        <p>
          <span>Definition:</span>
          <br />
          {setDefinition()}
        </p>
      </div>
    </SectionContainer>
  );
};
