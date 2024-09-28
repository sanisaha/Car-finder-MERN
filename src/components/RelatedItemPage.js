import React, { useEffect, useState } from 'react';
import { baseURL } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
import productImage from '../assets/images/banner_480.webp';

const RelatedItemPage = ({engineType}) => {
    const [relatedCars, setRelatedCars] = useState([]);

    useEffect(() => {
        const fetchRelatedCars = async () => {
            try {
                const response = await fetch(`${baseURL}/cars/engine/${engineType}`);
                const data = await response.json();
                setRelatedCars(data);
            } catch (error) {
                console.error('Error fetching related cars:', error);
            }
        };

        if (engineType) {
            fetchRelatedCars();
        }
    }, [engineType]);

    if (!relatedCars.length) {
        return <p>No related items found.</p>;
    }
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Related Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedCars.map((car) => (
                    <div key={car._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
                        <Link to={`/cars/${car._id}`}>
                            <img
                                src={car.photoURL || productImage}
                                alt={car.name}
                                className="w-full h-48 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-lg font-semibold">{car.name}</h3>
                            <p className="text-red-500">${car.resalePrice}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedItemPage;