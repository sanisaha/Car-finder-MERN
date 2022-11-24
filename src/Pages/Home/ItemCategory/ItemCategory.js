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
        <div>
            <h2>Select a Category</h2>
            <form onSubmit={handleCategory}>
                <div className='form-control'>
                    <select name='select' className="select select-error w-full max-w-xs">
                        <option>manual</option>
                        <option>automatic</option>
                        <option>sedan</option>
                        <option>hatchBack</option>
                        <option>petrol</option>
                        <option>diesel</option>
                    </select>
                </div>

                <div>
                    <input type="submit" className="btn btn-primary px-10" value='search' />
                </div>
            </form>
        </div>

    );
};

export default ItemCategory;