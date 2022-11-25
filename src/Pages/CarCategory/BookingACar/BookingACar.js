import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingACar = ({ carItem, setCarItem }) => {
    const { user } = useContext(AuthContext);
    const { name, resalePrice } = carItem;
    const handleCarBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const carName = form.carName.value;
        const email = form.email.value;
        const meetingPlace = form.location.value;
        const phoneNumber = form.phoneNumber.value;
        const price = form.price.value;
        const newBooking = { userName, carName, email, meetingPlace, phoneNumber, price };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setCarItem(null);
                    toast.success('your booking is confirmed');
                }
            })
            .catch(e => console.error(e))

    }
    return (
        <div>
            <input type="checkbox" id="car-booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="car-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form onSubmit={handleCarBooking} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='userName' readOnly defaultValue={user.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name='email' readOnly defaultValue={user.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <input type="text" name='carName' readOnly defaultValue={name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' readOnly defaultValue={resalePrice} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name='phoneNumber' placeholder='your phone number' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input type="text" name='location' placeholder='meeting location' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2 text-center">
                            <input type="submit" className="btn btn-primary px-10" value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingACar;