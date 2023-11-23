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
import SingleFoodDetail from './Pages/SingleFoodDetail/SingleFoodDetail';


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
        element: <PrivateRoutes><ManageFood></ManageFood></PrivateRoutes>,
        loader: ()=> fetch("http://localhost:5000/availableFoods")

      },
      {
        path: "/availabeFood",
        element: <AvailableFood></AvailableFood>,
        loader: ()=> fetch("http://localhost:5000/availableFoods")

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

      },
      {
        path: "/foodDetail/:id",
        element: <PrivateRoutes><SingleFoodDetail></SingleFoodDetail></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/availableFoods/${params.id}`)
        

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
