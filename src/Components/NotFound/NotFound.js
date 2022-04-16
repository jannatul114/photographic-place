import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/home');
    }
    return (
        <div className='flex justify-center'>
            <div>
                <img className='w-96' src="https://cdn.dribbble.com/users/644529/screenshots/2662296/404.gif" alt="" />
                <h1 className='text-5xl text-center text-indigo-400 font-bold'>Not Found!</h1>
                <div className='flex justify-center'>
                    <button onClick={handleNavigate} className='text-center py-2 px-3 bg-indigo-600 rounded-sm my-5 text-white'>Go Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;