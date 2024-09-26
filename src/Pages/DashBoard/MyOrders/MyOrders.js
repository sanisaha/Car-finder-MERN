import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, baseURL } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`${baseURL}/bookings?email=${user?.email}`, {
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
                        <th></th>
                        <th>name</th>
                        <th>price</th>
                        <th>location</th>
                        <th>pay</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>
                                    <img className='w-8 h-8 rounded' src={booking.picture} alt="" />
                                </th>
                                <td>{booking.carName}</td>
                                <td>{booking.price}</td>
                                <td>{booking.meetingPlace}</td>
                                <td>{!booking.paid ? <><Link className='btn btn-primary btn-sm' to={`/dashboard/payment/${booking._id}`}>Pay</Link></>
                                    :
                                    <><button className='btn btn-sm btn-primary'>Paid</button></>
                                }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;