import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingACar from './BookingACar/BookingACar';
import CarCard from './CarCard/CarCard';

const CarsWithCategory = () => {
    const cars = useLoaderData();
    const [carItem, setCarItem] = useState(null);
    return (
        <section>
            <div className='grid grid-cols-1 gap-4'>
                {
                    cars.map(car => <CarCard
                        key={car._id}
                        car={car}
                        setCarItem={setCarItem}
                    ></CarCard>)
                }
            </div>
            <div>
                {carItem &&
                    <BookingACar
                        carItem={carItem}
                        setCarItem={setCarItem}
                    ></BookingACar>
                }
            </div>
        </section>
    );
};

export default CarsWithCategory;