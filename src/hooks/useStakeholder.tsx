import { useEffect, useState } from "react";
import { ContentStakeholder, Stakeholder } from "../types";
import { STAKEHOLDER_CONTENT } from "../data/project/stakeholders/stakeholders";

type Props = {
  stakeholder: Stakeholder;
};

export const useStakeholder = ({ stakeholder }: Props) => {
  const [data, setData] = useState<ContentStakeholder>();

  useEffect(() => {
    switch (stakeholder) {
      case "Individuals":
        setData(STAKEHOLDER_CONTENT[0]);
        break;
      case "University & Training providers":
        setData(STAKEHOLDER_CONTENT[1]);
        break;
      case "Employers":
        setData(STAKEHOLDER_CONTENT[2]);
        break;
      case "Educational Institutions":
        setData(STAKEHOLDER_CONTENT[3]);
        break;
      case "Governments & Pilocy Markers":
        setData(STAKEHOLDER_CONTENT[4]);
        break;
      case "Employment Agencies":
        setData(STAKEHOLDER_CONTENT[5]);
        break;
      case "Edtechs & AI Providers":
        setData(STAKEHOLDER_CONTENT[6]);
        break;
      case "Infrastructure providers":
        setData(STAKEHOLDER_CONTENT[7]);
        break;
      case "Orchestrator":
        setData(STAKEHOLDER_CONTENT[8]);
        break;
      case "Organisational & employers":
        setData(STAKEHOLDER_CONTENT[9]);
        break;
      case "Learning & development units":
        setData(STAKEHOLDER_CONTENT[10]);
        break;
      case "Educational & Training providers":
        setData(STAKEHOLDER_CONTENT[11]);
        break;
      case "Public Institutions":
        setData(STAKEHOLDER_CONTENT[12]);
        break;
      case "Individuals and employees":
        setData(STAKEHOLDER_CONTENT[13]);
        break;
      case "Observatories":
        setData(STAKEHOLDER_CONTENT[14]);
        break;
      case "Infrastructure service":
        setData(STAKEHOLDER_CONTENT[15]);
        break;
      case "Orchestrator: SkillsFast":
        setData(STAKEHOLDER_CONTENT[16]);
        break;
      case "Service Providers: SkillProfiX, SDAI, SkillFast":
        setData(STAKEHOLDER_CONTENT[17]);
        break;
      case "Data Providers (Personal): SkillProfiX, DigiFutUX, UXlife, UXschool":
        setData(STAKEHOLDER_CONTENT[18]);
        break;
      case "Data Providers (Organisational): Jobo, JobRightNow and Jobijob":
        setData(STAKEHOLDER_CONTENT[19]);
        break;
      case "Individuals: Matilda, Francesco, Anita":
        setData(STAKEHOLDER_CONTENT[20]);
        break;
      case "Organisations: DigiFutUX, IntelliAITraining":
        setData(STAKEHOLDER_CONTENT[21]);
        break;
      case "Governance Authority (association): Fire-X":
        setData(STAKEHOLDER_CONTENT[22]);
        break;
      case "Governance Authority (association): Fire X":
        setData(STAKEHOLDER_CONTENT[22]);
        break;
      case "Data Intermediary: InfraTrust":
        setData(STAKEHOLDER_CONTENT[23]);
        break;

      default:
        break;
    }
  }, [stakeholder]);

  return { data };
};
