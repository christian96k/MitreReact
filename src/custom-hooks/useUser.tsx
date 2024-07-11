import { useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const useUser = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  
  // user log out 
  const onLogout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    logout({ logoutParams: {returnTo: window.location.origin} });
  }, [logout]);

  // user token
  const fetchUserToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      return token;
    } catch (error) {
      console.error("Error fetching token", error);
    }
  }, [getAccessTokenSilently]);

  // user data
  const fetchUserData = useCallback(() => {
    return { user, isAuthenticated };
  }, [user, isAuthenticated]);

  return {
    onLogout, fetchUserData, fetchUserToken, user
  };
};

export default useUser;
