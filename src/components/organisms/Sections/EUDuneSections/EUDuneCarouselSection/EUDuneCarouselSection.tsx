import { useState } from "react";
import { APP_IMAGES } from "../../../../../utils/appImages";
import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./EUDuneCarouselSection.module.scss";
import { ImageCarousel } from "../../../../molecules/Carousels/ImageCarousel/ImageCarousel";
import { SchemaUseCase } from "../../../../../types";
import { SlideTopContainer } from "../../../../atoms/Animations/SlideTopContainer/SlideTopContainer";
import { useInView } from "react-intersection-observer";

const CONTENT_CAROUSEL: SchemaUseCase[] = [
  "business model radar",
  "data value chain tracker",
  "data value chain tracker BB",
];

const CONTENT_IMAGES_CAROUSEL = [
  APP_IMAGES.image.schema.schemaRadarOne,
  APP_IMAGES.image.schema.schemaRadarTwo,
  APP_IMAGES.image.schema.schemaRadarThree,
  APP_IMAGES.image.schema.schemaRadarFour,
  APP_IMAGES.image.schema.schemaRadarFive,
  APP_IMAGES.image.schema.schemaRadarSix,
  APP_IMAGES.image.schema.schemaRadarSeven,
  APP_IMAGES.image.schema.schemaRadarEight,
  APP_IMAGES.image.schema.schemaChainTracker,
  APP_IMAGES.image.schema.schemaLegendChainTracker,
  APP_IMAGES.image.schema.schemaChainTrackBB,
];

