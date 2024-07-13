/* eslint-disable react-hooks/exhaustive-deps */
import "./Hub.scss";
import Loader from "../../shared/components/loader/Loader";
import useUser from "../../custom-hooks/useUser";
import { useEffect, useState } from "react";
import { useHubFacade } from "./store/Hub.facade";
import { HackersMock, HackerType } from "../../shared/constants/groupHackers.model";
import MitreAttack from "./mitre-attack/Mitre-attack";
import { ExtendedMitreAttackInfo } from "./models/Hub.model";
import useMitreConfig from "../../custom-hooks/userMitreConfig";
import { ClusterConfig } from "../../shared/components/models/Cluster.model";
import { CardConfig } from "../../shared/components/models/Card.model";



// const onCardAction = (cardAction:CardAction) =>{
//   console.log("card_action:::", cardAction)
// }


function Hub() {
  const { user, onLogout} = useUser();
  const { mitreData$, startGetMitreData } = useHubFacade();
  const { createMitreCluster, createMitreTechniques } = useMitreConfig();
  const [ cardsTechnique, setCardsTechnique] = useState<CardConfig[]>([]);
  
  useEffect(() => {
    startGetMitreData(HackerType.APT28); 
  }, []);



  // const openModal = () => {
  //   console.log('todo::: open modal');
  // }

  const selectMitreCluster = (cluster: ClusterConfig) =>{
    console.log('selected cluster:::', cluster);
    if(cluster.techniques)
      setCardsTechnique(cluster.techniques.map(tecnique=>
        createMitreTechniques(tecnique)
    ))
  };
  

  return (
    <>
      <main className="hub-deas dashboard-padding">

        <section className="hub-deas__user-info">

          { user ? <img loading="lazy" src={user.picture} /> : <Loader/>}
        
          <button className="btn btn-secondary d-block-inline mx-2" onClick={() => onLogout()}>
            {'Log Out'}
          </button>
        </section>

        { mitreData$ ?
          <section className="hub-deas__mitre-attack my-4">
            <MitreAttack {
              ...{
                mitreDataFiltered: mitreData$,
                hackerType: HackerType.APT28,
                cards: cardsTechnique,
                clusters: mitreData$.map(
                  (mitreAttackInfo: ExtendedMitreAttackInfo) => createMitreCluster(mitreAttackInfo,selectMitreCluster)
                ),
                attackHacker: HackersMock,
                mitreFilters: false 
              }
            }/>

          </section>
          :
          <Loader/>
        }

      </main>
    </>
  )
}
  
  export default Hub