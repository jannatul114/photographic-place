import React, { useEffect, useState } from 'react';

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
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-indigo-600">
                    My services
                </h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    services.map(service =>
                        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                            <div>
                                <img class="object-center object-cover h-auto w-full" src={service?.img} alt="photo" />
                            </div>
                            <div class="text-center py-8 sm:py-6">
                                <p class="text-xl text-gray-700 font-bold mb-2">{service?.name}</p>
                                <p class="text-base text-gray-400 font-normal">{service?.description}</p>
                                <button className='py-2 px-3 bg-indigo-400 font-bold rounded-sm my-3 text-white'>Explore</button>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Services;