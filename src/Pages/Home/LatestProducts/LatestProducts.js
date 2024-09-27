import React, { useEffect, useState } from 'react';
import { baseURL } from '../../../Context/AuthProvider';
import CarItemCard from '../../../components/CarItemCard';

const LatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/advertize`)
            .then(res => res.json())
            .then(data => setLatestProducts(data))
            .catch(e => console.error(e))
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
            {latestProducts.map(latestProduct => (
                <div key={latestProduct._id}>
                    <CarItemCard latestProduct={latestProduct}></CarItemCard>
                </div>
            ))}
        </div>
    );
};

export default LatestProducts;
