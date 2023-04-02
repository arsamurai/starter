import React from 'react';
//import { Event, Login, Registration } from "./pages";

export interface IRoute {
  name: string;
  path: string;
  element: React.ReactNode;
}

export enum RouteNames {
  LOGIN = '/login',
  REGISTRATION = '/registration',
  EVENT = '/'
}

const publicRoutes: IRoute[] = [
  {
    name: 'login',
    path: RouteNames.LOGIN,
    element: <div></div>
  },
  {
    name: 'registration',
    path: RouteNames.REGISTRATION,
    element: <div></div>
  }
];

const privateRoutes: IRoute[] = [
  {
    name: 'event',
    path: RouteNames.EVENT,
    element: <div></div>
  }
];

export const routes = (role: string) => {
  switch (role) {
    case 'Admin':
      return privateRoutes;
    case 'Manager':
      return privateRoutes;
  }
};
