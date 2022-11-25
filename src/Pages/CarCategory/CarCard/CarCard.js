import React from 'react';

const CarCard = ({ car, setCarItem }) => {
    const { picture, name, location, resalePrice, originalPrice, yearsOfUse } = car;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="car" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
            </div>
            <div>
                <p className='text-xl font-semibold p-3'>Location: {location}</p>
                <p className='text-xl font-semibold p-3'>Resale Price: {resalePrice}</p>
                <p className='text-xl font-semibold p-3'>Original Price: {originalPrice}</p>
                <p className='text-xl font-semibold p-3'>Years of Use: {yearsOfUse}</p>
            </div>
            <div className="items-center text-center p-4">
                <label onClick={() => setCarItem(car)} htmlFor="car-booking-modal" className="btn btn-primary">Book Now</label>
            </div>
        </div>
    );
};

export default CarCard;