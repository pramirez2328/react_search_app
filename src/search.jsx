import React from "react";
function Search({ search, onSearch, customLabel, labelName, type }) {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor={labelName}>{customLabel}</label>
      <input id={labelName} type={type} value={search} onChange={onSearch} />
      <p>
        Searching for: <strong>{search}</strong>
      </p>
      <hr />
    </div>
  );
}

export default Search;
