import { useQuery } from '@tanstack/react-query';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const MySellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    });
    const handleSellerDelete = (id) => {
        const proceed = window.confirm('are you really want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
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
        fetch(`http://localhost:5000/users/admin/${_id}`, {
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
    const handleMakeVerify = _id => {
        const status = { verify: 'verify' };
        fetch(`http://localhost:5000/users/verify/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                toast('seller verification successful')
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
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{seller.displayName}</td>
                                <td>{seller.email}</td>
                                <td>{seller?.userType !== 'admin' && <button onClick={() => handleMakeAdmin(seller._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button onClick={() => handleSellerDelete(seller._id)} className='btn btn-sm btn-primary'>Delete</button></td>
                                <td>{seller?.status !== 'verify' ? <> <button onClick={() => handleMakeVerify(seller._id)} className='btn btn-sm btn-primary'>unverified</button></>
                                    :
                                    <><button className='btn btn-sm btn-primary'>Verified</button></>
                                }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MySellers;