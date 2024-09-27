import React from 'react';
import carImage from '../assets/images/banner_480.webp';

const CarItemCard = ({latestProduct}) => {
    return (
        <div
      className="group relative overflow-hidden bg-white rounded-md shadow-md"
      data-aos="fade"
    >
      {latestProduct.picture && (
        <img
          src={latestProduct.picture || carImage}
          width={300}
          height={200}
          alt={latestProduct.name}
          className="w-full h-96 object-cover"
        />
      )}
      <div className="absolute h-1/2 w-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-70 group-hover:-translate-y-full transition duration-300">
        <div className=" bg-gradient-to-b from-primary-500 to-primary-200 flex justify-center items-end h-full">
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
    </div>
    );
};

export default CarItemCard;