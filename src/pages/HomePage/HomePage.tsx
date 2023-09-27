import Styles from "./HomePage.module.scss";
import { HomeBanner } from "../../components/molecules/Banners/HomeBanner/HomeBanner";
import { SectionContainer } from "../../components/atoms/Containers/SectionContainer/SectionContainer";
import { ExploreCard } from "../../components/molecules/Cards/ExploreCard/ExploreCard";
import { Button } from "../../components/atoms/Buttons/Button/Button";

export const HomePage = () => {
  return (
    <div className={Styles.HomePage}>
      <HomeBanner />

      <SectionContainer className={Styles.description}>
        <img src="" alt="" className="img-placeholder" />
        <p>
          As an important outcome of the DS4Skills project, the Data Space for
          Skills Blueprint{" "}
          <span>
            offers concrete building blocks and illustrated guidelines to equip
            organisations in building data space ecosystems
          </span>{" "}
          that can offer practical benefits to citizens and businesses.
        </p>
      </SectionContainer>

      <SectionContainer
        variantColor="primary"
        className={Styles.cardsContainer}
      >
        <h2>What do you want to explore?</h2>
        <div className={Styles.cards}>
          <ExploreCard category="Use cases" />
          <ExploreCard category="Building Blocks" />
          <ExploreCard category="Initiatives" />
        </div>
      </SectionContainer>

      <SectionContainer className={Styles.blueprint}>
        <div className={Styles.blueprintContent}>
          <h2>Why do we need a Blueprint?</h2>
          <p>
            Developing a Data Space for Skills Blueprint is essential to create
            a <span>human-centric data space</span>, where individuals have
            control of their data and share it in a trustworthy way
          </p>
          <p>
            The Blueprint will provide the <span>"building blocks"</span>{" "}
            (democratically governed open-source code) that will ensure that any
            organisation can be part of the data space ecosystems without being
            locked into any particular infrastructure provider.
          </p>

          <Button icon variantSvgColor="secondary">
            Read the full document
          </Button>
        </div>
        <img src="" alt="" className="img-placeholder" />
      </SectionContainer>
    </div>
  );
};
