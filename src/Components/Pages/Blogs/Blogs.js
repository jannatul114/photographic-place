import React from 'react';
import './Blogs.css';
import faq from '../../../images/FAQs.gif';
const Blogs = () => {
    return (
        <div class="h-screen">
            <div className='flex justify-center mt-4'>
                <div className='container'>
                    <div className='about flex text-center gap-6'>
                        <div className='my-auto '>
                            <div className='mb-5 flex justify-center'>
                                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-7  mx-4">
                                    <div className="max-w-md py-4 px-8 bg-indigo-200 shadow-lg rounded-lg my-20 border-2 border-indigo-500 hover:bg-indigo-300">

                                        <h1 className='text-4xl text-indigo-600'>1.What is the  Difference between Authorization and Authentication?</h1>


                                        <p className='text-gray-600 font-bold mt-4'>Ans:  Authentication identifies the user such as: When we login to a website we are verified with our email, password etc and authentication confirms what the user can access such as: After user login / authentication to my website. Checkout page through authorization so that users will not have access to the checkout page without authentication.</p>
                                    </div>
                                    <div className="max-w-md py-4 px-8 bg-indigo-200 border-2 border-indigo-500 hover:bg-indigo-300 shadow-lg rounded-lg my-20">
                                        <h1 className='text-4xl text-indigo-600'>2.Why are you using firebase? What other options do you have to implement authentication?</h1>


                                        <p className='text-gray-600 font-bold mt-4'>Ans:In my view using firebase is a good decision. without a backend server its lets you make an application and also provides us real-time database management API, faster than any backend web services etc. It alows us to implement some other options authentication like Cookie-Based authentication,Third-party access OAuth, API-token, OpenId, SAML </p>
                                    </div>
                                    <div className="max-w-md py-4 px-8 bg-indigo-200 border-2 border-indigo-500 hover:bg-indigo-300 shadow-lg rounded-lg my-20">

                                        <h1 className='text-4xl text-indigo-600'>3.What other services does firebase provide other than authentication ?</h1>


                                        <p className='text-gray-600 font-bold mt-4'>Ans: services does firebase provide other than authentication are:backend Cloud Firestore , Cloud Functions, Cloud Storage, Google Analytics, Cloud Messaging, Hosting etc.   </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Blogs;