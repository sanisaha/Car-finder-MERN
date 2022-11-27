import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingACar = ({ carItem, setCarItem }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, resalePrice, sellerEmail } = carItem;
    const handleCarBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const carName = form.carName.value;
        const email = form.email.value;
        const meetingPlace = form.location.value;
        const phoneNumber = form.phoneNumber.value;
        const price = form.price.value;
        const newBooking = { userName, sellerEmail, carName, email, meetingPlace, phoneNumber, price };
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
                    fetch('http://localhost:5000/bookedItems', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newBooking)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                fetch(`http://localhost:5000/cars/${_id}`, {
                                    method: 'DELETE'
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.deletedCount > 0) {
                                            setCarItem(null);
                                            toast('your booking is confirmed');
                                        }
                                    })
                            }
                        })

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
                        <ToastContainer></ToastContainer>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingACar;