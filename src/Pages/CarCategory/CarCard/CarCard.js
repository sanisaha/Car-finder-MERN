import React, { useContext, useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { AuthContext, baseURL } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';

const CarCard = ({ car, setCarItem }) => {
    const { picture, name, location, resalePrice, originalPrice, yearsOfUse, date, sellerName, sellerEmail } = car;
    const { user } = useContext(AuthContext);
    const [verifyStatus, setVerifyStatus] = useState('');
    useEffect(() => {
        fetch(`${baseURL}/verified?email=${sellerEmail}`)
            .then(res => res.json())
            .then(data => {
                setVerifyStatus(data.status)
            })
            .catch(e => console.error(e))
    }, [sellerEmail])
    return (
        <div>
            <div className='flex justify-between mx-10'>
                <h1 className='text-4xl font-bold'>{name}</h1>
                <div>
                    <p className='text-2xl text-warning font-extrabold'>{resalePrice}</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-4">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Description</h2>
                    <div className='flex flex-row justify-start'>
                        <div><p>Location: </p></div>
                        <div>{location}</div>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div><p>Resale Price: </p></div>
                        <div>{resalePrice}</div>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div><p>Original Price: </p></div>
                        <div>{originalPrice}</div>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div><p>Years Of Use: </p></div>
                        <div>{yearsOfUse}</div>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div><p>Posting Time: </p></div>
                        <div>{date.slice(0, 10)}</div>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div><p>Seller Name: </p></div>
                        <div>{sellerName}</div>
                    </div>
                    <div className='flex flex-row justify-start'>
                        <div><p>Seller Status: </p></div>
                        <div>{
                            verifyStatus ? <FaCheck className='bg-blue-300 rounded text-lg' />
                                : <p>N/A</p>}</div>
                    </div>


                </div>
                <div className="items-center text-center p-4">
                    {
                        user ? <label onClick={() => setCarItem(car)} htmlFor="car-booking-modal" className="btn btn-primary">Book Now</label>
                            :
                            <Link to='/login' className='btn btn-primary'>Book Now</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default CarCard;