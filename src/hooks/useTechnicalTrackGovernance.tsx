import { useEffect, useState } from "react";
import { Technical_Track_Governance } from "../data/project/technical/track/governance/technicalTrackGovernance";
import { TechnicalTrackGovernance } from "../types";
import { APP_PARAMS } from "../utils/appParams";

type Props = {
  bbs: string;
};

export const useTechnicalTrackGovernance = ({ bbs }: Props) => {
  const [data, setData] = useState<TechnicalTrackGovernance>();

  useEffect(() => {
    if (!bbs) return;

    switch (bbs) {
      case APP_PARAMS.buildingBlocks.dataModelAndFormat:
        setData(Technical_Track_Governance[0]);
        break;
      case APP_PARAMS.buildingBlocks.dataExchange:
        setData(Technical_Track_Governance[1]);
        break;
      case APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl:
        setData(Technical_Track_Governance[2]);
        break;
      case APP_PARAMS.buildingBlocks.identifyManagement:
        setData(Technical_Track_Governance[3]);
        break;
      case APP_PARAMS.buildingBlocks.trust:
        setData(Technical_Track_Governance[4]);
        break;
      case APP_PARAMS.buildingBlocks.dataServicesAndOfferingDescriptions:
        setData(Technical_Track_Governance[5]);
        break;
      case APP_PARAMS.buildingBlocks.publicationAndDiscovery:
        setData(Technical_Track_Governance[6]);
        break;
      case APP_PARAMS.buildingBlocks.marketplacesAndUsageAccounting:
        setData(Technical_Track_Governance[7]);
        break;
      case APP_PARAMS.buildingBlocks.dataSpacesProtocolBuildingBlock:
        setData(Technical_Track_Governance[8]);
        break;
      case APP_PARAMS.buildingBlocks.decentralizedAITraining:
        setData(Technical_Track_Governance[9]);
        break;
      case APP_PARAMS.buildingBlocks.PDIConsent:
        setData(Technical_Track_Governance[10]);
        break;
      case APP_PARAMS.buildingBlocks.PDIIdentify:
        setData(Technical_Track_Governance[11]);
        break;
      case APP_PARAMS.buildingBlocks.PDICatalogue:
        setData(Technical_Track_Governance[12]);
        break;
      case APP_PARAMS.buildingBlocks.PDIDistributedDataVisualisation:
        setData(Technical_Track_Governance[13]);
        break;

      default:
        break;
    }
  }, [bbs]);

  return { data };
};
