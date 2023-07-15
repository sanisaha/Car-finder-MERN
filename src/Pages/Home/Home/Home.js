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
            <h2 className='text-center text-3xl font-bold p-4'>Latest deals</h2>
            <div className='p-2 border'>
                <div className=''>
                    <ItemCategory></ItemCategory>
                </div>
                <div className='mt-2'>

                    <LatestProducts></LatestProducts>
                </div>

            </div>
            <div>
                {
                    advertizeItems.length ? <>
                        <div className='bg-blue-100 pb-10'>
                            <div>
                                <h1 className='text-3xl font-semibold p-4 text-center animate-pulse'>Our most popular products</h1>
                            </div>
                            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 p-2'>

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