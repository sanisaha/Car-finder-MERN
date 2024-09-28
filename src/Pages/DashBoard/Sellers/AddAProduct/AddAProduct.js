import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext, baseURL } from '../../../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: '',
        photoURL: '',
        location: '',
        conditionType: 'excellent',
        gearBox: 'manual',
        type: 'sedan',
        engine: 'petrol',
        resalePrice: '',
        originalPrice: '',
        yearsOfUse: '',
        mobileNumber: '',
        yearOfPurchase: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProductAdd = async (event) => {
        event.preventDefault();

        const product = {
            ...formData,
            resalePrice: parseInt(formData.resalePrice),
            originalPrice: parseInt(formData.originalPrice),
            yearsOfUse: parseInt(formData.yearsOfUse),
            yearOfPurchase: parseInt(formData.yearOfPurchase),
            sellerEmail: user?.email,
            sellerName: user?.displayName,
            date: new Date(),
        };

        try {
            const response = await fetch(`${baseURL}/cars`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            const data = await response.json();
            if (data.acknowledged) {
                toast('Product added successfully');
                setFormData({
                    name: '',
                    photoURL: '',
                    location: '',
                    conditionType: 'excellent',
                    gearBox: 'manual',
                    type: 'sedan',
                    engine: 'petrol',
                    resalePrice: '',
                    originalPrice: '',
                    yearsOfUse: '',
                    mobileNumber: '',
                    yearOfPurchase: '',
                    description: '',
                });
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form onSubmit={handleProductAdd} className='max-w-lg mx-auto p-6 bg-white shadow-md rounded'>
            <h1 className='text-3xl font-semibold mb-4 text-center'>Add Your Product</h1>

            <FormInput
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
            <FormInput
                label="Product Photo URL"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleInputChange}
                required
            />
            <FormInput
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
            />

            <FormSelect
                label="Car ConditionType"
                name="conditionType"
                value={formData.conditionType}
                onChange={handleInputChange}
                options={['excellent', 'good', 'fair']}
            />

            <FormSelect
                label="Gearbox Type"
                name="gearBox"
                value={formData.gearBox}
                onChange={handleInputChange}
                options={['manual', 'automatic']}
            />

            <FormSelect
                label="Car Type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                options={['sedan', 'hatchback', 'SUV']}
            />

            <FormSelect
                label="Engine Type"
                name="engine"
                value={formData.engine}
                onChange={handleInputChange}
                options={['petrol', 'diesel', 'electric']}
            />

            <FormInput
                label="Resale Price ($)"
                name="resalePrice"
                value={formData.resalePrice}
                onChange={handleInputChange}
                type="number"
                required
            />
            <FormInput
                label="Original Price ($)"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleInputChange}
                type="number"
                required
            />
            <FormInput
                label="Years of Use"
                name="yearsOfUse"
                value={formData.yearsOfUse}
                onChange={handleInputChange}
                type="number"
                required
            />
            <FormInput
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                type="number"
                required
            />
            <FormInput
                label="Year of Purchase"
                name="yearOfPurchase"
                value={formData.yearOfPurchase}
                onChange={handleInputChange}
                type="number"
                required
            />
            <FormTextArea
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
            />

            <div className='mt-6'>
                <button className='btn btn-primary w-full' type="submit">
                    Add Product
                </button>
            </div>
        </form>
    );
};

const FormInput = ({ label, type = 'text', name, value, onChange, required }) => (
    <div className='mb-4'>
        <label className='block text-gray-700'>{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="input input-bordered w-full mt-2"
            required={required}
        />
    </div>
);

const FormSelect = ({ label, name, value, onChange, options }) => (
    <div className='mb-4'>
        <label className='block text-gray-700'>{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="select select-bordered w-full mt-2"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

const FormTextArea = ({ label, name, value, onChange, required }) => (
    <div className='mb-4'>
        <label className='block text-gray-700'>{label}</label>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            className="textarea textarea-bordered w-full mt-2"
            required={required}
        />
    </div>
);

export default MyProducts;
