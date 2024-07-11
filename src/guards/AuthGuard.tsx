
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../routes/routes.model";
import useUser from "../custom-hooks/useUser";
import Loader from "../shared/components/loader/Loader";
import { User } from "@auth0/auth0-react";
import { AuthGuardProps } from "./models/AuthGuars.model";


const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { fetchUserToken, fetchUserData } = useUser();
  const [ token, setToken] = useState<string>('');
  const [ loading, setLoading] = useState<boolean>(true);
  const [ userInfo, setUserInfo] = useState<undefined| User>(undefined);


  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const jwt = await fetchUserToken();
        if (jwt) {
          localStorage.setItem('token', jwt);
          setToken(jwt);
          
          const { user, isAuthenticated } = fetchUserData();
          if (isAuthenticated && user) {
            setUserInfo(user);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
          }
        }
      } catch (error) {
        console.error('Authentication failed', error);
      } finally {
        setLoading(false);
      }
    };

    authenticateUser();
  }, [fetchUserToken, fetchUserData]);

  if (loading) {
    return (
        <section className="auth-guard-loading vh-100">
            <Loader loaderTitle='Auth0 loading...'/>
        </section>
    )
  }

  return token.length ? (
    children
  ) : (
    <Navigate to={ROUTES.LOGIN_SYSTEM} replace />
  );
};

export default AuthGuard;
