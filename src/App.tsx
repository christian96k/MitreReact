import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Providers } from './providers/auth0.providers';


const providerConfig = {
  domain: auth0Providers.auth0.domain,
  clientId: auth0Providers.auth0.clientId,
  authorizationParams: {
    redirect_uri: `${import.meta.env.VITE_DEPLOY_URL}/${auth0Providers.auth0.redirect_uri}`
  },
};

function App() {
  return (
    <>
    <Auth0Provider  {...providerConfig}>
      <RouterProvider router={router} />
    </Auth0Provider>
    </>
  )
}

export default App
