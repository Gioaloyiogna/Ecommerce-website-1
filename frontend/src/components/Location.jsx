import React, { Component } from 'react';
import {AiOutlineArrowRight } from "react-icons/ai";
class Location extends Component {
    render() {
        return (
            <div className='max-w-[1640px] justify-around p-4 mx-auto  items-center lg:flex sm:flex-column bg-white '>
                <div className="location-desc">
                         <h2 className='text-[goldenrod] text-5xl py-4'>Location</h2>
                         <div className='flex flex-wrap justify-center '>
                            <span className='font-lighter text-[1.2rem] fonts'>
                                Our shop is located in west africa, more precisely in a country called Ghana.
                                you are welcome for more visits <br></br>
                                Our shop is located in west africa,  more precisely in a country called Ghana.
                                you are welcome<br></br> for more visits 
                                Our shop is located in west africa, more precisely in a country called Ghana.
                                you are welcome for more visits
                            </span>
                         </div>
                         <div className='m-2'>
                          <button className='bg-black text-white m-4 font-bold flex items-center'> <a href="https://www.google.com">View Location</a><AiOutlineArrowRight/></button>
                         </div>
                </div>
                <div className="location-map max-w-[500px] max-h-[500px] ">
                    
                        <img src="/images/mylocation2.png" alt="" srcset="" className='max-w-full' />
                </div>
            </div>
        );
    }
}

export default Location;