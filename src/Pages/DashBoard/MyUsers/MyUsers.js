import { useQuery } from '@tanstack/react-query';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { baseURL } from '../../../Context/AuthProvider';

const MyUsers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`${baseURL}/buyers`);
            const data = await res.json();
            return data;
        }
    });
    const handleBuyerDelete = (id) => {
        const proceed = window.confirm('are you really want to delete')
        if (proceed) {
            fetch(`${baseURL}/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("user deleted successfully");
                    }
                })
                .catch(e => console.error(e))
        }
    }
    const handleMakeAdmin = _id => {
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
                toast('Make admin successful')
                refetch();
            })

    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{buyer.displayName}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer?.userType !== 'admin' && <button onClick={() => handleMakeAdmin(buyer._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button onClick={() => handleBuyerDelete(buyer._id)} className='btn btn-sm btn-primary'>delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyUsers;