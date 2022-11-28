import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const CarCard = ({ car, setCarItem }) => {
    const { picture, name, location, resalePrice, originalPrice, yearsOfUse, date, sellerName, sellerEmail } = car;
    const [verifyStatus, setVerifyStatus] = useState('');
    useEffect(() => {
        fetch(`https://car-finder-server.vercel.app/verified?email=${sellerEmail}`)
            .then(res => res.json())
            .then(data => {
                setVerifyStatus(data.status)
            })
            .catch(e => console.error(e))
    }, [sellerEmail])
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
                <p className='text-xl font-semibold p-3'>Posting time: {date}</p>
                <div className='flex items-center'>
                    <div>
                        <p className='text-xl font-semibold p-3'>Seller Name: {sellerName}</p>
                    </div>

                    <div>{
                        verifyStatus && <FaCheck className='bg-blue-300 rounded text-lg' />
                    }</div>
                </div>


            </div>
            <div className="items-center text-center p-4">
                <label onClick={() => setCarItem(car)} htmlFor="car-booking-modal" className="btn btn-primary">Book Now</label>
            </div>
        </div>
    );
};

export default CarCard;