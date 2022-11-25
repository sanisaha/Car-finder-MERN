import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import DashBoardDetails from '../DashBoardDetails/DashBoardDetails';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';

const DashBoard = () => {
    const [bookings, setBookings] = useState([]);
    const { user, setUser } = useState(null);
    const handleMyOrders = () => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
            .catch(e => console.error(e))

    }
    return (
        <div className='flex justify-between'>
            <div>
                <DashBoardMenu
                    handleMyOrders={handleMyOrders}
                ></DashBoardMenu>
            </div>
            <div className='flex-1'>
                <DashBoardDetails
                    bookings={bookings}
                ></DashBoardDetails>
            </div>
        </div>
    );
};

export default DashBoard;