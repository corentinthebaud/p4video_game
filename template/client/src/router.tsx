import { createBrowserRouter } from "react-router";
import "./global.css";
import Home from "./pages/Home/Home";
import App from "./App";
import SpaceClient from "./pages/SpaceClient/SpaceClient";
import RegistrationGame from "./pages/RegistrationGame/ResgistrationGame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/space-client",
        element: <SpaceClient />,
      },
      {
        path: "/registration-game",
        element: <RegistrationGame />,
      },
    ],
  },
]);

export default router;
