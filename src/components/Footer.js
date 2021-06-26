import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="foot bg-red-foot">
            <div className="my-0 mx-auto w-11/12">
                <div className="row">
                    <div className="col-sm-3">
                        <h4 className="text-white pt-8 pb-10">Product</h4>
                        <p className="last"><Link className="no-underline text-white" to="#">Services</Link></p>
                        <p className="last"><Link className="no-underline text-white"  to="#">SMS API</Link></p>
                        <p className="last"><Link className="no-underline text-white" to="#">Contact Us</Link></p>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="text-white pt-8 pb-10">Company</h4>
                        <p className="last"><Link className="no-underline text-white" to="#">About</Link></p>
                        <p className="last"><Link className="no-underline text-white" to="#">Mission</Link></p>
                        <p className="last"><Link className="no-underline text-white" to="#">Vision</Link></p>
                        <p className="last"><Link className="no-underline text-white" to="#">Career</Link></p>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="text-white pt-8 pb-10">Connect and Follow Us</h4>
                        <i className="fab fa-twitter icon bg-white-300 text-white mr-6"></i>
                        <i className="fab fa-facebook icon text-white mr-6"></i>
                        <i className="fab fa-instagram icon text-white mr-6"></i>
                    </div>
                    <div className="col-sm-3">
                        <h2 className="sm:mt-28">SPEEDY<i className="text-white">SMS</i></h2>
                    </div>
                </div>
                <div className="text-center pb-10">
                    <p className="text-white">© 2020 FPG Technologies</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
