import './searchRatedBar.css';

import { Tabs } from 'antd';
import React from 'react';
import { useState } from 'react';

import SearchForm from '../SearchForm';

const SearchRatedBar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggle = {
    display: openNav === true ? 'block' : '',
  };

  const items = [
    {
      key: '1',
      label: `Search`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Rated`,
      children: `Content of Tab Pane 2`,
    },
  ];

  return (
    <header className="header">
      <nav className="navbar rounded-bottom navbar-expand-lg bg-dark bg-gradient py-3" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" link="#">
            MovieLog
          </a>
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
          <div className="collapse navbar-collapse" style={toggle} id="navbarColor01">
            <Tabs style={{ color: 'rgba(255 255 255)' }} className="nav-item me-auto" defaultActiveKey="1" items={items} />
            <SearchForm />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SearchRatedBar;
