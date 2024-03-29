import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import swal from 'sweetalert';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

const Registar = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    //if error found, it will shown in ui by toast
    useEffect(() => {
        if (error) {
            toast(error?.message);
        }
    }, [error])
    if (user) {
        navigate('/home')
    }
    const handleCreateUser = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value
        await createUserWithEmailAndPassword(email, password);
        swal("Varification email sent!", "success");
    }

    return (
        <div>
            <main className="relative min-h-screen w-full bg-white">
                <div className="p-6" x-data="app">
                    <form onSubmit={handleCreateUser}
                        className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center"
                    >
                        <div x-show="isLoginPage" className="space-y-4">
                            <header className="mb-3 text-2xl font-bold">Create your profile</header>

                            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                                <input
                                    type="text"
                                    placeholder="Name (optional)"
                                    className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                />
                            </div>
                            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Email"
                                    className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                    required />
                            </div>
                            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                                <input
                                    name='password'
                                    type="password"
                                    placeholder="Password"
                                    className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                    required
                                />
                            </div>
                            <input className="w-full rounded-2xl border-b-4 border-b-indigo-600 bg-indigo-500 py-3 font-bold text-white hover:bg-indigo-400 active:translate-y-[0.125rem] active:border-b-indigo-400" type="submit" value="Create Account" />
                        </div>

                        <div className="flex items-center space-x-4">
                            <hr className="w-full border border-gray-300" />
                            <div className="font-semibold text-gray-400">OR</div>
                            <hr className="w-full border border-gray-300" />
                        </div>
                        <p className='text-center'>Already Registared? <Link className='text-indigo-500 font-semibold' to={'/login'}>Login</Link></p>

                        <footer>
                            <SocialLogin></SocialLogin>
                        </footer>
                    </form>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Registar;