import { SectionContainer } from "../../../../atoms/Containers/SectionContainer/SectionContainer";
import Styles from "./GovernanceDataSpaceInteractionModel.module.scss";

export const GovernanceDataSpaceInteractionModel = () => {
  return (
    <SectionContainer className={Styles.GovernanceDataSpaceInteractionModel}>
      <h2>Data Space Interaction Model</h2>
      <p>
        Here’s a high-level model of the DS4Skills Blueprint data space model:
      </p>
      <ul>
        <li>
          The Data Space Governance Authority ensures trust, interoperability
          and decentralisation at the data space level by:
          <ul>
            <li>
              providing open-source building blocks (catalogue,
              interoperability, consent and contract management, etc) needed by
              the data space participants (service providers, data providers,
              orchestrators) to implement their data space use cases and data
              transactions while maintaining control over their data.
            </li>
            <li>
              certifying trusted Data Intermediaries that operate these building
              blocks to offer it as a service to participants, this ensures high
              quality infrastructure services while not relying on only one
              provider only.
            </li>
            <li>
              Participants can also choose to operate the building blocks
              themselves, if so, they need to be certified as well.
            </li>
          </ul>
        </li>
        <li>
          Data Space participants and data intermediaries can be part of the
          Data Space Governance Authority (DSGA) to decide on: which building blocks to develop, what
          certification criteria, etc.
        </li>
      </ul>
    </SectionContainer>
  );
};
