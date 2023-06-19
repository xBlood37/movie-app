import './searchInput.css';

import { Tooltip } from 'antd';
import React from 'react';

const SearchForm = ({ handleSubmit, handleChange }) => {
  const input = {
    paddingLeft: '3em',
    borderRadius: '22px',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    boxShadow: 'none',
  };

  const btn = {
    padding: '22px',
    paddingLeft: '32px',
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form d-flex align-items-center">
      <div className="input">
        <span className="search-img">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
          </svg>
        </span>
        <input required onChange={(e) => handleChange(e)} style={input} className="form-control" type="search" placeholder="Название фильма"></input>
      </div>
      <Tooltip title="Поиск...">
        <button className="btn btn-outline-secondary" style={btn} type="submit">
          <span className="search-btn-img">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
              <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
            </svg>
          </span>
        </button>
      </Tooltip>
    </form>
  );
};

export default SearchForm;
