import React, { useEffect, useState } from 'react';

const LatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        fetch('https://car-finder-server.vercel.app/latest')
            .then(res => res.json())
            .then(data => setLatestProducts(data))
            .catch(e => console.error(e))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
            {
                latestProducts.map(latestProduct =>
                    <div className="" key={latestProduct._id}>
                        <div className="card w-72 lg:w-80 bg-base-100 flex flex-col border">
                            <img src={latestProduct.picture} alt='' className="max-w-sm" />
                            <div className='card-body'>
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