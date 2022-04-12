import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import icon from './../../img/logo/gmail.png';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        //console.log(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div className="login-body flex justify-center items-center">
            <div className="border rounded-3 p-5 bg-gray-100 md:w-1/3">
                <h1 className="mb-5 text-2xl text-center">Please Login</h1>


                <form onSubmit={handleLoginSubmit} className='mb-5'>
                    <label class="block mb-3">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                        </span>
                        <input onBlur={handleOnBlur} type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" required />
                    </label>
                    <label class="block mb-3">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Password
                        </span>
                        <input onBlur={handleOnBlur} type="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" required />
                    </label>
                    <button className="w-full font-[Poppins] py-2 rounded  bg-indigo-600 text-white" type="submit">Login</button>

                    {authError && <div className="alert alert-danger" role="alert">
                        {authError}
                    </div>}
                </form>

                <h1 className='text-center mb-2'>Or Login With</h1>
                <button onClick={handleGoogleSignIn} className="flex flex-row items-center justify-center border-2 rounded w-full hover:bg-indigo-600 hover:text-white py-2"><img src={icon} alt='' className='h-5 w-5 mr-1  object-cover' />
                <h1>Google Login</h1></button>

                <p className='mt-2 text-center'>New User? <Link className='text-indigo-600' to="/registration">Registration</Link></p>
                

            </div>
        </div>
    );
};

export default Login;