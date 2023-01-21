import React from 'react';
import './navbar.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='shopping__navbar'>
      <div className="shopping__navbar-container section-margin">
        <div className="shopping__navbar-logo">
          <h1>Shopping-Name</h1>
        </div>
        <div className="shopping__navbar-links">
          <span className='search-box'>
            <input type="text" placeholder='Search' />
            <AiOutlineSearch style={{ cursor: 'pointer' }} />
          </span>
          <a href="#sign-up">Sign up</a>
          <a href="#sign-in">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;