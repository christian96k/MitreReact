/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react";
import "./Hub.scss";
import { useEffect, useMemo } from "react";
import Loader from "../../components/loader/Loader";


function Hub() {
  const { logout } = useAuth0();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const memoizedGetAccessTokenSilently = useMemo(() => getAccessTokenSilently, [getAccessTokenSilently]);
 
  // user log out 
  const onHubLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    logout({ logoutParams: { returnTo: window.location.origin} });
  }

  // user token
  const fetchUserToken = async () => {
    return await  memoizedGetAccessTokenSilently();
  };

  // user data
  const fetchUserData = async () =>{
    return { user, isAuthenticated }
  }

  // user info and token
  useEffect(() => {
    fetchUserToken().then((jwt)=> {
      localStorage.setItem('token', jwt)
    });
    fetchUserData().then(({user, isAuthenticated}) => {
      if(isAuthenticated)
        localStorage.setItem('userInfo', JSON.stringify(user));
    });
    return () => {};
  }, []);


    return (
      <>
        <main className="hub-deas dashboard-padding">
          { user ? <img loading="lazy" src={user.picture} />:<Loader/>}
          <h4 className="text-center">{'Hub deas demo'} </h4>
          <button className="btn btn-secondary" onClick={() => onHubLogout()}>
          {'Log Out'}
          </button>
        </main>
      </>
    )
  }
  
  export default Hub