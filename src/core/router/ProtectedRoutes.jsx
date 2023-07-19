import React from 'react'
import { useAuth } from '../auth/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {

    const { isLoggedIn } = useAuth();

    if (isLoggedIn) return children;

    return <Navigate to="/login"/>

}

export default ProtectedRoutes