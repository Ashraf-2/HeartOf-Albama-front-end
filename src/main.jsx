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
import UpdateFood from './Pages/UpdateFood/UpdateFood';
import MngFd from './Pages/MngFd/MngFd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ManageSingleFood from './Pages/MngFd/ManageSingleFood';
import ManageFoodwithReq from './Pages/ManageFood.jsx/ManageFoodwithReq';


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
        loader: () => fetch("http://localhost:5000/availableFoods")

      },
      {
        path: "/availabeFood",
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch("http://localhost:5000/availableFoods")
      },
      {
        path: "/foodRequest",
        element: <PrivateRoutes><FoodRequest></FoodRequest></PrivateRoutes>,
        loader: () => fetch("http://localhost:5000/foodRequest")
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
        loader: ({ params }) => fetch(`http://localhost:5000/availableFoods/${params.id}`)
      },
      {
        path: "/updateFood/:id",
        element: <PrivateRoutes><UpdateFood></UpdateFood></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/availableFoods/${params.id}`)
      },
      {
        path: "/mngFd",
        element: <MngFd></MngFd>
      },
      {
        path: "/manageFoods/:id",
        element: <ManageFoodwithReq></ManageFoodwithReq>,
        loader: ({ params }) => fetch(`http://localhost:5000/availableFoods/${params.id}`)

      }
    ]
  },
]);
//tanstack query provider
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
