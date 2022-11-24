import React from 'react';
import AdvertizedItems from '../AdvertizedItems/AdvertizedItems';
import Banner from '../Banner/Banner';
import ItemCategory from '../ItemCategory/ItemCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='flex justify-center'>
                <div className='flex-1'>
                    <AdvertizedItems></AdvertizedItems>
                </div>
                <div>
                    <ItemCategory></ItemCategory>
                </div>
            </div>
        </div>
    );
};

export default Home;