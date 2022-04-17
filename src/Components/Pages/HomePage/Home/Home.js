import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../../Shared/Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <h1 className='text-center text-4xl font-semibold mt-5'> Client's Review </h1>
            <div className='mb-5 flex justify-center'>
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-9 mx-4">
                    <div className="max-w-md py-4 px-8 bg-indigo-200 shadow-lg rounded-lg my-20 border-2 border-indigo-500 hover:bg-indigo-300">
                        <div className="flex justify-center md:justify-end -mt-16">
                            <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://randomuser.me/api/portraits/women/17.jpg" />
                        </div>
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">Olivia Amelia</h2>
                            <p className="mt-2 text-gray-600 font-semibold">your photo capturing angel is amaizing. all the photo of my wedding was exellent. I am really satisfied with your work</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <p className="text-xl font-medium text-indigo-500">⭐⭐⭐⭐⭐</p>

                        </div>
                    </div>
                    <div className="max-w-md py-4 px-8 bg-indigo-200 border-2 border-indigo-500 hover:bg-indigo-300 shadow-lg rounded-lg my-20">
                        <div className="flex justify-center md:justify-end -mt-16">
                            <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://randomuser.me/api/portraits/men/9.jpg" />
                        </div>
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">Tomas Jonson</h2>
                            <p className="mt-2 text-gray-600 font-semibold">You took tou travel photos whit was amaizing. I am satisfied of your work</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <p className="text-xl font-medium text-indigo-500">⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="max-w-md py-4 px-8 bg-indigo-200 border-2 border-indigo-500 hover:bg-indigo-300 shadow-lg rounded-lg my-20">
                        <div className="flex justify-center md:justify-end -mt-16">
                            <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://randomuser.me/api/portraits/women/65.jpg" />
                        </div>
                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">Lora Rosario</h2>
                            <p className="mt-2 text-gray-600 font-semibold">My husband and I got married in October and we you took our wedding photos . It was the best experience. If you need a photographer I would 1000000% recommend Photographic place!</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <p className="text-xl font-medium text-indigo-500">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;