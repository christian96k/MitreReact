import "./LoginSystem.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Loader from "../../components/loader/Loader";



function LoginSystemComponent(): JSX.Element {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    console.log('running login:::')
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <main className="user-login-system row justify-content-center align-items-center vh-100 container-fluid">
        <section className="text-center col-12">
            <Loader/>
        </section>
    </main>
  );
}

function LoginSystem(): JSX.Element {
  return (
    <LoginSystemComponent />
  );
}

export default LoginSystem;
