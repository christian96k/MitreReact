import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginSystem from "../pages/login-system/LoginSystem";
import { ROUTES } from "./routes.model";
import Hub from "../pages/hub/Hub";
import AuthGuard from "../guards/AuthGuard";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Navigate to={ROUTES.HUB} replace />
  },

  {
    path: ROUTES.HUB,
    element: (
      <AuthGuard>
        <Hub />
      </AuthGuard>
    )
  },

  {
    path: ROUTES.LOGIN_SYSTEM,
    element: <LoginSystem/>
  },
  
]);

