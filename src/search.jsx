import React from "react";

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("---");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
      <hr />
    </div>
  );
}

export default Search;
