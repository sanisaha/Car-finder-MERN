import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from './CarCard/CarCard';

const CarsWithCategory = () => {
    const cars = useLoaderData();
    return (
        <div className='grid grid-cols-1 gap-4'>
            {
                cars.map(car => <CarCard
                    key={car._id}
                    car={car}
                ></CarCard>)
            }
        </div>
    );
};

export default CarsWithCategory;