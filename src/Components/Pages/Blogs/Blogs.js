import React from 'react';
import './Blogs.css';
import faq from '../../../images/FAQs.gif';
const Blogs = () => {
    return (
        <div class="h-screen">
            <div className='flex justify-center mt-4'>
                <div className='container'>
                    <div className='about flex text-center gap-6'>
                        <div className='my-auto flexible flex md:flex-col sm:flex-col lg:flex-col gap-5'>
                            <img width={'450px'} style={{ margin: 'auto' }} src={faq} alt="" />
                            <div className='flexible flex md:flex-col sm:flex-col lg:flex-row gap-12 my-3'>
                                <div className='bg-indigo-200 p-3 border-2 border-indigo-500 rounded-lg'>

                                    <h1 className='text-4xl text-indigo-600'>1.What is the  Difference between Authorization and Authentication?</h1>


                                    <p className='text-gray-600 font-bold mt-4'>Ans:  Authentication identifies the user such as: When we login to a website we are verified with our email, password etc and authentication confirms what the user can access such as: After user login / authentication to my website. Checkout page through authorization so that users will not have access to the checkout page without authentication.</p>
                                </div>
                                <div className='bg-indigo-200 p-3 rounded-lg border-2 border-indigo-500'>

                                    <h1 className='name-text text-indigo-600'> Why are you using firebase? What other options do you have to implement authentication?</h1>


                                    <p className='text-gray-600 font-bold mt-4'>Ans:   </p>
                                </div>
                            </div>
                            <div>
                                <div className='w-9/12 mx-auto my-3 bg-indigo-200 p-3 rounded-lg border-2 border-indigo-500'>

                                    <h1 className='name-text text-indigo-600'>1.What is the  Difference between Authorization and Authentication?</h1>


                                    <p className='text-gray-600 font-bold mt-4'>Ans:  Hello!! I am mithila. I am trying to explore myself. I am curious about web development. So I enrolled the course compleate web-development by Jhankar Mahbub. and I am successfully continuing my course. I have set a goal to be a junior frontend developer in 2022 and get a job/intern and I am day-night hard working for this. If I am successful It will be a big achievement in my life. and I will make my parents proud of me </p>
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