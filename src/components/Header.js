import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Ellipse from '../Image/Ellipse 8.svg';


function Header() {
    const [click, setClick] = useState(true);
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
        <div className="head bg-red-head">
            <div className="flex justify-between  items-center my-0 mx-auto w-11/12">
                <div className="">
                   <h2>SPEEDY<i className="text-white">SMS</i></h2>
                </div>
                <div className="flex items-center">
                <ul className= {click ? "hidden sm:flex" : "bg-black text-white text-center absolute top-10 w-full right-0 justify-around py-2 sm:py-0" }>
                    <li className="mx-2 py-2 sm:py-0"><Link className="no-underline text-white" to="">Home </Link><span className="hidden sm:inline-block text-white ml-2"><i class="fas fa-sort-down"></i></span></li>
                    <li className="mx-2 py-2 sm:py-0"><Link className="no-underline text-white" to="">Send SMS</Link><span className="hidden sm:inline-block text-white ml-2"><i class="fas fa-sort-down"></i></span></li>
                    <li className="mx-2 py-2 sm:py-0"><Link className="no-underline text-white" to="">Reports</Link><span className="hidden sm:inline-block text-white ml-2"><i class="fas fa-sort-down"></i></span></li>
                    <li className="mx-2 py-2 sm:py-0"><Link className="no-underline text-white" to="">Api</Link><span className="hidden sm:inline-block text-white ml-2"><i class="fas fa-sort-down"></i></span></li>
                </ul>
                <div className="text-white w-4 h-7 sm:hidden " onClick={handleClick}>{click ? <i class ="fas fa-bars"></i> : <i class ="fas fa-times"></i>}</div>
                <div className="hidden sm:block">
                    <img src= {Ellipse} alt ="profie" />
                </div>
                </div>
                
            </div>
        </div>
            
          
        </>
    )
}

export default Header
