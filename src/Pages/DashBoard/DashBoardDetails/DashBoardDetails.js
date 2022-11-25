import React from 'react';
import MyOrders from '../MyOrders/MyOrders';

const DashBoardDetails = ({ bookings }) => {
    return (
        <div>
            <div>
                <MyOrders
                    bookings={bookings}
                ></MyOrders>
            </div>
        </div>
    );
};

export default DashBoardDetails;