import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [availableProducts, setAvailAbleProducts] = useState([]);
    const [bookedProducts, setBookedProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setAvailAbleProducts(data);
            })
    }, [user])
    useEffect(() => {
        fetch(`http://localhost:5000/bookedItems/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setBookedProducts(data);
            })
    }, [user])
    const handleCompleteDelete = (id) => {
        const proceed = window.confirm('are you really want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/cars/${id}`, {
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
            fetch(`http://localhost:5000/bookedItems/${id}`, {
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


    // fetch('https://carry-you-server.vercel.app/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged) {
    //                 toast('your service has added successfully')
    //                 form.reset();
    //             }
    //         })
    //         .catch(e => console.error(e))

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
                                    <td><button onClick={() => (handleCompleteDelete(product._id))}>delete</button></td>
                                    <td><button>Advertise</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <div>
                    <h2>Booked Items</h2>
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
                                        <td>Sold</td>
                                        <td><button onClick={() => (handleDeleteFromBooking(product._id))}>delete</button></td>
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