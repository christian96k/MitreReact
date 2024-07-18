/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { HackersMock, HackerType } from "../../../shared/constants/groupHackers.model";
import "./Mitre-attack.scss";
import { MitreAttackConfig, MitreAttackProps } from "./model/Mitre.attack.model";
import Cluster from "../../../shared/components/cluster/Cluster";
import Card from "../../../shared/components/card/Card";
import { ExtendedMitreAttackInfo } from "../models/Hub.model";
import useMitreConfig from "../../../custom-hooks/userMitreConfig";
import { ClusterConfig } from "../../../shared/components/models/Cluster.model";

const filter = (event:ChangeEvent<HTMLSelectElement>) => {
    console.log("filter :::",event);
}

const HACK_TYPE = HackerType;


const MitreAttack: React.FC<MitreAttackProps> = ({ mitreData }) => {

    const [ mitreAttackConfig, setMitreAttackConfig ] = useState<MitreAttackConfig | null>(null);
    const { createMitreCluster, createMitreTechniques } = useMitreConfig();

    useEffect(()=>{
        if(mitreData)
         setMitreAttackConfig(createMitreConfig(mitreData))
    }, [mitreData]);

    const selectMitreCluster = useCallback((cluster: ClusterConfig) => {
        console.log('mitreConfig', mitreAttackConfig);
        setMitreAttackConfig((prevConfig) => {
            if (!prevConfig) return null;
            return {
                ...prevConfig,
                cards: cluster.techniques ? cluster.techniques.map((technique) => createMitreTechniques(technique)) : [],
                clusters: prevConfig.clusters.map(_cluster => ({ ..._cluster, active: _cluster.id === cluster.id }))
            };
        });
    }, [createMitreTechniques]);
    

    const createMitreConfig = (mitreData: ExtendedMitreAttackInfo[]) :MitreAttackConfig =>{
        return {
          hackerType: HackerType.APT28,
          attackHacker: HackersMock,
          mitreFilters: false,
          clusters:mitreData.map(
            (mitreAttackInfo: ExtendedMitreAttackInfo) => createMitreCluster(mitreAttackInfo,selectMitreCluster)
          ),
          cards:[],
        }
    }

    
    return (
      <>
        { mitreAttackConfig && 
            <section className="mitre-attack border">

                {/* FILTERS */}
                {mitreAttackConfig.mitreFilters && (
                    <section className="mitre-attack__filters d-flex justify-content-end mb-2">
                    <select
                        className="form-select border-0 w-50  caption"
                        onChange={(event) => filter(event)}
                    >
                        <option selected value="{{hackerType.APT28}}">
                        {HACK_TYPE.APT28}
                        </option>
                        <option value="{{HACK_TYPE.APT29}}">{HACK_TYPE.APT29}</option>
                        <option value="{{HACK_TYPE.GENERIC}}">
                        {HACK_TYPE.GENERIC}
                        </option>
                    </select>
                    </section>
                )}
                
                {/* HEADER */}
                {mitreAttackConfig.attackHacker[mitreAttackConfig.hackerType].title && (
                    <section className="mitre-attack__header row justify-content-between align-items-center">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <h4 className="d-inline-block">
                                { mitreAttackConfig.attackHacker[mitreAttackConfig.hackerType].title }
                            </h4>

                            <p className="d-inline-block ms-4 subtitle fw-300">
                                {`Indirizzo IP: `}
                                <b className="fw-500">
                                { `${mitreAttackConfig.attackHacker[mitreAttackConfig.hackerType].ipAdresss}`}
                                </b>
                            </p>
                        </div>

                        <div className="col-12 col-md-4 d-flex justify-content-end">
                        {/* <app-chip [chipConfig]="chipConfig"></app-chip> */}
                        </div>
                    </section>
                )}


                {/* FOOTER*/}

                { mitreAttackConfig.clusters && 
                <section className="mitre-attack__footer row justify-content-between">

                    {/* PHASES */}
                    <div className="mitre-attack__footer__phase col-12 col-md-6">
                        <p className="paragraph fw-500 py-3 d-inline-block">
                            {'Fasi di Attaco'}
                        </p>
                        <span className="caption ps-2"> {'Seleziona una fase per visualizzare le tecniche:'}</span>

                        { mitreAttackConfig.clusters.length > 0 && 
                            <div className="mitre-attack__footer__phase__clusters p-3">
                                { mitreAttackConfig.clusters.map((cluster, index) => 
                                    <Cluster key={`${cluster.id}_${index}`} {...cluster}></Cluster>
                                )}

                            </div>
                        }
            
                    </div>
        
                    {/* TECHNIQUES */}
                    <div className="mitre-attack__footer__techniques col-12 col-md-6">
                        <p className="paragraph fw-500 py-3">
                            {'Tecniche di Attacco'}
                        </p>

                        {  mitreAttackConfig.cards && 

                            <div className="mitre-attack__footer__techniques__cards p-3" >
                                { mitreAttackConfig.cards.map((card, index) => 
                                    <Card key={`${card.header.value}-${index}`} {...card}/>
                                )}
                            </div>
                        
                        }
                    

                
                    </div>
            
            
                </section>
                
                }


            </section>
        }
      </>
    );
}

export default MitreAttack;