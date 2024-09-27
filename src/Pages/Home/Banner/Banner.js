import React, { useState } from 'react';
import banner from '../../../assets/images/banner.png'
import { useNavigate } from 'react-router-dom';
import carImage from '../../../assets/images/banner_1920.webp';

const Banner = () => {
    const navigate = useNavigate();

  const [year, setYear] = useState("2017");
  const [make, setMake] = useState("Bentley");
  const [model, setModel] = useState("Bentayga");
  const [mileage, setMileage] = useState("20000");
  const [transmission, setTransmission] = useState("7-Speed Automatic");
  const [condition, setCondition] = useState("New");
  const [price, setPrice] = useState([0, 100000]);

  const handleSearch = () => {
    navigate("/search");
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
              <label>Select Year</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                {/* Add more years */}
              </select>
            </div>
            <div>
              <label>Select Make</label>
              <select
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="Bentley">Bentley</option>
                {/* Add more makes */}
              </select>
            </div>
            <div>
              <label>Select Model</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="Bentayga">Bentayga</option>
                {/* Add more models */}
              </select>
            </div>
            <div>
              <label>Select Mileage</label>
              <select
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="20000">≤ 20000</option>
                {/* Add more mileage options */}
              </select>
            </div>
            <div>
              <label>Select Transmission</label>
              <select
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="7-Speed Automatic">7-Speed Automatic</option>
                {/* Add more transmission options */}
              </select>
            </div>
            <div>
              <label>Select Condition</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="New">New</option>
                {/* Add more conditions */}
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg">${price[0]} - ${price[1]}</span>
            <input
              type="range"
              min="7900"
              max="2599100"
              value={price[1]}
              onChange={(e) => setPrice([7900, e.target.value])}
              className="w-full h-2 bg-red-400 rounded-lg cursor-pointer"
            />
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