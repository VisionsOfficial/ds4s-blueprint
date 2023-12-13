import { APP_IMAGES } from "../../../../utils/appImages";
import { SlideTopContainer } from "../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { SectionContainer } from "../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./EUDuneBanner.module.scss";
import { useInView } from "react-intersection-observer";

export const EUDuneBanner = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  return (
    <SectionContainer variantColor="primary" className={Styles.EUDuneBanner}>
      <div className={Styles.informations}>
        <h1>Meet Matilda!</h1>
        <p>
          Matilda is a <span>UX designer</span> at <span>DigiFutUX</span> and is
          aware of the necessity to keep pace with{" "}
          <span>AI-powered design tools</span> in today's fast-moving tech
          world.
        </p>
        <p>
          EU-DUNE is a real use case representing a dynamic upskilling platform
          designed for employees to navigate the evolving digital landscape.
          Leveraging a comprehensive skills data space, the platform, through
          various integrated tools, offers personalized skills assessment,
          recommendations, and training matches. In this use case, Matilda, a UX
          designer, navigates her career progression and training options,
          empowered by data-driven insights and seamless data interconnections.
        </p>
      </div>
      <SlideTopContainer
        ref={ref}
        InView={InView}
        className={Styles.imageContainer}
      >
        <div className={Styles.image}>
          <img
            src={APP_IMAGES.icon.eudune.matilda}
            alt="matilda image"
            className={Styles.matilda}
          />
          <img
            src={APP_IMAGES.icon.eudune.laptopPencil}
            alt="laptop with pencil"
            className={Styles.absolute}
            style={{ left: "0%", bottom: "20%" }}
          />
          <img
            src={APP_IMAGES.icon.eudune.bulb}
            alt="icon buld"
            className={Styles.absolute}
            style={{ left: "7%", bottom: "60%", width: "17%" }}
          />
          <img
            src={APP_IMAGES.icon.eudune.starCheck}
            alt="icon star with check inside"
            className={Styles.absolute}
            style={{ top: "-3%" }}
          />
          <img
            src={APP_IMAGES.icon.eudune.ux}
            alt="icon ux"
            className={Styles.absolute}
            style={{ right: "8%", bottom: "60%" }}
          />
          <img
            src={APP_IMAGES.icon.eudune.ai}
            alt="icon processor ai"
            className={Styles.absolute}
            style={{ right: "0%", bottom: "20%" }}
          />
        </div>
      </SlideTopContainer>
    </SectionContainer>
  );
};
