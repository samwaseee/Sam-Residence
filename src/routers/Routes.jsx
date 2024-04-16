import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../layout/components/Home";
import Properties from "../layout/components/Properties";
import EstateDetails from "../layout/components/EstateDetails";
import Login from "../authentication/Login";
import Register from "../authentication/Resister";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/',
            element: <Properties></Properties>
        },
        {
          path: '/property/:id',
          loader: ()=> fetch('/Properties.json'),
          element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
    },
    
  ]);

  export default router;