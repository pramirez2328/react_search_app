import React, { useState, useEffect } from "react";
import List from "./List";
import Search from "./search";
import stories from "./stories";

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("previous") || ""
  );
  const [current, setCurrent] = useState("");

  useEffect(() => {
    localStorage.setItem("previous", searchTerm);
  }, [searchTerm]);

  const handleChange = (event) => {
    let cond = event.target.value;
    setSearchTerm(cond);

    const filterItem = stories.filter((i) => {
      return i.title.toLowerCase().includes(cond) || i.title.includes(cond);
    });
    setCurrent(filterItem);
  };

  return (
    <div>
      <Search
        search={searchTerm}
        onSearch={handleChange}
        labelName="search"
        type="text"
        isFocused
      />
      <List list={current === "" ? stories : current} />
    </div>
  );
}
export default App;
