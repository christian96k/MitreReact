import { CardConfig } from "../../../../shared/components/models/Card.model";
import { ClusterConfig } from "../../../../shared/components/models/Cluster.model";
import { HackersMockType, HackerType } from "../../../../shared/constants/groupHackers.model";
import { ExtendedMitreAttackInfo } from "../../models/Hub.model";

export interface MitreAttackConfig {
  mitreDataFiltered: ExtendedMitreAttackInfo[]
  hackerType:HackerType;
  mitreFilters: boolean;
  attackHacker: HackersMockType;
  clusters: ClusterConfig[];
  cards: CardConfig[];
}
  
