import React from "react";
import Signin from "./pages/signin";
import Login from "./pages/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Protected from "./components/protected";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Protected Component={Home} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
