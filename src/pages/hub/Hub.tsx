/* eslint-disable react-hooks/exhaustive-deps */
import "./Hub.scss";
import Loader from "../../shared/components/loader/Loader";
import useUser from "../../custom-hooks/useUser";
import { useEffect } from "react";
import { useHubFacade } from "./store/Hub.facade";
import {  HackerType } from "../../shared/constants/groupHackers.model";
import MitreAttack from "./mitre-attack/Mitre-attack";





function Hub() {
  const { user, onLogout} = useUser();
  const { mitreData$, startGetMitreData } = useHubFacade();
  
  useEffect(() => {
    startGetMitreData(HackerType.APT28); 
  }, []);




 
  

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
            <MitreAttack  mitreData={mitreData$}  />

          </section>
          :
          <Loader/>
        }

      </main>
    </>
  )
}
  
  export default Hub