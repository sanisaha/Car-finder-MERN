import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';
import useBuyer from '../../../Hooks/useBuyer';
import useSeller from '../../../Hooks/useSeller';
import MyOrders from '../MyOrders/MyOrders';
import MyUsers from '../MyUsers/MyUsers';
import Myproducts from '../Sellers/MyProducts/MyProducts';

const MyDashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    if (isAdminLoading) {
        return <h2>Loading....</h2>
    }
    if (isBuyerLoading) {
        return <h2>Loading....</h2>
    }
    if (isSellerLoading) {
        return <h2>Loading....</h2>
    }
    return (
        <div>
            {
                isBuyer && <>
                    <MyOrders></MyOrders>
                </>
            }
            {
                isSeller && <>
                    <Myproducts></Myproducts>
                </>
            }
            {
                isAdmin && <>
                    <MyUsers></MyUsers>
                </>
            }
        </div>
    );
};

export default MyDashboard;