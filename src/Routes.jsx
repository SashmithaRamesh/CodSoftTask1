import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Welcome from "pages/Welcome";
import Login from "pages/Login";
import Signup from "pages/Signup";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Welcome/> },
    { path: "*", element: <NotFound /> },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
