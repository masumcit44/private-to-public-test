import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if(loading){
        return <progress className="progress w-56 text-center"></progress>
    }
    if(user){
        return children
    }
     return <Navigate to="/login" state={{from : location }} replace ></Navigate>
};

export default PrivateRoute;