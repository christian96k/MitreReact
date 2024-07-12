/* eslint-disable react-hooks/exhaustive-deps */
import "./Hub.scss";
import Loader from "../../shared/components/loader/Loader";
import useUser from "../../custom-hooks/useUser";
import { CardAction, CardIcon, CardProps } from "../../shared/components/models/Card.model";
import Card from "../../shared/components/card/Card";
import { useEffect, useState } from "react";
import { useHubFacade } from "./store/Hub.facade";
import { HackerType } from "../../shared/constants/groupHackers.model";
import { ExtendedMitreAttackInfo } from "./models/Hub.model";



const cardsMock: CardProps[] = [
  {
    header:{
      label: 'Card 1',
      value: 'Card value placehodler text',
      class: 'string',
    },
    footer:[
      {
        icon: CardIcon.info,
        actionType: CardAction.INFO,
        action: (cardAction:CardAction) => onCardAction(cardAction)
      },
      {
        icon: CardIcon.settings,
        actionType: CardAction.SETTINGS,
        action: (cardAction:CardAction) => onCardAction(cardAction)
      },
    ]
  }
]

const onCardAction = (cardAction:CardAction) =>{
  console.log("card_action:::", cardAction)
}

function Hub() {
  const { user, onLogout} = useUser();
  const [mitreData, setMitreData] = useState<ExtendedMitreAttackInfo[] | null>(null);
  const hubFacade = useHubFacade();


  useEffect(()=>{
    hubFacade.startGetMitreData(HackerType.APT28);
    setMitreData([])
  },[])


    return (
      <>
        <main className="hub-deas dashboard-padding">
          { user ? <img loading="lazy" src={user.picture} /> : <Loader/>}
          <h4 className="text-center">{'Hub deas demo'} </h4>
          <button className="btn btn-secondary" onClick={() => onLogout()}>
          {'Log Out'}
          </button>

          <section className="my-4">
            <pre>
              <code>
                {JSON.stringify(mitreData)}
              </code>
            </pre>

          </section>

          <section className="hub-deas__cards my-4">

            {cardsMock.length ? 
              cardsMock.map((card, index)=>
                <Card key={index} {...card}/>
              )
              : null
            }
          </section>

        </main>
      </>
    )
  }
  
  export default Hub