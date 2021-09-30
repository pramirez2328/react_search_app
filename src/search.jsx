import React from "react";
import CustomSearch from "./CustomSearch";
function Search({ search, onSearch, labelName, type, isFocused }) {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <CustomSearch
        labelName={labelName}
        type={type}
        search={search}
        onSearch={onSearch}
        autoFocus
      >
        <p>
          Searching for: <strong>{search}</strong>
        </p>
      </CustomSearch>
      <hr />
    </div>
  );
}

export default Search;
