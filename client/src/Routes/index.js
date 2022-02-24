import React from "react";

// Home template
const Home = React.lazy(() => import("../templates/HomeTemplate/Home"));

// Auth template
const SignIn = React.lazy(() => import("../templates/AuthTemplate/SignIn"));
const SignUp = React.lazy(() => import("../templates/AuthTemplate/SignUp"));
const VerifyAccount = React.lazy(() =>
  import("../templates/AuthTemplate/VerifyAccount")
);

// Admin template
const AdminTemplate = React.lazy(() => import("../templates/AdminTemplate"));

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
  {
    exact: false,
    path: "/verify-account",
    element: <VerifyAccount />,
  },
];

const routeAdmin = [
  {
    exact: false,
    path: "/admin",
    element: <AdminTemplate />,
  },
];

export { routeHome, routeAuth, routeAdmin };
