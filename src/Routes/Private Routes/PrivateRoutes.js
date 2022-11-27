import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner></Spinner>;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    } else {
        return children;
    }
};

export default PrivateRoutes;