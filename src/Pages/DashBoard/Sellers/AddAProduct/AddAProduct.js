import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { AuthContext, baseURL } from '../../../../Context/AuthProvider';


const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const handleProductAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const location = form.location.value;
        const condition = form.condition.value;
        const gearBox = form.gearBox.value;
        const type = form.type.value;
        const engine = form.engine.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const yearsOfUse = form.useTime.value;
        const mobileNumber = form.mobileNumber.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const description = form.description.value;
        const email = user?.email;
        const userName = user?.displayName;


        const product = {
            name,
            picture: photoURL,
            location,
            conditionType: condition,
            gearBox,
            type,
            engine,
            resalePrice: parseInt(resalePrice),
            originalPrice: parseInt(originalPrice),
            yearsOfUse: parseInt(yearsOfUse),
            mobileNumber,
            yearOfPurchase: parseInt(yearOfPurchase),
            description,
            sellerEmail: email,
            sellerName: userName,
            date: new Date()
        }

        fetch(`${baseURL}/cars`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('your product has added successfully')
                    form.reset();
                }
            })
            .catch(e => console.error(e))

    }


    return (
        <form onSubmit={handleProductAdd} className='text-center p-1 border'>
            <div className='py-4'>
                <h1 className='text-3xl font-semibold'>Add Your Product Here</h1>
            </div>
            <div>
                <input type='text' name='name' className="input input-bordered input-accent w-3/5 mb-2" required placeholder="write your product name"></input>
            </div>
            <div>
                <input type='text' name='photoURL' className="input input-bordered input-accent w-3/5 mb-2" required placeholder="product's valid photoURL"></input>
            </div>
            <div>
                <input type='text' name='location' className="input input-bordered input-accent w-3/5 mb-2" required placeholder="add product's location"></input>
            </div>
            <div>
                <p>Car condition?</p>
                <select name='condition' className="select select-accent input input-bordered w-3/5 mb-2">
                    <option>excellent</option>
                    <option>good</option>
                    <option>fair</option>
                </select>
            </div>
            <div>
                <p>gearbox type?</p>
                <select name='gearBox' className="select select-accent input input-bordered w-3/5 mb-2">
                    <option>manual</option>
                    <option>automatic</option>
                </select>
            </div>
            <div>
                <p>car type?</p>
                <select name='type' className="select select-accent input input-bordered w-3/5 mb-2">
                    <option>sedan</option>
                    <option>hatchBack</option>
                </select>
            </div>
            <div>
                <p>engine type?</p>
                <select name='engine' className="select select-accent input input-bordered w-3/5 mb-2">
                    <option>petrol</option>
                    <option>diesel</option>
                </select>
            </div>
            <div>
                <input type='number' name='resalePrice' className="input input-bordered input-accent w-3/5 mb-2" required placeholder="product's resale price in $"></input>
            </div>
            <div>
                <input type='number' name='originalPrice' className="input input-bordered input-accent w-3/5 mb-2" required placeholder="product's original price in $"></input>
            </div>
            <div>
                <input type='number' name='useTime' className="input input-bordered input-accent w-3/5 mb-2" required placeholder="years of use"></input>
            </div>
            <div>
                <input type='number' name='mobileNumber' className="input input-bordered input-accent w-3/5 mb-2" required placeholder="Your Phone Number"></input>
            </div>
            <div>
                <input type='number' name='yearOfPurchase' className="input input-bordered input-accent w-3/5 mb-2" required placeholder="purchase year"></input>
            </div>
            <div>
                <textarea name='description' className="textarea textarea-primary w-1/2" placeholder="write other information" required></textarea>
            </div>
            <div className='py-5'>
                <input className='btn btn-submit' type="submit" value="Add Product" />
            </div>
            <ToastContainer />

        </form>
    );
};
export default MyProducts;