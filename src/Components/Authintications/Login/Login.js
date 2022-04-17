import { async } from '@firebase/util';
import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Footer from '../../Shared/Footer/Footer';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    if (loading || sending) {
        <Loading></Loading>
    }
    useEffect(() => {
        if (error) {
            console.log(error.message);
            toast(error?.message)
        }
    }, [error])

    if (user) {
        // navigate('/home')
        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handlechangePassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('email sent')
        }
        else {
            toast('please enter your email')
        }
    }

    return (
        <div>
            <main className="relative min-h-screen w-full bg-white">
                <div className="p-6" x-data="app">
                    <ToastContainer />
                    <form onSubmit={handleLogin}
                        className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center"
                    >
                        <div className="space-y-4">
                            <header className="mb-3 text-2xl font-bold text-center">Log in</header>
                            <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                                <input
                                    type="email"
                                    name='email'
                                    ref={emailRef}
                                    placeholder="Email"
                                    className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                                />
                            </div>
                            <div
                                className="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200"
                            >
                                <input
                                    type="password"
                                    name='password'
                                    ref={passwordRef}
                                    placeholder="Password"
                                    className="fos:outline-none my-3 w-full border-none bg-transparent outline-none" required
                                />
                            </div>
                            <input className="w-full rounded-2xl border-b-4 border-b-indigo-600 bg-indigo-500 py-3 font-bold text-white hover:bg-indigo-400 active:translate-y-[0.125rem] active:border-b-indigo-400" type="submit" value="Login" required />
                        </div>

                        <div className="flex items-center space-x-4">
                            <hr className="w-full border border-gray-300" />
                            <div className="font-semibold text-gray-400">OR</div>
                            <hr className="w-full border border-gray-300" />
                        </div>
                        <p className='text-center'>forget password? <button onClick={handlechangePassword} className='text-indigo-500 font-semibold'>Reset</button></p>
                        <p className='text-center'>Don't have any account? <Link to={'/registar'} className='text-indigo-500 font-semibold'>Create Account</Link></p>

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

export default Login;