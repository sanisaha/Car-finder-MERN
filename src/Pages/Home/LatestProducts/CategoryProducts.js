import React, { useEffect, useState } from 'react';

const CategoryProducts = ({ category }) => {
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        fetch(`https://car-finder-server.vercel.app/category/${category}`)
            .then(res => res.json())
            .then(data => setLatestProducts(data))
            .catch(e => console.error(e))
    }, [category])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
            {
                latestProducts.map(latestProduct =>
                    <div className="" key={latestProduct._id}>
                        <div className="card w-96 lg:w-80 bg-base-100 flex flex-col border p-2">
                            <img src={latestProduct.picture} alt='' className="max-w-sm" />
                            <div className="stats">

                                <div className="stat">
                                    <div className="stat-title text-3xl font-bold">{latestProduct.name}</div>
                                    <div className="stat-value">{latestProduct.resalePrice}</div>
                                    <div className="stat-actions">
                                        <button className="btn btn-sm btn-info">{latestProduct.type}</button>
                                        <button className="btn btn-sm btn-success">{latestProduct.gearBox}</button>
                                        <button className="btn btn-sm btn-info">{latestProduct.engine}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CategoryProducts;