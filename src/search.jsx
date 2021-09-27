import React from "react";
import CustomSearch from "./CustomSearch";
function Search({ search, onSearch, customLabel, labelName, type, children }) {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <CustomSearch
        labelName={labelName}
        customLabel={customLabel}
        type={type}
        search={search}
        onSearch={onSearch}
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
