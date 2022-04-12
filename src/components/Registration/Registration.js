import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Registration = () => {
    const { registerUser, authError } = useAuth();

    const [loginData, setLoginData] = useState({});
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

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <div className="login-body flex justify-center items-center">
            <div className="border rounded-md p-20 bg-white md:w-1/3">
                <h1 className="mb-5 text-center text-2xl">Create An Account</h1>

                <form onSubmit={handleLoginSubmit} className="mb-3">
                     
                            <label class="block mb-3">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Full Name
                                </span>
                                <input onBlur={handleOnBlur} type="text" name="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Full Name" required />
                            </label>
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
                    {authError && <div className="alert alert-danger" role="alert">
                    {authError}
                </div>}
                    <button className="w-full font-[Poppins] py-2 rounded  bg-indigo-600 text-white" type="submit">Registration</button>                     
                </form>
                

                <p className='text-center '>Already Have an Account? <Link to="/login" className='text-indigo-600'>Login</Link></p>

            </div>
        </div>
    );
};

export default Registration;















