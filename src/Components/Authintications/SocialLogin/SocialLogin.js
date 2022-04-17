import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLinks = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(error);
    if (error) {
        toast(error?.message)
    }
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className="flex justify-center">
                <button onClick={() => signInWithGoogle()}
                    className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-indigo-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
                >Google</button>
            </div>
        </div>
    );
};

export default SocialLinks;