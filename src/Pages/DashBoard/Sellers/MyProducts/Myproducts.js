import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, baseURL } from '../../../../Context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [availableProducts, setAvailableProducts] = useState([]);
    const [bookedProducts, setBookedProducts] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetchAvailableProducts();
            fetchBookedProducts();
        }
    }, [user]);

    const fetchAvailableProducts = async () => {
        try {
            const response = await fetch(`${baseURL}/cars/${user?.email}`);
            const data = await response.json();
            setAvailableProducts(data);
        } catch (error) {
            console.error("Error fetching available products:", error);
        }
    };

    const fetchBookedProducts = async () => {
        try {
            const response = await fetch(`${baseURL}/bookedItems/${user?.email}`);
            const data = await response.json();
            setBookedProducts(data);
        } catch (error) {
            console.error("Error fetching booked products:", error);
        }
    };

    const handleDelete = async (id, url, successMessage) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
            try {
                const response = await fetch(`${baseURL}/${url}/${id}`, { method: 'DELETE' });
                const result = await response.json();
                if (result.deletedCount > 0) {
                    toast(successMessage);
                    // Re-fetch products after deletion
                    fetchAvailableProducts();
                    fetchBookedProducts();
                }
            } catch (error) {
                console.error("Error deleting item:", error);
            }
        }
    };

    const handleAdvertize = async (id) => {
        const action = { advertize: 'advertize' };
        try {
            const response = await fetch(`${baseURL}/cars/item/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action),
            });
            const result = await response.json();
            if (result.modifiedCount > 0) {
                toast('Product set for advertisement');
                fetchAvailableProducts(); // Refresh list after update
            }
        } catch (error) {
            console.error("Error advertising product:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <ToastContainer />
            <section>
                <h2 className="text-xl font-bold mb-4">Available Products</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {availableProducts.map((product, index) => (
                                <tr key={product._id} className="border-t">
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.resalePrice} $</td>
                                    <td>{product.mobileNumber}</td>
                                    <td>Available</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-danger mr-2"
                                            onClick={() => handleDelete(product._id, 'cars', 'Product deleted successfully')}
                                        >
                                            Delete
                                        </button>
                                        {!product.action && (
                                            <button 
                                                className="btn btn-sm btn-success"
                                                onClick={() => handleAdvertize(product._id)}
                                            >
                                                Advertize
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-bold mb-4">Booked Products</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookedProducts.map((product, index) => (
                                <tr key={product._id} className="border-t">
                                    <td>{index + 1}</td>
                                    <td>{product.carName}</td>
                                    <td>{product.price} $</td>
                                    <td>{product.phoneNumber}</td>
                                    <td>
                                        {product.paid ? (
                                            <span className="text-green-600 font-bold">Sold</span>
                                        ) : (
                                            <span className="text-yellow-600 font-bold">Booked</span>
                                        )}
                                    </td>
                                    <td>
                                        {!product.paid && (
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDelete(product._id, 'bookedItems', 'Booked item deleted successfully')}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default MyProducts;
