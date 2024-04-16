import {useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    // console.log('private',location);

    if(loading){
        return <div className="text-center my-52">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to= "/login"></Navigate>
    );
};

export default PrivateRoute;