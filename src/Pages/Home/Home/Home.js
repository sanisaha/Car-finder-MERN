import React, { useEffect, useState } from 'react';
import AdvertizedItems from '../AdvertizedItems/AdvertizedItems';
import Banner from '../Banner/Banner';
import ItemCategory from '../ItemCategory/ItemCategory';
import LatestProducts from '../LatestProducts/LatestProducts';

const Home = () => {
    const [advertizeItems, setAdvertizeItems] = useState([]);
    useEffect(() => {
        fetch('https://car-finder-server.vercel.app/advertize')
            .then(res => res.json())
            .then(data => setAdvertizeItems(data))
            .catch(e => console.error(e))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className='lg:flex justify-between mt-5'>
                <div>
                    <ItemCategory></ItemCategory>
                </div>
                <div className=''>
                    <h2 className='text-center text-3xl font-bold'>Latest deals</h2>
                    <LatestProducts></LatestProducts>
                </div>

            </div>
            <div>
                {
                    advertizeItems.length ? <>
                        <div className='bg-blue-100 py-20'>
                            <div>
                                <h1 className='text-3xl font-semibold px-4'>Our most popular products...</h1>
                            </div>
                            <div className='grid gap-2 grid-cols-1 lg:grid-cols-3'>

                                {advertizeItems.map(advertizeItem => <AdvertizedItems
                                    key={advertizeItem._id}
                                    advertizeItem={advertizeItem}
                                ></AdvertizedItems>)}
                            </div>
                        </div>
                    </>
                        :
                        <></>
                }
            </div>
        </div>
    );
};

export default Home;