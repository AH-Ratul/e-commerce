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
import Apple, { loadApple } from "./components/Phones/Apple";
import Admin from "./Pages/Admin";
import ProductDetails, {
  loadProduct,
} from "./components/ProductDetails/ProductDetails";
import Shipping from "./components/Shipping/Shipping.jsx";

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
        path: "admin",
        element: <Admin></Admin>,
      },
      {
        path: "userProfile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
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
        path: "apple",
        element: <Apple></Apple>,
        loader: loadApple,
      },
      {
        path: "productdetails/:pid/:name",
        element: <ProductDetails></ProductDetails>,
        loader: loadProduct,
      },
      {
        path: "shipping/:pid/:name",
        element: <Shipping></Shipping>,
        loader: loadProduct
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
