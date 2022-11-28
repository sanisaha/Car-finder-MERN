import React from 'react';
import { FaBug } from 'react-icons/fa';

const Error = () => {
    return (
        <div className='text-center text-3xl my-10 lg:flex sm:flex-col'>
            <div className='w-1/4 h-1/4 text-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png" alt="" />
            </div>
            <div>
                <h1 className='p-5'><FaBug className='text-end px-2' />404</h1>
                <h1 className='mb-5'>Page Not Found!</h1>
                <p>We are sorry, the page you requested could not be found. Please, go back to the homepage or contact support.</p>
                <button className='btn btn-info m-5'>Read More</button>
            </div>

        </div>
    );
};

export default Error;