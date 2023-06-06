import './searchInput.css';

import React from 'react';

const SearchForm = () => {
  return (
    <form className="d-flex align-items-center">
      <input className="form-control me-sm-2" type="search" placeholder="Search"></input>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
