import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ViewNonprofitsPage from "./ViewNonprofitsPage.js";
import ViewProfilePage from "./ViewProfilePage.js";
import About from "./About.js";
import SigninPage from './signInPage.js'
import SignupPage from './signUpPage.js'
import Donate from "./Donate";
import EditProfilePage from './EditProfilePage.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Leaderboard from './leaderboardPage.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/view",
    element: <ViewNonprofitsPage />,
  },
  {
    path: "/profile",
    element: <ViewProfilePage />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <SigninPage />
  },
  {
    path: "/register",
    element: <SignupPage />
  },
  {
    path: "/editProfile",
    element: <EditProfilePage />
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />
  },
  {
    path: "/donate/:uuid",
    element: <Donate/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
