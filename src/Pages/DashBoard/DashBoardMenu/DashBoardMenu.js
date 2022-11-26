import { isAdmin } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaList, FaShoppingCart, FaUserFriends } from 'react-icons/fa';

const DashBoardMenu = ({ handleMyOrders }) => {
    const userMenu = <>
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
    const sellerMenu = <>
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
    </>
    const buyerMenu = <>
        <li>
            <button onClick={handleMyOrders}>
                <FaShoppingCart />
                My orders
            </button>
        </li>
    </>
    return (
        <div>

            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                {buyerMenu}
            </ul>
        </div>
    );
};

export default DashBoardMenu;