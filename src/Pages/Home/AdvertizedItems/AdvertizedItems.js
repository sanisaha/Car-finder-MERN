import React from 'react';

const AdvertizedItems = ({ advertizeItem }) => {
    const { resalePrice, name, picture, gearBox } = advertizeItem;
    return (
        <div>
            <div className="card w-72 lg:w-96 glass">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="" className="rounded-xl" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold p-2">{name}</h2>
                    <p className='p-2'>{gearBox} driving</p>
                    <p className='p-2'>{resalePrice}$ only</p>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertizedItems;