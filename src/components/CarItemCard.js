import React from 'react';
import carImage from '../assets/images/banner_480.webp'; // Default image
import { Link } from 'react-router-dom';

const CarItemCard = ({ latestProduct }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Car Image */}
      <div className="relative h-64">
        <img
          src={latestProduct.picture || carImage}
          alt={latestProduct.name}
          className="absolute inset-0 h-full w-full object-cover rounded-t-lg transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Car Information */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {latestProduct.name}
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          <span className="line-through text-gray-400 mr-2">
            ${latestProduct.originalPrice}
          </span>
          <span className="text-red-500 font-bold">
            ${latestProduct.resalePrice}
          </span>
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
              {latestProduct.type}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
              {latestProduct.gearBox}
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
              {latestProduct.engine}
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-between items-center">
          <Link
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarItemCard;