export const EUDuneCarouselSection = () => {
  const [ref, InView] = useInView({
    triggerOnce: true,
  });
  const [currentCarouselItem, setCurrentCarouselItem] = useState<number>(0);

  const updateIndicator = (index: number) => {
    setCurrentCarouselItem(index);
  };

  const setContent = (name: SchemaUseCase) => {
    switch (name) {
      case "business model radar":
        return (
          <>
            <p>
              The Business model radar is a valuable facilitator for adopting a
              co-creative approach within the EU-DUNE use case, where 6 distinct
              roles participate. Here's how to navigate its three perspectives:
            </p>
            <ul>
              <li>
                Value proposition for each role: Located adjacent to the central
                core of the radar, this section provides a clear understanding
                of the unique value that each role brings to the use case and
                underscores the significance of their active involvement. The
                value propositions are also designed to describe the value
                proposition for each role to join - why would they join. These
                are presented with pink and orange cards, offering example views
                of their contributions to the data space use case, thereby
                showcasing the benefits of multi-stakeholder participation.
              </li>
              <li>
                Role co-production activity: Following the value proposition
                component, next section outlines the specific activities
                undertaken by each role to fulfil their respective value
                propositions and ensuring a cohesive approach to co-production.
              </li>
              <li>
                Costs and benefits: Extending to the outer ring of the radar,
                this segment presents a comprehensive overview of both financial
                and non-financial costs and benefits associated with each role's
                participation in the use case. It highlights the rewards and
                challenges each role encounters as a direct consequence of their
                engagement in this collaborative initiative.
              </li>
            </ul>
          </>
        );
      case "data value chain tracker":
        return (
          <>
            <p>
              The "Data Value Chain Tracker" functions as a map that assists in
              tracing the path of data, services, insights, and their conversion
              into monetary value.
            </p>
            <p>
              The initial phase of the Data value chain tracker involves
              showcasing all the participants in the use case and illustrating
              the flow of interactions among them, encompassing data, insights,
              services, and data space enabling services. To read the flow in
              this diagram:
            </p>
            <ul>
              <li>
                The diagram primarily represents data and insights, services and
                data space enabling services within the EU-DUNE use case.
              </li>
              <li>
                EU-DUNE participants in circles: Each participant in the EU-DUNE
                use case is represented by a circle. These circles likely
                contain the names or logos of the participants.
              </li>
              <li>
                Lines between participants: The lines connecting these circles
                represent data/insight/services/DS enabling service interactions
                between participants as indicated by colour.
              </li>
            </ul>
            <p>
              Another facet of the Data value chain tracker concerns the
              financial transactions between participants, involving payments
              for data, insights, services, or data space enabling services. To
              read the flow in this diagram:
            </p>
            <p>To read the flow in this diagram:</p>
            <ul>
              <li>Focus on monetary value</li>
              <li>
                EU-DUNE participants in circles: Each participant in the EU-DUNE
                use case is represented by a circle. These circles likely
                contain the names or logos of the participants.
              </li>
              <li>
                Lines between participants: The lines connecting these circles
                represent monetary interactions between participants. These
                interactions encompass various aspects:
                <ul>
                  <li>
                    What they are paying for: The lines indicate what a
                    participant is paying for within the use case. This could
                    include services, products, or fees.
                  </li>
                  <li>
                    Business model: The lines also reflect the underlying
                    business model between participants.
                  </li>
                  <li>
                    Pricing model: The lines help to visualize the pricing model
                    being used, how participants are charged for the services or
                    products they are receiving.
                  </li>
                  <li>
                    Monetary amounts: You can determine the monetary value
                    involved in each interaction. The lines might vary in
                    thickness or be labelled with specific amounts to indicate
                    the financial magnitude.
                  </li>
                  <li>
                    Line colours: The use of colours helps differentiate the
                    nature of these transactions, making it easier to understand
                    the dynamics of the use case:
                    <ul>
                      <li>
                        Red line: Indicates payments for data products.
                        Participants may be buying or selling data-related
                        products within the use case.
                      </li>
                      <li>
                        Blue line: Represents payments for data space enabling
                        services. This could include services related to data
                        storage, access, or management. Or denotes payments made
                        to DSGA for their services. DSGA plays a crucial role in
                        overseeing and governing the data space, and
                        participants may pay them for their regulatory or
                        governance services.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        );
      case "data value chain tracker BB":
        return (
          <>
            <p>
              This building block enables the tracking of contributors and their
              respective contributions within the data value chain, ensuring
              equitable compensation for all parties involved. In contrast to
              current closed digital platforms, users and organizations gain the
              ability to monitor and exert control over the use of their
              personal or business data by other entities after sharing it.
            </p>
            <p>This transformative capability offers several advantages:</p>
            <ul>
              <li>
                <span>Lowering barriers:</span> It reduces barriers for users
                and organizations when it comes to sharing sensitive data. This
                is possible because the data remains safeguarded by data space
                rules, consent mechanisms, and business contracts, instilling a
                sense of trust and security.
              </li>
              <li>
                <span>Innovative incentives:</span> It has the potential to
                foster the creation of novel incentives and business models that
                encourage the responsible and profitable utilization of
                available data resources.
              </li>
            </ul>
            <p>
              In essence, this building block{" "}
              <span>
                empowers individuals and organizations, promoting transparency
                and trust while unlocking new opportunities
              </span>{" "}
              in the data sharing data space use case.
            </p>
            <p>
              <span>Key Elements & Key Functions</span>
            </p>
            <ul>
              <li>
                <span>Data value flow requests:</span> Each participant has the
                capability to request a comprehensive data value flow analysis
                for each specific use case.
              </li>
              <li>
                <span>Visibility for data providers:</span> Data providers can
                access information that shows how and where their data is being
                utilized, subject to consent and signed contract/orders.
              </li>
              <li>
                <span>Visibility for data consumers:</span> visibility that
                includes:
                <ul>
                  <li>
                    The source of the data they are utilizing, as per consent
                    and signed contract/orders.
                  </li>
                  <li>
                    The precise cost associated with the data, including how
                    this payment is distributed along the entire data value
                    chain.
                  </li>
                  <li>
                    <span>Money and value flow transparency:</span> The system
                    provides visibility into the money and value flow for each
                    use case. This extends from the initial participant who pays
                    for the data product through the entire chain of subsequent
                    participants involved in the use case.
                  </li>
                </ul>
              </li>
            </ul>
          </>
        );

      default:
        return null;
    }
  };

  const updateContentByIndex = () => {
    switch (currentCarouselItem) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return (
          <>
            <h3>{CONTENT_CAROUSEL[0]}</h3>
            {setContent(CONTENT_CAROUSEL[0])}
          </>
        );
      case 8:
      case 9:
        return (
          <>
            <h3>{CONTENT_CAROUSEL[1]}</h3>
            {setContent(CONTENT_CAROUSEL[1])}
          </>
        );
      case 10:
        return (
          <>
            <h3>{CONTENT_CAROUSEL[2]}</h3>
            {setContent(CONTENT_CAROUSEL[2])}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <SectionContainer>
      <SlideTopContainer
        className={Styles.EUDuneCarouselSection}
        ref={ref}
        InView={InView}
      >
        <header>
          {/* <h2>Check other examples</h2> */}
          <p>
            The following tools: Business model radar, Value tracker, and Value
            sharing model are custom-tailored to address the unique challenges
            and opportunities within the EU-DUNE landscape.
            <br /> In our increasingly data-driven world, comprehending the
            journey of data and its transformation into economic value is of
            utmost importance. While the "Business Model Radar" aids each use
            case participant in defining their motivations, benefits, risks, and
            costs for participation, the "Data Value Chain Tracker" illuminates
            the complex path that data follows, shedding light on how data
            translates into monetary value.
          </p>
        </header>
        <div>
          <div className={Styles.carousel}>
            <ImageCarousel
              updateIndicator={updateIndicator}
              images={CONTENT_IMAGES_CAROUSEL}
            />
            <div className={Styles.useCase}>{updateContentByIndex()}</div>
          </div>
          <div className={Styles.indicator}>
            {[...Array(CONTENT_IMAGES_CAROUSEL.length)].map((_, index) => (
              <span
                key={"indicator" + index}
                className={
                  currentCarouselItem === index ? Styles.activeIndicator : ""
                }
              ></span>
            ))}
          </div>
        </div>
      </SlideTopContainer>
    </SectionContainer>
  );
};
