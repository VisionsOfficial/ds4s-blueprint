import Styles from "./GovernanceBanner.module.scss";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import { Button } from "../../../atoms/Buttons/Button/Button";
import { SlideTopContainer } from "../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { useInView } from "react-intersection-observer";

export const GovernanceBanner = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  return (
    <SectionContainer variantColor="primary" className={Styles.bgImage}>
      <SlideTopContainer
        className={Styles.GovernanceBanner}
        ref={ref}
        InView={InView}
      >
        <header>
          <h1>Governance</h1>
          <p>
            To realize the business value, data spaces must foster trust among
            participants for decentralized data sharing. This involves
            governance models that maintain participant control over data and
            services, facilitating trusted data sharing. These trust decisions
            occur at different levels, such as data space, use case, and
            participant levels, covering standards, access rules, entry/exit
            criteria, roles, business models, and use cases.
          </p>
          <ul>
            <li className={Styles.mainLi}>
              Definition of each governance level (data space, use case,
              participant)
              <ul>
                <li>
                  Data space level: All governance aspects relating to the
                  infrastructure that enables data transactions between
                  different data space use case participants based on the
                  governance framework of that data space. Data spaces should be
                  generic to support the implementation of a variety of data
                  space use cases, governance models and business models. One
                  data space can be used for several data space use cases (see
                  below). The body that is responsible for the governance of
                  this level is the Data Space Governance Authority, preferably
                  composed of public and private entities.
                </li>
                <li>
                  Data space use case level: A specific setting in which two or
                  more <span>use case participants</span> rely on a data space
                  to create value. Value can be interpreted as business,
                  societal or environmental value. The data space use case can
                  have specific business and governance models. The body that is
                  responsible for the governance of this level is the Data space
                  use case Orchestrator.
                </li>
                <li>
                  Use case participant: A <span>data space participant</span>{" "}
                  that is engaged with a specific{" "}
                  <span>data space use case</span> and may have one or more
                  roles in it. The body that is responsible for the governance
                  of this level is the Participant itself
                </li>
              </ul>
            </li>
            <li className={Styles.mainLi}>
              For each topic to be decided upon (standards, accession, etc),
              explanation of what is decided at each level
            </li>
          </ul>
        </header>

        <Button icon="plus" variantSvgColor="secondary">
          Read the full document
        </Button>
      </SlideTopContainer>
    </SectionContainer>
  );
};
