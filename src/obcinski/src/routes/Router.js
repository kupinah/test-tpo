import { lazy } from "react";
import { Navigate } from "react-router-dom";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Forms = lazy(() => import("../views/ui/Forms"));
const MyProfile = lazy(() => import("../views/ui/MyProfile"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/registracija", exact: true, element: <Forms /> },
      { path: "/myprofile", exact: true, element: <MyProfile /> },
    ],
  },
];

export default ThemeRoutes;
