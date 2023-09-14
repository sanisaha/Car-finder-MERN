import React from 'react';
import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content">
                <div>
                    <h1 className="text-5xl font-bold">Easy and convenient way to find your next car</h1>
                    <p className="py-6">We have large collection of used cars from our trusted sellers. You can also sell your used vehicles here with convenient price</p>
                    <button className="btn btn-primary">Find A Car</button>
                </div>
                <div>
                    <img src={banner} alt='' className="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;