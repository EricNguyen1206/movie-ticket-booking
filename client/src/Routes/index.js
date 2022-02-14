import React from "react";

const Home = React.lazy(() => import("../templates/HomeTemplate/Home"));
const SignIn = React.lazy(() => import("../templates/AuthTemplate/SignIn"));
const SignUp = React.lazy(() => import("../templates/AuthTemplate/SignUp"));
const routeHome = [
  {
    exact: true,
    path: "/",
    element: <Home />,
  },
];

const routeAuth = [
  {
    exact: false,
    path: "/signin",
    element: <SignIn />,
  },
  {
    exact: false,
    path: "/signup",
    element: <SignUp />,
  },
];

export { routeHome, routeAuth };
