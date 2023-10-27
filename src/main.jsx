import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Layout/App.jsx";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Categories from "./components/Categories/Categories";
import AuthProvider from "./provider/AuthProvider";
import UserProfile from "./components/Profile/UserProfile";
import PrivateRoute from "./route/PrivateRoute";
import Apple from "./components/Phones/Apple";
import Admin from "./Pages/Admin";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "categories",
        element: <Categories></Categories>,
      },
      {
        path: 'admin',
        element: <Admin></Admin>
      },
      {
        path: 'userProfile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: 'apple',
        element: <Apple></Apple>
      },
      {
        path: 'productdetails',
        element: <ProductDetails></ProductDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
