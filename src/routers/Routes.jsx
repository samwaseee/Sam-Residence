import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../layout/components/Home";
import Properties from "../layout/components/Properties";

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
            path: '/properties',
            element: <Properties></Properties>
        }
    ]
    },
    
  ]);

  export default router;