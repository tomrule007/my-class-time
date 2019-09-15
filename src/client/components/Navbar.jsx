import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '@/img/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="branding">
      <img src={logo} alt="" />
      <span>My Class Time</span>
    </Link>
  </nav>
);

export default Navbar;
