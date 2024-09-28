import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productImage from '../../assets/images/banner_480.webp';
import { AuthContext, baseURL } from '../../Context/AuthProvider';
import BookingACar from '../CarCategory/BookingACar/BookingACar';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false); // State for modal visibility

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(`${baseURL}/cars/item/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, [id]);

    if (!product) {
        return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
    }

    const handleMakeOfferClick = () => {
        setShowModal(true); // Show modal when "Make an Offer" is clicked
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center items-center">
                    <img
                        src={product.picture || productImage}
                        alt={product.name}
                        className="rounded-lg shadow-lg w-full max-w-lg transition-transform transform hover:scale-105 duration-300"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
                    <span className="text-xl font-semibold text-red-600">${product.resalePrice}</span>
                    <p className="text-gray-600 mt-4">{product.description}</p>

                    {/* Additional Product Details */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Details</h3>
                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                            <li>Location: {product.location}</li>
                            <li>Original Price: ${product.originalPrice}</li>
                            <li>Years of Use: {product.yearsOfUse}</li>
                            <li>Date Listed: {new Date(product.date).toLocaleDateString()}</li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6">
                        <button onClick={handleMakeOfferClick} className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mr-4">
                            Make an Offer
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Booking a Car */}
            {showModal && (
                <BookingACar carItem={product} setCarItem={setShowModal} />
            )}
        </div>
    );
};

export default ProductDetailPage;
