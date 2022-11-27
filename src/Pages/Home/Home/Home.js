import React from 'react';
import Banner from '../Banner/Banner';
import ItemCategory from '../ItemCategory/ItemCategory';
import LatestProducts from '../LatestProducts/LatestProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='lg:flex justify-between mt-5'>
                <div>
                    <ItemCategory></ItemCategory>
                </div>
                <div className=' lg:flex-1'>
                    <h2 className='text-center text-3xl font-bold'>Latest deals</h2>
                    <LatestProducts></LatestProducts>
                </div>

            </div>
        </div>
    );
};

export default Home;