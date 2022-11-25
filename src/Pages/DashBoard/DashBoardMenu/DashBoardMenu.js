import React from 'react';
import { FaList, FaShoppingCart, FaUserFriends } from 'react-icons/fa';

const DashBoardMenu = ({ handleMyOrders }) => {
    return (
        <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            <li>
                <button onClick={handleMyOrders}>
                    <FaShoppingCart />
                    My orders
                </button>
            </li>
            <li>
                <button>
                    <FaList />
                    Add a Product
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

        </ul>
    );
};

export default DashBoardMenu;