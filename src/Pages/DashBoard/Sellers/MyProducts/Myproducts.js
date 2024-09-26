import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, baseURL } from '../../../../Context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [availableProducts, setAvailAbleProducts] = useState([]);
    const [bookedProducts, setBookedProducts] = useState([]);
    useEffect(() => {
        fetch(`${baseURL}/cars/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setAvailAbleProducts(data);
            })
    }, [user])
    useEffect(() => {
        fetch(`${baseURL}/bookedItems/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setBookedProducts(data);
            })
    }, [user])
    const handleCompleteDelete = (id) => {
        const proceed = window.confirm('are you really want to delete')
        if (proceed) {
            fetch(`${baseURL}/cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Review deleted successfully");
                    }
                })
                .catch(e => console.error(e))
        }
    }
    const handleDeleteFromBooking = (id) => {
        const proceed = window.confirm('are you really want to delete')
        if (proceed) {
            fetch(`${baseURL}/bookedItems/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Review deleted successfully");
                    }
                })
                .catch(e => console.error(e))
        }
    }
    const handleAdvertize = (id) => {
        const action = { advertize: 'advertize' };
        fetch(`${baseURL}/cars/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(action)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('item set for advertize')
                }

            })

    }

    return (
        <div>
            <div>
                <h2>Available Products</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>product</th>
                            <th>price</th>
                            <th>phone</th>
                            <th>status</th>
                            <th>action</th>
                            <th>option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            availableProducts.map((product, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.resalePrice} $</td>
                                    <td>{product.mobileNumber}</td>
                                    <td>Available</td>
                                    <td><button className='btn btn-sm btn-primary' onClick={() => (handleCompleteDelete(product._id))}>delete</button></td>
                                    <td>{
                                        !product.action && <>
                                            <button className='btn btn-sm btn-primary' onClick={() => (handleAdvertize(product._id))}>Advertize</button>
                                        </>
                                    }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <div>
                    <h2>Booked Products</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>product</th>
                                <th>price</th>
                                <th>phone</th>
                                <th>status</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedProducts.map((product, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{product.carName}</td>
                                        <td>{product.price} $</td>
                                        <td>{product.phoneNumber}</td>
                                        <td>{product.paid ? <><button className='btn btn-sm btn-primary disabled'>Sold</button></>
                                            :
                                            <><button className='btn btn-sm btn-primary disabled'>Booked</button></>
                                        }
                                        </td>
                                        <td>{product.paid ? <><button className='btn btn-sm btn-primary disabled'></button></>
                                            :
                                            <><button className='btn btn-sm btn-primary' onClick={() => (handleDeleteFromBooking(product._id))}>delete</button></>
                                        }
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
};
export default MyProducts;