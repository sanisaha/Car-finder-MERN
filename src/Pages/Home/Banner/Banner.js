import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner1ExtraLarge from '../../../assets/images/banner_1920.webp';
import banner1Large from '../../../assets/images/banner_1280.webp';
import banner1Medium from '../../../assets/images/banner_768.webp';
import banner1Small from '../../../assets/images/banner_480.webp';

const Banner = () => {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        type: '',
        gearBox: '',
        engine: '',
        conditionType: '',
        minResalePrice: 0,
        maxResalePrice: 100000,
        minYear: 2000,
        maxYear: 2023,
});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

  const handleSearch = () => {
    navigate("/search", { state: { filters } });
  };
    return (
        <div className="relative z-10">
      {/* Cover Section */}
      <div className="relative h-[50vh] xl:h-[80vh] bg-red-600">
        <div className="absolute inset-0 flex items-center justify-center">
        <picture>
          <source
            srcSet={banner1ExtraLarge}
            media="(min-width: 1280px)"
            type="image/webp"
          />
          <source
            srcSet={banner1Large}
            media="(min-width: 1024px) and (max-width: 1279px)"
            type="image/webp"
          />
          <source
            srcSet={banner1Medium}
            media="(min-width: 768px) and (max-width: 1024px)"
            type="image/webp"
          />
          <source
            srcSet={banner1Small}
            media="(max-width: 767px)"
            type="image/webp"
          />
          <img
            src={banner1ExtraLarge}
            alt="car-banner"
            className="object-cover w-full h-full"
          />
        </picture>
        </div>
        {/* Submerged Search Section */}
        <div className="absolute inset-x-0 bottom-0 left-1/2 transform translate-x-[-50%] translate-y-2/3 p-4 w-3/4 mx-auto bg-white shadow-md">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="selectType">Select Type</label>
              <select
              id="selectType"
                name="type" value={filters.type} onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">All Types</option>
                    <option value="hatchBack">Hatchback</option>
                    <option value="sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                {/* Add more makes */}
              </select>
            </div>
            <div>
              <label htmlFor="selectGearbox">Select Gearbox</label>
              <select
                id="selectGearbox"
                name="gearBox" value={filters.gearBox} onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">All Gearboxes</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>
            <div>
              <label htmlFor='selectEngine'>Select Engine</label>
              <select
                id="selectEngine"
                name="engine"
                value={filters.engine} onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">All Engines</option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
                <option value="electric">Electric</option>
              </select>
            </div>
            <div>
              <label htmlFor='selectCondition'>Select Condition</label>
              <select
                id="selectCondition"
                name="conditionType"
                value={filters.conditionType} onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">All Conditions</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSearch}
              className="px-6 py-2 text-white bg-red-600 rounded-lg"
            >
              Search Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;