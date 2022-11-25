import React from 'react';
import DashBoardDetails from '../DashBoardDetails/DashBoardDetails';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';

const DashBoard = () => {
    const handleMyOrders = () => {
        console.log('hello ratul')

    }
    return (
        <div className='flex justify-between'>
            <div>
                <DashBoardMenu
                    handleMyOrders={handleMyOrders}
                ></DashBoardMenu>
            </div>
            <div className='flex-1'>
                <DashBoardDetails></DashBoardDetails>
            </div>
        </div>
    );
};

export default DashBoard;