import React, { useEffect, useState } from 'react';
import AdvertizedItems from '../AdvertizedItems/AdvertizedItems';
import Banner from '../Banner/Banner';
import ItemCategory from '../ItemCategory/ItemCategory';
import LatestProducts from '../LatestProducts/LatestProducts';
import CategoryProducts from '../LatestProducts/CategoryProducts';
import { baseURL } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import CarItemCard from '../../../components/CarItemCard';

const Home = () => {
    const [advertizeItems, setAdvertizeItems] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch(`${baseURL}/latest`)
            .then(res => res.json())
            .then(data => setAdvertizeItems(data))
            .catch(e => console.error(e));
    }, []);

    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/advertize`)
            .then(res => res.json())
            .then(data => setLatestProducts(data))
            .catch(e => console.error(e))
    }, []);

    return (
        <div>
            {/* Banner Section */}
            <div className="mb-48">
                <Banner />
            </div>

            {/* Main Content Area */}
            <section className="bg-gradient-to-r from-red-50 to-red-300 py-12 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-pulse">
    Featured Cars
  </h2>

  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 px-4">
    {latestProducts.map((latestProduct) => (
      <div key={latestProduct._id}>
        <CarItemCard latestProduct={latestProduct} />
      </div>
    ))}
  </div>
</section>
<div className="py-4"></div>


                {/* Advertised Items Section */}
                {advertizeItems.length > 0 && (
    <section className="bg-gradient-to-r from-red-300 to-red-100 py-12 rounded-lg shadow-lg">
        <h2 className="text-center text-4xl font-bold mb-8 text-gray-800 animate-pulse">
            Latest Deals
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 px-4">
            {advertizeItems.map((advertizeItem) => (
                <AdvertizedItems key={advertizeItem._id} advertizeItem={advertizeItem} />
            ))}
        </div>
        <div className="text-center mt-6">
            <Link
                to="/all-deals"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                View All Deals
            </Link>
        </div>
    </section>
)}              
            </div>
    );
};

export default Home;
