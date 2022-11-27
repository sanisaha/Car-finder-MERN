import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/AuthProvider';


const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const handleProductAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const product = {
            name: name,
            picture: photoURL,
            date: new Date()
        }
        console.log(product);

    }
    // fetch('https://carry-you-server.vercel.app/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged) {
    //                 toast('your service has added successfully')
    //                 form.reset();
    //             }
    //         })
    //         .catch(e => console.error(e))

    return (
        <form onSubmit={handleProductAdd} className='text-center'>
            <div className='py-5'>
                <h1 className='text-3xl font-semibold'>Add Your Product Here</h1>
            </div>
            <div>
                <input type='text' name='message' className="input input-borderd w-1/2" placeholder="write your product name"></input>
            </div>
            <div>
                <input type='text' name='photoURL' className="input input-borderd w-1/2" placeholder="product's valid photoURL"></input>
            </div>

            <div className='py-5'>
                <input className='btn btn-submit' type="submit" value="Add Product" />
            </div>
            <ToastContainer />

        </form>
    );
};
export default MyProducts;