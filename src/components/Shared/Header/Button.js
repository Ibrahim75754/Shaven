import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to="login" className='text-indigo-600 bg-white font-[Poppins] py-3 px-8 rounded md:ml-8 hover:bg-indigo-400 hover:text-white'>
      {props.children}
    </Link>
    );
};

export default Button;