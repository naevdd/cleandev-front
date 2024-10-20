import React from 'react';
import {  } from 'react-router-dom';
import '../css files/Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo_1">
      CLEAN
    </a>
    <a href="/" className="logo_2">
      CAMPUS CET
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/alert">Alert</a>
      </li>
      <li>
        <a href="/discuss">Discuss</a>
      </li>
  <div className="navbar-right">
      <li>
        <a href="/login" className='user-icon'>SignIn/Login &nbsp;
        <i className="fa-solid fa-user"></i>
        </a>
      </li>
  </div>
    </ul>
  </div>
</nav>
);
};

export default Navbar;