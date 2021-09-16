import React from "react";
function Search(props) {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" value={props.search} onChange={props.onSearch} />
      <p>
        Searching for: <strong>{props.search}</strong>
      </p>
      <hr />
    </div>
  );
}

export default Search;
