// useMitreConfig.ts

import { ExtendedMitreAttackInfo } from "../pages/hub/models/Hub.model";
import { CardAction, CardConfig, CardIcon } from "../shared/components/models/Card.model";
import { ClusterConfig } from "../shared/components/models/Cluster.model";
import { ModalConfig } from "../shared/components/models/Modal.model";

const useMitreConfig = () => {

  const createMitreCluster = (mitreAttackInfo: ExtendedMitreAttackInfo, selectMitreCluster: (clusrer: ClusterConfig) => void): ClusterConfig => {
    return {
      name: mitreAttackInfo.name,
      id: mitreAttackInfo.id,
      active: false,
      select: selectMitreCluster,
      techniques: mitreAttackInfo.techniques,
      uses: mitreAttackInfo.uses,
      externalID: mitreAttackInfo.external_references[0].external_id,
      opaque: false,
      size: 7
    };
  };

  const createMitreTechniques = (mitreAttackInfo: ExtendedMitreAttackInfo): CardConfig => {
    return {
      header: {
        label: mitreAttackInfo.name,
        value: mitreAttackInfo.external_references[0].external_id,
      },
      footer: [
        {
          icon: CardIcon.info,
          actionType: CardAction.INFO,
          action: ()=> null,
        },
        {
          icon: CardIcon.settings,
          actionType: CardAction.SETTINGS,
          action: ()=> null,
        }
      ]
    };
  };

  const openMitreModal = (actionType: CardAction, mitreAttackInfo: ExtendedMitreAttackInfo): ModalConfig => {
    let modalConfig: ModalConfig;
    switch (actionType) {
      case CardAction.INFO:
        modalConfig = {
          title: 'Informazioni tecniche',
          content: [
            { label: 'Name', value: mitreAttackInfo.name },
            { label: 'ID', value: mitreAttackInfo.id },
            { label: 'External ID', value: mitreAttackInfo.external_references[0].external_id },
            { label: 'Descrizione', value: mitreAttackInfo.description },
            { label: 'Uses Example', value: mitreAttackInfo?.uses ? mitreAttackInfo?.uses[0]?.description : 'N/A' }
          ],
          cards: mitreAttackInfo?.subtechniques ? mitreAttackInfo.subtechniques.map((subtechnique:ExtendedMitreAttackInfo) => createMitreTechniques(subtechnique)) : []
        };
        break;
      default:
        modalConfig = { title: '', content: [], cards: [] };
    }
    return modalConfig;
  };

  return { createMitreCluster, createMitreTechniques, openMitreModal };
};

export default useMitreConfig;
