import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
const [carsPerPage] = useState(10); // Number of cars per page (limit)
const [totalPages, setTotalPages] = useState(1); // Total number of pages
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

 // Fetch cars initially on page load without any filters
 useEffect(() => {
  fetchAllCars();
}, []);

// Function to fetch all cars without filters
const fetchAllCars = async () => {
  try {
    const response = await axios.get(`${baseURL}/cars`);
    setCars(response.data.cars);
    console.log(response.data);
    
  } catch (error) {
    console.error("Error fetching cars:", error);
  }
};



const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
};

const fetchFilteredCars = async () => {
    const params = new URLSearchParams({...filters, page: currentPage, limit: carsPerPage});
    const response = await axios.get(`${baseURL}/cars?${params.toString()}`);
    setCars(response.data.cars);
    setTotalPages(Math.ceil(response.data.totalPages));
};

// Reset filters to default values and fetch all cars
const resetFilters = () => {
  setFilters({
    type: '',
    gearBox: '',
    engine: '',
    conditionType: '',
    minResalePrice: 0,
    maxResalePrice: 100000,
    minYear: 2000,
    maxYear: 2023,
  });
  fetchAllCars();
};

const handlePreviousPage = () => {
  if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      fetchFilteredCars();
  }
};

const handleNextPage = () => {
  if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      fetchFilteredCars();
  }
};

    return (
        <div className="min-h-screen bg-gray-100 p-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 p-4 bg-white shadow-md">
            <h2 className="text-xl font-bold mb-4">Cars Search</h2>
            <div>
  
             {/* Min Resale Price */}
             <div className="flex flex-col">
                    <label htmlFor="minResalePrice">Min Resale Price: {filters.minResalePrice}</label>
                    <input
                        type="range"
                        name="minResalePrice"
                        min="0"
                        max="100000"
                        value={filters.minResalePrice}
                        onChange={handleChange}
                        className="border p-2"
                    />
                </div>

                {/* Max Resale Price */}
                <div className="flex flex-col">
                    <label htmlFor="maxResalePrice">Max Resale Price: {filters.maxResalePrice}</label>
                    <input
                        type="range"
                        name="maxResalePrice"
                        min="0"
                        max="100000"
                        value={filters.maxResalePrice}
                        onChange={handleChange}
                        className="border p-2"
                    />
                </div>
                {/* Min Year of Purchase */}
                <div className="flex flex-col">
                    <label htmlFor="minYear">Min Year: {filters.minYear}</label>
                    <input
                        type="range"
                        name="minYear"
                        min="2000"
                        max="2023"
                        value={filters.minYear}
                        onChange={handleChange}
                        className="border p-2"
                    />
                </div>

                {/* Max Year of Purchase */}
                <div className="flex flex-col">
                    <label htmlFor="maxYear">Max Year: {filters.maxYear}</label>
                    <input
                        type="range"
                        name="maxYear"
                        min="2000"
                        max="2023"
                        value={filters.maxYear}
                        onChange={handleChange}
                        className="border p-2"
                    />
                </div>
            </div>
  
            {/* Car Filters */}
            <h3 className="font-semibold mb-2">Cars Filters</h3>

                {/* Select Type */}
                <select name="type" value={filters.type} onChange={handleChange} className="block w-full p-2 border-gray-300 rounded-md mb-2">
                    <option value="">All Types</option>
                    <option value="hatchBack">Hatchback</option>
                    <option value="sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                </select>

                {/* Select Gearbox */}
                <select name="gearBox" value={filters.gearBox} onChange={handleChange} className="block w-full p-2 border-gray-300 rounded-md mb-2">
                    <option value="">All Gearbox Types</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                </select>

                {/* Select Engine */}
                <select name="engine" value={filters.engine} onChange={handleChange} className="block w-full p-2 border-gray-300 rounded-md mb-2">
                    <option value="">All Engines</option>
                    <option value="diesel">Diesel</option>
                    <option value="petrol">Petrol</option>
                    <option value="electric">Electric</option>
                </select>

                {/* Select Condition */}
                <select name="conditionType" value={filters.conditionType} onChange={handleChange} className="block w-full p-2 border-gray-300 rounded-md mb-2">
                    <option value="">All Conditions</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                </select>

            
  
            <button onClick={resetFilters} className="w-full p-2 mt-4 bg-red-600 text-white rounded-lg">
              Reset
            </button>
            <button onClick={fetchFilteredCars} className="w-full p-2 mt-4 bg-blue-600 text-white rounded-lg">  Search  </button>
          </div>
  
          {/* Search Results */}
          <div className="flex-1 p-4 ml-4 bg-white shadow-md">
            <div className="flex justify-end items-center mb-6">
              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
  
            {/* Display Vehicle */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
            {cars && cars.map((car) => (
              <div key={car._id} className="flex items-center justify-between p-4 border-b">

<div className="border p-4 rounded-lg">
<img
  src={car.picture}
  alt={car.name}
  className="w-full h-auto rounded-lg"
/>
<div className="flex justify-between items-center mt-4">
  <div>
    <h3 className="text-lg font-bold">{car.name}</h3>
    <p className="text-gray-500">
      <del>${car.originalPrice}</del>{" "}
      <span className="text-red-600">${car.resalePrice}</span>
    </p>
  </div>
  <Link className="p-2 bg-black text-white rounded-md">
    Show Details
  </Link>
</div>
</div>
</div>
            ))}
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default SearchPage;