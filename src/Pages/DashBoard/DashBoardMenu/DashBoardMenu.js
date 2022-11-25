import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaList, FaShoppingCart, FaUserFriends } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import useBuyer from '../../../Hooks/useBuyer';
import useSeller from '../../../Hooks/useSeller';

const DashBoardMenu = ({ handleMyOrders }) => {
    const { user } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user.email);
    const [isSeller] = useSeller(user.email);
    const userMenu = <>
        <li>
            <button onClick={handleMyOrders}>
                <FaShoppingCart />
                My orders
            </button>
        </li>
        <li>
            <button>
                <FaEdit />
                Add a Product
            </button>
        </li>
        <li>
            <button>
                <FaList />
                My Products
            </button>
        </li>
        <li>
            <button>
                <FaUserFriends />
                My buyers
            </button>
        </li>
        <li>
            <button>
                <FaUserFriends />
                My sellers
            </button>
        </li>
    </>
    return (
        <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            {isSeller &&
                <><h2>hello</h2></>
            }
        </ul>
    );
};

export default DashBoardMenu;