import './searchRatedBar.css';

import React, { useState } from 'react';

import SearchForm from '../SearchForm';

const SearchRatedBar = ({ handleSubmit, handleChange }) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNavbar = {
    display: openNav === true ? 'block' : '',
  };

  return (
    <nav className="navbar rounded-bottom navbar-expand-lg bg-dark py-3" data-bs-theme="dark">
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
              <a className="nav-link" link="">
                Поиск
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" link="">
                Рейтинг
              </a>
            </li>
          </ul>
          <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </nav>
  );
};

export default SearchRatedBar;
