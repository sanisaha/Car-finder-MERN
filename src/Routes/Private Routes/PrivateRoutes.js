import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const user = { name: 'akkas ali' };

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    } else {
        return children;
    }
};

export default PrivateRoutes;