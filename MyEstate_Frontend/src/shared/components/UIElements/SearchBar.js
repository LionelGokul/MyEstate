import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const searchQueryHandle = () => {
    setQuery(query);
  };

  return (
    <div className="search_container active">
      <input
        className="search_bar"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        id="gsearch"
        name="gsearch"
        placeholder="Search Place,City,Zip"
      />
      <Link to={`/search/${query}`}>
        <button
          className="search_btn"
          onClick={searchQueryHandle}
          disabled={query.length > 3 ? false : true}
        >
          <BsSearch />
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
