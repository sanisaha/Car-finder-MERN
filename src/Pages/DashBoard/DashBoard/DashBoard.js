// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../Context/AuthProvider';
// import useSeller from '../../../Hooks/useSeller';
// import DashBoardDetails from '../DashBoardDetails/DashBoardDetails';
// import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';

// const DashBoard = () => {
//     const [bookings, setBookings] = useState([]);
//     const { user } = useContext(AuthContext);
//     const [isSeller] = useSeller(user?.email);
//     const handleMyOrders = () => {
//         fetch(`http://localhost:5000/bookings?email=${user.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 setBookings(data);
//             })
//             .catch(e => console.error(e))

//     }
//     return (
//         <div className='flex justify-between'>
//             <div>
//                 <li><Link>my appoinments</Link></li>
//                 {
//                     isSeller && <>
//                         <li><Link>all users</Link></li>
//                     </>
//                 }
//             </div>
//             <div className='flex-1'>
//                 <DashBoardDetails
//                     bookings={bookings}
//                 ></DashBoardDetails>
//             </div>
//         </div>
//     );
// };

// export default DashBoard;