// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-brown-700 p-4 fixed w-full z-50">
      <ul className="flex space-x-4 justify-center">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-white' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-white' : ''}>About</NavLink></li>
        <li className="relative group">
          <NavLink to="/contents" className={({ isActive }) => isActive ? 'text-white' : ''}>Contents</NavLink>
          <ul className="absolute hidden group-hover:block bg-brown-600">
            <li><NavLink to="/contents/jar" className={({ isActive }) => isActive ? 'text-white' : ''}>Glass Jar</NavLink></li>
            <li><NavLink to="/contents/celebration-box" className={({ isActive }) => isActive ? 'text-white' : ''}>Celebration Box</NavLink></li>
            <li><NavLink to="/contents/jewelry-box" className={({ isActive }) => isActive ? 'text-white' : ''}>Jewelry Box</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'text-white' : ''}>Shopping Cart</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => isActive ? 'text-white' : ''}>Profile</NavLink></li>
      </ul>
    </nav>
  );
};
