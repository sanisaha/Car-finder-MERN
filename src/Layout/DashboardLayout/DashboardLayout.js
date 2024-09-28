import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import Header from '../../Pages/Shared/Header/Header';
import { FaBell, FaEdit, FaList, FaShoppingCart, FaUserFriends } from 'react-icons/fa';
import useBuyer from '../../Hooks/useBuyer';

const DashboardLayout = () => {
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
    const adminMenu = <>
        <li>
            <Link to='/dashboard/buyers'>
                <FaUserFriends />
                My buyers
            </Link>
        </li>
        <li>
            <Link to='/dashboard/sellers'>
                <FaUserFriends />
                My sellers
            </Link>
        </li>
        <li>
            <Link>
                <FaBell />
                Reported Items
            </Link>
        </li>
    </>
    const sellerMenu = <>
        <li>
            <Link to='/dashboard/myProducts'>
                <FaList />
                My Products
            </Link>
        </li>
        <li>
            <Link to='/dashboard/add'>
                <FaEdit />
                Add a Product
            </Link>
        </li>
    </>
    const buyerMenu = <>
        <li>
            <Link>
                <FaShoppingCart />
                My orders
            </Link>
        </li>
    </>
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isBuyer && <>
                                {buyerMenu}
                            </>
                        }
                        {
                            isSeller && <>
                                {sellerMenu}
                            </>
                        }
                        {
                            isAdmin && <>
                                {adminMenu}
                            </>
                        }

                    </ul>

                </div>
            </div >
        </div>
    );
};

export default DashboardLayout;