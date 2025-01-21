import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FindMyCA</h1>
        <ul className="flex space-x-4">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/accountant'}>Accountants</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
