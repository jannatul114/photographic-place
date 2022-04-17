import React, { useEffect, useState } from 'react';

import { ArrowRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div class="text-center pb-12">
                <h1 class="font-bold text-3xl md:text-3xl lg:text-4xl font-heading text-gray-900">
                    <span className='text-indigo-600 text-5xl'>M</span>y  <span className='text-indigo-600 text-5xl'>S</span>ervices
                </h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    services.map(service =>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center border-2 border-indigo-500">
                            <div className='mt-0'>
                                <img class="m-0 object-center object-cover h-auto w-full" src={service?.img} alt="photo" />
                            </div>
                            <div class="text-center py-8 sm:py-6">
                                <p class="text-2xl text-gray-700 font-bold mb-2">{service?.name}</p>
                                <p class="text-base text-gray-700 font-normal">{service?.description}</p>
                                <p class="text-3xl font-bold text-gray-700 my-3">{service?.price}</p>
                                <Link to={'/checkout'} className='py-2 px-3 border-indigo-500 border-2 font-bold rounded-sm my-3 text-indigo-500'>Explore <ArrowRightIcon width={'19px'} style={{ display: 'inline' }}></ArrowRightIcon> </Link>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Services;