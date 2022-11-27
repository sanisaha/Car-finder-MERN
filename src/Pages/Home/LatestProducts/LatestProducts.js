import React, { useEffect, useState } from 'react';

const LatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/latest')
            .then(res => res.json())
            .then(data => setLatestProducts(data))
            .catch(e => console.error(e))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {
                latestProducts.map(latestProduct =>
                    <div className="hero bg-light" key={latestProduct._id}>
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={latestProduct.picture} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl font-bold">{latestProduct.name}</h1>
                                <p className="py-2 text-lg">Price: {latestProduct.resalePrice}</p>
                                <p className="py-2 text-lg">Engine: {latestProduct.type}</p>
                                <p className="py-2 text-lg">Driving: {latestProduct.gearBox}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default LatestProducts;