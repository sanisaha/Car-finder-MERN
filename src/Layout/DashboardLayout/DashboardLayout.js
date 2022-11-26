import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import Header from '../../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    if (isAdminLoading) {
        return <h2>Loading....</h2>
    }
    console.log(isAdmin);
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
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div >
        </div>
    );
};

export default DashboardLayout;