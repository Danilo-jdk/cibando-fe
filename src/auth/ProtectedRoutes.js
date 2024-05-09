import React, {useContext} from "react";
import  { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "./AuthContext";

export const ProtectedRoutes = ({ children }) => {
    const { isAuth, userRole } = useContext(AuthContext);
    const location = useLocation();

    if(!isAuth || userRole !== 'admin') {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
}