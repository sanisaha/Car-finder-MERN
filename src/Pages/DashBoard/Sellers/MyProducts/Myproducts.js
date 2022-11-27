import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [availableProducts, setAvailAbleProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user])

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

    return
};
export default MyProducts;