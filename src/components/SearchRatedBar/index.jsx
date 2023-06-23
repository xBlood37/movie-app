import './searchRatedBar.css';

import React, { useState } from 'react';

import SearchForm from '../SearchForm';

const SearchRatedBar = ({ handleChange }) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNavbar = {
    display: openNav === true ? 'block' : '',
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark py-3" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">MovieLog</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={toggleNavbar} id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className="tab-button">Поиск</button>
            </li>
            <li className="nav-item">
              <button className="tab-button">Рейтинг</button>
            </li>
          </ul>
          <SearchForm handleChange={handleChange} />
        </div>
      </div>
    </nav>
  );
};

export default SearchRatedBar;
