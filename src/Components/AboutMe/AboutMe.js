import React from 'react';
import Footer from '../Footer/Footer';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className='parent'>
            <div className='flex justify-center mt-4'>
                <div className='container'>
                    <div className='about flex justify-between gap-6'>
                        <div className='my-auto flex flex-col-gap-3'>
                            <div>

                                <h1 className='title-text font-semibold'><span className='text-indigo-500'>A</span>bout Me</h1>
                                <h1 className='name-text text-indigo-500'>Jannatul Ferdaous
                                    <br />
                                    Mithila</h1>
                                <p className='text-3xl my-3'><span className='border-l-4 border-indigo-500 mx-2 px-3'>Learner</span><span className='border-l-4 border-indigo-500 mx-2 px-3'>Web-developer</span></p>

                                <p className='text-gray-500 font-bold mt-4'>Hello!! I am mithila. I am trying to explore myself. I am curious about web development. So I enrolled the course compleate web-development by Jhankar Mahbub. and I am successfully continuing my course. I have set a goal to be a junior frontend developer in 2022 and get a job/intern and I am day-night hard working for this. If I am successful It will be a big achievement in my life. and I will make my parents proud of me </p>
                            </div>
                        </div>
                        <img width={'500px'} src="https://d.newsweek.com/en/full/1396132/teenager-teenage-girl-stock-getty.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-28'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutMe;