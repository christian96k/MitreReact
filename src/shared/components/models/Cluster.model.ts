import { ExtendedMitreAttackInfo } from "../../../pages/hub/models/Hub.model";

export interface ClusterConfig {
  
    active: boolean;
    opaque: boolean;
    name: string;
    size: number;
    select: (cluster: ClusterConfig) => void;
    id: string;
    techniques?: ExtendedMitreAttackInfo[];
    uses?: ExtendedMitreAttackInfo[];
    externalID: string;
  }