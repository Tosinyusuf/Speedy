import React, {useState} from 'react';
import Wallet from './Wallet'

function Body() {
    const [query, setQuery] = useState("")
    return (
        <div className="my-4 mx-auto w-11/12 py-4">
                <div className="flex">
                    <span><i class="fas fa-long-arrow-alt-left"></i></span><p className="ml-2">Go back</p>
               
            </div>
            <div className="row">
                <div className="col-md-9 shadow-custom2 p-14">
                    <div className="p-8">
                        <div className="row">
                            <div className="col py-3">
                                <h3>Voucher payment</h3>
                            </div>
                        </div>
                        <div className="flex justify-around w-10/12 my-4 mx-auto text-center">
                            <div className="w-6/12">
                                <p className=""><b>voucher volume</b></p>
                                <div className="bg-gray-200 p-2">
                                <p><b>700</b></p>
                            </div>
                            </div>
                            <div className="w-6/12">
                                <p><b>units</b></p>
                                <div className="bg-gray-200 p-2">
                                <p><b>2030</b></p>
                            </div>
                            </div>
                        </div>
                        
                        <form className="py-4">
                            <h4 className="py-4">Fill the details below to complete payment</h4>
                            <div className="flex flex-col sm:flex-row my-3">
                                <input  className="border-2 border-green-100 p-2 w-full my-3 sm:mr-3 sm:w-6/12" type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Name" />
                                <input className="border-2 border-green-100 p-2 sm:w-6/12 my-3 w-full" type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="User ID" />          
                            </div>
                            <input className="border-2 border-green-100 py-2 my-2 w-full"  type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Enter serial number" />   
                            <button  className="border-2 sm:w-6/12 my-8 text-white mx-auto btn bg-red-btn " type="submit">COMFIRM PAYMENT</button>
                        </form>
                    </div> 
                </div>
                <div className="col-md-3">
                <Wallet />
                </div> 
            </div>
                 
                    
                
        </div>
    )
}

export default Body
