import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    })

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