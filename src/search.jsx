import React from "react";
function Search({ search, onSearch }) {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" value={search} onChange={onSearch} />
      <p>
        Searching for: <strong>{search}</strong>
      </p>
      <hr />
    </div>
  );
}

export default Search;
