import React from 'react';
import {Link} from 'react-router-dom';
import Vector from '../Image/Vector.png';

function Wallet() {
    return (
        <div className="w-10/12 my-0 p-3 mx-auto shadow-custom">
            <div className="flex">
                <div>
                    <img className="w-5" src={Vector} alt="bag" />
                </div>
                <p>speedy wallet</p>
            </div>
            <small>Total Balance</small>
            <h3>₦10,200</h3>
            <small>Recent Transaction</small>
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="flex items-center pl-2">
                    <div className="wall bg-red-wall w-7 h-7 mr-2 rounded-md"></div>
                    <div>
                        <p className="p-0 m-0">Single Sms </p>
                        <small>Mar-11-2020</small>
                    </div>
                    </div>
                    <p className="text-red-700">-₦25.00</p>
                    
                </div>
                <div className="flex items-center justify-between py-2">
                    
                    <div className="flex items-center pl-2">
                    <div className="walls bg-red-walls w-7 h-7 mr-2 rounded-md"></div>
                        <div>
                        <p className="p-0 m-0">Bulk Sms</p>
                        <small>Mar-11-2020</small>
                        </div>
                    </div>
                    <p className="text-red-700">-₦25.00</p>
                </div>
            </div>
            
            <div className="click"><Link to="">Click here</Link> to view all transactions</div>
            
        </div>
    )
}

export default Wallet
