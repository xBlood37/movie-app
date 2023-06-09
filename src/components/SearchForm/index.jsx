import './searchInput.css';

import { Tooltip } from 'antd';
import React from 'react';

const SearchForm = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="d-flex align-items-center gap-2">
      <div className="input me-sm-2">
        <span className="search-img">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
          </svg>
        </span>
        <Tooltip title="Введите название фильма">
          <input required onChange={(e) => handleChange(e)} style={{ paddingLeft: '3em', borderRadius: '22px' }} className="form-control" type="search" placeholder="Название фильма"></input>
        </Tooltip>
      </div>
      <button className="btn btn-outline-secondary" type="submit">
        Найти...
      </button>
    </form>
  );
};

export default SearchForm;
