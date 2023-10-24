import { PropsWithChildren } from "react";
import Styles from "./DataSpaceIntermediary.module.scss";
import { WrapperSchemaButtons } from "../../../../molecules/Wrappers/WrapperSchemaButtons/WrapperSchemaButtons";
import { APP_PARAMS } from "../../../../../utils/appParams";
import { Button } from "../../../../atoms/Buttons/Button/Button";
import { APP_LINKS } from "../../../../../utils/appLinks";
import { useNavigate } from "react-router-dom";

type DataSpaceIntermediaryProps = {
  className?: string;
};

export const DataSpaceIntermediary = ({
  className = "",
}: PropsWithChildren<DataSpaceIntermediaryProps>) => {
  const navigate = useNavigate();

  const handleClick = (params: string) => {
    navigate(APP_LINKS.buildingBlocks + `/${params}`);
  };
  return (
    <div className={`${Styles.DataSpaceIntermediary} ${className}`}>
      <p className={Styles.title}>Data Space Intermediary</p>

      <WrapperSchemaButtons
        title="Trust"
        onClick={() => {
          handleClick(APP_PARAMS.buildingBlocks.trust);
        }}
        style={{ cursor: "pointer" }}
      >
        <Button variantBgColor="lightPrimary">Trustworthy AI assessment</Button>
      </WrapperSchemaButtons>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 100"
        className={Styles.arrow}
        style={{ transform: "rotate(90deg)" }}
      >
        <defs>
          <marker
            id="startarrow"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="10 0, 10 7, 0 3.5" fill="#000" />
          </marker>
          <marker
            id="endarrow"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
          </marker>
        </defs>
        <line
          x1="100"
          y1="50"
          x2="250"
          y2="50"
          stroke="#000"
          strokeWidth="12"
          markerEnd="url(#endarrow)"
          markerStart="url(#startarrow)"
        />
      </svg>

      <Button
        onClick={() => {
          handleClick(APP_PARAMS.buildingBlocks.identifyManagement);
        }}
      >
        Identity Management
      </Button>

      <WrapperSchemaButtons
        title="Marketplace & Usage Accounting"
        onClick={() => {
          handleClick(APP_PARAMS.buildingBlocks.marketplacesAndUsageAccounting);
        }}
        style={{ cursor: "pointer" }}
      >
        <Button variantBgColor="lightPrimary">Contract / Order</Button>
        <Button variantBgColor="lightPrimary">Marketplace</Button>
        <Button variantBgColor="lightPrimary">Billing</Button>
        <Button variantBgColor="lightPrimary">Aftersales</Button>
      </WrapperSchemaButtons>

      <WrapperSchemaButtons
        title="Publication & Discovery"
        onClick={() => {
          handleClick(APP_PARAMS.buildingBlocks.publicationAndDiscovery);
        }}
        style={{ cursor: "pointer" }}
      >
        <Button variantBgColor="lightPrimary">
          Publication & Discovery Services
        </Button>
      </WrapperSchemaButtons>

      <WrapperSchemaButtons
        title="Access & Usage Control"
        onClick={() => {
          handleClick(
            APP_PARAMS.buildingBlocks.accessAndUsagePoliciesAndControl
          );
        }}
        style={{ cursor: "pointer" }}
      >
        <Button variantBgColor="lightPrimary">Personal Data Access Logs</Button>
      </WrapperSchemaButtons>

      <WrapperSchemaButtons
        display="grid"
        title="Data Models & Formats"
        onClick={() => {
          handleClick("data-models-and-format");
        }}
        style={{ marginTop: 5 }}
      >
        <Button variantBgColor="lightPrimary">Data normalisation</Button>
        <Button variantBgColor="lightPrimary">Data format conversion</Button>
        <Button variantBgColor="lightPrimary">Language models</Button>
        <Button variantBgColor="lightPrimary">Data structure conversion</Button>
        <Button variantBgColor="lightPrimary">Data quality assurance</Button>
        <Button variantBgColor="lightPrimary">
          Tax / Ont / Learner model conversions
        </Button>
      </WrapperSchemaButtons>
    </div>
  );
};
