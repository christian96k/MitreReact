/* eslint-disable react-hooks/exhaustive-deps */
import "./Hub.scss";
import Loader from "../../shared/components/loader/Loader";
import useUser from "../../custom-hooks/useUser";


function Hub() {
  const { user, onLogout} = useUser()

    return (
      <>
        <main className="hub-deas dashboard-padding">
          { user ? <img loading="lazy" src={user.picture} /> : <Loader/>}
          <h4 className="text-center">{'Hub deas demo'} </h4>
          <button className="btn btn-secondary" onClick={() => onLogout()}>
          {'Log Out'}
          </button>
        </main>
      </>
    )
  }
  
  export default Hub