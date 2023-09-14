import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ItemCategory = ({ handleCategory }) => {
    const [active, setActive] = useState('btn-disabled');
    const navigate = useNavigate();
    const handleSearchButton = (event) => {
        event.preventDefault()
        const category_name = event.target.value;
        if (category_name !== '') {
            setActive('btn-primary')
        } else {
            setActive('btn-disabled');
        }
    }


    return (
        <div className='p-2'>
            <form onSubmit={handleCategory} onChange={handleSearchButton}>
                <div className='form-control flex justify-between lg:flex-row'>
                    <div>
                        <select name='select' className="select select-accent text-xl">
                            <option value=''>select category</option>
                            <option>manual</option>
                            <option>automatic</option>
                            <option>sedan</option>
                            <option>hatchBack</option>
                            <option>petrol</option>
                            <option>diesel</option>
                        </select>
                    </div>
                    <div className='ml-2'>
                        <input type="submit" className={`btn px-10 ${active}`} value='search' />
                    </div>
                </div>


            </form>
        </div>

    );
};

export default ItemCategory;