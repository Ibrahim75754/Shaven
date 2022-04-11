import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to="login" className='text-indigo-600 bg-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 hover:text-white
    duration-500'>
      {props.children}
    </Link>
    );
};

export default Button;