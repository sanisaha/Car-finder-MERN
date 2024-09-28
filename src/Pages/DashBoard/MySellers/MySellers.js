import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { baseURL } from '../../../Context/AuthProvider';

const MySellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`${baseURL}/sellers`);
            const data = await res.json();
            return data;
        }
    });

    const handleSellerDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this seller?');
        if (proceed) {
            fetch(`${baseURL}/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Seller deleted successfully");
                        refetch(); // Refresh data after deletion
                    }
                })
                .catch(e => console.error(e));
        }
    }

    const handleMakeAdmin = (_id) => {
        const userType = { admin: 'admin' };
        fetch(`${baseURL}/users/admin/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userType)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller promoted to admin successfully');
                    refetch(); // Refresh data after promoting
                }
            })
            .catch(e => console.error(e));
    }

    const handleMakeVerify = (_id) => {
        const status = { verify: 'verify' };
        fetch(`${baseURL}/users/verify/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller verification successful');
                    refetch(); // Refresh data after verification
                }
            })
            .catch(e => console.error(e));
    }

    return (
        <div className="overflow-x-auto p-4">
            <ToastContainer />
            <table className="min-w-full text-left table-auto border-collapse border border-gray-200 rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-gray-600 font-medium">#</th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Name</th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Email</th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Make Admin</th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Delete</th>
                        <th className="py-3 px-4 text-gray-600 font-medium">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, index) => (
                            <tr key={seller._id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                                <td className="py-4 px-6">{index + 1}</td>
                                <td className="py-4 px-6 font-semibold text-gray-700">{seller.displayName}</td>
                                <td className="py-4 px-6 text-gray-600">{seller.email}</td>
                                <td className="py-4 px-6">
                                    {seller?.userType !== 'admin' && (
                                        <button
                                            onClick={() => handleMakeAdmin(seller._id)}
                                            className="btn btn-xs bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-white rounded-lg px-2 py-1 transition-all duration-300"
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td className="py-4 px-6">
                                    <button
                                        onClick={() => handleSellerDelete(seller._id)}
                                        className="btn btn-sm bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 text-white rounded-lg px-3 py-2 transition-all duration-300"
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td className="py-4 px-6">
                                    {seller?.status !== 'verify' ? (
                                        <button
                                            onClick={() => handleMakeVerify(seller._id)}
                                            className="btn btn-sm bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 text-white rounded-lg px-3 py-2 transition-all duration-300"
                                        >
                                            Unverified
                                        </button>
                                    ) : (
                                        <button className="btn btn-sm bg-green-600 text-white rounded-lg px-3 py-2" disabled>
                                            Verified
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

export default MySellers;
