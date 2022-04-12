import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  const {user,logout}= useAuth();
    let Links = [
        { name: "Home", link: "/home" }, 
        { name: "BLOG'S", link: "/" },
        { name: "DashBoard", link: "/dashBoard" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-indigo-600 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        <span className='text-3xl  mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        Shaven
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-indigo-600 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
        {user?.email ?
              <span className="flex items-center">
                <h5 className='md:ml-8 text-white'>{user?.displayName}</h5>
                <img className="rounded-full h-10 w-10 ml-2" src={user.photoURL} alt="" />
                <button onClick={logout} className="text-indigo-600 bg-white font-[Poppins] py-3 px-8 rounded ml-4 hover:bg-indigo-400 hover:text-white">LogOut</button>
              </span>
              :
              <span className="">
                <Link className="" aria-current="page" to='/login'><button className="text-indigo-600 bg-white font-[Poppins] py-3 px-8 rounded md:ml-8 hover:bg-indigo-400 hover:text-white">Login</button></Link>
              </span>
            }
      </ul>
      </div>
    </div>
    );
};

export default Header;