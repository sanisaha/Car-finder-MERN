import React from 'react';

const MyOrders = ({ bookings }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>price</th>
                        <th>location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{booking.carName}</td>
                                <td>{booking.price}</td>
                                <td>{booking.meetingPlace}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;