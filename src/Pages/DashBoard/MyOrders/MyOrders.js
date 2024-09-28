import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, baseURL } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`${baseURL}/bookings?email=${user?.email}`, {});
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full text-left table-auto border-collapse border border-gray-200 rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-gray-600 font-medium"></th>
                        <th className="py-3 px-4 text-gray-600 font-medium"></th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Name</th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Price</th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Location</th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) => (
                            <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                                <td className="py-4 px-6">{index + 1}</td>
                                <td className="py-4 px-6">
                                    <img className="w-12 h-12 rounded-full object-cover" src={booking.picture} alt={booking.carName} />
                                </td>
                                <td className="py-4 px-6 font-semibold text-gray-700">{booking.carName}</td>
                                <td className="py-4 px-6 font-semibold text-gray-700">${booking.price}</td>
                                <td className="py-4 px-6 text-gray-600">{booking.meetingPlace}</td>
                                <td className="py-4 px-6">
                                    {!booking.paid ? (
                                        <Link 
                                            className="btn btn-primary btn-sm bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-white rounded-lg px-4 py-2 transition-all duration-300"
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            Pay
                                        </Link>
                                    ) : (
                                        <button className="btn btn-sm bg-green-500 text-white rounded-lg px-4 py-2 cursor-not-allowed">
                                            Paid
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;
