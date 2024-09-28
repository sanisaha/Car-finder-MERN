import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Spinner from '../../../../components/Spinner';
import Checkout from '../Checkout/Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h3 className="text-3xl">Payment for {booking.carName}</h3>
            <p className="text-xl">Please pay <strong>${booking.price} for <strong>{booking.carName}</strong></strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkout
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;