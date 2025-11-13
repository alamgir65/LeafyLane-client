import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
import Loading from '../components/Loading';

const PrivateRouter = ({children}) => {
    const {user,loading,setLoading} = use(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>;
    }
    if(!user){
        return <Navigate to={'/auth/login'} state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateRouter;