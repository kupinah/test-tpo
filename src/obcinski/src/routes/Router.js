import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const About = lazy(() => import("../views/About.js"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Forms = lazy(() => import("../views/ui/Forms"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/cards" /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/registracija", exact: true, element: <Forms /> },
    ],
  },
];

export default ThemeRoutes;
