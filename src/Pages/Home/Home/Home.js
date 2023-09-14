import React, { useEffect, useState } from 'react';
import AdvertizedItems from '../AdvertizedItems/AdvertizedItems';
import Banner from '../Banner/Banner';
import ItemCategory from '../ItemCategory/ItemCategory';
import LatestProducts from '../LatestProducts/LatestProducts';
import CategoryProducts from '../LatestProducts/CategoryProducts';

const Home = () => {
    const [advertizeItems, setAdvertizeItems] = useState([]);
    const [category, setCategory] = useState('');
    useEffect(() => {
        fetch('https://car-finder-server.vercel.app/latest')
            .then(res => res.json())
            .then(data => setAdvertizeItems(data))
            .catch(e => console.error(e))
    }, [])
    const handleCategory = (event) => {
        event.preventDefault()
        const category_name = event.target.select.value;
        if (category_name !== '') {
            setCategory(category_name)
        } else {
            setCategory('')
        }

    }
    return (
        <div>
            <Banner></Banner>
            <div className='mx-10'>
                <div className='flex flex-row items-center justify-between p-4'>
                    <h1 className='text-2xl'>Featured Cars</h1>
                    <div className=''>
                        <ItemCategory handleCategory={handleCategory}></ItemCategory>
                    </div>
                </div>

                <div className='p-2 border'>

                    <div className='mt-2'>
                        {category === '' && <LatestProducts></LatestProducts>}
                    </div>
                    <div className='mt-2'>
                        {category !== '' && <CategoryProducts category={category}></CategoryProducts>}
                    </div>

                </div>
                <div>
                    {
                        advertizeItems.length ? <>
                            <div className='bg-blue-100 pb-10'>
                                <div>
                                    <h1 className='text-3xl font-semibold p-4 text-center animate-pulse'>Latest deals</h1>
                                </div>
                                <div className='grid grid-cols-1 lg:flex lg:justify-around'>

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
        </div>
    );
};

export default Home;