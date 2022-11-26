import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyUsers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    const handleMakeAdmin = _id => {
        const userType = { admin: 'admin' };
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userType)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((buyer, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer?.role !== 'admin' && <button onClick={() => handleMakeAdmin(buyer._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyUsers;