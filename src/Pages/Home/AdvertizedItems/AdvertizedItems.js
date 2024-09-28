import React from 'react';
import { Link } from 'react-router-dom';

const AdvertizedItems = ({ advertizeItem }) => {
    const { _id, resalePrice, name, picture, gearBox, engine, conditionType } = advertizeItem;

    return (
        <div className="">
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img className="rounded-t-lg h-60 w-full object-cover" src={picture} alt={name} />
                <div className="px-5 py-4">
                    <h5 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h5>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-red-600">${resalePrice}</span>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${conditionType === 'excellent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {conditionType.charAt(0).toUpperCase() + conditionType.slice(1)}
                        </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Gearbox: <strong>{gearBox}</strong></span>
                        <span className="text-sm text-gray-500">Engine: <strong>{engine}</strong></span>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            to={`/cars/${_id}`}
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertizedItems;
