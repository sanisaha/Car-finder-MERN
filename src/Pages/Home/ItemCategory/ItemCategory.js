import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ItemCategory = () => {
    const navigate = useNavigate();
    const handleCategory = (event) => {
        event.preventDefault()
        const category_name = event.target.select.value;
        navigate(`/category/${category_name}`);

    }

    return (
        <div className='p-6 mt-10 mr-4 bg-green-100'>
            <h2 className='text-3xl font-semibold mb-4'>Select a Category</h2>
            <form onSubmit={handleCategory}>
                <div className='form-control'>
                    <select name='select' className="select select-accent text-xl">
                        <option>manual</option>
                        <option>automatic</option>
                        <option>sedan</option>
                        <option>hatchBack</option>
                        <option>petrol</option>
                        <option>diesel</option>
                    </select>
                </div>

                <div className='text-center mt-4'>
                    <input type="submit" className="btn btn-primary px-10" value='search' />
                </div>
            </form>
        </div>

    );
};

export default ItemCategory;