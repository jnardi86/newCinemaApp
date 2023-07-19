import React from 'react'
import { useAuth } from '../auth/hooks/useAuth'
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {

    const { isLoggedIn } = useAuth();

    if (isLoggedIn) return <Navigate to="/"/> ;

    return children;

}

export default PublicRoutes