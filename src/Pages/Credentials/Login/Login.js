import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const { logIn, providerLogin } = useContext(AuthContext);

    return (
        <div className="w-1/2 mx-auto my-10 py-10">
            <form>
                <div className="mb-6">
                    <input
                        type="email"
                        name='email'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email address"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        name='password'
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                    />
                </div>

                <div className="items-center mb-6">
                    <a
                        href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >Forgot password?</a
                    >
                </div>
                <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    Sign in
                </button>

                <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <div className='w-full'>
                    <Link className='btn w-full bg-green-400'>Google Login</Link>
                </div>
                <div>
                    <label className="label">
                        <p>Dont't have an account? <Link to='/register' className='text-purple-700 font-semibold'>register</Link></p>
                    </label>
                </div>
            </form>
        </div>
    )
};

export default Login;