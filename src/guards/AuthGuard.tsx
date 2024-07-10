import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes.model';

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

interface AuthGuardProps {
  children: JSX.Element;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to={ROUTES.LOGIN_SYSTEM} replace />;
};

export default AuthGuard;
