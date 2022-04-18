import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLinks = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (error) {
        toast(error?.message)
    }
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className="flex justify-center">
                <button onClick={() => signInWithGoogle()}
                    className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-indigo-700 ring-2 ring-gray-300 hover:bg-gray-200 flex justify-between items-center"
                >
                    <img width={'30px'} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                    <p className='ml-4'>Google</p>

                </button>
            </div>
        </div>
    );
};

export default SocialLinks;