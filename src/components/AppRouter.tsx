import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//import { useAppSelector } from "../hooks/useAppSelector";
import { privateRoutes, publicRoutes, RouteNames } from '../constants/routes';

const AppRouter: React.FC = () => {
  const role = useAppSelector((state) => state.authReducer.isAuth);

  return;
  <Routes>
    {routes(role).map((route) => (
      <Route key={route.name} path={route.path} element={route.element} />
    ))}
    <Route path="*" element={<Navigate to={'/not-found'} />} />
  </Routes>;
};

export default AppRouter;
