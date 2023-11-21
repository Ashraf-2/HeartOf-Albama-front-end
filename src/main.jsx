import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '../Root';
import Home from './Pages/HomePage/Home';
import AvailableFood from './Pages/AvailableFood/AvailableFood';
import ManageFood from './Pages/ManageFood.jsx/ManageFood';
import FoodRequest from './Pages/FoodRequest/FoodRequest';
import AddFood from './Pages/AddFood/AddFood';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/SignUpPage/SignUp';
import AuthProvider from './Auth/AuthProvider';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import PrivateRoutes from './Components/PrivateRoute/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addFood",
        element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes> 
      },
      {
        path: "/manageFoods",
        element: <PrivateRoutes><ManageFood></ManageFood></PrivateRoutes>
      },
      {
        path: "/availabeFood",
        element: <AvailableFood></AvailableFood>
      },
      {
        path: "/foodRequest",
        element: <PrivateRoutes><FoodRequest></FoodRequest></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
