import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../layout/components/Home";
import Properties from "../layout/components/Properties";
import EstateDetails from "../layout/components/EstateDetails";

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
          loader: ()=> fetch('Properties.json'),
          element: <EstateDetails></EstateDetails>
        }
    ]
    },
    
  ]);

  export default router;