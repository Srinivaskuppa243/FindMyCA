import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 text-xl">
      <div className="container mx-auto flex justify-around items-center">
        <NavLink to={'/'} className="font-bold">FindMyCA</NavLink>
        <ul className="flex space-x-6">
          <NavLink to={'/'} className='hover:text-gray-400'>Home</NavLink>
          <NavLink to={'/about'} className='hover:text-gray-400'>About</NavLink>
          <NavLink to={'/accountant'} className='hover:text-gray-400'>Accountants</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
