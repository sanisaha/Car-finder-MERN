import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {
    const { createNewUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {

        fetch(`https://car-finder-server.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data);
            })
    }
        , [])

    const handleUserCreate = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const userType = event.target.select.value;
        const userDetails = {
            displayName: name,
            photoURL: photoURL
        }
        const newUser = {
            name: name,
            email: email,
            image: photoURL,
            userType: userType
        }

        createNewUser(email, password)
            .then(result => {
                logOut();
                const user = result.user;
                const existingUser = currentUser.find(x => x.email === user.email)
                if (!existingUser) {
                    updateUserProfile(userDetails)
                        .then(() => {
                            handleSaveUsersInDB(newUser);
                        })
                        .catch(e => console.error(e))
                }
            })
            .catch(error => {
                document.getElementById('error').innerHTML = error.message;
            })

    }
    const handleSaveUsersInDB = profile => {
        const newUser = {
            displayName: profile.name,
            photoURL: profile.photoURL,
            email: profile.email,
            userType: profile.userType
        }
        fetch('https://car-finder-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/login');
                } else {
                    <p>Loading....</p>
                }
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="w-1/2 mx-auto my-10">
            <form onSubmit={handleUserCreate}>
                <div className="mb-6">
                    <input
                        type="text"
                        name='name'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        name='photoURL'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="photoURL"
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="email"
                        name='email'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email address"
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        name='password'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="mb-6">
                    <select
                        type="text"
                        name='select'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        required
                    >
                        <option title='I am here for buying'>I am a Buyer</option>
                        <option title='I am here for selling'>I am a Seller</option>
                    </select>

                </div>
                <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    Register
                </button>
                <p id='error' className='text-red-500'></p>
                <div>
                    <label className="label">
                        <p>already have an account? <Link to='/login' className='text-purple-700 font-semibold'>login</Link></p>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Register;