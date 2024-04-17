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
import Error from "../layout/components/Error";
import PrivateProperties from "../layout/components/PrivateProperties";
import UpdateProf from "../layout/components/UpdateProf";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error/>,
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
        },
        {
          path: '/properties',
          element: <PrivateRoute><PrivateProperties></PrivateProperties></PrivateRoute>
        },
        {
          path: '/updateProfile',
          element: <PrivateRoute> <UpdateProf></UpdateProf> </PrivateRoute>
        }
    ]
    },
    
  ]);

  export default router;