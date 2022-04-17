import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';

const Banner = () => {
    return (
        <div className=' py-4'>
            <div className=" bg-indigo-100 w-full border-2 border-indigo-500">

                <div className="flex" style={{ height: "600px;" }}>
                    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                        <div className='flex justify-center'>
                            <div>
                                <h1 className='text-4xl  text-gray-700 font-bold'>
                                    <span className='font-bold text-indigo-500 lg:text-5xl sm:text-xl md:text-4xl'>N</span>atural   <span className='font-bold text-indigo-500 text-5xl'>I</span>ntuition <br /><span className='font-bold text-indigo-500 text-5xl'>P</span>hotography</h1>


                                <h1 className='text-4xl my-4 text-gray-700 font-bold'>

                                    <span className='font-bold text-indigo-500 text-5xl'>W</span>edding  <span className='font-bold text-indigo-500 text-5xl'>&&</span></h1>

                                <h1 className='text-4xl text-gray-700 font-bold'>
                                    <span className='font-bold text-indigo-500 text-5xl'>T</span>ravel <span className='font-bold text-indigo-500 text-5xl'>P</span>hotographer</h1>
                                <button className='border-2 border-indigo-500 text-indigo-500 font-bold py-2 px-3 rounded-md my-7'>Explore more <ArrowRightIcon width={'19px'} style={{ display: 'inline' }}></ArrowRightIcon></button>
                            </div>

                        </div>
                    </div>
                    <div className="hidden  lg:block lg:w-1/2" >
                        <div style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }} className='flex justify-center'>

                            <img className='w-full h-full object-cover' src="https://images.news18.com/ibnlive/uploads/2021/08/photography-16293101963x2.jpg" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner