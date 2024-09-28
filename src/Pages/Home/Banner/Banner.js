import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import carImage from '../../../assets/images/banner_1920.webp';

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
        <div className="relative">
      {/* Cover Section */}
      <div className="relative h-screen bg-red-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={carImage}
            alt="Car"
            className="w-3/4 h-auto"
          />
        </div>
        {/* Submerged Search Section */}
        <div className="absolute inset-x-0 bottom-0 left-1/2 transform translate-x-[-50%] translate-y-1/2 p-4 w-3/4 mx-auto bg-white shadow-md">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label>Select Type</label>
              <select
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
              <label>Select Gearbox</label>
              <select
                name="gearBox" value={filters.gearBox} onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">All Gearboxes</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>
            <div>
              <label>Select Engine</label>
              <select
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
              <label>Select Condition</label>
              <select
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