import React from 'react';
import logo from "../images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between px-8 py-4 bg-gradient-to-r from-sky-500 to-green-500 shadow-lg">
      <div className="logo">
        <img className='w-16 cursor-pointer' src={logo} alt="Logo" />
      </div>
      <div className="links flex items-center gap-6 text-white">
        <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link>
        <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
        <Link to="/services" className="hover:text-gray-300 transition duration-300">Services</Link>
        <button className='btnBlue bg-red-500 min-w-[120px] ml-2 hover:bg-red-600 transition duration-300'>Logout</button>
        <Avatar size="40" round="50%" className='cursor-pointer ml-2' name='Rm'/>
      </div>
    </div>
  );
}

export default Navbar;