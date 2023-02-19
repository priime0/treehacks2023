import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ViewNonprofitsPage from "./ViewNonprofitsPage.js";
<<<<<<< HEAD
import ViewProfilePage from "./ViewProfilePage.js";
=======
import About from "./About.js";
>>>>>>> 06a476600e1a418b01769f7af704fd459a0c4386
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

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
<<<<<<< HEAD
    path: "/profile",
    element: <ViewProfilePage />,
  },
=======
    path: "/about",
    element: <About />
  }
>>>>>>> 06a476600e1a418b01769f7af704fd459a0c4386
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
