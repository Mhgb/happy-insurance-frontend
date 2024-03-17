import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/Error/ErrorPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Feedback from "./Components/Feedback/Feedback";
import Login from "./Components/Login/Login";
import CustomerRegistration from "./Components/CustomerRegistration/CustomerRegistration";
import HomePage from "./Components/HomePage/HomePage";
import PolicySelection from "./Components/PolicySelection/PolicySelection";
import PolicyView from "./Components/PolicyView/PolicyView";
import Nominee from "./Components/Nominee/Nominee";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/happy-insurance",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "sign-in",
        element: <Login />,
      },
      {
        path: "create-account",
        element: <CustomerRegistration />,
      },
      {
        path: "home",
        element: <HomePage />,
        children: [
          {
            path: "select-policy",
            element: <PolicySelection />,
          },
          {
            path: "view-policies",
            element: <PolicyView />,
          },
          {
            path: "edit-nominee",
            element: <Nominee />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
